import type { Metadata } from "next";
import Link from "next/link";
import { Check, Sparkles, Building2, Users } from "lucide-react";
import { PageHeader, CtaBand } from "@/components/layout";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Drone Delivery Pricing — Plans for Customers & Businesses",
  description:
    "Simple, transparent drone delivery pricing. Per-delivery rates for everyday customers, early-access perks, and custom partner plans for businesses. No fuel surcharges, no surge pricing.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Drone Delivery Pricing — Customers & Businesses",
    description:
      "Per-delivery pricing, early-access perks, and custom partner plans. No surge pricing, zero emissions.",
    url: "/pricing",
  },
};

const tiers = [
  {
    name: "Pay per delivery",
    icon: Users,
    price: "From $3.99",
    cadence: "per delivery",
    description: "For occasional orders. No commitment, no membership.",
    features: [
      "Per-delivery pricing, no membership",
      "Contactless tracked drop-off",
      "Avg. 15-minute delivery time",
      "Valid in all live zones",
    ],
    cta: "Get early access",
    href: "/get-started",
    featured: false,
  },
  {
    name: "Early Access",
    icon: Sparkles,
    price: "Free",
    cadence: "to join",
    description: "Lock in launch perks and discounted delivery rates.",
    features: [
      "Discounted early-access delivery rates",
      "Priority when your zone goes live",
      "VIP access to new features",
      "Exclusive partner offers",
      "Founding-member status",
    ],
    cta: "Join the waitlist",
    href: "/get-started",
    featured: true,
  },
  {
    name: "Business & partner",
    icon: Building2,
    price: "Custom",
    cadence: "volume pricing",
    description: "For stores, restaurants, pharmacies and logistics teams.",
    features: [
      "Volume per-delivery pricing",
      "Dedicated launch coordination",
      "API & integration support",
      "Branded drop-off experience",
      "Priority hub placement",
    ],
    cta: "Talk to us",
    href: "/contact",
    featured: false,
  },
];

const faqInline = [
  {
    q: "Is there surge pricing?",
    a: "No. Doobie doesn't use surge pricing. Because there's no driver and no fuel cost, our base rates stay stable even at peak times.",
  },
  {
    q: "Are there fuel surcharges?",
    a: "Never. Our drones are fully electric, so there's no fuel cost to pass on. That's part of what keeps drone delivery affordable.",
  },
  {
    q: "How does business pricing work?",
    a: "Business and partner plans are priced per delivery based on volume, zone, and payload. Get in touch for a custom quote and integration plan.",
  },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Pricing", href: "/pricing" },
        ])}
      />

      <section className="border-b border-slate-200 bg-gradient-to-b from-brand-50/60 to-white py-16 lg:py-20">
        <div className="container">
          <PageHeader
            eyebrow="Pricing"
            title="Fast delivery, without the surge pricing"
            description="Drone delivery is built to be cost-competitive with couriers — often cheaper — because there's no driver and no fuel. Simple, transparent rates."
          />
        </div>
      </section>

      <section className="container py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative flex flex-col rounded-3xl border p-7 ${
                t.featured
                  ? "border-brand-600 bg-gradient-to-b from-brand-50 to-white shadow-lift lg:-translate-y-3"
                  : "border-slate-200 bg-white shadow-soft"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
                  Best for early members
                </span>
              )}
              <span className={`grid h-12 w-12 place-items-center rounded-2xl ${t.featured ? "bg-brand-600 text-white" : "bg-brand-50 text-brand-700"}`}>
                <t.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-lg font-semibold text-ink">{t.name}</h2>
              <div className="mt-2 flex items-baseline gap-1.5">
                <span className="text-3xl font-bold tracking-tight text-ink">{t.price}</span>
                <span className="text-sm text-slate-500">{t.cadence}</span>
              </div>
              <p className="mt-2 text-sm text-slate-600">{t.description}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={t.href}
                className={`mt-7 ${t.featured ? "btn-primary" : "btn-secondary"} w-full`}
              >
                {t.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Inline pricing Q&A */}
        <div className="mx-auto mt-16 max-w-3xl">
          <h2 className="text-center text-2xl font-bold tracking-tight text-ink">
            Pricing questions
          </h2>
          <dl className="mt-8 space-y-4">
            {faqInline.map((item) => (
              <div key={item.q} className="card">
                <dt className="font-semibold text-ink">{item.q}</dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-slate-600">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div className="mt-4">
        <CtaBand />
      </div>
    </>
  );
}
