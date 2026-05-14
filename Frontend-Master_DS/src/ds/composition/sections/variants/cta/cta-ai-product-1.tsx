/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "cta" }>;

export const CTA_AI_PRODUCT_1_META: SectionVariantMeta = {
  id: "cta-ai-product-1",
  kind: "cta",
  archetype: "ai-product",
  label: "CTA â€” AI Centred Card",
  description: "Centred CTA card on raised surface with headline, sub-line, and primary CTA; reveal-glass entry.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["reveal-glass"],
  effects: {"glassmorphism":true},
  density: "comfortable",
  complexity: "minimal",
};

export function CtaAiProduct1(props: Model) {
  const { header, body, primaryAction, secondaryAction } = props as any;
  return (
    <section className="sv-section-root sv-cta-ai-product-1" data-variant="cta-ai-product-1">
      <div className="sv-cta-ai-product-1__card">
        {header?.kicker ? <div className="sv-cta-ai-product-1__kicker">{header.kicker}</div> : null}
        {header?.title ? <h2 className="sv-cta-ai-product-1__title">{header.title}</h2> : null}
        {body ? <p className="sv-cta-ai-product-1__body">{body}</p> : header?.lede ? <p className="sv-cta-ai-product-1__body">{header.lede}</p> : null}
        {(primaryAction || secondaryAction) ? (
          <div className="sv-cta-ai-product-1__actions">
            {primaryAction ? <a className="sv-cta-ai-product-1__cta sv-cta-ai-product-1__cta--primary" href={primaryAction.href}>{primaryAction.label}</a> : null}
            {secondaryAction ? <a className="sv-cta-ai-product-1__cta sv-cta-ai-product-1__cta--secondary" href={secondaryAction.href}>{secondaryAction.label}</a> : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
