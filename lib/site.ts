/**
 * Central site configuration — single source of truth for brand, contact,
 * navigation and SEO constants. Imported by layout metadata, JSON-LD,
 * Header, Footer, sitemap and robots.
 */

export const site = {
  name: "Doobie Drone Deliveries",
  shortName: "Doobie",
  legalName: "Doobie Drone Deliveries",
  tagline: "Fast, autonomous, zero-emission drone delivery",
  description:
    "Doobie Drone Deliveries brings autonomous, zero-emission drone delivery to New York City — fresh food, pharmacy, retail and last-mile logistics delivered in minutes, not hours.",
  // Canonical production origin. Used for absolute URLs in metadata + sitemap.
  url: "https://doobie.me",
  locale: "en_US",
  email: "hello@doobie.me",
  phone: "+19294873802",
  phoneDisplay: "(929) 487-3802",
  address: {
    street: "18 East 48th Street",
    city: "New York",
    region: "NY",
    postalCode: "10017",
    country: "US",
  },
  // NYC coordinates (Midtown) — used by LocalBusiness geo + service-area map.
  geo: { lat: 40.7534, lng: -73.9765 },
  hours: "Mo-Su 09:00-00:00",
  // Tracking — kept from the original site (verified to belong to the brand).
  gtmId: "GTM-TP87XKZ",
  facebookVerification: "o40376jeco0o7i1q7o8x0d04xf49if",
  social: {
    twitter: "https://twitter.com/doobiedrone",
    linkedin: "https://www.linkedin.com/company/doobie-drone-deliveries",
    instagram: "https://instagram.com/doobiedrone",
  },
} as const;

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Dashboard", href: "/dashboard" },
];

/** High-value conversion entry points surfaced as CTA buttons. */
export const ctaNav: NavItem[] = [
  { label: "Back Us", href: "/back-us" },
  { label: "Get Early Access", href: "/get-started" },
];

export const footerNav: { heading: string; items: NavItem[] }[] = [
  {
    heading: "Service",
    items: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "Use Cases", href: "/use-cases" },
      { label: "Service Areas", href: "/service-areas" },
      { label: "Pricing", href: "/pricing" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    heading: "Company",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Back Us", href: "/back-us" },
      { label: "Blog", href: "/blog" },
      { label: "Get Early Access", href: "/get-started" },
      { label: "Contact", href: "/contact" },
      { label: "Backer Dashboard", href: "/dashboard" },
    ],
  },
  {
    heading: "Legal",
    items: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

/** Build an absolute URL from a site-relative path. */
export function absUrl(path = "/"): string {
  const base = site.url.replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}
