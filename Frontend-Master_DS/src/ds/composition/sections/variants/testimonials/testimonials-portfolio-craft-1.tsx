/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "testimonials" }>;

export const TESTIMONIALS_PORTFOLIO_CRAFT_1_META: SectionVariantMeta = {
  id: "testimonials-portfolio-craft-1",
  kind: "testimonials",
  archetype: "portfolio-craft",
  label: "Testimonials — Portfolio Large Quote",
  description: "Single oversized client pull-quote with attribution; quote glyph in accent at 6rem; rise-soft entry.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft"],
  effects: {},
  density: "comfortable",
  complexity: "minimal",
};

export function TestimonialsPortfolioCraft1(props: Model) {
  const { header, items } = props as any;
  const item = items[0];
  if (!item) return null;
  return (
    <section className="sv-section-root sv-testimonials-portfolio-craft-1" data-variant="testimonials-portfolio-craft-1">
      <div className="sv-testimonials-portfolio-craft-1__inner">
        {header?.kicker ? <div className="sv-testimonials-portfolio-craft-1__kicker">{header.kicker}</div> : null}
        <blockquote className="sv-testimonials-portfolio-craft-1__quote">{item.quote}</blockquote>
        <div className="sv-testimonials-portfolio-craft-1__attr">
          <span className="sv-testimonials-portfolio-craft-1__name">{item.name}</span>
          {item.meta ? <span className="sv-testimonials-portfolio-craft-1__meta">{item.meta}</span> : null}
        </div>
      </div>
    </section>
  );
}
