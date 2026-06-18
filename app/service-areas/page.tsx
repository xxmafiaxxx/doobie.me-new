import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { MapPin, Check, Clock } from "lucide-react";
import { PageHeader, CtaBand } from "@/components/layout";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

// Leaflet requires the browser; load the map client-side only.
const ServiceAreaMap = dynamic(() => import("@/components/map/ServiceAreaMap"), {
  ssr: false,
  loading: () => (
    <div className="grid h-[420px] w-full place-items-center rounded-2xl bg-slate-100 text-sm text-slate-500">
      Loading map…
    </div>
  ),
});

export const metadata: Metadata = {
  title: "Drone Delivery Service Areas in NYC — Manhattan, Brooklyn & Queens",
  description:
    "See where Doobie drone delivery is launching across New York City. Live and coming-soon zones in Manhattan, Brooklyn, and Queens — plus how to get priority coverage in your neighborhood.",
  alternates: { canonical: "/service-areas" },
  openGraph: {
    title: "Drone Delivery Service Areas in NYC",
    description:
      "Live and coming-soon drone delivery zones across Manhattan, Brooklyn and Queens. Check coverage and join the waitlist.",
    url: "/service-areas",
  },
};

const zones = [
  {
    borough: "Manhattan",
    neighborhoods: ["Midtown", "Murray Hill", "Flatiron", "Upper East Side (soon)"],
    status: "Launching",
  },
  {
    borough: "Brooklyn",
    neighborhoods: ["Downtown Brooklyn", "Williamsburg (soon)", "DUMBO", "Brooklyn Heights"],
    status: "Launching",
  },
  {
    borough: "Queens",
    neighborhoods: ["Long Island City", "Astoria (soon)", "Sunnyside"],
    status: "Launching",
  },
  {
    borough: "The Bronx",
    neighborhoods: ["Coverage in planning"],
    status: "Coming soon",
  },
];

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Service Areas", href: "/service-areas" },
        ])}
      />

      <section className="border-b border-slate-200 bg-gradient-to-b from-brand-50/60 to-white py-16 lg:py-20">
        <div className="container">
          <PageHeader
            eyebrow="Service areas"
            title="Where Doobie is taking off in NYC"
            description="We're building coverage hub by hub across New York City. Here's where drone delivery is launching — and what's coming next."
          />
        </div>
      </section>

      {/* Map */}
      <section className="container py-16">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-soft">
          <ServiceAreaMap />
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600">
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-brand-500" aria-hidden="true" />
            Launching
          </span>
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-slate-300" aria-hidden="true" />
            Coming soon
          </span>
        </div>
      </section>

      {/* Borough breakdown */}
      <section className="container pb-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {zones.map((z) => {
            const live = z.status === "Launching";
            return (
              <div key={z.borough} className="card">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-ink">{z.borough}</h2>
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${
                      live
                        ? "bg-accent-50 text-accent-700"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {live ? <Check className="h-3 w-3" /> : <Clock className="h-3 w-3" />}
                    {z.status}
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  {z.neighborhoods.map((n) => (
                    <li key={n} className="flex items-center gap-2 text-sm text-slate-600">
                      <MapPin className="h-3.5 w-3.5 text-brand-500" aria-hidden="true" />
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <div className="mt-4">
        <CtaBand
          title="Not in a launch zone yet?"
          body="Join the waitlist and we'll prioritize your neighborhood as coverage expands — with launch perks when your zone goes live."
        />
      </div>
    </>
  );
}
