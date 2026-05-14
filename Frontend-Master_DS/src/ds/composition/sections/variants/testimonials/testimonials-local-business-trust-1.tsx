/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "testimonials" }>;

export const TESTIMONIALS_LOCAL_BUSINESS_TRUST_1_META: SectionVariantMeta = {
  id: "testimonials-local-business-trust-1",
  kind: "testimonials",
  archetype: "local-business-trust",
  label: "Testimonials — Local 3-Col Cards",
  description: "Three-column customer testimonial cards with accent quote glyph; fade-in across cards; raised surface.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft","fade-in"],
  effects: {},
  density: "comfortable",
  complexity: "standard",
};

export function TestimonialsLocalBusinessTrust1(props: Model) {
  const { header, items } = props as any;
  return (
    <section className="sv-section-root sv-testimonials-local-business-trust-1" data-variant="testimonials-local-business-trust-1">
      <div className="sv-testimonials-local-business-trust-1__inner">
        {header ? (
          <div className="sv-testimonials-local-business-trust-1__header">
            {header.kicker ? <div className="sv-testimonials-local-business-trust-1__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-testimonials-local-business-trust-1__title">{header.title}</h2> : null}
          </div>
        ) : null}
        <ul className="sv-testimonials-local-business-trust-1__grid">
          {items.map((t: any) => (
            <li key={t.id} className="sv-testimonials-local-business-trust-1__card">
              <blockquote className="sv-testimonials-local-business-trust-1__quote">{t.quote}</blockquote>
              <div className="sv-testimonials-local-business-trust-1__attr">
                <span className="sv-testimonials-local-business-trust-1__name">{t.name}</span>
                {t.meta ? <span className="sv-testimonials-local-business-trust-1__meta">{t.meta}</span> : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
