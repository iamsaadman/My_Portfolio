import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://localhost:3000";

  const lastModified = new Date("2026-11-06T00:00:00Z");

  return [
    { url: `${baseUrl}/`, lastModified },
    { url: `${baseUrl}/#projects`, lastModified },
    { url: `${baseUrl}/#contact`, lastModified },
  ];
}
