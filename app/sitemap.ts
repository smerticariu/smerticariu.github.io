import type { MetadataRoute } from "next";
import { site, featurePages } from "@/lib/site";
import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const staticRoutes = [
    "",
    "/why",
    "/features",
    "/use-cases",
    "/pricing",
    "/faq",
    "/download",
    "/blog",
    "/changelog",
    "/press",
    "/privacy",
    "/terms",
    "/refund",
  ];

  const featureRoutes = featurePages.map((f) => `/features/${f.slug}`);
  const blogRoutes = getAllPosts().map((p) => `/blog/${p.slug}`);

  return [...staticRoutes, ...featureRoutes, ...blogRoutes].map((path) => ({
    url: `${base}${path}/`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
