/**
 * SEO surface types — describe optional metadata blocks that presets and
 * pages may declare. Every field is optional; presets that omit the `seo`
 * block fall back to the host project's `<RootLayout>` metadata.
 *
 * Phase 12B contract — the metadata factory, JSON-LD components, sitemap,
 * robots, and OG image routes consume these types.
 */

export type SeoOpenGraphType = "website" | "article" | "profile";

export type SeoTwitterCard = "summary" | "summary_large_image";

export type SeoImage = {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
};

export type SeoOpenGraph = {
  type?: SeoOpenGraphType;
  title?: string;
  description?: string;
  images?: SeoImage[];
  /** Site name shown in OG cards (falls back to brand.name). */
  siteName?: string;
};

export type SeoTwitter = {
  card?: SeoTwitterCard;
  title?: string;
  description?: string;
  images?: SeoImage[];
  /** @handle of the publishing account. */
  site?: string;
  /** @handle of the content creator. */
  creator?: string;
};

export type SeoRobots = {
  index?: boolean;
  follow?: boolean;
  noarchive?: boolean;
  nosnippet?: boolean;
};

export type SeoAlternates = {
  canonical?: string;
  /** locale → fully-qualified URL (used for hreflang). */
  languages?: Record<string, string>;
};

export type SeoModel = {
  title?: string;
  /** Long-form title template — supports `%s` placeholder for page title. */
  titleTemplate?: string;
  description?: string;
  keywords?: string[];
  /** Authoring credit (used for Article structured data). */
  authors?: Array<{ name: string; url?: string }>;
  robots?: SeoRobots;
  alternates?: SeoAlternates;
  openGraph?: SeoOpenGraph;
  twitter?: SeoTwitter;
  /** Optional canonical URL for the page. */
  canonical?: string;
};

/** Organization-level structured data — usually site-wide. */
export type SeoOrganization = {
  name: string;
  url: string;
  logoUrl?: string;
  sameAs?: string[];
};

/** Local business structured data — extends Organization with NAP fields. */
export type SeoLocalBusiness = SeoOrganization & {
  telephone?: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  geo?: { latitude: number; longitude: number };
  openingHours?: string[];
  priceRange?: string;
};
