/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "case-studies" }>;

export const CASE_STUDIES_PORTFOLIO_CRAFT_2_META: SectionVariantMeta = {
  id: "case-studies-portfolio-craft-2",
  kind: "case-studies",
  archetype: "portfolio-craft",
  label: "Case Studies — Portfolio 2-Col Grid",
  description: "Two-column project cards with cover image, client tag and outcome line; scroll-scale 1.04 on covers.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft","scroll-scale-1.04"],
  effects: {"scrollDrivenScale":true,"perCaseAccent":true},
  density: "comfortable",
  complexity: "standard",
};

export function CaseStudiesPortfolioCraft2(props: Model) {
  const { header, items } = props as any;
  return (
    <section className="sv-section-root sv-case-studies-portfolio-craft-2" data-variant="case-studies-portfolio-craft-2">
      <div className="sv-case-studies-portfolio-craft-2__inner">
        {header ? (
          <div className="sv-case-studies-portfolio-craft-2__header">
            {header.kicker ? <div className="sv-case-studies-portfolio-craft-2__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-case-studies-portfolio-craft-2__title">{header.title}</h2> : null}
          </div>
        ) : null}
        <ul className="sv-case-studies-portfolio-craft-2__grid">
          {items.map((c: any) => (
            <li key={c.id} className="sv-case-studies-portfolio-craft-2__card">
              <a href={c.href} className="sv-case-studies-portfolio-craft-2__link">
                <div className="sv-case-studies-portfolio-craft-2__thumb" aria-hidden="true" />
                {c.tags && c.tags.length > 0 ? (
                  <ul className="sv-case-studies-portfolio-craft-2__tags">{c.tags.map((t: string) => <li key={t} className="sv-case-studies-portfolio-craft-2__tag">{t}</li>)}</ul>
                ) : null}
                <h3 className="sv-case-studies-portfolio-craft-2__case-title">{c.title}</h3>
                {c.excerpt ? <p className="sv-case-studies-portfolio-craft-2__excerpt">{c.excerpt}</p> : null}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
