/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "testimonials" }>;

export const TESTIMONIALS_EDITORIAL_PREMIUM_1_META: SectionVariantMeta = {
  id: "testimonials-editorial-premium-1",
  kind: "testimonials",
  archetype: "editorial-premium",
  label: "Testimonials — Editorial Large Quote",
  description: "Single oversized italic pull-quote, named attribution beneath; max 60rem container; fade-in only.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["fade-in","rise-soft"],
  effects: {},
  density: "extended",
  complexity: "minimal",
};

export function TestimonialsEditorialPremium1(props: Model) {
  const { header, items } = props as any;
  const item = items[0];
  if (!item) return null;
  return (
    <section className="sv-section-root sv-testimonials-editorial-premium-1" data-variant="testimonials-editorial-premium-1">
      <div className="sv-testimonials-editorial-premium-1__inner">
        {header?.kicker ? <div className="sv-testimonials-editorial-premium-1__kicker">{header.kicker}</div> : null}
        <blockquote className="sv-testimonials-editorial-premium-1__quote">{item.quote}</blockquote>
        <div className="sv-testimonials-editorial-premium-1__attr">
          <span className="sv-testimonials-editorial-premium-1__name">{item.name}</span>
          {item.meta ? <span className="sv-testimonials-editorial-premium-1__meta">{item.meta}</span> : null}
        </div>
      </div>
    </section>
  );
}
