/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "testimonials" }>;

export const TESTIMONIALS_EDITORIAL_PREMIUM_2_META: SectionVariantMeta = {
  id: "testimonials-editorial-premium-2",
  kind: "testimonials",
  archetype: "editorial-premium",
  label: "Testimonials — Editorial 2-Column Quotes",
  description: "Two-column quote cards with serif emphasis on quote body; light surface-raised cards; max 80rem container.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft","stagger-text-60"],
  effects: {},
  density: "extended",
  complexity: "standard",
};

export function TestimonialsEditorialPremium2(props: Model) {
  const { header, items } = props as any;
  return (
    <section className="sv-section-root sv-testimonials-editorial-premium-2" data-variant="testimonials-editorial-premium-2">
      <div className="sv-testimonials-editorial-premium-2__inner">
        {header ? (
          <div className="sv-testimonials-editorial-premium-2__header">
            {header.kicker ? <div className="sv-testimonials-editorial-premium-2__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-testimonials-editorial-premium-2__title">{header.title}</h2> : null}
          </div>
        ) : null}
        <ul className="sv-testimonials-editorial-premium-2__grid">
          {items.map((t: any) => (
            <li key={t.id} className="sv-testimonials-editorial-premium-2__card">
              <blockquote className="sv-testimonials-editorial-premium-2__quote">{t.quote}</blockquote>
              <div className="sv-testimonials-editorial-premium-2__attr">
                <span className="sv-testimonials-editorial-premium-2__name">{t.name}</span>
                {t.meta ? <span className="sv-testimonials-editorial-premium-2__meta">{t.meta}</span> : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
