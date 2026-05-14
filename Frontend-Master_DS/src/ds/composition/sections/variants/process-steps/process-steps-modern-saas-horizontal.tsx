import * as React from "react";

import { SectionPattern } from "@/ds/composition/patterns/SectionPattern";
import { toHeader } from "@/ds/composition/sections/_helpers";
import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type ProcessModel = Extract<PublicSectionModel, { kind: "process-steps" }>;

export const PROCESS_STEPS_MODERN_SAAS_HORIZONTAL_META: SectionVariantMeta = {
  id: "process-steps-modern-saas-horizontal",
  kind: "process-steps",
  archetype: "modern-saas",
  label: "Process Steps — Modern SaaS Horizontal",
  description:
    "Horizontal numbered steps. Each step has a circular numeral plate, title and 60ch description. Steps connected by a soft horizontal rule. Wraps to vertical below 720 px.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft", "stagger-text-60"],
  effects: {},
  density: "comfortable",
  complexity: "standard",
};

export function ProcessStepsModernSaasHorizontal(props: ProcessModel) {
  const { header, steps } = props;
  return (
    <SectionPattern container="wide" header={toHeader(header)}>
      <ol
        className="sv-process-steps-modern-saas-horizontal motion-stagger-text-60"
        data-variant={PROCESS_STEPS_MODERN_SAAS_HORIZONTAL_META.id}
        data-archetype={PROCESS_STEPS_MODERN_SAAS_HORIZONTAL_META.archetype}
      >
        {steps.map((step, idx) => (
          <li key={step.id} className="sv-process-steps-modern-saas-horizontal__step motion-rise-soft">
            <div className="sv-process-steps-modern-saas-horizontal__numeral" aria-hidden="true">
              {step.number ?? String(idx + 1).padStart(2, "0")}
            </div>
            <h3 className="sv-process-steps-modern-saas-horizontal__title">{step.title}</h3>
            {step.description ? (
              <p className="sv-process-steps-modern-saas-horizontal__body">{step.description}</p>
            ) : null}
          </li>
        ))}
      </ol>
    </SectionPattern>
  );
}
