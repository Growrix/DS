/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "case-studies" }>;

export const CASE_STUDIES_DASHBOARD_OPS_1_META: SectionVariantMeta = {
  id: "case-studies-dashboard-ops-1",
  kind: "case-studies",
  archetype: "dashboard-ops",
  label: "Case Studies — Ops 3-Col Grid",
  description: "Three-column case study cards with cover, client tag and outcome line; magnetic-hover lift on card.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["fade-in","magnetic-hover"],
  effects: {},
  density: "compact",
  complexity: "standard",
};

export function CaseStudiesDashboardOps1(props: Model) {
  const { header, items } = props as any;
  return (
    <section className="sv-section-root sv-case-studies-dashboard-ops-1" data-variant="case-studies-dashboard-ops-1">
      <div className="sv-case-studies-dashboard-ops-1__inner">
        {header ? (
          <div className="sv-case-studies-dashboard-ops-1__header">
            {header.kicker ? <div className="sv-case-studies-dashboard-ops-1__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-case-studies-dashboard-ops-1__title">{header.title}</h2> : null}
          </div>
        ) : null}
        <ul className="sv-case-studies-dashboard-ops-1__grid">
          {items.map((c: any) => (
            <li key={c.id} className="sv-case-studies-dashboard-ops-1__card">
              <a href={c.href} className="sv-case-studies-dashboard-ops-1__link">
                <div className="sv-case-studies-dashboard-ops-1__thumb" aria-hidden="true" />
                {c.tags && c.tags.length > 0 ? (
                  <ul className="sv-case-studies-dashboard-ops-1__tags">{c.tags.map((t: string) => <li key={t} className="sv-case-studies-dashboard-ops-1__tag">{t}</li>)}</ul>
                ) : null}
                <h3 className="sv-case-studies-dashboard-ops-1__case-title">{c.title}</h3>
                {c.excerpt ? <p className="sv-case-studies-dashboard-ops-1__excerpt">{c.excerpt}</p> : null}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
