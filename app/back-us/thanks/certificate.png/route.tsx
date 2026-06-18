import { NextResponse } from "next/server";
import { generateCertificate } from "../certificate";
import { stripe } from "@/lib/stripe";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * GET /back-us/thanks/certificate.png?session_id=...
 *
 * Recovers the Stripe Checkout Session to personalize the certificate (name,
 * tier, date), then renders the PNG. Falls back to query params if Stripe is
 * unavailable (e.g. local dev without keys) so the page still works.
 *
 * The serial is derived deterministically from the session id so each backer
 * gets a stable, unique number without a database.
 */
export async function GET(request: Request) {
  const url = new URL(request.url);
  const sessionId = url.searchParams.get("session_id") ?? "";
  const fallbackName = url.searchParams.get("name") || "Founding Backer";
  const fallbackTier = url.searchParams.get("tier") || "ground_supporter";

  let name = fallbackName;
  let tierId = fallbackTier;
  let date = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if (sessionId) {
    try {
      const session = await stripe().checkout.sessions.retrieve(sessionId);
      name = session.customer_details?.name || session.metadata?.name || name;
      tierId = session.metadata?.tier_id || tierId;
      if (session.created) {
        date = new Date(session.created * 1000).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      }
    } catch (err) {
      // In dev without keys, fall back gracefully.
      console.error("[certificate] could not retrieve session:", err);
    }
  }

  // Deterministic serial from session id (or a fallback hash of name+tier).
  const seed = sessionId || `${name}-${tierId}`;
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  const serial = `DRN-${String(hash % 90000 + 10000)}`;

  const image = await generateCertificate({ name, tierId, serial, date });

  // Return the ArrayBuffer as image/png with a friendly download filename.
  const buf = await image.arrayBuffer();
  return new NextResponse(buf, {
    headers: {
      "content-type": "image/png",
      "cache-control": "no-store",
      "content-disposition": `inline; filename="doobie-founding-backer-${serial}.png"`,
    },
  });
}
