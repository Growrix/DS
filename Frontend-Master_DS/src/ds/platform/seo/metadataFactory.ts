/**
 * `buildMetadata` — convert a preset's optional SEO block into a Next.js
 * `Metadata` object usable from a route's `generateMetadata` or top-level
 * `export const metadata`.
 *
 * Inputs are always optional. Presets that omit SEO fields produce a sparse
 * Metadata that Next.js handles gracefully.
 */

import type { Metadata } from "next";

import type { SeoModel } from "./types";

export type BuildMetadataInput = {
  /** Resolved page title. Used both as `<title>` and OG title fallback. */
  pageTitle?: string;
  /** Resolved page description. */
  pageDescription?: string;
  /** Site-wide SEO block from the preset (optional). */
  siteSeo?: SeoModel;
  /** Per-page SEO override block (optional). */
  pageSeo?: SeoModel;
  /** Brand display name — used as OG `siteName` fallback. */
  brandName?: string;
  /** Absolute site origin (e.g., "https://example.com"). Used for canonical resolution. */
  origin?: string;
};

function pickFirst<T>(...values: Array<T | undefined>): T | undefined {
  for (const v of values) {
    if (v !== undefined && v !== null) return v;
  }
  return undefined;
}

export function buildMetadata(input: BuildMetadataInput): Metadata {
  const { pageTitle, pageDescription, siteSeo, pageSeo, brandName, origin } = input;

  const title = pickFirst(pageSeo?.title, pageTitle, siteSeo?.title);
  const description = pickFirst(pageSeo?.description, pageDescription, siteSeo?.description);
  const keywords = pageSeo?.keywords ?? siteSeo?.keywords;

  const robots = pageSeo?.robots ?? siteSeo?.robots;
  const alternates = pageSeo?.alternates ?? siteSeo?.alternates;

  const og = { ...siteSeo?.openGraph, ...pageSeo?.openGraph };
  const tw = { ...siteSeo?.twitter, ...pageSeo?.twitter };

  const titleTemplate = pageSeo?.titleTemplate ?? siteSeo?.titleTemplate;
  const resolvedTitle: Metadata["title"] = titleTemplate
    ? { default: title ?? "", template: titleTemplate }
    : title;

  const metadata: Metadata = {
    ...(resolvedTitle !== undefined ? { title: resolvedTitle } : {}),
    ...(description ? { description } : {}),
    ...(keywords && keywords.length > 0 ? { keywords } : {}),
    ...(origin ? { metadataBase: new URL(origin) } : {}),
  };

  if (robots) {
    metadata.robots = {
      index: robots.index ?? true,
      follow: robots.follow ?? true,
      noarchive: robots.noarchive,
      nosnippet: robots.nosnippet,
    };
  }

  if (alternates) {
    metadata.alternates = {
      canonical: alternates.canonical ?? pageSeo?.canonical ?? siteSeo?.canonical,
      languages: alternates.languages,
    };
  } else if (pageSeo?.canonical || siteSeo?.canonical) {
    metadata.alternates = { canonical: pageSeo?.canonical ?? siteSeo?.canonical };
  }

  if (og && Object.keys(og).length > 0) {
    metadata.openGraph = {
      type: og.type ?? "website",
      title: og.title ?? title,
      description: og.description ?? description,
      siteName: og.siteName ?? brandName,
      images: og.images,
    };
  }

  if (tw && Object.keys(tw).length > 0) {
    metadata.twitter = {
      card: tw.card ?? "summary_large_image",
      title: tw.title ?? title,
      description: tw.description ?? description,
      site: tw.site,
      creator: tw.creator,
      images: tw.images?.map((i) => i.url),
    };
  }

  return metadata;
}
