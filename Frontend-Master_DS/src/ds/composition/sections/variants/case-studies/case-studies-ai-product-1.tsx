/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "case-studies" }>;

export const CASE_STUDIES_AI_PRODUCT_1_META: SectionVariantMeta = {
  id: "case-studies-ai-product-1",
  kind: "case-studies",
  archetype: "ai-product",
  label: "Case Studies â€” AI 3-Col Grid",
  description: "Three-column case study cards with cover image, client tag and outcome line; stagger-text-60 across cards.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["fade-in","stagger-text-60"],
  effects: {},
  density: "comfortable",
  complexity: "standard",
};

export function CaseStudiesAiProduct1(props: Model) {
  const { header, items } = props as any;
  return (
    <section className="sv-section-root sv-case-studies-ai-product-1" data-variant="case-studies-ai-product-1">
      <div className="sv-case-studies-ai-product-1__inner">
        {header ? (
          <div className="sv-case-studies-ai-product-1__header">
            {header.kicker ? <div className="sv-case-studies-ai-product-1__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-case-studies-ai-product-1__title">{header.title}</h2> : null}
          </div>
        ) : null}
        <ul className="sv-case-studies-ai-product-1__grid">
          {items.map((c: any) => (
            <li key={c.id} className="sv-case-studies-ai-product-1__card">
              <a href={c.href} className="sv-case-studies-ai-product-1__link">
                <div className="sv-case-studies-ai-product-1__thumb" aria-hidden="true" />
                {c.tags && c.tags.length > 0 ? (
                  <ul className="sv-case-studies-ai-product-1__tags">{c.tags.map((t: string) => <li key={t} className="sv-case-studies-ai-product-1__tag">{t}</li>)}</ul>
                ) : null}
                <h3 className="sv-case-studies-ai-product-1__case-title">{c.title}</h3>
                {c.excerpt ? <p className="sv-case-studies-ai-product-1__excerpt">{c.excerpt}</p> : null}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
