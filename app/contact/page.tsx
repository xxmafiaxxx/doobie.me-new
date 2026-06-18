import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { PageHeader } from "@/components/layout";
import ContactForm from "@/components/forms/ContactForm";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";

// ContactPoint map is static; keep client-only to satisfy Leaflet.
const ServiceAreaMap = dynamic(() => import("@/components/map/ServiceAreaMap"), {
  ssr: false,
  loading: () => (
    <div className="grid h-[320px] w-full place-items-center rounded-2xl bg-slate-100 text-sm text-slate-500">
      Loading map…
    </div>
  ),
});

export const metadata: Metadata = {
  title: "Contact Doobie Drone Deliveries",
  description:
    "Get in touch with Doobie Drone Deliveries — questions about drone delivery, business partnerships, investing, or press. Reach our NYC team by email or phone.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Doobie Drone Deliveries",
    description: "Questions, partnerships, investing or press — reach our NYC team.",
    url: "/contact",
  },
};

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: site.phoneDisplay,
    href: `tel:${site.phone}`,
  },
  {
    icon: MapPin,
    label: "Address",
    value: `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "9:00 AM – 12:00 AM, Mon–Sun",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ])}
      />

      <section className="border-b border-slate-200 bg-gradient-to-b from-brand-50/60 to-white py-16 lg:py-20">
        <div className="container">
          <PageHeader
            eyebrow="Contact"
            title="Let's talk drones"
            description="Questions about drone delivery, a business partnership, investing, or press? We'd love to hear from you."
          />
        </div>
      </section>

      <section className="container py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Channels */}
          <div>
            <h2 className="text-xl font-semibold text-ink">Reach us directly</h2>
            <ul className="mt-6 space-y-4">
              {channels.map((c) => (
                <li key={c.label} className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
                    <c.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {c.label}
                    </p>
                    {c.href ? (
                      <a href={c.href} className="font-medium text-ink hover:text-brand-700">
                        {c.value}
                      </a>
                    ) : (
                      <p className="font-medium text-ink">{c.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
              <ServiceAreaMap />
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-soft sm:p-9">
            <h2 className="text-xl font-semibold text-ink">Send us a message</h2>
            <p className="mt-1.5 text-sm text-slate-500">
              We typically reply within one business day.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
