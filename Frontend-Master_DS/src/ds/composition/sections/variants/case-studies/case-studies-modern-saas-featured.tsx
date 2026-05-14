import * as React from "react";

import { SectionPattern } from "@/ds/composition/patterns/SectionPattern";
import { toHeader } from "@/ds/composition/sections/_helpers";
import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type CaseStudiesModel = Extract<PublicSectionModel, { kind: "case-studies" }>;

export const CASE_STUDIES_MODERN_SAAS_FEATURED_META: SectionVariantMeta = {
  id: "case-studies-modern-saas-featured",
  kind: "case-studies",
  archetype: "modern-saas",
  label: "Case Studies — Modern SaaS Featured",
  description:
    "Featured hero case (first item) spans full width with media + excerpt + tag chips; remaining items render as a 3-column compact grid below.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft", "stagger-text-60"],
  effects: {},
  density: "extended",
  complexity: "rich",
};

export function CaseStudiesModernSaasFeatured(props: CaseStudiesModel) {
  const { header, items } = props;
  if (items.length === 0) return null;
  const [featured, ...rest] = items;

  return (
    <SectionPattern container="wide" header={toHeader(header)}>
      <div
        className="sv-case-studies-modern-saas-featured motion-stagger-text-60"
        data-variant={CASE_STUDIES_MODERN_SAAS_FEATURED_META.id}
        data-archetype={CASE_STUDIES_MODERN_SAAS_FEATURED_META.archetype}
      >
        <a
          href={featured.href}
          className="sv-case-studies-modern-saas-featured__hero motion-rise-soft"
        >
          <div className="sv-case-studies-modern-saas-featured__hero-media" aria-hidden="true" />
          <div className="sv-case-studies-modern-saas-featured__hero-body">
            {featured.tags && featured.tags.length > 0 ? (
              <ul className="sv-case-studies-modern-saas-featured__tags">
                {featured.tags.map((t) => (
                  <li key={t} className="sv-case-studies-modern-saas-featured__tag">
                    {t}
                  </li>
                ))}
              </ul>
            ) : null}
            <h3 className="sv-case-studies-modern-saas-featured__hero-title">{featured.title}</h3>
            {featured.excerpt ? (
              <p className="sv-case-studies-modern-saas-featured__hero-excerpt">{featured.excerpt}</p>
            ) : null}
            <span className="sv-case-studies-modern-saas-featured__hero-cta">View case &rarr;</span>
          </div>
        </a>

        {rest.length > 0 ? (
          <ul className="sv-case-studies-modern-saas-featured__grid">
            {rest.map((c) => (
              <li key={c.id} className="sv-case-studies-modern-saas-featured__card motion-rise-soft">
                <a href={c.href} className="sv-case-studies-modern-saas-featured__card-link">
                  <div
                    className="sv-case-studies-modern-saas-featured__card-media"
                    aria-hidden="true"
                  />
                  <h4 className="sv-case-studies-modern-saas-featured__card-title">{c.title}</h4>
                  {c.excerpt ? (
                    <p className="sv-case-studies-modern-saas-featured__card-excerpt">{c.excerpt}</p>
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
