import type { Metadata } from "next";
import { Leaf, Zap, Users, Rocket, Target, Heart } from "lucide-react";
import { PageHeader, CtaBand } from "@/components/layout";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Doobie — A Drone Delivery Startup for NYC",
  description:
    "Doobie is a New York City drone delivery startup on a mission to make last-mile logistics fast, autonomous, and zero-emission. Learn about our mission, values, and the team building the future of urban delivery.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Doobie — A Drone Delivery Startup for NYC",
    description:
      "Our mission: fast, autonomous, zero-emission drone delivery for New York City.",
    url: "/about",
  },
};

const values = [
  {
    icon: Zap,
    title: "Speed is the product",
    body: "We obsess over minutes. Every second shaved off routing, loading and landing makes delivery better for everyone.",
  },
  {
    icon: Leaf,
    title: "Zero emissions, no exceptions",
    body: "Electric drones are cleaner than any van. Sustainability isn't a perk here — it's the foundation of the model.",
  },
  {
    icon: ShieldIcon,
    title: "Safety above all",
    body: "Flying over a city is a privilege we earn through engineering rigor and conservative, redundant systems.",
  },
  {
    icon: Users,
    title: "Built with the community",
    body: "We work with residents, building owners and regulators to integrate drones responsibly into the city.",
  },
];

function ShieldIcon({ className }: { className?: string }) {
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
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ])}
      />

      <section className="border-b border-slate-200 bg-gradient-to-b from-brand-50/60 to-white py-16 lg:py-20">
        <div className="container">
          <PageHeader
            eyebrow="About us"
            title="Building the future of urban delivery"
            description="Doobie is a New York City drone delivery startup working to make last-mile logistics fast, autonomous, and zero-emission — one flight at a time."
          />
        </div>
      </section>

      {/* Mission */}
      <section className="container py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow">
              <Target className="h-3.5 w-3.5" aria-hidden="true" />
              Our mission
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink">
              Make delivery faster, cleaner, and available to everyone
            </h2>
            <div className="mt-5 space-y-4 text-slate-600">
              <p>
                Cities are choked with delivery traffic, and it's only getting
                worse. Every meal, prescription, and package moved by car adds to
                the congestion, emissions, and noise that come with last-mile
                logistics.
              </p>
              <p>
                We started Doobie to change that. By moving everyday deliveries
                into the sky, we can cut delivery times to minutes, eliminate
                tailpipe emissions, and take pressure off the streets below.
              </p>
              <p>
                We're not trying to replace couriers — we're building a new layer
                of urban logistics that's faster, cleaner, and ready for the
                density of a city like New York.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { k: "2023", v: "Founded in NYC" },
              { k: "5+", v: "Launch hubs planned" },
              { k: "15m", v: "Target delivery time" },
              { k: "100%", v: "Electric fleet" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-soft">
                <p className="font-display text-3xl font-bold text-brand-600">{s.k}</p>
                <p className="mt-1 text-sm text-slate-500">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50 py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">
              <Heart className="h-3.5 w-3.5" aria-hidden="true" />
              What we value
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              The principles behind every flight
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="card flex gap-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-700">
                  <v.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-ink">{v.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Crowdfunding / early access */}
      <section className="container py-20">
        <div className="grid gap-10 rounded-3xl border border-slate-200 bg-gradient-to-br from-ink to-brand-950 p-8 text-white lg:grid-cols-2 lg:p-12">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-200">
              <Rocket className="h-3.5 w-3.5" aria-hidden="true" />
              Backed by early believers
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight">
              We're building this with the city
            </h2>
            <p className="mt-4 leading-relaxed text-slate-300">
              Doobie is more than a delivery service — it's a movement toward a
              smarter, greener way to move things. We're crowdfunding and
              community-driven, with early supporters shaping how we launch.
            </p>
          </div>
          <div className="grid content-center gap-4">
            {[
              "Invest in cleaner, faster urban logistics",
              "Get exclusive launch perks and partner pricing",
              "Help shape coverage in your neighborhood",
              "Join a community redefining last-mile delivery",
            ].map((p) => (
              <div key={p} className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 text-sm ring-1 ring-inset ring-white/10">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent-500 text-ink">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
                </span>
                {p}
              </div>
            ))}
            <p className="text-sm text-slate-400">
              Questions about investing or partnering? Email{" "}
              <a href={`mailto:${site.email}`} className="text-brand-200 underline underline-offset-2">
                {site.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <div className="mt-4">
        <CtaBand />
      </div>
    </>
  );
}
