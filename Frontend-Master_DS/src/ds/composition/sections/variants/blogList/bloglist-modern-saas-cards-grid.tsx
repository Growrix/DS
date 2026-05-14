import * as React from "react";

import { SectionPattern } from "@/ds/composition/patterns/SectionPattern";
import { toHeader } from "@/ds/composition/sections/_helpers";
import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type BlogModel = Extract<PublicSectionModel, { kind: "blogList" }>;

export const BLOGLIST_MODERN_SAAS_CARDS_GRID_META: SectionVariantMeta = {
  id: "bloglist-modern-saas-cards-grid",
  kind: "blogList",
  archetype: "modern-saas",
  label: "Blog List — Modern SaaS Cards Grid",
  description:
    "Three-column post grid; each card has a placeholder thumbnail band, title (max 3 lines), 60ch excerpt, and a 'Read more' link. Stagger reveal on enter.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft", "stagger-text-60"],
  effects: {},
  density: "comfortable",
  complexity: "standard",
};

export function BlogListModernSaasCardsGrid(props: BlogModel) {
  const { header, posts } = props;
  return (
    <SectionPattern container="wide" header={toHeader(header)}>
      <ul
        className="sv-bloglist-modern-saas-cards-grid motion-stagger-text-60"
        data-variant={BLOGLIST_MODERN_SAAS_CARDS_GRID_META.id}
        data-archetype={BLOGLIST_MODERN_SAAS_CARDS_GRID_META.archetype}
      >
        {posts.map((p) => (
          <li key={p.id} className="sv-bloglist-modern-saas-cards-grid__card motion-rise-soft">
            <div className="sv-bloglist-modern-saas-cards-grid__thumb" aria-hidden="true" />
            <a href={p.href} className="sv-bloglist-modern-saas-cards-grid__link">
              <h3 className="sv-bloglist-modern-saas-cards-grid__title">{p.title}</h3>
              {p.excerpt ? (
                <p className="sv-bloglist-modern-saas-cards-grid__excerpt">{p.excerpt}</p>
              ) : null}
              <span className="sv-bloglist-modern-saas-cards-grid__cta">Read more &rarr;</span>
            </a>
          </li>
        ))}
      </ul>
    </SectionPattern>
  );
}
