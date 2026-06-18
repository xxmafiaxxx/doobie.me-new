import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Download, Share2, Twitter, ArrowRight, ShieldCheck } from "lucide-react";
import { stripe } from "@/lib/stripe";
import { getTier, formatUSD } from "@/lib/crowdfund";
import { site, absUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thank You for Backing Doobie",
  description: "You're officially a Founding Backer of Doobie Drone Deliveries. Download your certificate and share the news.",
  robots: { index: false, follow: true }, // conversion page, keep out of index
};

// Pull the Stripe session to personalize the thank-you. Falls back to query
// params when Stripe isn't configured (e.g. local dev).
async function getSessionInfo(searchParams: { [k: string]: string | string[] | undefined }) {
  const sessionId = typeof searchParams.session_id === "string" ? searchParams.session_id : "";
  const tierId = typeof searchParams.tier === "string" ? searchParams.tier : "ground_supporter";
  const tier = getTier(tierId);

  if (!sessionId) {
    return { name: "Founding Backer", tier, email: null };
  }

  try {
    const session = await stripe().checkout.sessions.retrieve(sessionId);
    return {
      name: session.customer_details?.name || "Founding Backer",
      tier,
      email: session.customer_details?.email ?? null,
    };
  } catch {
    return { name: "Founding Backer", tier, email: null };
  }
}

export default async function ThanksPage({
  searchParams,
}: {
  searchParams: { [k: string]: string | string[] | undefined };
}) {
  const { name, tier } = await getSessionInfo(searchParams);
  const certSrc = `/back-us/thanks/certificate.png?session_id=${
    typeof searchParams.session_id === "string" ? searchParams.session_id : ""
  }&tier=${tier?.id ?? "ground_supporter"}`;

  const tweetText = encodeURIComponent(
    `I'm officially a Founding Backer of @doobiedrone — bringing fast, zero-emission drone delivery to NYC. Back the mission: ${absUrl("/back-us")}`
  );

  return (
    <section className="container max-w-4xl py-16 lg:py-20">
      <div className="text-center">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-accent-100 text-accent-700">
          <CheckCircle2 className="h-9 w-9" aria-hidden="true" />
        </span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          Welcome aboard, {name.split(" ")[0]}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">
          You're officially a <strong>{tier?.name}</strong> of Doobie Drone
          Deliveries. Thank you for backing a homegrown Brooklyn company building
          the future of urban delivery.
        </p>
      </div>

      {/* Certificate */}
      <div className="mt-12">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lift">
          <img
            src={certSrc}
            alt={`Doobie Drone Deliveries Founding Backer Certificate for ${name}`}
            className="block w-full"
            width={1600}
            height={1131}
          />
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <a href={certSrc} download="doobie-founding-backer.png" className="btn-primary">
            <Download className="h-4 w-4" aria-hidden="true" />
            Download certificate
          </a>
          <a
            href={`https://twitter.com/intent/tweet?text=${tweetText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <Twitter className="h-4 w-4" aria-hidden="true" />
            Share on X
          </a>
          <button
            type="button"
            onClick={() => navigator.share?.({ title: "I backed Doobie", url: absUrl("/back-us") }).catch(() => {})}
            className="btn-ghost"
          >
            <Share2 className="h-4 w-4" aria-hidden="true" />
            Share
          </button>
        </div>
      </div>

      {/* What's next */}
      <div className="mt-14 grid gap-6 sm:grid-cols-3">
        {[
          { title: "Watch your inbox", body: "We'll email launch updates and your backer perks as Doobie takes off." },
          { title: "Priority coverage", body: "Your backing locks in priority when drone delivery reaches your NYC neighborhood." },
          { title: "Founder community", body: "You're part of the founding group shaping how Doobie launches across the city." },
        ].map((s) => (
          <div key={s.title} className="card">
            <h2 className="text-base font-semibold text-ink">{s.title}</h2>
            <p className="mt-1.5 text-sm text-slate-600">{s.body}</p>
          </div>
        ))}
      </div>

      {/* About the certificate / legal clarity */}
      <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="flex items-center gap-2 text-base font-semibold text-ink">
          <ShieldCheck className="h-5 w-5 text-brand-600" aria-hidden="true" />
          About your certificate
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          Your Founding Backer certificate is a personalized, commemorative record
          of your support — styled to celebrate your role in launching Doobie. It
          is a symbolic reward, <strong>not</strong> a security: it confers no
          equity, shares, dividends, or ownership in the company.
          {tier && tier.amount > 0
            ? ` Your ${tier.name} reward tier (${formatUSD(tier.amount)}) includes the perks listed on the campaign page.`
            : ""}
        </p>
        <p className="mt-4 text-sm text-slate-600">
          Questions? Email{" "}
          <a href={`mailto:${site.email}`} className="font-medium text-brand-700 hover:underline">
            {site.email}
          </a>
          .
        </p>
      </div>

      <div className="mt-10 text-center">
        <Link href="/" className="btn-ghost">
          Back to home
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
