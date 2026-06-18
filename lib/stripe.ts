import Stripe from "stripe";
import { site } from "./site";

/**
 * Lazy Stripe server client. Throws a clear error at call-time (not import
 * time) if the secret key isn't configured, so the app still builds/renders
 * without secrets present.
 */
let _client: Stripe | null = null;

export function stripe(): Stripe {
  if (_client) return _client;
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error(
      "STRIPE_SECRET_KEY is not set. Add it to .env.local (see .env.example)."
    );
  }
  _client = new Stripe(key, {
    apiVersion: "2026-05-27.dahlia",
    appInfo: { name: site.name, version: "1.0.0" },
  });
  return _client;
}

/** Construct the absolute success/cancel URLs for Stripe Checkout. */
export function checkoutUrls(origin: string, tierId: string) {
  const base = origin.replace(/\/$/, "");
  return {
    successUrl: `${base}/back-us/thanks?session_id={CHECKOUT_SESSION_ID}&tier=${tierId}`,
    cancelUrl: `${base}/back-us?canceled=1`,
  };
}
