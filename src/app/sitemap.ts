import type { MetadataRoute } from "next";
import { categories } from "@/data/categories";
import { usecases } from "@/data/usecases";

const BASE = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: BASE, lastModified: now, changeFrequency: "daily", priority: 1 },
    {
      url: `${BASE}/sponsors`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    ...categories.map((c) => ({
      url: `${BASE}/category/${c.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...usecases.map((u) => ({
      url: `${BASE}/usecase/${u.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
