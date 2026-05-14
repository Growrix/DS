/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "features" }>;

export const FEATURES_DASHBOARD_OPS_1_META: SectionVariantMeta = {
  id: "features-dashboard-ops-1",
  kind: "features",
  archetype: "dashboard-ops",
  label: "Features — Ops 3-Col Capabilities",
  description: "Three-column capability grid with icons, name and short line; fade-in across cards; magnetic-hover lift on card.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["fade-in","magnetic-hover"],
  effects: {},
  density: "compact",
  complexity: "standard",
};

export function FeaturesDashboardOps1(props: Model) {
  const { header, features } = props as any;
  return (
    <section className="sv-section-root sv-features-dashboard-ops-1" data-variant="features-dashboard-ops-1">
      <div className="sv-features-dashboard-ops-1__inner">
        {header ? (
          <div className="sv-features-dashboard-ops-1__header">
            {header.kicker ? <div className="sv-features-dashboard-ops-1__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-features-dashboard-ops-1__title">{header.title}</h2> : null}
            {header.lede ? <p className="sv-features-dashboard-ops-1__lede">{header.lede}</p> : null}
          </div>
        ) : null}
        <ul className="sv-features-dashboard-ops-1__grid">
          {features.map((f: any) => (
            <li key={f.id} className="sv-features-dashboard-ops-1__item">
              <h3 className="sv-features-dashboard-ops-1__item-title">{f.title}</h3>
              {f.description ? <p className="sv-features-dashboard-ops-1__item-desc">{f.description}</p> : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
