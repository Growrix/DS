/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "cta" }>;

export const CTA_LOCAL_BUSINESS_TRUST_2_META: SectionVariantMeta = {
  id: "cta-local-business-trust-2",
  kind: "cta",
  archetype: "local-business-trust",
  label: "CTA — Local Phone Banner",
  description: "Full-width banner CTA on accent background with phone-call primary action; rise-soft entry.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft"],
  effects: {},
  density: "comfortable",
  complexity: "minimal",
};

export function CtaLocalBusinessTrust2(props: Model) {
  const { header, body, primaryAction } = props as any;
  return (
    <section className="sv-section-root sv-cta-local-business-trust-2" data-variant="cta-local-business-trust-2">
      <div className="sv-cta-local-business-trust-2__bar">
        <div className="sv-cta-local-business-trust-2__copy">
          {header?.title ? <h2 className="sv-cta-local-business-trust-2__title">{header.title}</h2> : null}
          {body ? <p className="sv-cta-local-business-trust-2__body">{body}</p> : null}
        </div>
        {primaryAction ? <a className="sv-cta-local-business-trust-2__cta" href={primaryAction.href}>{primaryAction.label}</a> : null}
      </div>
    </section>
  );
}
