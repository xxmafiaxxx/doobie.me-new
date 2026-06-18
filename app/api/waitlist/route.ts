import { NextResponse } from "next/server";
import { saveLead, forwardLead, isValidEmail, type Lead } from "@/lib/leads";

export const dynamic = "force-dynamic";

/**
 * POST /api/waitlist — early-access waitlist signup.
 * Validates input, persists locally, and optionally forwards to a webhook.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const email = String(body.email ?? "").trim();
  const name = body.name ? String(body.name).trim().slice(0, 120) : undefined;
  const zip = body.zip ? String(body.zip).trim().slice(0, 16) : undefined;
  const interest = body.interest ? String(body.interest).trim().slice(0, 120) : undefined;

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 422 }
    );
  }

  const lead: Lead = {
    kind: "waitlist",
    email,
    name,
    zip,
    interest,
    createdAt: new Date().toISOString(),
  };

  await saveLead(lead);
  await forwardLead(lead);

  return NextResponse.json({ ok: true });
}
