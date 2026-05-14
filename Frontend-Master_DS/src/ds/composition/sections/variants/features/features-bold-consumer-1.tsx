/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "features" }>;

export const FEATURES_BOLD_CONSUMER_1_META: SectionVariantMeta = {
  id: "features-bold-consumer-1",
  kind: "features",
  archetype: "bold-consumer",
  label: "Features — Bold 3-Col Grid",
  description: "Three-column features grid with saturated accent icons and bold headings; rise-soft entry with 60ms stagger between cards.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft","stagger-text-60"],
  effects: {},
  density: "comfortable",
  complexity: "standard",
};

export function FeaturesBoldConsumer1(props: Model) {
  const { header, features } = props as any;
  return (
    <section className="sv-section-root sv-features-bold-consumer-1" data-variant="features-bold-consumer-1">
      <div className="sv-features-bold-consumer-1__inner">
        {header ? (
          <div className="sv-features-bold-consumer-1__header">
            {header.kicker ? <div className="sv-features-bold-consumer-1__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-features-bold-consumer-1__title">{header.title}</h2> : null}
            {header.lede ? <p className="sv-features-bold-consumer-1__lede">{header.lede}</p> : null}
          </div>
        ) : null}
        <ul className="sv-features-bold-consumer-1__grid">
          {features.map((f: any) => (
            <li key={f.id} className="sv-features-bold-consumer-1__item">
              <h3 className="sv-features-bold-consumer-1__item-title">{f.title}</h3>
              {f.description ? <p className="sv-features-bold-consumer-1__item-desc">{f.description}</p> : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
