import * as React from "react";

import { SectionPattern } from "@/ds/composition/patterns/SectionPattern";
import { toHeader } from "@/ds/composition/sections/_helpers";
import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type TestimonialsModel = Extract<PublicSectionModel, { kind: "testimonials" }>;

export const TESTIMONIALS_MODERN_SAAS_CARDS_GRID_META: SectionVariantMeta = {
  id: "testimonials-modern-saas-cards-grid",
  kind: "testimonials",
  archetype: "modern-saas",
  label: "Testimonials — Modern SaaS Cards Grid",
  description:
    "Three-column card grid with one quote per card; avatar + name + meta footer; soft-elevation card surface; staggered rise-soft reveal on enter.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft", "stagger-text-60"],
  effects: {},
  density: "comfortable",
  complexity: "standard",
};

export function TestimonialsModernSaasCardsGrid(props: TestimonialsModel) {
  const { header, items } = props;
  return (
    <SectionPattern container="wide" header={toHeader(header)}>
      <ul
        className="sv-testimonials-modern-saas-cards-grid motion-stagger-text-60"
        data-variant={TESTIMONIALS_MODERN_SAAS_CARDS_GRID_META.id}
        data-archetype={TESTIMONIALS_MODERN_SAAS_CARDS_GRID_META.archetype}
      >
        {items.map((t) => (
          <li key={t.id} className="sv-testimonials-modern-saas-cards-grid__card motion-rise-soft">
            <p className="sv-testimonials-modern-saas-cards-grid__quote">&ldquo;{t.quote}&rdquo;</p>
            <div className="sv-testimonials-modern-saas-cards-grid__byline">
              <span className="sv-testimonials-modern-saas-cards-grid__name">{t.name}</span>
              {t.meta ? (
                <span className="sv-testimonials-modern-saas-cards-grid__meta">{t.meta}</span>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </SectionPattern>
  );
}
