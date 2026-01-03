import type { Express } from "express";
import { type Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";

// ---- Supabase (server-side) ----
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.warn(
    "Missing Supabase env vars. Check Replit Secrets: SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY",
  );
}

const supabase =
  SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY
    ? createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)
    : null;

export async function registerRoutes(
  httpServer: Server,
  app: Express,
): Promise<Server> {
  // ---- Contact form ----
  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      await storage.createContactSubmission(input);
      return res
        .status(200)
        .json({ success: true, message: "Message sent successfully" });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({ message: err.errors[0].message });
      }
      console.error("Contact submit error:", err);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  // ---- Checklist request ----
  app.post(api.checklist.request.path, async (req, res) => {
    try {
      const input = api.checklist.request.input.parse(req.body);

      // 1) Save to your existing storage
      await storage.createChecklistRequest(input);

      // 2) Save lead email to Supabase
      const email = String((input as any).email || "")
        .trim()
        .toLowerCase();

      if (email && email.includes("@") && supabase) {
        const { error } = await supabase
          .from("leads")
          .insert([{ email, source: "checklist", status: "new" }]);

        // Ignore duplicates, fail only on real errors
        if (error) {
          const msg = (error.message || "").toLowerCase();
          if (
            !msg.includes("duplicate") &&
            !msg.includes("unique") &&
            !msg.includes("already exists")
          ) {
            console.error("Supabase insert error:", error);
          }
        }
      } else if (!supabase) {
        console.warn("Supabase client not initialized (missing env vars).");
      }

      return res
        .status(200)
        .json({ success: true, message: "Checklist sent successfully" });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({ message: err.errors[0].message });
      }
      console.error("Checklist request error:", err);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  return httpServer;
}
