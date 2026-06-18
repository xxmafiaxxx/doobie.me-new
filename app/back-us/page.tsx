import type { Metadata } from "next";
import Link from "next/link";
import {
  Plane,
  Leaf,
  MapPin,
  Heart,
  Building2,
  Users,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { PageHeader, Faq, CtaBand } from "@/components/layout";
import TierCard from "@/components/crowdfund/TierCard";
import JsonLd from "@/components/seo/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { crowdfund, tiers, formatUSD, goalProgress } from "@/lib/crowdfund";
import { site, absUrl } from "@/lib/site";
import DroneImage from "@/components/home/DroneImage";

export const metadata: Metadata = {
  title: "Back Doobie — Fund Brooklyn's Homegrown Drone Delivery Startup",
  description:
    "Back Doobie Drone Deliveries, a homegrown Brooklyn startup building fast, zero-emission drone delivery for NYC. Become a Founding Backer and get a personalized certificate, delivery credit, and launch perks.",
  alternates: { canonical: "/back-us" },
  openGraph: {
    title: "Back Doobie — Fund Brooklyn's Homegrown Drone Delivery Startup",
    description:
      "Become a Founding Backer of Doobie, a Brooklyn drone delivery startup. Personalized certificate, delivery credit, and launch perks.",
    url: "/back-us",
  },
};

const reasons = [
  {
    icon: MapPin,
    title: "Built in Brooklyn, for Brooklyn",
    body: "Doobie isn't a corporate drone from the West Coast. We're a local team building for the streets we walk — starting right here in NYC, with the density and grit that makes Brooklyn the perfect proving ground.",
  },
  {
    icon: Leaf,
    title: "Cleaner air for the city",
    body: "Every delivery van adds to the congestion and emissions choking our neighborhoods. Electric drones cut CO₂, noise, and traffic — so backing Doobie means backing a greener five boroughs.",
  },
  {
    icon: Plane,
    title: "Faster for everyone",
    body: "When your prescription or dinner flies over traffic instead of sitting in it, the whole city moves faster. Backers help bring that speed to life — not someday, but soon.",
  },
  {
    icon: Users,
    title: "Owned by the community",
    body: "We'd rather build Doobie with hundreds of local backers than one faceless investor. Founding Backers literally shape how we launch, where we fly first, and what we build next.",
  },
];

const impact = [
  { icon: Building2, value: "5+", label: "NYC launch hubs funded" },
  { icon: Leaf, value: "0g", label: "CO₂ per delivery" },
  { icon: Users, value: `${crowdfund.backers}+`, label: "founding backers" },
  { icon: Sparkles, value: "100%", label: "electric fleet" },
];

const faqs = [
  {
    question: "Is backing Doobie an investment? Do I get equity?",
    answer:
      "No. This is a rewards-based crowdfunding campaign — like Kickstarter. You're backing the mission and getting rewards in return (a personalized certificate, delivery credit, and launch perks). You do NOT receive equity, shares, dividends, or any ownership in the company. The certificate is a symbolic, commemorative reward.",
  },
  {
    question: "How does the certificate work? Is it an NFT?",
    answer:
      "Every backer gets a personalized, downloadable Founding Backer certificate as a high-resolution image — styled to commemorate your role, with a unique serial number. It's a digital collectible now, and we're building toward optional on-chain NFT minting for backers who want a verifiable, tradeable version. For today, it's a beautiful, shareable PNG you own.",
  },
  {
    question: "How is my payment processed?",
    answer:
      "All payments are handled securely by Stripe. We never see or store your card details. You can back Doobie with any major card through Stripe's encrypted checkout.",
  },
  {
    question: "When do I get my delivery credit and perks?",
    answer:
      "Your certificate is generated immediately after you back us. Delivery credit and other perks activate when Doobie launches in your area — we'll email you the moment that happens, and founding backers get priority.",
  },
  {
    question: "What if drone delivery can't reach my neighborhood?",
    answer:
      "We're rolling out hub by hub starting in Manhattan, Brooklyn, and Queens. If we can't reach you at launch, your delivery credit stays valid and your waitlist priority keeps you at the front of the line as coverage expands.",
  },
  {
    question: "Can I back at a custom amount or gift a backing?",
    answer:
      "Right now backing is by tier. If you'd like to contribute a custom amount, gift a backing, or talk about a larger commitment, email us at hello@doobie.me — we'd love to hear from you.",
  },
];

export default function BackUsPage() {
  const progress = goalProgress();

  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Back Us", href: "/back-us" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CrowdfundingCampaign",
          name: "Doobie Founding Backers",
          url: absUrl("/back-us"),
          description:
            "Back Doobie Drone Deliveries — a homegrown Brooklyn startup building fast, zero-emission drone delivery for New York City.",
          organizer: { "@id": `${absUrl("/")}#organization` },
          funding: { "@type": "MonetaryAmount", currency: "USD", amount: crowdfund.goalUSD },
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-brand-50/70 to-white">
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl"
        />
        <div className="container relative grid gap-12 py-16 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-7">
            <span className="eyebrow">
              <Heart className="h-3.5 w-3.5" aria-hidden="true" />
              Backed by the community
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Help launch{" "}
              <span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">
                Brooklyn's own
              </span>{" "}
              drone delivery company
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              Doobie is a homegrown Brooklyn startup building fast, autonomous,
              zero-emission drone delivery for New York City. We're not backed by
              a megacorporation — we're backed by people who believe a cleaner,
              faster, locally-owned delivery network is worth building. Back us
              and become a Founding Backer.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#tiers" className="btn-primary">
                Back Doobie
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#why" className="btn-secondary">
                Why back us
              </a>
            </div>
          </div>

          {/* Progress card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-lift">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-ink">Campaign progress</h2>
                <span className="rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-700">
                  {crowdfund.daysLeft} days left
                </span>
              </div>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-4xl font-bold text-ink">
                  {formatUSD(crowdfund.raisedUSD)}
                </span>
                <span className="text-sm text-slate-500">
                  of {formatUSD(crowdfund.goalUSD)} goal
                </span>
              </div>
              <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500 transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="mt-2 flex justify-between text-xs text-slate-500">
                <span>{progress}% funded</span>
                <span>{crowdfund.backers} backers</span>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3 border-t border-slate-100 pt-5">
                {impact.map((s) => (
                  <div key={s.label} className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-50 text-brand-700">
                      <s.icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-semibold text-ink">{s.value}</p>
                      <p className="text-[11px] text-slate-500">{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why back us */}
      <section id="why" className="container py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Why back Doobie</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Four reasons your backing matters
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            This isn't just about drones. It's about who owns the future of
            delivery in our city.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {reasons.map((r) => (
            <div key={r.title} className="card flex gap-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-700">
                <r.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-ink">{r.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{r.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certificate teaser */}
      <section className="bg-ink py-20 text-white">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-200">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Your reward
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Every backer becomes a Founding Backer
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              When you back Doobie, you get a personalized, downloadable Founding
              Backer certificate — commemorating your role in launching a
              homegrown Brooklyn company. Each one carries a unique serial number,
              styled to celebrate the moment you helped take flight.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Personalized certificate with your name + unique serial",
                "Numbered, limited-edition collectibles at higher tiers",
                "Name on the Doobie Founders Wall",
                "Built to become a verifiable on-chain collectible (coming soon)",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-slate-200">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-400" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-slate-400">
              <ShieldCheck className="mr-1.5 inline h-4 w-4 text-brand-300" aria-hidden="true" />
              Symbolic reward only — not a security. No equity, shares, or ownership.
            </p>
          </div>
          <div className="rounded-2xl border border-amber-300/30 bg-gradient-to-br from-amber-50/10 to-white/5 p-6">
            <div className="rounded-xl border-2 border-amber-200/40 p-6 text-center">
              <p className="text-xs uppercase tracking-widest text-amber-200/80">
                Founding Backer Certificate
              </p>
              <p className="mt-4 text-2xl font-bold italic text-white">Your Name Here</p>
              <div className="mx-auto mt-3 h-px w-2/3 bg-amber-200/40" />
              <p className="mt-4 text-sm text-slate-300">
                a Launch Backer of Doobie Drone Deliveries — building fast,
                zero-emission delivery for New York City.
              </p>
              <div className="mt-6 flex justify-between text-xs text-slate-400">
                <span>No. DRN-48217</span>
                <span>Brooklyn, NY</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section id="tiers" className="container scroll-mt-20 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Reward tiers</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Choose how you back the mission
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Every tier includes a personalized Founding Backer certificate.
            Payments are secure through Stripe.
          </p>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-4">
          {tiers.map((tier) => (
            <TierCard key={tier.id} tier={tier} />
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-slate-500">
          <Lock className="mr-1.5 inline h-4 w-4 align-text-bottom" aria-hidden="true" />
          Secure checkout via Stripe. Questions?{" "}
          <a href={`mailto:${site.email}`} className="font-medium text-brand-700 hover:underline">
            {site.email}
          </a>
        </p>

        <div className="mt-6 text-center">
          <Link href="/dashboard" className="text-sm font-medium text-brand-700 hover:underline">
            Already a backer? Log in to your Founding Shares dashboard →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="container pb-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Backing questions, answered
          </h2>
        </div>
        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </section>

      <div className="mt-20">
        <CtaBand
          title="Not ready to back? Join the waitlist instead"
          body="Get launch updates and priority coverage in your neighborhood — no contribution required."
          primaryLabel="Join the waitlist"
          primaryHref="/get-started"
          secondaryLabel="Back Doobie"
          secondaryHref="#tiers"
        />
      </div>
    </>
  );
}

function Lock({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}
