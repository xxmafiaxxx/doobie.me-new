import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { PageHeader, CtaBand } from "@/components/layout";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { allPosts } from "@/lib/posts";
import { absUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Drone Delivery Blog — Insights from Doobie",
  description:
    "The Doobie blog covers how drone delivery works, safety, speed, sustainability, use cases, and the future of autonomous last-mile logistics in New York City.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Drone Delivery Blog — Insights from Doobie",
    description:
      "How drone delivery works, safety, speed, sustainability, and the future of last-mile logistics.",
    url: "/blog",
  },
};

// Stable list for sitemap + static rendering.
export const dynamic = "force-static";

export default function BlogIndex() {
  const posts = allPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Doobie Drone Deliveries Blog",
          url: absUrl("/blog"),
          blogPost: posts.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            url: absUrl(`/blog/${p.slug}`),
            datePublished: p.date,
            dateModified: p.updated ?? p.date,
            author: { "@type": "Organization", name: p.author },
          })),
        }}
      />

      <section className="border-b border-slate-200 bg-gradient-to-b from-brand-50/60 to-white py-16 lg:py-20">
        <div className="container">
          <PageHeader
            eyebrow="Blog"
            title="The Doobie blog"
            description="How drone delivery works, the tech behind it, and what the future of fast, zero-emission last-mile logistics looks like."
          />
        </div>
      </section>

      <section className="container py-20">
        {/* Featured post */}
        {featured && (
          <Link
            href={`/blog/${featured.slug}`}
            className="group mb-12 grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft transition-all hover:shadow-lift md:grid-cols-2"
          >
            <div className="flex flex-col justify-center gap-4 p-8 sm:p-10">
              <div className="flex items-center gap-3 text-xs">
                <span className="rounded-full bg-brand-50 px-3 py-1 font-semibold text-brand-700">
                  Featured
                </span>
                <span className="text-slate-500">{featured.category}</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                {featured.title}
              </h2>
              <p className="leading-relaxed text-slate-600">{featured.description}</p>
              <div className="flex items-center gap-4 text-sm text-slate-500">
                <span>{formatDate(featured.date)}</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  {featured.readingTime}
                </span>
              </div>
              <span className="inline-flex items-center gap-1 font-medium text-brand-700">
                Read article
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </div>
            <div className="relative min-h-[200px] bg-gradient-to-br from-brand-600 via-brand-500 to-accent-500 p-8">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                  backgroundSize: "26px 26px",
                }}
              />
            </div>
          </Link>
        )}

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="inline-flex w-fit rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                {post.category}
              </span>
              <h3 className="mt-4 text-lg font-semibold leading-snug text-ink">
                {post.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                {post.description}
              </p>
              <div className="mt-5 flex items-center justify-between text-xs text-slate-500">
                <span>{formatDate(post.date)}</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  {post.readingTime}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="mt-4">
        <CtaBand />
      </div>
    </>
  );
}

function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
