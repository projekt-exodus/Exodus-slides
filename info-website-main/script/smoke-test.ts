import { spawn, type ChildProcess } from "node:child_process";
import { setTimeout as delay } from "node:timers/promises";

const STARTUP_TIMEOUT_MS = 60_000;
const REQUEST_TIMEOUT_MS = 10_000;
const EXIT_WAIT_MS = 2_000;
const DEFAULT_PORT = 43_115;
const HOMEPAGE_PATH = "/";
const CONTACT_PATH = "/api/contact";

function getNpmCommand(): string {
  return process.platform === "win32" ? "npm.cmd" : "npm";
}

function getBaseUrl(): string {
  const port = Number(process.env.SMOKE_PORT ?? DEFAULT_PORT);

  if (!Number.isInteger(port) || port <= 0) {
    throw new Error(`SMOKE_PORT must be a positive integer, received: ${process.env.SMOKE_PORT ?? DEFAULT_PORT}`);
  }

  return `http://127.0.0.1:${port}`;
}

async function fetchWithTimeout(url: string, init: RequestInit, label: string): Promise<Response> {
  try {
    return await fetch(url, {
      ...init,
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    throw new Error(`${label} failed: ${reason}`);
  }
}

function assertContentType(response: Response, expected: string, label: string): void {
  const contentType = response.headers.get("content-type") ?? "unknown";

  if (!contentType.includes(expected)) {
    throw new Error(`${label} expected content-type containing \"${expected}\", received \"${contentType}\"`);
  }
}

async function waitForServer(server: ChildProcess, baseUrl: string): Promise<void> {
  const deadline = Date.now() + STARTUP_TIMEOUT_MS;
  let lastFailure = "no response received";

  while (Date.now() < deadline) {
    if (server.exitCode !== null) {
      throw new Error(`Server exited before readiness probe succeeded (exitCode=${server.exitCode}, signal=${server.signalCode ?? "none"})`);
    }

    try {
      const response = await fetchWithTimeout(baseUrl, {}, "Homepage readiness probe");
      if (response.ok) return;
      lastFailure = `received status ${response.status}`;
    } catch (error) {
      lastFailure = error instanceof Error ? error.message : String(error);
    }

    await delay(500);
  }

  throw new Error(`Server did not become ready within ${STARTUP_TIMEOUT_MS}ms (${baseUrl}); last probe result: ${lastFailure}`);
}

function waitForExit(server: ChildProcess, ms: number): Promise<void> {
  return new Promise((resolve) => {
    if (server.exitCode !== null) {
      resolve();
      return;
    }

    const onExit = () => {
      clearTimeout(timer);
      resolve();
    };

    const timer = setTimeout(() => {
      server.off("exit", onExit);
      resolve();
    }, ms);

    server.once("exit", onExit);
  });
}

async function stopServer(server: ChildProcess): Promise<void> {
  if (!server.pid || server.exitCode !== null) return;

  if (process.platform === "win32") {
    spawn("taskkill", ["/pid", String(server.pid), "/T", "/F"], { stdio: "ignore" });
  } else {
    try {
      process.kill(-server.pid, "SIGTERM");
    } catch {
      try {
        process.kill(server.pid, "SIGTERM");
      } catch {
        // Process already exited.
      }
    }
  }

  await waitForExit(server, EXIT_WAIT_MS);

  if (server.exitCode !== null) return;

  if (process.platform === "win32") {
    spawn("taskkill", ["/pid", String(server.pid), "/T", "/F"], { stdio: "ignore" });
  } else {
    try {
      process.kill(-server.pid, "SIGKILL");
    } catch {
      try {
        process.kill(server.pid, "SIGKILL");
      } catch {
        // Process already exited.
      }
    }
  }

  await waitForExit(server, EXIT_WAIT_MS);
}

async function run(): Promise<void> {
  const npmCommand = getNpmCommand();
  const baseUrl = getBaseUrl();
  const port = new URL(baseUrl).port;

  const server = spawn(npmCommand, ["run", "dev"], {
    env: {
      ...process.env,
      PORT: String(port),
      NODE_ENV: "development",
    },
    stdio: ["ignore", "pipe", "pipe"],
    detached: process.platform !== "win32",
  });

  server.stdout?.on("data", (chunk) => process.stdout.write(chunk));
  server.stderr?.on("data", (chunk) => process.stderr.write(chunk));

  if (server.pid === undefined) {
    throw new Error("Failed to start development server process");
  }

  try {
    console.log(`[smoke] starting server on ${baseUrl}`);
    await waitForServer(server, baseUrl);
    console.log("[smoke] running checks...");

    const homeResponse = await fetchWithTimeout(`${baseUrl}${HOMEPAGE_PATH}`, {}, "GET /");
    if (!homeResponse.ok) {
      throw new Error(`GET / returned ${homeResponse.status}`);
    }

    assertContentType(homeResponse, "text/html", "GET /");

    const homeHtml = await homeResponse.text();
    if (!homeHtml.includes("<html")) {
      throw new Error("GET / did not return HTML content");
    }

    const validPayload = {
      name: "Smoke Tester",
      email: "smoke@example.com",
      message: "Automated smoke-test submission",
    };

    const validResponse = await fetchWithTimeout(`${baseUrl}${CONTACT_PATH}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(validPayload),
    }, "Valid POST /api/contact");

    if (validResponse.status !== 201) {
      const body = await validResponse.text();
      throw new Error(`Valid /api/contact expected 201, got ${validResponse.status}: ${body}`);
    }

    assertContentType(validResponse, "application/json", "Valid POST /api/contact");

    const validBody = await validResponse.json() as Partial<{
      id: number;
      name: string;
      email: string;
      message: string;
    }>;

    if (
      typeof validBody.id !== "number"
      || validBody.name !== validPayload.name
      || validBody.email !== validPayload.email
      || validBody.message !== validPayload.message
    ) {
      throw new Error("Valid /api/contact response body did not echo the submitted contact payload contract");
    }

    const invalidResponse = await fetchWithTimeout(`${baseUrl}${CONTACT_PATH}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Smoke Tester",
        message: "Missing required email",
      }),
    }, "Invalid POST /api/contact");

    if (invalidResponse.status !== 400) {
      const body = await invalidResponse.text();
      throw new Error(`Invalid /api/contact expected 400, got ${invalidResponse.status}: ${body}`);
    }

    assertContentType(invalidResponse, "application/json", "Invalid POST /api/contact");

    const invalidBody = await invalidResponse.json() as Partial<{
      message: string;
      errors: unknown;
    }>;

    if (invalidBody.message !== "Invalid submission data" || invalidBody.errors == null) {
      throw new Error("Invalid /api/contact response body did not return the expected validation error contract");
    }

    console.log("[smoke] ✅ all checks passed");
  } finally {
    await stopServer(server);
  }
}

run().catch((error) => {
  console.error("[smoke] ❌", error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
