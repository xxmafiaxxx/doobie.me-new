import type { FaqItem } from "@/components/layout/Faq";

/** Full FAQ set — used on /faq and subset on homepage. */
export const allFaqs: FaqItem[] = [
  {
    question: "How fast is drone delivery?",
    answer:
      "Doobie deliveries average about 15 minutes from launch to landing. Because drones fly directly over traffic rather than through it, most orders arrive far faster than a car or bike courier could manage.",
  },
  {
    question: "Is drone delivery safe?",
    answer:
      "Yes. Our autonomous drones use redundant flight systems, parachute recovery, and obstacle-aware routing. We operate under FAA rules with beyond-visual-line-of-sight (BVLOS) procedures designed for dense urban environments like New York City.",
  },
  {
    question: "Where does Doobie deliver?",
    answer:
      "We're launching across New York City, with initial coverage in Manhattan, Brooklyn, and Queens. Service areas expand as new hubs come online — join the waitlist to get priority coverage in your neighborhood.",
  },
  {
    question: "How much does drone delivery cost?",
    answer:
      "Pricing varies by zone and partner, but drone delivery is designed to be cost-competitive with — and often cheaper than — traditional couriers, since there's no driver and no fuel cost. Early-access members get discounted delivery rates. See our pricing page for details.",
  },
  {
    question: "What can be delivered by drone?",
    answer:
      "Food and groceries, pharmacy and medical supplies, retail and e-commerce orders, and last-mile business logistics. Each drone carries a payload suited to everyday packages, with strict safety and packaging standards.",
  },
  {
    question: "When is Doobie launching?",
    answer:
      "We're preparing for launch in New York City. Joining the early-access waitlist gets you launch perks, partner pricing, and priority as coverage rolls out to your area.",
  },
  {
    question: "How does the drone deliver to an apartment building?",
    answer:
      "Deliveries go to a designated, safe drop-off spot — a yard, rooftop, or approved building zone — and the package is lowered by tether for a contactless handoff. For multi-unit buildings, we work with property partners to enable rooftop or designated-zone drop-offs.",
  },
  {
    question: "Is drone delivery really better for the environment?",
    answer:
      "For typical last-mile packages, yes. Electric drones produce a fraction of the CO₂ of a gas-powered delivery van per package, and they take traffic and noise off the streets. It's one of the cleanest ways to move everyday goods across a city.",
  },
  {
    question: "Can my business partner with Doobie?",
    answer:
      "Absolutely. We work with restaurants, grocers, pharmacies, retailers, and logistics teams to add autonomous delivery to their operations. Reach out through our contact page for partner and volume pricing.",
  },
  {
    question: "Do you use surge pricing?",
    answer:
      "No. Doobie doesn't use surge pricing. Because there's no driver and no fuel cost, our base rates stay stable even at peak times.",
  },
  {
    question: "What happens if the drone can't complete a delivery?",
    answer:
      "If weather, airspace, or safety conditions prevent a flight, the order is held and the customer is notified with an updated ETA. In rare cases where a drone can't complete a delivery, we have backup procedures to ensure the package still arrives.",
  },
  {
    question: "Can I invest in Doobie?",
    answer:
      "We're community-backed and building with early supporters. If you're interested in investing or partnering at a deeper level, email us at hello@doobie.me and we'll share what's available.",
  },
];

/** Homepage subset — a curated 6. */
export const homeFaqs: FaqItem[] = allFaqs.slice(0, 6);
