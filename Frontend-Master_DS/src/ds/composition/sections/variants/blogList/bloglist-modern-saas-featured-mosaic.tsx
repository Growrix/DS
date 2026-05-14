import * as React from "react";

import { SectionPattern } from "@/ds/composition/patterns/SectionPattern";
import { toHeader } from "@/ds/composition/sections/_helpers";
import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type BlogModel = Extract<PublicSectionModel, { kind: "blogList" }>;

export const BLOGLIST_MODERN_SAAS_FEATURED_MOSAIC_META: SectionVariantMeta = {
  id: "bloglist-modern-saas-featured-mosaic",
  kind: "blogList",
  archetype: "modern-saas",
  label: "Blog List — Modern SaaS Featured Mosaic",
  description:
    "First post rendered as featured hero card (2-col grid: thumb + body); remaining posts in 3-col card grid below. Collapses to single column under 720 px.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft", "stagger-text-60"],
  effects: {},
  density: "comfortable",
  complexity: "standard",
};

export function BlogListModernSaasFeaturedMosaic(props: BlogModel) {
  const { header, posts } = props;
  const [featured, ...rest] = posts;
  return (
    <SectionPattern container="wide" header={toHeader(header)}>
      <div
        className="sv-bloglist-modern-saas-featured-mosaic motion-stagger-text-60"
        data-variant={BLOGLIST_MODERN_SAAS_FEATURED_MOSAIC_META.id}
        data-archetype={BLOGLIST_MODERN_SAAS_FEATURED_MOSAIC_META.archetype}
      >
        {featured ? (
          <a
            href={featured.href}
            className="sv-bloglist-modern-saas-featured-mosaic__featured motion-rise-soft"
          >
            <div
              className="sv-bloglist-modern-saas-featured-mosaic__featured-thumb"
              aria-hidden="true"
            />
            <div className="sv-bloglist-modern-saas-featured-mosaic__featured-body">
              <h3 className="sv-bloglist-modern-saas-featured-mosaic__featured-title">
                {featured.title}
              </h3>
              {featured.excerpt ? (
                <p className="sv-bloglist-modern-saas-featured-mosaic__featured-excerpt">
                  {featured.excerpt}
                </p>
              ) : null}
              <span className="sv-bloglist-modern-saas-featured-mosaic__featured-cta">
                Read story &rarr;
              </span>
            </div>
          </a>
        ) : null}
        {rest.length > 0 ? (
          <ul className="sv-bloglist-modern-saas-featured-mosaic__grid">
            {rest.map((p) => (
              <li
                key={p.id}
                className="sv-bloglist-modern-saas-featured-mosaic__card motion-rise-soft"
              >
                <div
                  className="sv-bloglist-modern-saas-featured-mosaic__card-thumb"
                  aria-hidden="true"
                />
                <a href={p.href} className="sv-bloglist-modern-saas-featured-mosaic__card-link">
                  <h3 className="sv-bloglist-modern-saas-featured-mosaic__card-title">{p.title}</h3>
                  {p.excerpt ? (
                    <p className="sv-bloglist-modern-saas-featured-mosaic__card-excerpt">
                      {p.excerpt}
                    </p>
                  ) : null}
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </SectionPattern>
  );
}
