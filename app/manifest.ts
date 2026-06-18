import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/** Served at /manifest.webmanifest — referenced from layout metadata. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2576eb",
    icons: [
      { src: "/logo-mark.png", sizes: "any", type: "image/png", purpose: "any" },
      { src: "/logo-mark.png", sizes: "any", type: "image/png", purpose: "maskable" },
    ],
    categories: ["business", "shopping", "navigation"],
  };
}
