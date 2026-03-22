import { useState } from "react";
import { apiRequest } from "../lib/queryClient";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      await apiRequest("POST", "/api/contact", { name, email, message });
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Etwas ist schiefgelaufen. Bitte versuche es erneut.");
    }
  };

  return (
    <div className="max-w-2xl">
        {status === "success" ? (
          <div
            className="rounded-lg border border-green-300 bg-green-50 dark:bg-green-950/30 dark:border-green-800 p-6 text-center"
            data-testid="status-contact-success"
          >
            <p className="text-green-800 dark:text-green-300 font-medium text-lg">
              Vielen Dank für deine Nachricht!
            </p>
            <p className="text-green-700 dark:text-green-400 mt-1">
              Wir melden uns so bald wie möglich bei dir.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-4 text-sm underline text-green-700 dark:text-green-400 hover:text-green-900 dark:hover:text-green-200"
              data-testid="button-contact-reset"
            >
              Weitere Nachricht senden
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                placeholder="Dein Name"
                data-testid="input-contact-name"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
                E-Mail
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                placeholder="deine@email.at"
                data-testid="input-contact-email"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
                Nachricht
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring resize-vertical"
                placeholder="Deine Nachricht..."
                data-testid="input-contact-message"
              />
            </div>

            {status === "error" && (
              <div
                className="border-2 p-3 text-sm flex items-start gap-2"
                style={{ borderColor: "var(--accent-rose)", backgroundColor: "var(--accent-rose-bg)", color: "var(--accent-rose)" }}
                data-testid="status-contact-error"
              >
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-foreground text-background px-6 py-2 text-xs font-mono uppercase tracking-wider hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
              data-testid="button-contact-submit"
            >
              {status === "loading" ? "Wird gesendet..." : "Nachricht senden"}
            </button>
          </form>
        )}
    </div>
  );
}
