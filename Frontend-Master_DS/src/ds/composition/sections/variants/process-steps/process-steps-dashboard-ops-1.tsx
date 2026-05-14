/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "process-steps" }>;

export const PROCESS_STEPS_DASHBOARD_OPS_1_META: SectionVariantMeta = {
  id: "process-steps-dashboard-ops-1",
  kind: "process-steps",
  archetype: "dashboard-ops",
  label: "Process Steps — Ops Vertical Numbered",
  description: "Vertical numbered process list with accent numerals; fade-in per step; compact density.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["fade-in"],
  effects: {},
  density: "compact",
  complexity: "standard",
};

export function ProcessStepsDashboardOps1(props: Model) {
  const { header, steps } = props as any;
  return (
    <section className="sv-section-root sv-process-steps-dashboard-ops-1" data-variant="process-steps-dashboard-ops-1">
      <div className="sv-process-steps-dashboard-ops-1__inner">
        {header ? (
          <div className="sv-process-steps-dashboard-ops-1__header">
            {header.kicker ? <div className="sv-process-steps-dashboard-ops-1__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-process-steps-dashboard-ops-1__title">{header.title}</h2> : null}
          </div>
        ) : null}
        <ol className="sv-process-steps-dashboard-ops-1__list">
          {steps.map((s: any, i: number) => (
            <li key={s.id} className="sv-process-steps-dashboard-ops-1__step">
              <span className="sv-process-steps-dashboard-ops-1__num">{s.number ?? String(i + 1).padStart(2, "0")}</span>
              <div className="sv-process-steps-dashboard-ops-1__body">
                <h3 className="sv-process-steps-dashboard-ops-1__step-title">{s.title}</h3>
                {s.description ? <p className="sv-process-steps-dashboard-ops-1__step-desc">{s.description}</p> : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
