import type { MetadataRoute } from "next";
import { projects, siteUrl } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-11-06T00:00:00Z");

  return [
    { url: `${siteUrl}/`, lastModified },
    ...projects.map((project) => ({
      url: `${siteUrl}/projects/${project.slug}/`,
      lastModified,
    })),
  ];
}
