/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "features" }>;

export const FEATURES_LOCAL_BUSINESS_TRUST_2_META: SectionVariantMeta = {
  id: "features-local-business-trust-2",
  kind: "features",
  archetype: "local-business-trust",
  label: "Features — Local Numbered Process",
  description: "Numbered services stack with two-digit numerals in accent; single column max 72rem; rise-soft entry.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft"],
  effects: {},
  density: "comfortable",
  complexity: "standard",
};

export function FeaturesLocalBusinessTrust2(props: Model) {
  const { header, features } = props as any;
  return (
    <section className="sv-section-root sv-features-local-business-trust-2" data-variant="features-local-business-trust-2">
      <div className="sv-features-local-business-trust-2__inner">
        {header ? (
          <div className="sv-features-local-business-trust-2__header">
            {header.kicker ? <div className="sv-features-local-business-trust-2__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-features-local-business-trust-2__title">{header.title}</h2> : null}
            {header.lede ? <p className="sv-features-local-business-trust-2__lede">{header.lede}</p> : null}
          </div>
        ) : null}
        <ol className="sv-features-local-business-trust-2__list">
          {features.map((f: any, i: number) => (
            <li key={f.id} className="sv-features-local-business-trust-2__row">
              <span className="sv-features-local-business-trust-2__num">{String(i + 1).padStart(2, "0")}</span>
              <div className="sv-features-local-business-trust-2__body">
                <h3 className="sv-features-local-business-trust-2__row-title">{f.title}</h3>
                {f.description ? <p className="sv-features-local-business-trust-2__row-desc">{f.description}</p> : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
