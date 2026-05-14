/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "testimonials" }>;

export const TESTIMONIALS_BOLD_CONSUMER_2_META: SectionVariantMeta = {
  id: "testimonials-bold-consumer-2",
  kind: "testimonials",
  archetype: "bold-consumer",
  label: "Testimonials — Bold 3-Col Cards",
  description: "Three-column testimonial cards on raised surface with bold quote glyph; stagger-text-60 between cards.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft","stagger-text-60"],
  effects: {},
  density: "comfortable",
  complexity: "standard",
};

export function TestimonialsBoldConsumer2(props: Model) {
  const { header, items } = props as any;
  return (
    <section className="sv-section-root sv-testimonials-bold-consumer-2" data-variant="testimonials-bold-consumer-2">
      <div className="sv-testimonials-bold-consumer-2__inner">
        {header ? (
          <div className="sv-testimonials-bold-consumer-2__header">
            {header.kicker ? <div className="sv-testimonials-bold-consumer-2__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-testimonials-bold-consumer-2__title">{header.title}</h2> : null}
          </div>
        ) : null}
        <ul className="sv-testimonials-bold-consumer-2__grid">
          {items.map((t: any) => (
            <li key={t.id} className="sv-testimonials-bold-consumer-2__card">
              <blockquote className="sv-testimonials-bold-consumer-2__quote">{t.quote}</blockquote>
              <div className="sv-testimonials-bold-consumer-2__attr">
                <span className="sv-testimonials-bold-consumer-2__name">{t.name}</span>
                {t.meta ? <span className="sv-testimonials-bold-consumer-2__meta">{t.meta}</span> : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
