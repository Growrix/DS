/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "stats-band" }>;

export const STATS_BAND_AI_PRODUCT_1_META: SectionVariantMeta = {
  id: "stats-band-ai-product-1",
  kind: "stats-band",
  archetype: "ai-product",
  label: "Stats Band â€” AI 4-Col",
  description: "Four-column stats band with oversized accent numerals and short labels; stagger-text-60 reveal across cells.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["fade-in","stagger-text-60"],
  effects: {},
  density: "comfortable",
  complexity: "standard",
};

export function StatsBandAiProduct1(props: Model) {
  const { header, stats } = props as any;
  return (
    <section className="sv-section-root sv-stats-band-ai-product-1" data-variant="stats-band-ai-product-1">
      <div className="sv-stats-band-ai-product-1__inner">
        {header?.title ? <h2 className="sv-stats-band-ai-product-1__title">{header.title}</h2> : null}
        <dl className="sv-stats-band-ai-product-1__grid">
          {stats.map((s: any) => (
            <div key={s.id} className="sv-stats-band-ai-product-1__cell">
              <dt className="sv-stats-band-ai-product-1__value">{s.value}</dt>
              <dd className="sv-stats-band-ai-product-1__label">{s.label}{s.sublabel ? <span className="sv-stats-band-ai-product-1__sub">{s.sublabel}</span> : null}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
