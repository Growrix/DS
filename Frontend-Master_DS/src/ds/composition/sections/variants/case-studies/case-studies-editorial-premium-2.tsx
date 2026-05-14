/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "case-studies" }>;

export const CASE_STUDIES_EDITORIAL_PREMIUM_2_META: SectionVariantMeta = {
  id: "case-studies-editorial-premium-2",
  kind: "case-studies",
  archetype: "editorial-premium",
  label: "Case studies — Editorial 3-Column Index",
  description: "Three-column case index with smaller thumbs and dense tags; max 80rem; for archive pages.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft","stagger-text-60"],
  effects: {},
  density: "extended",
  complexity: "standard",
};

export function CaseStudiesEditorialPremium2(props: Model) {
  const { header, items } = props as any;
  return (
    <section className="sv-section-root sv-case-studies-editorial-premium-2" data-variant="case-studies-editorial-premium-2">
      <div className="sv-case-studies-editorial-premium-2__inner">
        {header ? (
          <div className="sv-case-studies-editorial-premium-2__header">
            {header.kicker ? <div className="sv-case-studies-editorial-premium-2__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-case-studies-editorial-premium-2__title">{header.title}</h2> : null}
          </div>
        ) : null}
        <ul className="sv-case-studies-editorial-premium-2__grid">
          {items.map((c: any) => (
            <li key={c.id} className="sv-case-studies-editorial-premium-2__card">
              <a href={c.href} className="sv-case-studies-editorial-premium-2__link">
                <div className="sv-case-studies-editorial-premium-2__thumb" aria-hidden="true" />
                {c.tags && c.tags.length > 0 ? (
                  <ul className="sv-case-studies-editorial-premium-2__tags">{c.tags.map((t: string) => <li key={t} className="sv-case-studies-editorial-premium-2__tag">{t}</li>)}</ul>
                ) : null}
                <h3 className="sv-case-studies-editorial-premium-2__case-title">{c.title}</h3>
                {c.excerpt ? <p className="sv-case-studies-editorial-premium-2__excerpt">{c.excerpt}</p> : null}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
