import { NextResponse } from "next/server";
import { saveLead, forwardLead, isValidEmail, type Lead } from "@/lib/leads";

export const dynamic = "force-dynamic";

/**
 * POST /api/contact — contact form submission.
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
  const subject = body.subject ? String(body.subject).trim().slice(0, 160) : undefined;
  const message = body.message ? String(body.message).trim().slice(0, 4000) : "";

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 422 }
    );
  }
  if (message.length < 5) {
    return NextResponse.json(
      { ok: false, error: "Please add a short message." },
      { status: 422 }
    );
  }

  const lead: Lead = {
    kind: "contact",
    email,
    name,
    message: [subject, message].filter(Boolean).join(" — "),
    createdAt: new Date().toISOString(),
  };

  await saveLead(lead);
  await forwardLead(lead);

  return NextResponse.json({ ok: true });
}
