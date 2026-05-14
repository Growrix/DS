/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "testimonials" }>;

export const TESTIMONIALS_STARTUP_CONVERSION_1_META: SectionVariantMeta = {
  id: "testimonials-startup-conversion-1",
  kind: "testimonials",
  archetype: "startup-conversion",
  label: "Testimonials — Startup 3-Col Cards",
  description: "Three-column testimonial cards with accent quote glyph; stagger-text-60 across cards; raised surface.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft","stagger-text-60"],
  effects: {},
  density: "comfortable",
  complexity: "standard",
};

export function TestimonialsStartupConversion1(props: Model) {
  const { header, items } = props as any;
  return (
    <section className="sv-section-root sv-testimonials-startup-conversion-1" data-variant="testimonials-startup-conversion-1">
      <div className="sv-testimonials-startup-conversion-1__inner">
        {header ? (
          <div className="sv-testimonials-startup-conversion-1__header">
            {header.kicker ? <div className="sv-testimonials-startup-conversion-1__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-testimonials-startup-conversion-1__title">{header.title}</h2> : null}
          </div>
        ) : null}
        <ul className="sv-testimonials-startup-conversion-1__grid">
          {items.map((t: any) => (
            <li key={t.id} className="sv-testimonials-startup-conversion-1__card">
              <blockquote className="sv-testimonials-startup-conversion-1__quote">{t.quote}</blockquote>
              <div className="sv-testimonials-startup-conversion-1__attr">
                <span className="sv-testimonials-startup-conversion-1__name">{t.name}</span>
                {t.meta ? <span className="sv-testimonials-startup-conversion-1__meta">{t.meta}</span> : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
