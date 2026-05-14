/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "stats-band" }>;

export const STATS_BAND_LOCAL_BUSINESS_TRUST_1_META: SectionVariantMeta = {
  id: "stats-band-local-business-trust-1",
  kind: "stats-band",
  archetype: "local-business-trust",
  label: "Stats Band — Local 4-Col Trust",
  description: "Four-column stats band with accent numerals showing years/projects/customers/rating; fade-in across cells.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft","fade-in"],
  effects: {},
  density: "comfortable",
  complexity: "standard",
};

export function StatsBandLocalBusinessTrust1(props: Model) {
  const { header, stats } = props as any;
  return (
    <section className="sv-section-root sv-stats-band-local-business-trust-1" data-variant="stats-band-local-business-trust-1">
      <div className="sv-stats-band-local-business-trust-1__inner">
        {header?.title ? <h2 className="sv-stats-band-local-business-trust-1__title">{header.title}</h2> : null}
        <dl className="sv-stats-band-local-business-trust-1__grid">
          {stats.map((s: any) => (
            <div key={s.id} className="sv-stats-band-local-business-trust-1__cell">
              <dt className="sv-stats-band-local-business-trust-1__value">{s.value}</dt>
              <dd className="sv-stats-band-local-business-trust-1__label">{s.label}{s.sublabel ? <span className="sv-stats-band-local-business-trust-1__sub">{s.sublabel}</span> : null}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
