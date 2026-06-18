import type { MetadataRoute } from "next";
import { allPosts } from "@/lib/posts";
import { absUrl } from "@/lib/site";

/**
 * Dynamic sitemap. Includes all static marketing routes plus every blog post,
 * each with lastmod and priority. Served at /sitemap.xml.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absUrl("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: absUrl("/how-it-works"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: absUrl("/use-cases"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: absUrl("/service-areas"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: absUrl("/pricing"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: absUrl("/get-started"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: absUrl("/faq"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: absUrl("/about"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: absUrl("/blog"), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: absUrl("/contact"), lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: absUrl("/privacy"), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: absUrl("/terms"), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const postRoutes: MetadataRoute.Sitemap = allPosts().map((p) => ({
    url: absUrl(`/blog/${p.slug}`),
    lastModified: new Date((p.updated ?? p.date) + "T00:00:00"),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes];
}
