import { NextResponse } from "next/server";
import { setBackerCookie } from "@/lib/auth";
import { isValidEmail } from "@/lib/leads";

/**
 * POST /api/backer-login — "magic link" login for the backer dashboard.
 * Demo mode: immediately sets the cookie. In production this would email
 * a signed token.
 */
export async function POST(request: Request) {
  const { email } = await request.json().catch(() => ({}));

  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: "Valid email required." }, { status: 422 });
  }

  setBackerCookie(email);
  return NextResponse.json({ ok: true, email: email.toLowerCase() });
}
