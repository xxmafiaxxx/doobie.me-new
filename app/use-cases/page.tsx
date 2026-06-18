import type { Metadata } from "next";
import Link from "next/link";
import {
  Utensils,
  Pill,
  ShoppingBag,
  Truck,
  HeartPulse,
  Building2,
  ArrowRight,
} from "lucide-react";
import { PageHeader, CtaBand } from "@/components/layout";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Drone Delivery Use Cases — Food, Pharmacy, Retail & B2B",
  description:
    "Explore what drones can deliver: food and groceries, pharmacy and medical supplies, retail and e-commerce orders, and last-mile business logistics — all flown fast and emission-free across NYC.",
  alternates: { canonical: "/use-cases" },
  openGraph: {
    title: "Drone Delivery Use Cases — Food, Pharmacy, Retail & B2B",
    description:
      "One autonomous fleet powering food, pharmacy, retail and last-mile B2B delivery across New York City.",
    url: "/use-cases",
  },
};

const useCases = [
  {
    icon: Utensils,
    title: "Food & grocery",
    summary: "Hot meals and fresh groceries, delivered before they cool down.",
    points: [
      "Restaurant and ghost-kitchen partnerships",
      "Fresh grocery same-hour fulfillment",
      "Insulated payload for hot and cold items",
      "Lower delivery cost per order",
    ],
  },
  {
    icon: Pill,
    title: "Pharmacy & prescriptions",
    summary: "Prescriptions and over-the-counter needs, on demand.",
    points: [
      "Scheduled and on-demand prescription refill",
      "Temperature-controlled medical payloads",
      "Private, contactless delivery",
      "Reduced wait times for urgent medication",
    ],
  },
  {
    icon: HeartPulse,
    title: "Medical & lab logistics",
    summary: "Time-critical transport between clinics, labs and hospitals.",
    points: [
      "Blood, plasma and specimen transport",
      "Clinic-to-clinic supply runs",
      "Predictable, traffic-proof ETAs",
      "Auditable chain of custody",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Retail & e-commerce",
    summary: "Same-hour fulfillment for local retailers and online orders.",
    points: [
      "Same-hour last-mile for local stores",
      "Returns flown back just as fast",
      "Premium instant-delivery tier",
      "Higher conversion from faster fulfillment",
    ],
  },
  {
    icon: Truck,
    title: "Last-mile B2B logistics",
    summary: "Fast, low-cost movement between warehouses, stores and depots.",
    points: [
      "Hub-to-store inventory replenishment",
      "Cross-dock and micro-fulfillment links",
      "Lower per-stop cost than vans",
      "24/7 autonomous operations",
    ],
  },
  {
    icon: Building2,
    title: "Property & workplace",
    summary: "Drone delivery as an amenity for buildings and campuses.",
    points: [
      "Rooftop and designated-zone drop-offs",
      "Residential building partnerships",
      "Corporate campus delivery programs",
      "Concierge-style resident perks",
    ],
  },
];

export default function UseCasesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Use Cases", href: "/use-cases" },
        ])}
      />

      <section className="border-b border-slate-200 bg-gradient-to-b from-accent-50/50 to-white py-16 lg:py-20">
        <div className="container">
          <PageHeader
            eyebrow="Use cases"
            title="One autonomous fleet, endless deliveries"
            description="Drones aren't just for one kind of package. Doobie powers food, pharmacy, medical, retail and B2B logistics — all on the same fast, zero-emission network."
          />
        </div>
      </section>

      <section className="container py-20">
        <div className="grid gap-6 lg:grid-cols-2">
          {useCases.map((u) => (
            <div key={u.title} className="card flex flex-col">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-700">
                  <u.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-xl font-semibold text-ink">{u.title}</h2>
                  <p className="text-sm text-slate-500">{u.summary}</p>
                </div>
              </div>
              <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {u.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-4">
        <CtaBand
          title="Want drones for your business?"
          body="Partner with Doobie to add autonomous delivery to your store, restaurant, pharmacy or logistics network."
          primaryLabel="Become a partner"
          primaryHref="/get-started"
          secondaryLabel="Contact us"
          secondaryHref="/contact"
        />
      </div>
    </>
  );
}
