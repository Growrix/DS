import type { MetadataRoute } from "next";

import { SITE_PREVIEW_PRESET } from "@/app/site-preview-preset";

/**
 * Site sitemap — generated from the active preset's `pages` map.
 *
 * `NEXT_PUBLIC_SITE_URL` should be set to the canonical origin in
 * production (e.g., `https://example.com`). When unset, falls back to
 * `http://localhost:3000` for local dev.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const origin = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const now = new Date();
  return Object.keys(SITE_PREVIEW_PRESET.pages).map((id) => {
    const path = id === "home" || id === "/" ? "/" : `/${id.replace(/^\/+/, "")}`;
    return {
      url: `${origin}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.7,
    };
  });
}
