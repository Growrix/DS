/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "cta" }>;

export const CTA_EDITORIAL_PREMIUM_1_META: SectionVariantMeta = {
  id: "cta-editorial-premium-1",
  kind: "cta",
  archetype: "editorial-premium",
  label: "CTA — Editorial Centred Card",
  description: "Centred surface-raised card with kicker, h2, lede max 60ch, single primary CTA; padding-12.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft","fade-in"],
  effects: {},
  density: "extended",
  complexity: "minimal",
};

export function CtaEditorialPremium1(props: Model) {
  const { header, body, primaryAction, secondaryAction } = props as any;
  return (
    <section className="sv-section-root sv-cta-editorial-premium-1" data-variant="cta-editorial-premium-1">
      <div className="sv-cta-editorial-premium-1__card">
        {header?.kicker ? <div className="sv-cta-editorial-premium-1__kicker">{header.kicker}</div> : null}
        {header?.title ? <h2 className="sv-cta-editorial-premium-1__title">{header.title}</h2> : null}
        {body ? <p className="sv-cta-editorial-premium-1__body">{body}</p> : header?.lede ? <p className="sv-cta-editorial-premium-1__body">{header.lede}</p> : null}
        {(primaryAction || secondaryAction) ? (
          <div className="sv-cta-editorial-premium-1__actions">
            {primaryAction ? <a className="sv-cta-editorial-premium-1__cta sv-cta-editorial-premium-1__cta--primary" href={primaryAction.href}>{primaryAction.label}</a> : null}
            {secondaryAction ? <a className="sv-cta-editorial-premium-1__cta sv-cta-editorial-premium-1__cta--secondary" href={secondaryAction.href}>{secondaryAction.label}</a> : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
