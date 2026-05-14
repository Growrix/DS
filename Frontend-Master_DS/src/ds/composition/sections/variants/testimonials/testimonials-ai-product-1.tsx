/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "testimonials" }>;

export const TESTIMONIALS_AI_PRODUCT_1_META: SectionVariantMeta = {
  id: "testimonials-ai-product-1",
  kind: "testimonials",
  archetype: "ai-product",
  label: "Testimonials â€” AI Large Quote",
  description: "Single oversized pull-quote with glass-style scrim panel; reveal-glass entry; attribution beneath quote.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["reveal-glass"],
  effects: {"glassmorphism":true},
  density: "comfortable",
  complexity: "minimal",
};

export function TestimonialsAiProduct1(props: Model) {
  const { header, items } = props as any;
  const item = items[0];
  if (!item) return null;
  return (
    <section className="sv-section-root sv-testimonials-ai-product-1" data-variant="testimonials-ai-product-1">
      <div className="sv-testimonials-ai-product-1__inner">
        {header?.kicker ? <div className="sv-testimonials-ai-product-1__kicker">{header.kicker}</div> : null}
        <blockquote className="sv-testimonials-ai-product-1__quote">{item.quote}</blockquote>
        <div className="sv-testimonials-ai-product-1__attr">
          <span className="sv-testimonials-ai-product-1__name">{item.name}</span>
          {item.meta ? <span className="sv-testimonials-ai-product-1__meta">{item.meta}</span> : null}
        </div>
      </div>
    </section>
  );
}
