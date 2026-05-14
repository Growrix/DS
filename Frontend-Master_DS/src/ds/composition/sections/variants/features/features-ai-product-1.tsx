/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "features" }>;

export const FEATURES_AI_PRODUCT_1_META: SectionVariantMeta = {
  id: "features-ai-product-1",
  kind: "features",
  archetype: "ai-product",
  label: "Features â€” AI 3-Col Grid",
  description: "Three-column feature grid on raised surface; stagger-text-60 across cards; foreground-secondary body copy.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["fade-in","stagger-text-60"],
  effects: {},
  density: "comfortable",
  complexity: "standard",
};

export function FeaturesAiProduct1(props: Model) {
  const { header, features } = props as any;
  return (
    <section className="sv-section-root sv-features-ai-product-1" data-variant="features-ai-product-1">
      <div className="sv-features-ai-product-1__inner">
        {header ? (
          <div className="sv-features-ai-product-1__header">
            {header.kicker ? <div className="sv-features-ai-product-1__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-features-ai-product-1__title">{header.title}</h2> : null}
            {header.lede ? <p className="sv-features-ai-product-1__lede">{header.lede}</p> : null}
          </div>
        ) : null}
        <ul className="sv-features-ai-product-1__grid">
          {features.map((f: any) => (
            <li key={f.id} className="sv-features-ai-product-1__item">
              <h3 className="sv-features-ai-product-1__item-title">{f.title}</h3>
              {f.description ? <p className="sv-features-ai-product-1__item-desc">{f.description}</p> : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
