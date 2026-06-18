"use client";

import { useState } from "react";
import { Loader2, AlertCircle, Lock } from "lucide-react";
import clsx from "clsx";
import type { Tier } from "@/lib/crowdfund";
import { formatUSD } from "@/lib/crowdfund";

export default function TierCard({ tier }: { tier: Tier }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function back() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ tierId: tier.id }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Could not start checkout.");
      }
      const { url } = await res.json();
      if (!url) throw new Error("No checkout URL returned.");
      // Hand off to Stripe-hosted checkout.
      window.location.href = url;
    } catch (err) {
      setLoading(false);
      setError(err instanceof Error ? err.message : "Could not start checkout.");
    }
  }

  const remaining = tier.limit && tier.claimed != null ? tier.limit - tier.claimed : null;
  const pct =
    tier.limit && tier.claimed != null
      ? Math.min(100, Math.round((tier.claimed / tier.limit) * 100))
      : null;

  return (
    <div
      className={clsx(
        "relative flex flex-col rounded-3xl border p-7",
        tier.featured
          ? "border-brand-600 bg-gradient-to-b from-brand-50 to-white shadow-lift lg:-translate-y-3"
          : "border-slate-200 bg-white shadow-soft"
      )}
    >
      {tier.featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
          Most popular
        </span>
      )}

      <div className="flex items-baseline justify-between">
        <h3 className="text-lg font-semibold text-ink">{tier.name}</h3>
        <span className="text-2xl font-bold tracking-tight text-ink">
          {formatUSD(tier.amount)}
        </span>
      </div>
      <p className="mt-1 text-sm text-slate-500">{tier.tagline}</p>

      <ul className="mt-6 flex-1 space-y-3">
        {tier.perks.map((perk) => (
          <li key={perk} className="flex items-start gap-2.5 text-sm text-slate-700">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
            {perk}
          </li>
        ))}
      </ul>

      {pct != null && remaining != null && (
        <div className="mt-6">
          <div className="flex justify-between text-xs text-slate-500">
            <span>{tier.claimed} claimed</span>
            <span>{remaining} left</span>
          </div>
          <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>
      )}

      {error && (
        <p className="mt-4 flex items-center gap-2 rounded-lg bg-red-50 px-3 py-2 text-xs text-red-700" role="alert">
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}

      <button
        type="button"
        onClick={back}
        disabled={loading || (remaining != null && remaining <= 0)}
        className={clsx("mt-6 w-full", tier.featured ? "btn-primary" : "btn-secondary")}
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Redirecting to secure checkout…
          </>
        ) : remaining != null && remaining <= 0 ? (
          "Sold out"
        ) : (
          <>
            <Lock className="h-4 w-4" aria-hidden="true" />
            Back with {formatUSD(tier.amount)}
          </>
        )}
      </button>
    </div>
  );
}
