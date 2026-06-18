import Link from "next/link";
import {
  ArrowRight,
  Plane,
  Zap,
  Leaf,
  ShieldCheck,
  MapPin,
  Clock,
  PackageCheck,
  Utensils,
  Pill,
  ShoppingBag,
  Truck,
  Star,
} from "lucide-react";
import { CtaBand } from "@/components/layout";
import Faq from "@/components/layout/Faq";
import JsonLd from "@/components/seo/JsonLd";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { homeFaqs } from "@/lib/faqs";
import type { Metadata } from "next";
import DroneImage from "@/components/home/DroneImage";

export const metadata: Metadata = {
  title: "Drone Delivery in NYC — Fast, Autonomous & Zero-Emission",
  description:
    "Doobie Drone Deliveries brings autonomous drone delivery to New York City. Food, pharmacy, retail and last-mile logistics delivered in minutes — not hours. Join the early-access waitlist.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Drone Delivery in NYC — Fast, Autonomous & Zero-Emission",
    description:
      "Autonomous, zero-emission drone delivery across New York City. Delivered in minutes, not hours. Join the early-access waitlist.",
    url: "/",
  },
};

const stats = [
  { value: "15 min", label: "Average delivery time", icon: Clock },
  { value: "0 g", label: "CO₂ per delivery", icon: Leaf },
  { value: "24/7", label: "Autonomous operations", icon: Plane },
  { value: "99.4%", label: "On-time target", icon: ShieldCheck },
];

const valueProps = [
  {
    icon: Zap,
    title: "Delivered in minutes",
    body: "Our autonomous fleet flies point-to-point over traffic, so your order arrives in an average of 15 minutes — not the hour-plus of a courier in a car.",
  },
  {
    icon: Leaf,
    title: "Zero-emission by design",
    body: "Every flight is electric. A drone delivery produces a fraction of the carbon of a gas-powered van, cutting congestion and noise along with emissions.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & autonomous",
    body: "Redundant flight systems, parachute recovery, and beyond-visual-line-of-sight (BVLOS) routing keep every package — and every sidewalk — safe.",
  },
  {
    icon: PackageCheck,
    title: "Tracked to your door",
    body: "Watch your delivery descend in real time. Drop-off is contactless and precise, with live ETA updates from launch to landing.",
  },
];

const useCases = [
  {
    icon: Utensils,
    title: "Food & grocery",
    body: "Hot meals and fresh groceries, delivered before they get cold.",
  },
  {
    icon: Pill,
    title: "Pharmacy & medical",
    body: "Prescriptions and urgent medical supplies, on demand.",
  },
  {
    icon: ShoppingBag,
    title: "Retail & e-commerce",
    body: "Same-hour fulfillment for local retailers and online orders.",
  },
  {
    icon: Truck,
    title: "Last-mile B2B",
    body: "Fast, low-cost logistics between warehouses, stores and depots.",
  },
];

const steps = [
  {
    n: "01",
    title: "Place your order",
    body: "Order through a partner app or website, then select drone delivery at checkout.",
  },
  {
    n: "02",
    title: "We pack & launch",
    body: "Your item is packed at the nearest hub and loaded onto an autonomous drone.",
  },
  {
    n: "03",
    title: "It flies to you",
    body: "The drone navigates its route over traffic, tracked live from start to finish.",
  },
  {
    n: "04",
    title: "Contactless drop-off",
    body: "Your package is lowered precisely at your designated delivery spot.",
  },
];

const faqs = homeFaqs;

