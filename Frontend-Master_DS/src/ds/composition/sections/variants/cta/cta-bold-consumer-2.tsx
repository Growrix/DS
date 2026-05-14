/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "cta" }>;

export const CTA_BOLD_CONSUMER_2_META: SectionVariantMeta = {
  id: "cta-bold-consumer-2",
  kind: "cta",
  archetype: "bold-consumer",
  label: "CTA — Bold Banner Bar",
  description: "Full-width banner CTA on accent background with single primary action and supporting line beneath; idle-pulse-once on action.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft","idle-pulse-once"],
  effects: {},
  density: "comfortable",
  complexity: "minimal",
};

export function CtaBoldConsumer2(props: Model) {
  const { header, body, primaryAction } = props as any;
  return (
    <section className="sv-section-root sv-cta-bold-consumer-2" data-variant="cta-bold-consumer-2">
      <div className="sv-cta-bold-consumer-2__bar">
        <div className="sv-cta-bold-consumer-2__copy">
          {header?.title ? <h2 className="sv-cta-bold-consumer-2__title">{header.title}</h2> : null}
          {body ? <p className="sv-cta-bold-consumer-2__body">{body}</p> : null}
        </div>
        {primaryAction ? <a className="sv-cta-bold-consumer-2__cta" href={primaryAction.href}>{primaryAction.label}</a> : null}
      </div>
    </section>
  );
}
