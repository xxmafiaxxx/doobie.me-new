import type { Metadata } from "next";
import Link from "next/link";
import {
  ShoppingCart,
  Package,
  Plane,
  Anchor,
  ShieldCheck,
  Radar,
  BatteryCharging,
  Umbrella,
  ArrowRight,
} from "lucide-react";
import { PageHeader, CtaBand } from "@/components/layout";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "How Drone Delivery Works — From Order to Doorstep",
  description:
    "See exactly how Doobie's autonomous drone delivery works: place your order, we pack and launch, the drone flies over traffic, and your package lands via contactless drop-off — in about 15 minutes.",
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    title: "How Drone Delivery Works — From Order to Doorstep",
    description:
      "Order, launch, fly, land. Here's how Doobie delivers by drone in about 15 minutes across New York City.",
    url: "/how-it-works",
  },
};

const steps = [
  {
    icon: ShoppingCart,
    title: "Place your order",
    body: "Browse a partner store or app, add what you need, and choose drone delivery at checkout. You'll set a safe drop-off spot — a yard, rooftop, or designated zone.",
  },
  {
    icon: Package,
    title: "We pack & load",
    body: "Your order is picked and packed at the nearest launch hub, then secured to the drone's payload system with tamper-evident packaging.",
  },
  {
    icon: Plane,
    title: "Autonomous flight",
    body: "The drone launches and flies a pre-cleared route directly to you, soaring over traffic instead of sitting in it. You watch it move in real time.",
  },
  {
    icon: Anchor,
    title: "Contactless drop-off",
    body: "On arrival, your package is lowered precisely at your drop-off spot by tether. The drone returns to its hub to recharge and fly again.",
  },
];

const safety = [
  {
    icon: Radar,
    title: "Detect-and-avoid",
    body: "Onboard sensing detects and avoids obstacles, other aircraft, and restricted zones throughout the flight.",
  },
  {
    icon: Umbrella,
    title: "Parachute recovery",
    body: "Every aircraft carries a ballistic parachute that can bring the drone down safely if any system fails.",
  },
  {
    icon: BatteryCharging,
    title: "Redundant power",
    body: "Dual batteries and failover systems mean a single fault never ends a flight unexpectedly.",
  },
  {
    icon: ShieldCheck,
    title: "BVLOS operations",
    body: "We operate beyond visual line of sight under FAA-aligned procedures built for dense urban airspace.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "How It Works", href: "/how-it-works" },
        ])}
      />

      <section className="border-b border-slate-200 bg-gradient-to-b from-brand-50/60 to-white py-16 lg:py-20">
        <div className="container">
          <PageHeader
            eyebrow="How it works"
            title="From order to doorstep — over traffic, in minutes"
            description="Drone delivery skips the streets entirely. Here's the step-by-step of how a Doobie delivery gets from a hub to your door."
          />
        </div>
      </section>

      {/* Steps */}
      <section className="container py-20">
        <div className="grid gap-6 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="relative">
              <div className="card h-full">
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-700">
                    <s.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="font-display text-2xl font-bold text-slate-200">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="mt-5 text-lg font-semibold text-ink">{s.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {s.body}
                </p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight
                  className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-brand-300 lg:block"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Safety */}
      <section className="bg-slate-50 py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Safety first</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Engineered to fly safely over a city
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Flying drones over New York demands a safety-first architecture.
              Every aircraft is built to fail safe.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {safety.map((s) => (
              <div key={s.title} className="card flex gap-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent-50 text-accent-700">
                  <s.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-ink">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-20">
        <CtaBand
          title="Ready to see it in action?"
          body="Join the early-access waitlist and be among the first to receive drone delivery in NYC."
        />
      </div>
    </>
  );
}
