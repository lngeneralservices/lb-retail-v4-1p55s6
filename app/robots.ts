import type { MetadataRoute } from "next";
import { siteData } from "@/lib/site-data";

// Required for Next.js `output: 'export'` (static export) compatibility.
export const dynamic = "force-static";
export const revalidate = false;

export default function robots(): MetadataRoute.Robots {
  const base = siteData.seo.siteUrl.replace(/\/$/, "");
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: base + "/sitemap.xml",
    host: base,
  };
}
