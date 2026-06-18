/**
 * Blog post content. Stored as a typed array so it's type-safe, requires no
 * CMS, and is trivially indexable for sitemap + JSON-LD. Add new posts here.
 */

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  /** ISO date string. */
  date: string;
  updated?: string;
  author: string;
  category: string;
  readingTime: string;
  /** Rendered as paragraphs; supports simple subheadings via { heading }. */
  body: BlogBlock[];
}

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export const posts: BlogPost[] = [
  {
    slug: "how-fast-is-drone-delivery",
    title: "How Fast Is Drone Delivery, Really?",
    description:
      "Drone delivery promises minutes, not hours. Here's what actually determines delivery speed — and why flying beats driving for last-mile logistics.",
    date: "2026-05-20",
    updated: "2026-06-10",
    author: "Doobie Team",
    category: "How it works",
    readingTime: "5 min read",
    body: [
      {
        type: "p",
        text: "When most people picture delivery, they picture a car threading through traffic. Drone delivery throws that model out entirely. Instead of following roads, a drone flies a near-straight line from a launch hub to your door — which is why the average Doobie delivery lands in about 15 minutes.",
      },
      { type: "h2", text: "Why drones are faster than couriers" },
      {
        type: "p",
        text: "A delivery driver in a dense city like New York spends most of their time stopped — at red lights, in congestion, double-parking, and walking the last stretch to your door. A drone skips all of it. It launches, flies a pre-cleared route, and descends at your drop-off spot.",
      },
      {
        type: "ul",
        items: [
          "No traffic: drones fly above it, point to point.",
          "No parking: the package is lowered to your spot by tether.",
          "No detours: the route is optimized before launch.",
          "No handoff delays: the delivery is contactless and autonomous.",
        ],
      },
      { type: "h2", text: "What sets the actual time" },
      {
        type: "p",
        text: "Flight time depends mostly on distance. For a typical urban delivery radius of a few miles, the flight itself is just several minutes. The rest of the 15-minute window covers order packing, loading, and the final descent. As our network of launch hubs grows denser, those distances shrink — and times get even faster.",
      },
      {
        type: "p",
        text: "Weather and airspace rules can extend a delivery in rare cases, and when they do, we notify you with an updated ETA. The point is: when speed matters, the sky is simply a faster lane than the street.",
      },
    ],
  },
  {
    slug: "is-drone-delivery-safe",
    title: "Is Drone Delivery Safe? How Urban Drone Flights Stay Safe",
    description:
      "Flying drones over a city sounds risky, but the engineering behind it is built to fail safe. Here's how autonomous drone delivery keeps packages — and people — safe.",
    date: "2026-05-08",
    author: "Doobie Team",
    category: "Safety",
    readingTime: "6 min read",
    body: [
      {
        type: "p",
        text: "It's the first question everyone asks: is it safe to fly drones over a city full of people? The short answer is yes — but only because the aircraft, the software, and the operations are engineered to assume anything that can fail, will.",
      },
      { type: "h2", text: "Layered, redundant systems" },
      {
        type: "p",
        text: "Safety in autonomous flight comes from redundancy. A single failure should never end a flight unexpectedly. That means duplicated power, duplicated navigation, and backup systems that take over instantly if something goes wrong.",
      },
      {
        type: "ul",
        items: [
          "Dual batteries with automatic failover.",
          "Multiple independent navigation sources.",
          "Ballistic parachute recovery on every aircraft.",
          "Real-time detect-and-avoid sensing.",
        ],
      },
      { type: "h2", text: "Designed for the airspace" },
      {
        type: "p",
        text: "Flying in a place like New York means operating under strict FAA-aligned rules, including procedures for beyond-visual-line-of-sight (BVLOS) flight. Routes are planned to avoid restricted areas and minimize time over crowds, and every flight is monitored from the ground.",
      },
      {
        type: "p",
        text: "When conditions aren't right — severe weather, for instance — flights simply don't launch. Safety always wins over speed. That philosophy is what makes it possible to fly responsibly over a densely populated city at all.",
      },
    ],
  },
  {
    slug: "zero-emission-last-mile-delivery",
    title: "Why Drone Delivery Is the Greenest Last Mile",
    description:
      "Last-mile delivery is one of the dirtiest parts of logistics. Electric drones offer a genuinely zero-emission alternative — here's why that matters for cities.",
    date: "2026-04-22",
    author: "Doobie Team",
    category: "Sustainability",
    readingTime: "5 min read",
    body: [
      {
        type: "p",
        text: "Every van idling at a curb, circling for parking, or crawling through traffic is burning fuel to move a handful of packages. Last-mile delivery is notoriously inefficient — and as e-commerce grows, it's getting worse. Electric drones flip the economics of emissions on their head.",
      },
      { type: "h2", text: "A fraction of the carbon" },
      {
        type: "p",
        text: "Because a drone carries only the package (not a vehicle, a driver, and a tank of gas), the energy required per delivery is tiny by comparison. Pair that with an electric fleet and renewable-charged hubs, and you get a delivery that produces a fraction of the CO₂ of a gas-powered van — and zero tailpipe emissions.",
      },
      { type: "h2", text: "Less than just emissions" },
      {
        type: "p",
        text: "The benefits go beyond carbon. Every package moved by air is one fewer delivery vehicle contributing to traffic congestion, brake and tire pollution, and street noise. For a dense city, that quieter, cleaner street level is a quality-of-life win, not just an environmental one.",
      },
      {
        type: "p",
        text: "We believe the cleanest mile is the one flown, not driven. That's why every Doobie flight is electric — sustainability isn't a feature here, it's the foundation.",
      },
    ],
  },
  {
    slug: "what-can-be-delivered-by-drone",
    title: "What Can Be Delivered by Drone? More Than You'd Think",
    description:
      "From hot food to prescriptions to last-mile B2B logistics, drone delivery covers a surprisingly wide range of everyday packages. Here's what flies.",
    date: "2026-04-05",
    author: "Doobie Team",
    category: "Use cases",
    readingTime: "4 min read",
    body: [
      {
        type: "p",
        text: "People often assume drone delivery is a niche novelty — a burrito here, a phone charger there. In reality, autonomous drones can handle a huge share of the everyday packages a city moves every day.",
      },
      { type: "h2", text: "Food and groceries" },
      {
        type: "p",
        text: "Hot meals and fresh groceries are a natural fit. Drones get food from kitchen to door fast enough that it's still hot, and insulated payloads handle temperature-sensitive items.",
      },
      { type: "h2", text: "Pharmacy and medical" },
      {
        type: "p",
        text: "Prescriptions, over-the-counter medicine, and time-critical medical supplies between clinics and labs are ideal for drone delivery — predictable, fast, and contactless.",
      },
      { type: "h2", text: "Retail and e-commerce" },
      {
        type: "p",
        text: "Local retailers can offer same-hour fulfillment, turning 'delivery tomorrow' into 'delivery today.' Returns fly back just as fast, closing the loop on the customer experience.",
      },
      { type: "h2", text: "Last-mile B2B logistics" },
      {
        type: "p",
        text: "Behind the scenes, drones move inventory between warehouses, micro-fulfillment centers, and stores — replacing slow, costly van runs with autonomous flights that run around the clock.",
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

/** Sorted newest-first for listings. */
export function allPosts(): BlogPost[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}
