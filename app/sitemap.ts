import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://uzinfra.com",
      lastModified: new Date("2026-07-15"),
      changeFrequency: "weekly",
      priority: 1
    }
  ];
}
