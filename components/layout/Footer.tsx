import Link from "next/link";
import { Plane, Mail, Phone, MapPin, Twitter, Linkedin, Instagram } from "lucide-react";
import { site, footerNav } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-slate-200 bg-slate-50">
      <div className="container py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand + contact */}
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-2.5" aria-label="Doobie Drone Deliveries — home">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-600 text-white">
                <Plane className="h-5 w-5 -rotate-45" aria-hidden="true" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-base font-bold tracking-tight text-ink">
                  Doobie
                </span>
                <span className="text-[11px] font-medium uppercase tracking-wider text-brand-600">
                  Drone Deliveries
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600">
              Autonomous, zero-emission drone delivery for New York City. Food,
              pharmacy, retail and last-mile logistics — delivered in minutes.
            </p>

            <ul className="mt-6 space-y-2.5 text-sm">
              <li className="flex items-start gap-3 text-slate-600">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.region} {site.address.postalCode}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${site.phone}`}
                  className="flex items-center gap-3 text-slate-600 hover:text-brand-700"
                >
                  <Phone className="h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 text-slate-600 hover:text-brand-700"
                >
                  <Mail className="h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {footerNav.map((col) => (
              <div key={col.heading}>
                <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {col.heading}
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {col.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-slate-600 transition-colors hover:text-brand-700"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Social + legal */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {year} {site.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <SocialLink href={site.social.twitter} label="Twitter / X">
              <Twitter className="h-4 w-4" aria-hidden="true" />
            </SocialLink>
            <SocialLink href={site.social.linkedin} label="LinkedIn">
              <Linkedin className="h-4 w-4" aria-hidden="true" />
            </SocialLink>
            <SocialLink href={site.social.instagram} label="Instagram">
              <Instagram className="h-4 w-4" aria-hidden="true" />
            </SocialLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-full text-slate-500 ring-1 ring-inset ring-slate-200 transition-colors hover:bg-brand-600 hover:text-white hover:ring-brand-600"
    >
      {children}
    </a>
  );
}
