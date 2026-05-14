/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "case-studies" }>;

export const CASE_STUDIES_EDITORIAL_PREMIUM_1_META: SectionVariantMeta = {
  id: "case-studies-editorial-premium-1",
  kind: "case-studies",
  archetype: "editorial-premium",
  label: "Case studies — Editorial Magazine Grid",
  description: "Magazine-style 2-column case grid with 16:10 thumbs, tag pills, oversized titles; max 80rem.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft","stagger-text-60","fade-in"],
  effects: {},
  density: "extended",
  complexity: "rich",
};

export function CaseStudiesEditorialPremium1(props: Model) {
  const { header, items } = props as any;
  return (
    <section className="sv-section-root sv-case-studies-editorial-premium-1" data-variant="case-studies-editorial-premium-1">
      <div className="sv-case-studies-editorial-premium-1__inner">
        {header ? (
          <div className="sv-case-studies-editorial-premium-1__header">
            {header.kicker ? <div className="sv-case-studies-editorial-premium-1__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-case-studies-editorial-premium-1__title">{header.title}</h2> : null}
          </div>
        ) : null}
        <ul className="sv-case-studies-editorial-premium-1__grid">
          {items.map((c: any) => (
            <li key={c.id} className="sv-case-studies-editorial-premium-1__card">
              <a href={c.href} className="sv-case-studies-editorial-premium-1__link">
                <div className="sv-case-studies-editorial-premium-1__thumb" aria-hidden="true" />
                {c.tags && c.tags.length > 0 ? (
                  <ul className="sv-case-studies-editorial-premium-1__tags">{c.tags.map((t: string) => <li key={t} className="sv-case-studies-editorial-premium-1__tag">{t}</li>)}</ul>
                ) : null}
                <h3 className="sv-case-studies-editorial-premium-1__case-title">{c.title}</h3>
                {c.excerpt ? <p className="sv-case-studies-editorial-premium-1__excerpt">{c.excerpt}</p> : null}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
