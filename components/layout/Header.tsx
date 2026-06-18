"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Plane } from "lucide-react";
import { mainNav } from "@/lib/site";
import clsx from "clsx";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close the mobile menu on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll when the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Add a subtle shadow once the user scrolls.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 w-full border-b transition-colors duration-200",
        scrolled || open
          ? "border-slate-200 bg-white/90 backdrop-blur"
          : "border-transparent bg-white/70 backdrop-blur"
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Doobie Drone Deliveries — home">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-600 text-white shadow-lift">
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

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                isActive(item.href)
                  ? "bg-brand-50 text-brand-700"
                  : "text-slate-600 hover:bg-slate-50 hover:text-ink"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link href="/back-us" className="btn-ghost text-brand-700">
            Back Us
          </Link>
          <Link href="/get-started" className="btn-primary">
            Get Early Access
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink hover:bg-slate-100 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={clsx(
          "lg:hidden",
          open ? "block" : "hidden"
        )}
      >
        <nav
          aria-label="Mobile"
          className="container flex flex-col gap-1 border-t border-slate-200 py-4"
        >
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "rounded-lg px-3 py-2.5 text-base font-medium",
                isActive(item.href)
                  ? "bg-brand-50 text-brand-700"
                  : "text-slate-700 hover:bg-slate-50"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="rounded-lg px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-50">
            Contact
          </Link>
          <Link href="/back-us" className="btn-ghost mt-2 w-full justify-center text-brand-700">
            Back Us
          </Link>
          <Link href="/get-started" className="btn-primary w-full">
            Get Early Access
          </Link>
        </nav>
      </div>
    </header>
  );
}
