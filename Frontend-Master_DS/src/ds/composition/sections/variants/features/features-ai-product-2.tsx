/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "features" }>;

export const FEATURES_AI_PRODUCT_2_META: SectionVariantMeta = {
  id: "features-ai-product-2",
  kind: "features",
  archetype: "ai-product",
  label: "Features â€” AI Numbered Stack",
  description: "Numbered feature stack with two-digit numerals in accent; mesh-drift backdrop on section; rise on entry.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["fade-in","mesh-drift"],
  effects: {"gradientMesh":true},
  density: "comfortable",
  complexity: "standard",
};

export function FeaturesAiProduct2(props: Model) {
  const { header, features } = props as any;
  return (
    <section className="sv-section-root sv-features-ai-product-2" data-variant="features-ai-product-2">
      <div className="sv-features-ai-product-2__inner">
        {header ? (
          <div className="sv-features-ai-product-2__header">
            {header.kicker ? <div className="sv-features-ai-product-2__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-features-ai-product-2__title">{header.title}</h2> : null}
            {header.lede ? <p className="sv-features-ai-product-2__lede">{header.lede}</p> : null}
          </div>
        ) : null}
        <ol className="sv-features-ai-product-2__list">
          {features.map((f: any, i: number) => (
            <li key={f.id} className="sv-features-ai-product-2__row">
              <span className="sv-features-ai-product-2__num">{String(i + 1).padStart(2, "0")}</span>
              <div className="sv-features-ai-product-2__body">
                <h3 className="sv-features-ai-product-2__row-title">{f.title}</h3>
                {f.description ? <p className="sv-features-ai-product-2__row-desc">{f.description}</p> : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
