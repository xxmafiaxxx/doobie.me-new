import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CtaBandProps {
  title?: string;
  body?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

/**
 * Reusable call-to-action band placed near the bottom of most pages to keep
 * every route funneling toward /get-started.
 */
export default function CtaBand({
  title = "Be first in line when Doobie takes off",
  body = "Join the early-access waitlist for launch perks, partner pricing, and priority coverage in your NYC neighborhood.",
  primaryHref = "/get-started",
  primaryLabel = "Get Early Access",
  secondaryHref = "/contact",
  secondaryLabel = "Talk to us",
}: CtaBandProps) {
  return (
    <section className="container">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-accent-600 px-6 py-14 text-center shadow-lift sm:px-12">
        {/* decorative grid */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-bold text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-brand-50/90">
            {body}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={primaryHref}
              className="btn bg-white text-brand-700 hover:bg-brand-50 hover:-translate-y-0.5"
            >
              {primaryLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            {secondaryHref && secondaryLabel && (
              <Link
                href={secondaryHref}
                className="btn bg-brand-800/40 text-white ring-1 ring-inset ring-white/30 hover:bg-brand-800/60"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
