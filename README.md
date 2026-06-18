# Doobie Drone Deliveries

Marketing & lead-gen site for **Doobie Drone Deliveries** — an autonomous,
zero-emission drone delivery startup launching in New York City.

Built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**,
with SEO as a first-class concern.

## Stack

- **Next.js 14** App Router — file-based routing, Metadata API, Route Handlers
- **TypeScript** — strict mode
- **Tailwind CSS** — custom brand palette + design tokens
- **react-leaflet** — interactive service-area map
- **lucide-react** — icons
- **GTM** (`GTM-TP87XKZ`) — analytics, production-only

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Homepage — hero, value props, how-it-works, use cases, coverage, FAQ |
| `/how-it-works` | Order → pack → fly → drop-off, plus safety architecture |
| `/use-cases` | Food, pharmacy, medical, retail, B2B logistics |
| `/service-areas` | NYC coverage + interactive map |
| `/pricing` | Per-delivery, early-access, and business tiers |
| `/get-started` | **Early-access waitlist** (lead-gen core) |
| `/about` | Mission, values, community/crowdfunding story |
| `/faq` | Full FAQ (rich-result eligible) |
| `/blog` + `/blog/[slug]` | SEO content hub |
| `/contact` | Contact form + channels + map |
| `/privacy`, `/terms` | Legal |

## SEO features

- **Metadata API** on every route (unique title, description, canonical, OG/Twitter)
- **Dynamic sitemap** (`/sitemap.xml`) and **robots.txt** (`/robots.ts`)
- **JSON-LD structured data**: Organization, LocalBusiness, WebSite, Service,
  FAQPage, BreadcrumbList, BlogPosting, Blog
- **Dynamic OG image** via `app/opengraph-image.tsx` (no static asset to maintain)
- **Web manifest** for installable PWA
- Semantic HTML, single `<h1>` per page, descriptive alt text, accessible forms

## Lead-gen

Waitlist and contact forms POST to `/api/waitlist` and `/api/contact`, which
validate input and append leads to `.leads/leads.jsonl`. To forward leads
elsewhere, set `LEADS_WEBHOOK_URL` (see `.env.example`).

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Project structure

```
app/                 # App Router routes, layout, sitemap, robots, manifest, OG image
components/          # layout, seo, forms, map, blog components
lib/                 # site config, schema builders, posts, faqs, leads
public/              # logo, favicon
_archive/            # legacy Pages-Router site (gitignored, kept for reference)
```
