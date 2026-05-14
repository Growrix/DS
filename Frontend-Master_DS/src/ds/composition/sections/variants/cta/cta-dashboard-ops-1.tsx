/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "cta" }>;

export const CTA_DASHBOARD_OPS_1_META: SectionVariantMeta = {
  id: "cta-dashboard-ops-1",
  kind: "cta",
  archetype: "dashboard-ops",
  label: "CTA — Ops Banner Bar",
  description: "Full-width banner CTA on accent background with single primary action; fade-in entry; compact density.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["fade-in"],
  effects: {},
  density: "compact",
  complexity: "minimal",
};

export function CtaDashboardOps1(props: Model) {
  const { header, body, primaryAction } = props as any;
  return (
    <section className="sv-section-root sv-cta-dashboard-ops-1" data-variant="cta-dashboard-ops-1">
      <div className="sv-cta-dashboard-ops-1__bar">
        <div className="sv-cta-dashboard-ops-1__copy">
          {header?.title ? <h2 className="sv-cta-dashboard-ops-1__title">{header.title}</h2> : null}
          {body ? <p className="sv-cta-dashboard-ops-1__body">{body}</p> : null}
        </div>
        {primaryAction ? <a className="sv-cta-dashboard-ops-1__cta" href={primaryAction.href}>{primaryAction.label}</a> : null}
      </div>
    </section>
  );
}
