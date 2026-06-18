import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import Analytics from "@/components/seo/Analytics";
import { site, absUrl } from "@/lib/site";
import {
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
} from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "drone delivery",
    "drone delivery NYC",
    "drone delivery service",
    "drone delivery company",
    "drone delivery near me",
    "autonomous delivery",
    "fastest drone delivery",
    "zero emission delivery",
    "last mile logistics",
    "drone delivery Brooklyn",
    "drone delivery Manhattan",
    "BVLOS delivery",
  ],
  authors: [{ name: site.legalName, url: absUrl("/") }],
  creator: site.legalName,
  publisher: site.legalName,
  category: "Logistics",
  alternates: {
    canonical: absUrl("/"),
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: absUrl("/"),
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    // openGraph image is auto-detected from app/opengraph-image.tsx.
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    creator: "@doobiedrone",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo-mark.png", type: "image/png", sizes: "any" },
    ],
    apple: [{ url: "/logo-mark.png" }],
  },
  manifest: "/manifest.webmanifest",
  verification: {
    // Facebook domain verification meta (Domain Verification token).
    other: { "facebook-domain-verification": site.facebookVerification },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1220" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        {/* Site-wide structured data: Organization, LocalBusiness, WebSite. */}
        <JsonLd data={organizationSchema()} />
        <JsonLd data={localBusinessSchema()} />
        <JsonLd data={websiteSchema()} />
      </head>
      <body className="min-h-dvh bg-white">
        <Analytics />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
