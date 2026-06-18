import type { MetadataRoute } from "next";
import { absUrl } from "@/lib/site";

/**
 * Dynamic robots.txt — points to the correct sitemap (the old static file
 * referenced the right domain, but we now generate it here to stay in sync).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: absUrl("/sitemap.xml"),
    host: absUrl("/"),
  };
}
