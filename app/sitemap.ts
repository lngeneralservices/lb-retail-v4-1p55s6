import type { MetadataRoute } from "next";
import { siteData } from "@/lib/site-data";

// Required for Next.js `output: 'export'` (static export) compatibility.
export const dynamic = "force-static";
export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteData.seo.siteUrl.replace(/\/$/, "");
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base + "/", lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: base + "/about", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: base + "/contact", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: base + "/services", lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: base + "/privacy-policy", lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  if (siteData.areas.length > 0) {
    staticRoutes.push({ url: base + "/areas", lastModified: now, changeFrequency: "monthly", priority: 0.6 });
  }

  const serviceRoutes: MetadataRoute.Sitemap = siteData.services.map((s) => ({
    url: base + "/services/" + s.slug,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const areaRoutes: MetadataRoute.Sitemap = siteData.areas.map((a) => ({
    url: base + "/areas/" + a.slug,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...areaRoutes];
}
