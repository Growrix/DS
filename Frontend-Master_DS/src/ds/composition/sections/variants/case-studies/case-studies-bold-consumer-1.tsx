/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "case-studies" }>;

export const CASE_STUDIES_BOLD_CONSUMER_1_META: SectionVariantMeta = {
  id: "case-studies-bold-consumer-1",
  kind: "case-studies",
  archetype: "bold-consumer",
  label: "Case Studies — Bold 3-Col Grid",
  description: "Three-column case study cards with cover image, client tag, bold title and outcome line; magnetic-hover lift on card.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft","magnetic-hover"],
  effects: {},
  density: "comfortable",
  complexity: "standard",
};

export function CaseStudiesBoldConsumer1(props: Model) {
  const { header, items } = props as any;
  return (
    <section className="sv-section-root sv-case-studies-bold-consumer-1" data-variant="case-studies-bold-consumer-1">
      <div className="sv-case-studies-bold-consumer-1__inner">
        {header ? (
          <div className="sv-case-studies-bold-consumer-1__header">
            {header.kicker ? <div className="sv-case-studies-bold-consumer-1__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-case-studies-bold-consumer-1__title">{header.title}</h2> : null}
          </div>
        ) : null}
        <ul className="sv-case-studies-bold-consumer-1__grid">
          {items.map((c: any) => (
            <li key={c.id} className="sv-case-studies-bold-consumer-1__card">
              <a href={c.href} className="sv-case-studies-bold-consumer-1__link">
                <div className="sv-case-studies-bold-consumer-1__thumb" aria-hidden="true" />
                {c.tags && c.tags.length > 0 ? (
                  <ul className="sv-case-studies-bold-consumer-1__tags">{c.tags.map((t: string) => <li key={t} className="sv-case-studies-bold-consumer-1__tag">{t}</li>)}</ul>
                ) : null}
                <h3 className="sv-case-studies-bold-consumer-1__case-title">{c.title}</h3>
                {c.excerpt ? <p className="sv-case-studies-bold-consumer-1__excerpt">{c.excerpt}</p> : null}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
