import type { Metadata } from "next";
import { Sparkles, Gift, Star, Bell } from "lucide-react";
import WaitlistForm from "@/components/forms/WaitlistForm";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Get Early Access to Drone Delivery — Join the Waitlist",
  description:
    "Join the Doobie early-access waitlist for drone delivery in NYC. Get launch perks, discounted delivery rates, and priority when coverage goes live in your neighborhood. It's free to join.",
  alternates: { canonical: "/get-started" },
  openGraph: {
    title: "Get Early Access to Drone Delivery — Join the Waitlist",
    description:
      "Be first in line when Doobie drone delivery launches in your NYC neighborhood. Launch perks, partner pricing, priority coverage.",
    url: "/get-started",
  },
};

const perks = [
  {
    icon: Gift,
    title: "Discounted delivery rates",
    body: "Lock in early-access pricing on every delivery you make as a founding member.",
  },
  {
    icon: Bell,
    title: "Priority coverage",
    body: "We prioritize your ZIP code as new launch hubs come online across the city.",
  },
  {
    icon: Star,
    title: "VIP new features",
    body: "Get first access to new capabilities and partner offers as Doobie expands.",
  },
  {
    icon: Sparkles,
    title: "Founding-member status",
    body: "Join the community shaping the future of fast, zero-emission urban delivery.",
  },
];

export default function GetStartedPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Get Early Access", href: "/get-started" },
        ])}
      />

      <section className="border-b border-slate-200 bg-gradient-to-b from-brand-50/70 to-white py-16 lg:py-20">
        <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Early access
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
              Be first in line when Doobie takes off
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate-600">
              Join the waitlist to lock in launch perks, discounted delivery
              rates, and priority coverage in your NYC neighborhood. It's free —
              and you'll be among the first to fly.
            </p>
            <ul className="mt-8 space-y-3">
              {perks.map((p) => (
                <li key={p.title} className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
                    <p.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-semibold text-ink">{p.title}</p>
                    <p className="text-sm text-slate-600">{p.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:pl-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-lift sm:p-9">
              <h2 className="text-xl font-semibold text-ink">Join the waitlist</h2>
              <p className="mt-1.5 text-sm text-slate-500">
                Takes less than a minute. No credit card.
              </p>
              <div className="mt-6">
                <WaitlistForm />
              </div>
            </div>
            <p className="mt-4 text-center text-xs text-slate-400">
              Already a partner?{" "}
              <a href="/contact" className="font-medium text-brand-700 hover:underline">
                Contact our team
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
