/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "testimonials" }>;

export const TESTIMONIALS_BOLD_CONSUMER_1_META: SectionVariantMeta = {
  id: "testimonials-bold-consumer-1",
  kind: "testimonials",
  archetype: "bold-consumer",
  label: "Testimonials — Bold Large Quote",
  description: "Single oversized pull-quote with attribution block beneath; quote glyph in accent at 6rem; rise-soft entry.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft"],
  effects: {},
  density: "comfortable",
  complexity: "minimal",
};

export function TestimonialsBoldConsumer1(props: Model) {
  const { header, items } = props as any;
  const item = items[0];
  if (!item) return null;
  return (
    <section className="sv-section-root sv-testimonials-bold-consumer-1" data-variant="testimonials-bold-consumer-1">
      <div className="sv-testimonials-bold-consumer-1__inner">
        {header?.kicker ? <div className="sv-testimonials-bold-consumer-1__kicker">{header.kicker}</div> : null}
        <blockquote className="sv-testimonials-bold-consumer-1__quote">{item.quote}</blockquote>
        <div className="sv-testimonials-bold-consumer-1__attr">
          <span className="sv-testimonials-bold-consumer-1__name">{item.name}</span>
          {item.meta ? <span className="sv-testimonials-bold-consumer-1__meta">{item.meta}</span> : null}
        </div>
      </div>
    </section>
  );
}
