/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "features" }>;

export const FEATURES_PORTFOLIO_CRAFT_1_META: SectionVariantMeta = {
  id: "features-portfolio-craft-1",
  kind: "features",
  archetype: "portfolio-craft",
  label: "Features — Portfolio 3-Col Capabilities",
  description: "Three-column capabilities grid with accent icons, discipline name and short line; fade-in across cards.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft","fade-in"],
  effects: {},
  density: "comfortable",
  complexity: "standard",
};

export function FeaturesPortfolioCraft1(props: Model) {
  const { header, features } = props as any;
  return (
    <section className="sv-section-root sv-features-portfolio-craft-1" data-variant="features-portfolio-craft-1">
      <div className="sv-features-portfolio-craft-1__inner">
        {header ? (
          <div className="sv-features-portfolio-craft-1__header">
            {header.kicker ? <div className="sv-features-portfolio-craft-1__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-features-portfolio-craft-1__title">{header.title}</h2> : null}
            {header.lede ? <p className="sv-features-portfolio-craft-1__lede">{header.lede}</p> : null}
          </div>
        ) : null}
        <ul className="sv-features-portfolio-craft-1__grid">
          {features.map((f: any) => (
            <li key={f.id} className="sv-features-portfolio-craft-1__item">
              <h3 className="sv-features-portfolio-craft-1__item-title">{f.title}</h3>
              {f.description ? <p className="sv-features-portfolio-craft-1__item-desc">{f.description}</p> : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
