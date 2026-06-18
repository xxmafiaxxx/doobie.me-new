import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import type Stripe from "stripe";
import { saveLead, type Lead } from "@/lib/leads";
import { addShares } from "@/lib/backers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
// Stripe sends a raw body; disable Next's JSON parsing.
export const fetchCache = "force-no-store";

/**
 * POST /api/stripe-webhook — receives Stripe events.
 * Configure a webhook in the Stripe dashboard pointing here with the
 * `checkout.session.completed` event, and set STRIPE_WEBHOOK_SECRET.
 */
export async function POST(request: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) {
    return NextResponse.json(
      { error: "Webhook secret not configured." },
      { status: 500 }
    );
  }

  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "Missing signature." }, { status: 400 });
  }

  const payload = await request.text();
  let event: Stripe.Event;
  try {
    event = stripe().webhooks.constructEvent(payload, signature, secret);
  } catch (err) {
    console.error("[webhook] signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature." }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const tierId = session.metadata?.tier_id ?? "unknown";
    const tierName = session.metadata?.tier_name ?? "Backer";

    const lead: Lead = {
      kind: "contact",
      email: session.customer_details?.email ?? session.customer_email ?? "",
      name:
        session.customer_details?.name ??
        session.metadata?.name ??
        undefined,
      message: `CROWDFUND BACKER — tier: ${tierId} (${tierName}) — amount: ${
        session.amount_total ? session.amount_total / 100 : "?"
      } ${session.currency?.toUpperCase() ?? ""} — session: ${session.id}`,
      createdAt: new Date().toISOString(),
    };
    await saveLead(lead);

    // Credit symbolic shares on successful payment
    const email = session.customer_details?.email ?? session.customer_email;
    const sharesFromMeta = session.metadata?.shares
      ? parseInt(session.metadata.shares, 10)
      : null;
    const amountUSD = session.amount_total ? Math.round(session.amount_total / 100) : null;
    const sharesToCredit = sharesFromMeta ?? amountUSD ?? 0;

    if (email && sharesToCredit > 0) {
      await addShares(email, sharesToCredit);
    }
  }

  return NextResponse.json({ received: true });
}