export default function HomePage() {
  return (
    <>
      <JsonLd data={serviceSchema()} />
      <JsonLd data={faqSchema(faqs)} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-brand-50 via-white to-white"
        />
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -left-24 top-40 h-80 w-80 rounded-full bg-accent-200/40 blur-3xl"
        />
        <div className="container relative grid gap-12 py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-7">
            <span className="eyebrow animate-fade-up">
              <Plane className="h-3.5 w-3.5 -rotate-45" aria-hidden="true" />
              Now launching in New York City
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-ink animate-fade-up sm:text-5xl lg:text-6xl">
              Drone delivery,{" "}
              <span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">
                delivered in minutes
              </span>
              .
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 animate-fade-up">
              Doobie is bringing autonomous, zero-emission drone delivery to NYC.
              Food, pharmacy, retail and last-mile logistics — flown straight to
              your door, faster than anything on four wheels.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 animate-fade-up">
              <Link href="/get-started" className="btn-primary">
                Get Early Access
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/how-it-works" className="btn-secondary">
                How it works
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                <span>Built for NYC airspace</span>
              </div>
              <div className="hidden items-center gap-1.5 sm:flex">
                <ShieldCheck className="h-4 w-4 text-brand-600" aria-hidden="true" />
                <span>FAA-aligned operations</span>
              </div>
            </div>
          </div>

          {/* Hero visual card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm animate-fade-up">
              <div className="absolute inset-0 -rotate-3 rounded-3xl bg-gradient-to-br from-brand-500 to-accent-500 opacity-20 blur-xl" />
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-lift">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-700">
                    Live tracking
                  </span>
                  <Plane className="h-6 w-6 -rotate-45 text-brand-600 animate-float" aria-hidden="true" />
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-700">
                    <PackageCheck className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">Order #DRN-4821</p>
                    <p className="text-xs text-slate-500">Pharmacy · 2.1 mi away</p>
                  </div>
                </div>
                <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-brand-500 to-accent-500" />
                </div>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="font-medium text-brand-700">In flight</span>
                  <span className="text-slate-500">Arriving in ~6 min</span>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3 border-t border-slate-100 pt-5 text-center">
                  <div>
                    <p className="text-base font-bold text-ink">15m</p>
                    <p className="text-[11px] text-slate-500">avg time</p>
                  </div>
                  <div>
                    <p className="text-base font-bold text-ink">0g</p>
                    <p className="text-[11px] text-slate-500">CO₂</p>
                  </div>
                  <div>
                    <p className="text-base font-bold text-ink">99.4%</p>
                    <p className="text-[11px] text-slate-500">on-time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="container grid grid-cols-2 gap-6 py-12 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <s.icon className="mx-auto h-6 w-6 text-brand-600" aria-hidden="true" />
              <p className="mt-3 text-3xl font-bold tracking-tight text-ink">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Drone delivery visuals */}
      <section className="container py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          <DroneImage
            src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80"
            alt="Autonomous drone flying over New York City skyline delivering a package"
            className="h-80"
          />
          <DroneImage
            src="https://images.unsplash.com/photo-1506947411487-a567aa721a0a?w=800&q=80"
            alt="Drone delivery in urban environment with package being lowered"
            className="h-80"
          />
          <DroneImage
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
            alt="Modern delivery drone hovering above residential building rooftop"
            className="h-80"
          />
        </div>
        <p className="mt-4 text-center text-sm text-slate-500">
          Real drone delivery operations in dense urban environments — the future of last-mile logistics.
        </p>
      </section>

      {/* Value props */}
      <section className="container py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Why Doobie</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            The fastest, cleanest way to move things across the city
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We're reimagining last-mile delivery with autonomous drones — built
            for speed, safety, and a zero-emission future.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((v) => (
            <div key={v.title} className="card hover:-translate-y-1 hover:shadow-lift transition-all">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-700">
                <v.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works teaser */}
      <section className="bg-ink py-20 text-white">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-200">
              How it works
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              From order to doorstep, in four steps
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              No traffic. No detours. Just a direct line through the sky.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div
                key={s.n}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <span className="font-display text-3xl font-bold text-brand-300">
                  {s.n}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/how-it-works"
              className="btn bg-white text-ink hover:bg-brand-50 hover:-translate-y-0.5"
            >
              See the full process
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="container py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Use cases</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            One fleet, endless deliveries
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            From a hot meal to a prescription, our drones handle the everyday
            deliveries that keep a city moving.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((u) => (
            <Link
              key={u.title}
              href="/use-cases"
              className="group card hover:-translate-y-1 hover:shadow-lift transition-all"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent-50 text-accent-700">
                <u.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink">{u.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{u.body}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-700">
                Learn more
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Coverage teaser */}
      <section className="container pb-20">
        <div className="grid items-center gap-10 rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-brand-50/50 p-8 lg:grid-cols-2 lg:p-12">
          <div>
            <span className="eyebrow">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              Service areas
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Launching across New York City
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              We're rolling out coverage hub by hub, starting in Manhattan,
              Brooklyn, and Queens. As new launch sites come online, your
              neighborhood moves up the list.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {["Manhattan", "Brooklyn", "Queens", "The Bronx (soon)"].map((b) => (
                <li
                  key={b}
                  className="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-slate-700 ring-1 ring-inset ring-slate-200"
                >
                  {b}
                </li>
              ))}
            </ul>
            <Link href="/service-areas" className="btn-primary mt-8">
              Check coverage
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-ink">Get priority coverage</h3>
              <span className="rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-700">
                Early access
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-600">
              Join the waitlist and we'll notify you the moment drone delivery is
              live in your ZIP code — plus launch perks and partner pricing.
            </p>
            <div className="mt-5 space-y-3">
              {[
                "Priority when your zone goes live",
                "Discounted early-access delivery rates",
                "VIP access to new features",
              ].map((perk) => (
                <div key={perk} className="flex items-center gap-3 text-sm text-slate-700">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
                  {perk}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container pb-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Drone delivery, demystified
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Everything you want to know about how Doobie flies.
          </p>
        </div>
        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </section>

      <div className="mt-20">
        <CtaBand />
      </div>
    </>
  );
}
