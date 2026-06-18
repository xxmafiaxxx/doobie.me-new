import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Link from "next/link";
import { getBackerEmail, clearBackerCookie } from "@/lib/auth";
import { getBacker, TOTAL_SHARES, sharesToPercent } from "@/lib/backers";
import { crowdfund, formatUSD } from "@/lib/crowdfund";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Founding Backer Dashboard",
  description: "View and manage your symbolic Founding Shares in Doobie Drone Deliveries.",
  robots: { index: false, follow: true },
};

export default async function DashboardPage() {
  const email = getBackerEmail();
  if (!email) {
    redirect("/back-us?login=1");
  }

  const backer = await getBacker(email);
  const shares = backer?.shares ?? 0;
  const percent = sharesToPercent(shares);

  async function logout() {
    "use server";
    clearBackerCookie();
    redirect("/back-us");
  }

  return (
    <section className="container max-w-4xl py-16">
      <div className="flex items-center justify-between">
        <div>
          <span className="eyebrow">Founding Backer Dashboard</span>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink">
            Welcome back{backer?.name ? `, ${backer.name.split(" ")[0]}` : ""}
          </h1>
          <p className="text-sm text-slate-500">{email}</p>
        </div>
        <form action={logout}>
          <button type="submit" className="btn-ghost text-sm">
            Log out
          </button>
        </form>
      </div>

      {/* Disclaimer banner */}
      <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
        <strong>Symbolic Reward Only.</strong> These Founding Shares are a
        commemorative, game-like reward. They confer <strong>no equity,
        ownership, shares, dividends, voting rights, or any security interest</strong> in
        Doobie Drone Deliveries or any entity. This is not an investment.
      </div>

      {/* Holdings */}
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
            <h2 className="text-xl font-semibold text-ink">Your Founding Shares</h2>
            <div className="mt-6 flex items-baseline gap-3">
              <span className="font-display text-7xl font-bold tracking-tighter text-brand-600">
                {shares.toLocaleString()}
              </span>
              <span className="text-sm text-slate-500">shares</span>
            </div>
            <div className="mt-2 text-lg text-slate-600">
              {percent} of {TOTAL_SHARES.toLocaleString()} total symbolic shares
            </div>

            <div className="mt-8 rounded-xl bg-slate-50 p-5 text-sm text-slate-600">
              You can buy more shares below. Every $1 = 1 additional Founding Share
              (symbolic). Your certificate and perks from earlier tiers remain
              valid.
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-soft">
          <h3 className="font-semibold text-ink">Campaign snapshot</h3>
          <div className="mt-5 space-y-4 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-500">Raised</span>
              <span className="font-medium text-ink">{formatUSD(crowdfund.raisedUSD)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Goal</span>
              <span className="font-medium text-ink">{formatUSD(crowdfund.goalUSD)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Backers</span>
              <span className="font-medium text-ink">{crowdfund.backers}</span>
            </div>
          </div>
          <Link href="/back-us" className="btn-secondary mt-8 w-full">
            Back more shares
          </Link>
        </div>
      </div>

      {/* Buy more */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold text-ink">Buy more Founding Shares</h2>
        <p className="mt-1 text-sm text-slate-500">
          $1 = 1 symbolic share. All purchases are processed securely through Stripe.
        </p>

        <form
          action="/api/buy-shares"
          method="POST"
          className="mt-6 flex flex-wrap items-end gap-3"
        >
          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-500">
              Amount (USD)
            </label>
            <input
              type="number"
              name="amount"
              min={1}
              max={10000}
              defaultValue={100}
              className="field w-40"
              required
            />
          </div>
          <button type="submit" className="btn-primary">
            Buy shares
          </button>
          <p className="text-xs text-slate-400">You will be redirected to Stripe Checkout.</p>
        </form>
      </div>

      <p className="mt-12 text-center text-xs text-slate-400">
        Questions? Email{" "}
        <a href={`mailto:${site.email}`} className="font-medium text-brand-700 hover:underline">
          {site.email}
        </a>
        .
      </p>
    </section>
  );
}
