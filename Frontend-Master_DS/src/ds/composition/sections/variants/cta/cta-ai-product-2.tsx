/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "cta" }>;

export const CTA_AI_PRODUCT_2_META: SectionVariantMeta = {
  id: "cta-ai-product-2",
  kind: "cta",
  archetype: "ai-product",
  label: "CTA â€” AI Banner Bar",
  description: "Full-width banner CTA on accent background with single primary action; fade-in entry.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["fade-in"],
  effects: {},
  density: "comfortable",
  complexity: "minimal",
};

export function CtaAiProduct2(props: Model) {
  const { header, body, primaryAction } = props as any;
  return (
    <section className="sv-section-root sv-cta-ai-product-2" data-variant="cta-ai-product-2">
      <div className="sv-cta-ai-product-2__bar">
        <div className="sv-cta-ai-product-2__copy">
          {header?.title ? <h2 className="sv-cta-ai-product-2__title">{header.title}</h2> : null}
          {body ? <p className="sv-cta-ai-product-2__body">{body}</p> : null}
        </div>
        {primaryAction ? <a className="sv-cta-ai-product-2__cta" href={primaryAction.href}>{primaryAction.label}</a> : null}
      </div>
    </section>
  );
}
