/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "cta" }>;

export const CTA_LOCAL_BUSINESS_TRUST_1_META: SectionVariantMeta = {
  id: "cta-local-business-trust-1",
  kind: "cta",
  archetype: "local-business-trust",
  label: "CTA — Local Centred Card",
  description: "Centred CTA card on raised surface with headline, sub-line and primary action; rise-soft entry.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft"],
  effects: {},
  density: "comfortable",
  complexity: "minimal",
};

export function CtaLocalBusinessTrust1(props: Model) {
  const { header, body, primaryAction, secondaryAction } = props as any;
  return (
    <section className="sv-section-root sv-cta-local-business-trust-1" data-variant="cta-local-business-trust-1">
      <div className="sv-cta-local-business-trust-1__card">
        {header?.kicker ? <div className="sv-cta-local-business-trust-1__kicker">{header.kicker}</div> : null}
        {header?.title ? <h2 className="sv-cta-local-business-trust-1__title">{header.title}</h2> : null}
        {body ? <p className="sv-cta-local-business-trust-1__body">{body}</p> : header?.lede ? <p className="sv-cta-local-business-trust-1__body">{header.lede}</p> : null}
        {(primaryAction || secondaryAction) ? (
          <div className="sv-cta-local-business-trust-1__actions">
            {primaryAction ? <a className="sv-cta-local-business-trust-1__cta sv-cta-local-business-trust-1__cta--primary" href={primaryAction.href}>{primaryAction.label}</a> : null}
            {secondaryAction ? <a className="sv-cta-local-business-trust-1__cta sv-cta-local-business-trust-1__cta--secondary" href={secondaryAction.href}>{secondaryAction.label}</a> : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
