import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://harishkumar.dev",
      lastModified: new Date("2026-06-27"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
