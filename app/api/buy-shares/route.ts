import { NextResponse } from "next/server";
import { stripe, checkoutUrls } from "@/lib/stripe";
import { crowdfund } from "@/lib/crowdfund";
import { getBackerEmail } from "@/lib/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * POST /api/buy-shares — create a Stripe Checkout Session for additional
 * symbolic Founding Shares. $1 = 1 share.
 */
export async function POST(request: Request) {
  const origin =
    request.headers.get("origin") ||
    request.headers.get("referer")?.replace(/\/$/, "") ||
    "https://doobie.me";

  const email = getBackerEmail();
  if (!email) {
    return NextResponse.json({ error: "Log in first." }, { status: 401 });
  }

  const form = await request.formData().catch(() => null);
  const amountStr = form?.get("amount")?.toString() || "100";
  const amount = Math.max(1, Math.min(10000, parseInt(amountStr, 10) || 100));

  try {
    const { successUrl, cancelUrl } = checkoutUrls(origin, "additional_shares");
    const session = await stripe().checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: crowdfund.currency,
            unit_amount: amount * 100,
            product_data: {
              name: "Additional Founding Shares",
              description: `${amount} symbolic Founding Shares — $1 = 1 share`,
            },
          },
        },
      ],
      customer_email: email,
      metadata: {
        tier_id: "additional_shares",
        shares: String(amount),
        email,
        campaign: "doobie_founding_backers",
      },
      success_url: successUrl,
      cancel_url: cancelUrl,
    });

    return NextResponse.redirect(session.url!, 303);
  } catch (err) {
    console.error("[buy-shares] failed:", err);
    return NextResponse.json({ error: "Could not start checkout." }, { status: 500 });
  }
}
