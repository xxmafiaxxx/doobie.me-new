import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";
import PostBody from "@/components/blog/PostBody";
import { CtaBand } from "@/components/layout";
import JsonLd from "@/components/seo/JsonLd";
import { blogPostingSchema, breadcrumbSchema } from "@/lib/schema";
import { posts, getPost, allPosts } from "@/lib/posts";
import { absUrl } from "@/lib/site";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    authors: [{ name: post.author, url: absUrl("/") }],
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [post.author],
      tags: [post.category],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  // Related: same category, exclude self, take 2.
  const related = allPosts()
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  return (
    <>
      <JsonLd
        data={blogPostingSchema({
          slug: post.slug,
          title: post.title,
          description: post.description,
          datePublished: post.date,
          dateModified: post.updated,
          author: post.author,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title, href: `/blog/${post.slug}` },
        ])}
      />

      <article className="border-b border-slate-200 bg-gradient-to-b from-brand-50/50 to-white">
        <div className="container max-w-3xl py-16 lg:py-20">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 hover:text-brand-800"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All articles
          </Link>

          <div className="mt-6 flex items-center gap-3 text-xs">
            <span className="rounded-full bg-brand-50 px-3 py-1 font-semibold text-brand-700">
              {post.category}
            </span>
          </div>

          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            {post.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500">
            <span className="font-medium text-ink">{post.author}</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {post.readingTime}
            </span>
          </div>
        </div>
      </article>

      <section className="container max-w-3xl py-16">
        <PostBody blocks={post.body} />
      </section>

      {related.length > 0 && (
        <section className="border-t border-slate-200 bg-slate-50 py-16">
          <div className="container max-w-4xl">
            <h2 className="text-2xl font-bold tracking-tight text-ink">Related reading</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
                >
                  <span className="text-xs font-semibold text-brand-700">{p.category}</span>
                  <h3 className="mt-2 text-lg font-semibold leading-snug text-ink">{p.title}</h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-700">
                    Read
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="mt-16">
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
