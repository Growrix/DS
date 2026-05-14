/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "stats-band" }>;

export const STATS_BAND_DASHBOARD_OPS_1_META: SectionVariantMeta = {
  id: "stats-band-dashboard-ops-1",
  kind: "stats-band",
  archetype: "dashboard-ops",
  label: "Stats Band — Ops 4-Col KPI",
  description: "Four-column KPI stats band with accent numerals and short labels; fade-in across cells; compact density.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["fade-in"],
  effects: {},
  density: "compact",
  complexity: "standard",
};

export function StatsBandDashboardOps1(props: Model) {
  const { header, stats } = props as any;
  return (
    <section className="sv-section-root sv-stats-band-dashboard-ops-1" data-variant="stats-band-dashboard-ops-1">
      <div className="sv-stats-band-dashboard-ops-1__inner">
        {header?.title ? <h2 className="sv-stats-band-dashboard-ops-1__title">{header.title}</h2> : null}
        <dl className="sv-stats-band-dashboard-ops-1__grid">
          {stats.map((s: any) => (
            <div key={s.id} className="sv-stats-band-dashboard-ops-1__cell">
              <dt className="sv-stats-band-dashboard-ops-1__value">{s.value}</dt>
              <dd className="sv-stats-band-dashboard-ops-1__label">{s.label}{s.sublabel ? <span className="sv-stats-band-dashboard-ops-1__sub">{s.sublabel}</span> : null}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
