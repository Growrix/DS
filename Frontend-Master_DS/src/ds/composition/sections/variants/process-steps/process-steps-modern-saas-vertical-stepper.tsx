import * as React from "react";

import { SectionPattern } from "@/ds/composition/patterns/SectionPattern";
import { toHeader } from "@/ds/composition/sections/_helpers";
import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type ProcessModel = Extract<PublicSectionModel, { kind: "process-steps" }>;

export const PROCESS_STEPS_MODERN_SAAS_VERTICAL_STEPPER_META: SectionVariantMeta = {
  id: "process-steps-modern-saas-vertical-stepper",
  kind: "process-steps",
  archetype: "modern-saas",
  label: "Process Steps — Modern SaaS Vertical Stepper",
  description:
    "Vertical numbered stepper with a continuous connector rule. Each step shows numeral plate, title and 60ch description. Stagger reveal on enter.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft", "stagger-text-60"],
  effects: {},
  density: "comfortable",
  complexity: "standard",
};

export function ProcessStepsModernSaasVerticalStepper(props: ProcessModel) {
  const { header, steps } = props;
  return (
    <SectionPattern container="narrow" header={toHeader(header)}>
      <ol
        className="sv-process-steps-modern-saas-vertical-stepper motion-stagger-text-60"
        data-variant={PROCESS_STEPS_MODERN_SAAS_VERTICAL_STEPPER_META.id}
        data-archetype={PROCESS_STEPS_MODERN_SAAS_VERTICAL_STEPPER_META.archetype}
      >
        {steps.map((step, idx) => (
          <li
            key={step.id}
            className="sv-process-steps-modern-saas-vertical-stepper__step motion-rise-soft"
            data-last={idx === steps.length - 1 ? "true" : "false"}
          >
            <div
              className="sv-process-steps-modern-saas-vertical-stepper__numeral"
              aria-hidden="true"
            >
              {step.number ?? String(idx + 1).padStart(2, "0")}
            </div>
            <div className="sv-process-steps-modern-saas-vertical-stepper__body">
              <h3 className="sv-process-steps-modern-saas-vertical-stepper__title">{step.title}</h3>
              {step.description ? (
                <p className="sv-process-steps-modern-saas-vertical-stepper__copy">
                  {step.description}
                </p>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </SectionPattern>
  );
}
