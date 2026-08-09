import type { MetadataRoute } from "next";
import { BRAND } from "@/config/brand";
import { industries } from "@/data/industries";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BRAND.url;
  const staticRoutes = [
    "",
    "/services",
    "/solutions",
    "/process",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const industryRoutes = industries
    .filter((i) => i.href.startsWith("/services/"))
    .map((i) => ({
      url: `${base}${i.href}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

  return [...staticRoutes, ...industryRoutes];
}
