import { PageHeader } from "@/components/layout";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";

/** Shared legal-page shell with heading, updated date, and prose styling. */
export default function LegalLayout({
  title,
  description,
  slug,
  updated,
  children,
}: {
  title: string;
  description: string;
  slug: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: title, href: `/${slug}` },
        ])}
      />
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white py-14">
        <div className="container max-w-3xl">
          <PageHeader align="left" title={title} description={description} />
          <p className="mt-6 text-sm text-slate-500">Last updated: {updated}</p>
        </div>
      </section>
      <section className="container max-w-3xl py-14">
        <div className="legal prose-content space-y-10">{children}</div>
        <p className="mt-12 border-t border-slate-200 pt-6 text-sm text-slate-500">
          Questions about this policy? Email{" "}
          <a href={`mailto:${site.email}`} className="font-medium text-brand-700 hover:underline">
            {site.email}
          </a>
          .
        </p>
      </section>
    </>
  );
}

/** Reusable section with heading + paragraphs. */
export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-ink">{heading}</h2>
      <div className="mt-3 space-y-3 text-slate-600">{children}</div>
    </div>
  );
}
