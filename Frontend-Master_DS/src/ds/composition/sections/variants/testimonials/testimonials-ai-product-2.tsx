/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "testimonials" }>;

export const TESTIMONIALS_AI_PRODUCT_2_META: SectionVariantMeta = {
  id: "testimonials-ai-product-2",
  kind: "testimonials",
  archetype: "ai-product",
  label: "Testimonials â€” AI 3-Col Cards",
  description: "Three-column testimonial cards on raised surface; stagger-text-60 across cards; quote glyph in accent.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["fade-in","stagger-text-60"],
  effects: {},
  density: "comfortable",
  complexity: "standard",
};

export function TestimonialsAiProduct2(props: Model) {
  const { header, items } = props as any;
  return (
    <section className="sv-section-root sv-testimonials-ai-product-2" data-variant="testimonials-ai-product-2">
      <div className="sv-testimonials-ai-product-2__inner">
        {header ? (
          <div className="sv-testimonials-ai-product-2__header">
            {header.kicker ? <div className="sv-testimonials-ai-product-2__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-testimonials-ai-product-2__title">{header.title}</h2> : null}
          </div>
        ) : null}
        <ul className="sv-testimonials-ai-product-2__grid">
          {items.map((t: any) => (
            <li key={t.id} className="sv-testimonials-ai-product-2__card">
              <blockquote className="sv-testimonials-ai-product-2__quote">{t.quote}</blockquote>
              <div className="sv-testimonials-ai-product-2__attr">
                <span className="sv-testimonials-ai-product-2__name">{t.name}</span>
                {t.meta ? <span className="sv-testimonials-ai-product-2__meta">{t.meta}</span> : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
