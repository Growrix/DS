/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "process-steps" }>;

export const PROCESS_STEPS_EDITORIAL_PREMIUM_1_META: SectionVariantMeta = {
  id: "process-steps-editorial-premium-1",
  kind: "process-steps",
  archetype: "editorial-premium",
  label: "Process steps — Editorial Numbered Vertical",
  description: "Vertical numbered process list with accent-soft circular badges; max 64rem; restrained motion.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft","stagger-text-60"],
  effects: {},
  density: "extended",
  complexity: "standard",
};

export function ProcessStepsEditorialPremium1(props: Model) {
  const { header, steps } = props as any;
  return (
    <section className="sv-section-root sv-process-steps-editorial-premium-1" data-variant="process-steps-editorial-premium-1">
      <div className="sv-process-steps-editorial-premium-1__inner">
        {header ? (
          <div className="sv-process-steps-editorial-premium-1__header">
            {header.kicker ? <div className="sv-process-steps-editorial-premium-1__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-process-steps-editorial-premium-1__title">{header.title}</h2> : null}
          </div>
        ) : null}
        <ol className="sv-process-steps-editorial-premium-1__list">
          {steps.map((s: any, i: number) => (
            <li key={s.id} className="sv-process-steps-editorial-premium-1__step">
              <span className="sv-process-steps-editorial-premium-1__num">{s.number ?? String(i + 1).padStart(2, "0")}</span>
              <div className="sv-process-steps-editorial-premium-1__body">
                <h3 className="sv-process-steps-editorial-premium-1__step-title">{s.title}</h3>
                {s.description ? <p className="sv-process-steps-editorial-premium-1__step-desc">{s.description}</p> : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
