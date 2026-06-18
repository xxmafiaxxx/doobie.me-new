/**
 * Lead persistence helper.
 *
 * For now this appends leads to a local JSONL file under the app root so the
 * waitlist/contact forms work with zero backend. The write path is structured
 * so it can be swapped for Resend, SendGrid, a Google Sheet, or a database
 * later — only this file needs to change.
 */
import { promises as fs } from "node:fs";
import path from "node:path";

export type LeadKind = "waitlist" | "contact" | "newsletter";

export interface Lead {
  kind: LeadKind;
  email: string;
  name?: string;
  zip?: string;
  interest?: string;
  message?: string;
  createdAt: string;
}

const LEADS_DIR = path.join(process.cwd(), ".leads");
const LEADS_FILE = path.join(LEADS_DIR, "leads.jsonl");

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email: string): boolean {
  return EMAIL_RE.test(email.trim());
}

export async function saveLead(lead: Lead): Promise<void> {
  try {
    await fs.mkdir(LEADS_DIR, { recursive: true });
    await fs.appendFile(LEADS_FILE, JSON.stringify(lead) + "\n", "utf8");
  } catch (err) {
    // Logging only — never expose filesystem details to the client.
    console.error("[leads] failed to persist lead:", err);
  }
}

/**
 * Optional: forward the lead to an external provider if configured via env.
 * Set LEADS_WEBHOOK_URL to a Make/Zapier/custom endpoint to fan out.
 */
export async function forwardLead(lead: Lead): Promise<void> {
  const webhook = process.env.LEADS_WEBHOOK_URL;
  if (!webhook) return;
  try {
    await fetch(webhook, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(lead),
    });
  } catch (err) {
    console.error("[leads] webhook forward failed:", err);
  }
}
