import type { Metadata } from "next";
import Link from "next/link";
import { HelpCircle, ArrowRight } from "lucide-react";
import { PageHeader, Faq, CtaBand } from "@/components/layout";
import JsonLd from "@/components/seo/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { allFaqs } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "Drone Delivery FAQ — Speed, Safety, Cost & More",
  description:
    "Answers to common drone delivery questions: how fast is it, is it safe, how much it costs, what can be delivered, and how it works in NYC. Everything you need to know about Doobie drone delivery.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Drone Delivery FAQ — Speed, Safety, Cost & More",
    description:
      "How fast, how safe, how much, and what can be delivered — all your drone delivery questions answered.",
    url: "/faq",
  },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(allFaqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "FAQ", href: "/faq" },
        ])}
      />

      <section className="border-b border-slate-200 bg-gradient-to-b from-brand-50/60 to-white py-16 lg:py-20">
        <div className="container">
          <PageHeader
            eyebrow={
              <>
                <HelpCircle className="h-3.5 w-3.5" aria-hidden="true" />
                FAQ
              </>
            }
            title="Drone delivery, answered"
            description="Everything you want to know about how Doobie flies — speed, safety, cost, coverage, and more."
          />
        </div>
      </section>

      <section className="container py-20">
        <Faq items={allFaqs} />

        <div className="mx-auto mt-14 max-w-2xl rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center">
          <h2 className="text-xl font-semibold text-ink">Still have questions?</h2>
          <p className="mt-2 text-sm text-slate-600">
            We're happy to help. Reach out and we'll get back to you within a business day.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Link href="/get-started" className="btn-primary">
              Join the waitlist
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact us
            </Link>
          </div>
        </div>
      </section>

      <div className="mt-4">
        <CtaBand />
      </div>
    </>
  );
}
