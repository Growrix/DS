/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "features" }>;

export const FEATURES_EDITORIAL_PREMIUM_2_META: SectionVariantMeta = {
  id: "features-editorial-premium-2",
  kind: "features",
  archetype: "editorial-premium",
  label: "Features — Editorial Numbered Stack",
  description: "Numbered editorial stack of features, large two-digit numerals, generous block padding, single column max-width 72rem.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft","stagger-text-60"],
  effects: {},
  density: "extended",
  complexity: "standard",
};

export function FeaturesEditorialPremium2(props: Model) {
  const { header, features } = props as any;
  return (
    <section className="sv-section-root sv-features-editorial-premium-2" data-variant="features-editorial-premium-2">
      <div className="sv-features-editorial-premium-2__inner">
        {header ? (
          <div className="sv-features-editorial-premium-2__header">
            {header.kicker ? <div className="sv-features-editorial-premium-2__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-features-editorial-premium-2__title">{header.title}</h2> : null}
            {header.lede ? <p className="sv-features-editorial-premium-2__lede">{header.lede}</p> : null}
          </div>
        ) : null}
        <ol className="sv-features-editorial-premium-2__list">
          {features.map((f: any, i: number) => (
            <li key={f.id} className="sv-features-editorial-premium-2__row">
              <span className="sv-features-editorial-premium-2__num">{String(i + 1).padStart(2, "0")}</span>
              <div className="sv-features-editorial-premium-2__body">
                <h3 className="sv-features-editorial-premium-2__row-title">{f.title}</h3>
                {f.description ? <p className="sv-features-editorial-premium-2__row-desc">{f.description}</p> : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
