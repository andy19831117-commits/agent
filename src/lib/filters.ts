import { usecases } from "@/data/usecases";
import type { CategorySlug, PlatformSlug, UseCase } from "@/data/types";

export interface FilterParams {
  q?: string;
  category?: CategorySlug | "";
  platform?: PlatformSlug | "";
  sort?: "trending" | "upvotes" | "newest";
}

export function filterUseCases(params: FilterParams): UseCase[] {
  const q = (params.q || "").trim().toLowerCase();
  let list = [...usecases];

  if (params.category) {
    list = list.filter((u) => u.categories.includes(params.category as CategorySlug));
  }
  if (params.platform) {
    list = list.filter((u) => u.platforms.includes(params.platform as PlatformSlug));
  }
  if (q) {
    list = list.filter((u) => {
      const hay = [
        u.title,
        u.summary,
        u.description,
        ...u.tags,
      ]
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });
  }

  switch (params.sort) {
    case "upvotes":
      list.sort((a, b) => b.upvotes - a.upvotes);
      break;
    case "newest":
      list.sort((a, b) => Number(b.id) - Number(a.id));
      break;
    case "trending":
    default:
      list.sort((a, b) => {
        const ta = a.trending ? 1 : 0;
        const tb = b.trending ? 1 : 0;
        if (tb !== ta) return tb - ta;
        return b.upvotes - a.upvotes;
      });
      break;
  }

  return list;
}
