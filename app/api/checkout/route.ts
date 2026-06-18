import { NextResponse } from "next/server";
import { stripe, checkoutUrls } from "@/lib/stripe";
import { getTier, crowdfund } from "@/lib/crowdfund";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * POST /api/checkout — create a Stripe Checkout Session for a reward tier.
 * Body: { tierId: string }
 */
export async function POST(request: Request) {
  const origin =
    request.headers.get("origin") ||
    request.headers.get("referer")?.replace(/\/$/, "") ||
    "https://doobie.me";

  let body: { tierId?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const tier = body.tierId ? getTier(body.tierId) : undefined;
  if (!tier) {
    return NextResponse.json({ error: "Unknown tier." }, { status: 400 });
  }

  try {
    const { successUrl, cancelUrl } = checkoutUrls(origin, tier.id);
    const session = await stripe().checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: crowdfund.currency,
            unit_amount: tier.amount * 100, // cents
            product_data: {
              name: `Back Doobie — ${tier.name}`,
              description: tier.tagline,
            },
          },
        },
      ],
      // Pre-fill email if Stripe can infer it; customer still confirms.
      submit_type: "pay",
      billing_address_collection: "auto",
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        tier_id: tier.id,
        tier_name: tier.name,
        campaign: "doobie_founding_backers",
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("[checkout] session creation failed:", err);
    return NextResponse.json(
      { error: "Could not start checkout. Please try again." },
      { status: 500 }
    );
  }
}
