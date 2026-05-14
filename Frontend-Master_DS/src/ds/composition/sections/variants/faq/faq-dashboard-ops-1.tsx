/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "faq" }>;

export const FAQ_DASHBOARD_OPS_1_META: SectionVariantMeta = {
  id: "faq-dashboard-ops-1",
  kind: "faq",
  archetype: "dashboard-ops",
  label: "FAQ — Ops Two-Column",
  description: "Two-column FAQ list (question/answer pairs) for high-density scanning; fade-in across rows; compact density.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["fade-in"],
  effects: {},
  density: "compact",
  complexity: "standard",
};

export function FaqDashboardOps1(props: Model) {
  const { header, items } = props as any;
  const mid = Math.ceil(items.length / 2);
  const left = items.slice(0, mid);
  const right = items.slice(mid);
  return (
    <section className="sv-section-root sv-faq-dashboard-ops-1" data-variant="faq-dashboard-ops-1">
      <div className="sv-faq-dashboard-ops-1__inner">
        {header ? (
          <div className="sv-faq-dashboard-ops-1__header">
            {header.kicker ? <div className="sv-faq-dashboard-ops-1__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-faq-dashboard-ops-1__title">{header.title}</h2> : null}
          </div>
        ) : null}
        <div className="sv-faq-dashboard-ops-1__cols">
          {[left, right].map((col, idx) => (
            <ul key={idx} className="sv-faq-dashboard-ops-1__col">
              {col.map((it: any) => (
                <li key={it.id} className="sv-faq-dashboard-ops-1__entry">
                  <h3 className="sv-faq-dashboard-ops-1__q">{it.q}</h3>
                  <p className="sv-faq-dashboard-ops-1__a">{it.a}</p>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
