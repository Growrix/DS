import * as React from "react";

import { SectionPattern } from "@/ds/composition/patterns/SectionPattern";
import { toHeader } from "@/ds/composition/sections/_helpers";
import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type StatsModel = Extract<PublicSectionModel, { kind: "stats-band" }>;

export const STATS_BAND_MODERN_SAAS_2X2_GRID_META: SectionVariantMeta = {
  id: "stats-band-modern-saas-2x2-grid",
  kind: "stats-band",
  archetype: "modern-saas",
  label: "Stats Band — Modern SaaS 2×2 Grid",
  description:
    "Four stats arranged in a 2×2 grid with large numeral on top, label below, optional sublabel; divider lines between cells; balanced for tablet breakpoint.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft", "stagger-text-60"],
  effects: {},
  density: "comfortable",
  complexity: "standard",
};

export function StatsBandModernSaas2x2Grid(props: StatsModel) {
  const { header, stats } = props;
  return (
    <SectionPattern container="wide" header={toHeader(header)}>
      <ul
        className="sv-stats-band-modern-saas-2x2-grid motion-stagger-text-60"
        data-variant={STATS_BAND_MODERN_SAAS_2X2_GRID_META.id}
        data-archetype={STATS_BAND_MODERN_SAAS_2X2_GRID_META.archetype}
      >
        {stats.map((s) => (
          <li key={s.id} className="sv-stats-band-modern-saas-2x2-grid__cell motion-rise-soft">
            <div className="sv-stats-band-modern-saas-2x2-grid__value">{s.value}</div>
            <div className="sv-stats-band-modern-saas-2x2-grid__label">{s.label}</div>
            {s.sublabel ? (
              <div className="sv-stats-band-modern-saas-2x2-grid__sublabel">{s.sublabel}</div>
            ) : null}
          </li>
        ))}
      </ul>
    </SectionPattern>
  );
}
