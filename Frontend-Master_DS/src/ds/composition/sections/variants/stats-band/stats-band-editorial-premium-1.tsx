/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "stats-band" }>;

export const STATS_BAND_EDITORIAL_PREMIUM_1_META: SectionVariantMeta = {
  id: "stats-band-editorial-premium-1",
  kind: "stats-band",
  archetype: "editorial-premium",
  label: "Stats band — Editorial 4-Column",
  description: "Four large numeric stats with accent values and muted captions on surface; centred grid; max 80rem.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft","stagger-text-60"],
  effects: {},
  density: "extended",
  complexity: "standard",
};

export function StatsBandEditorialPremium1(props: Model) {
  const { header, stats } = props as any;
  return (
    <section className="sv-section-root sv-stats-band-editorial-premium-1" data-variant="stats-band-editorial-premium-1">
      <div className="sv-stats-band-editorial-premium-1__inner">
        {header?.title ? <h2 className="sv-stats-band-editorial-premium-1__title">{header.title}</h2> : null}
        <dl className="sv-stats-band-editorial-premium-1__grid">
          {stats.map((s: any) => (
            <div key={s.id} className="sv-stats-band-editorial-premium-1__cell">
              <dt className="sv-stats-band-editorial-premium-1__value">{s.value}</dt>
              <dd className="sv-stats-band-editorial-premium-1__label">{s.label}{s.sublabel ? <span className="sv-stats-band-editorial-premium-1__sub">{s.sublabel}</span> : null}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
