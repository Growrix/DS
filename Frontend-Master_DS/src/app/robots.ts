import type { MetadataRoute } from "next";

/**
 * `/robots.txt` route. Allows all crawlers by default; sets the sitemap
 * URL from `NEXT_PUBLIC_SITE_URL`. Projects that need to block crawlers
 * (staging, internal tools) should override this file in their codegen
 * clone.
 */
export default function robots(): MetadataRoute.Robots {
  const origin = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${origin}/sitemap.xml`,
  };
}
