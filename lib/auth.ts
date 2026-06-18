/**
 * Very lightweight "magic link" auth for the Founding Shares dashboard.
 *
 * In production you'd use a proper auth provider (Supabase Auth, NextAuth,
 * Clerk, etc.). This is intentionally minimal so the crowdfunding feature
 * works without external dependencies.
 */
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const COOKIE = "doobie_backer";
const MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export function setBackerCookie(email: string) {
  cookies().set(COOKIE, email.toLowerCase(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: MAX_AGE,
  });
}

export function getBackerEmail(): string | null {
  return cookies().get(COOKIE)?.value ?? null;
}

export function clearBackerCookie() {
  cookies().delete(COOKIE);
}

/** Helper for API routes that need the current backer. */
export function requireBacker() {
  const email = getBackerEmail();
  if (!email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return email;
}
