/**
 * Crowdfunding configuration — tiers, goal, and the "why."
 *
 * IMPORTANT (legal): This is a *rewards-based* crowdfunding campaign (think
 * Kickstarter), NOT an equity offering. Tiers grant perks and a commemorative
 * "Founding Backer" certificate. The certificate is explicitly symbolic — it
 * confers NO ownership, equity, dividends, or securities of any kind. Framing
 * copy uses "back" / "backer," never "invest" / "shares."
 */

export const crowdfund = {
  /** Soft goal shown publicly (USD). Update as the campaign evolves. */
  goalUSD: 250000,
  /**
   * Placeholder raised amount. In production this should be driven by a real
   * source of truth (e.g. read from a DB or a Stripe balance total). The
   * webhook route updates this file-less count via an env override.
   */
  raisedUSD: 42800,
  backers: 612,
  daysLeft: 38,
  /** Currency for Stripe Checkout. */
  currency: "usd",
} as const;

export interface Tier {
  id: string;
  amount: number; // USD, integer
  name: string;
  tagline: string;
  perks: string[];
  /** Highlight the recommended tier in the UI. */
  featured?: boolean;
  /** Cap on number of backers for scarcity (optional). */
  limit?: number;
  claimed?: number;
}

export const tiers: Tier[] = [
  {
    id: "ground_supporter",
    amount: 25,
    name: "Ground Supporter",
    tagline: "Get your name on the founding wall.",
    perks: [
      "Digital Founding Backer certificate (personalized, downloadable)",
      "Name on the Doobie Founders Wall",
      "Backer-only launch updates",
    ],
    limit: 1000,
    claimed: 421,
  },
  {
    id: "launch_backer",
    amount: 75,
    name: "Launch Backer",
    tagline: "Free delivery credit + the certificate.",
    featured: true,
    perks: [
      'Everything in Ground Supporter, plus:',
      "$30 in Doobie delivery credit at launch",
      "Priority waitlist for your ZIP code",
      "Founding Backer certificate with a unique serial number",
      "Early-access launch perks and partner pricing",
    ],
    limit: 500,
    claimed: 138,
  },
  {
    id: "sky_founder",
    amount: 250,
    name: "Sky Founder",
    tagline: "A numbered founder collectible + VIP treatment.",
    perks: [
      "Everything in Launch Backer, plus:",
      "$120 in Doobie delivery credit at launch",
      "Numbered, limited-edition digital founder collectible",
      "Founding Backer certificate (numbered edition)",
      "Invite to the Doobie launch event in NYC",
    ],
    limit: 200,
    claimed: 41,
  },
  {
    id: "skyline_patron",
    amount: 1000,
    name: "Skyline Patron",
    tagline: "Top-tier backer with named-hub recognition.",
    perks: [
      "Everything in Sky Founder, plus:",
      "$500 in Doobie delivery credit at launch",
      "Name displayed at a Doobie launch hub",
      "Quarterly founder briefing with the team",
      "Lifetime priority delivery status",
    ],
    limit: 50,
    claimed: 12,
  },
];

export function getTier(id: string): Tier | undefined {
  return tiers.find((t) => t.id === id);
}

/** Progress 0–100 toward the goal, clamped. */
export function goalProgress(): number {
  return Math.min(100, Math.round((crowdfund.raisedUSD / crowdfund.goalUSD) * 100));
}

export function formatUSD(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}
