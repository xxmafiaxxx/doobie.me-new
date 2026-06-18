/**
 * Structured-data (schema.org) builders. Centralized so every page emits
 * consistent JSON-LD for rich results. All values derive from `lib/site.ts`.
 */
import { site, absUrl } from "./site";
import type { NavItem } from "./site";

const sameAs = Object.values(site.social);

/** Organization + LocalBusiness — emitted once site-wide in the root layout. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "Corporation"],
    "@id": `${absUrl("/")}#organization`,
    name: site.legalName,
    alternateName: site.shortName,
    url: absUrl("/"),
    logo: absUrl("/logo.png"),
    image: absUrl("/logo.png"),
    email: site.email,
    telephone: site.phone,
    description: site.description,
    foundingDate: "2023",
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.city,
        addressRegion: site.address.region,
        postalCode: site.address.postalCode,
        addressCountry: site.address.country,
      },
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: site.phone,
      email: site.email,
      contactOption: "TollFree",
      areaServed: "US",
      availableLanguage: ["English"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    sameAs,
  };
}

/** LocalBusiness with geo + opening hours — powers local/map rich results. */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${absUrl("/")}#localbusiness`,
    name: site.legalName,
    image: absUrl("/logo.png"),
    url: absUrl("/"),
    telephone: site.phone,
    email: site.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "00:00",
    },
    areaServed: [
      { "@type": "City", name: "New York" },
      { "@type": "AdministrativeArea", name: "Manhattan" },
      { "@type": "AdministrativeArea", name: "Brooklyn" },
      { "@type": "AdministrativeArea", name: "Queens" },
    ],
    sameAs,
  };
}

/** WebSite + SearchAction — enables sitelinks search box eligibility. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${absUrl("/")}#website`,
    url: absUrl("/"),
    name: site.name,
    description: site.description,
    publisher: { "@id": `${absUrl("/")}#organization` },
    inLanguage: "en-US",
  };
}

/** Service — describes the drone delivery offering. */
export function serviceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Drone Delivery",
    provider: { "@id": `${absUrl("/")}#organization` },
    areaServed: {
      "@type": "City",
      name: "New York",
    },
    description:
      "Autonomous, zero-emission drone delivery for food, pharmacy, retail and last-mile logistics across New York City — delivered in minutes.",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "0",
      description: "Delivery fees vary by zone and partner. Early-access perks available.",
      availability: "https://schema.org/PreOrder",
    },
  };
}

/** FAQPage — eligible for FAQ rich results. Pass question/answer pairs. */
export function faqSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

/** BreadcrumbList — for interior pages. Pass the trail from home. */
export function breadcrumbSchema(trail: NavItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: absUrl(item.href),
    })),
  };
}

/** BlogPosting — for individual blog posts. */
export function blogPostingSchema(args: {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: args.title,
    description: args.description,
    image: args.image ? absUrl(args.image) : absUrl("/logo.png"),
    datePublished: args.datePublished,
    dateModified: args.dateModified ?? args.datePublished,
    author: {
      "@type": "Organization",
      name: args.author ?? site.legalName,
    },
    publisher: { "@id": `${absUrl("/")}#organization` },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absUrl(`/blog/${args.slug}`),
    },
  };
}
