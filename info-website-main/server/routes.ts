import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    const parsed = insertContactSubmissionSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: "Invalid submission data", errors: parsed.error.flatten() });
    }

    const submission = await storage.createContactSubmission(parsed.data);
    return res.status(201).json(submission);
  });

  return httpServer;
}
