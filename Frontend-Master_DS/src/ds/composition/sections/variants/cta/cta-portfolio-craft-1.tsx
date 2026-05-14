/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "cta" }>;

export const CTA_PORTFOLIO_CRAFT_1_META: SectionVariantMeta = {
  id: "cta-portfolio-craft-1",
  kind: "cta",
  archetype: "portfolio-craft",
  label: "CTA — Portfolio Centred Card",
  description: "Centred CTA card on raised surface with headline, sub-line and primary action; rise-soft entry.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft"],
  effects: {},
  density: "comfortable",
  complexity: "minimal",
};

export function CtaPortfolioCraft1(props: Model) {
  const { header, body, primaryAction, secondaryAction } = props as any;
  return (
    <section className="sv-section-root sv-cta-portfolio-craft-1" data-variant="cta-portfolio-craft-1">
      <div className="sv-cta-portfolio-craft-1__card">
        {header?.kicker ? <div className="sv-cta-portfolio-craft-1__kicker">{header.kicker}</div> : null}
        {header?.title ? <h2 className="sv-cta-portfolio-craft-1__title">{header.title}</h2> : null}
        {body ? <p className="sv-cta-portfolio-craft-1__body">{body}</p> : header?.lede ? <p className="sv-cta-portfolio-craft-1__body">{header.lede}</p> : null}
        {(primaryAction || secondaryAction) ? (
          <div className="sv-cta-portfolio-craft-1__actions">
            {primaryAction ? <a className="sv-cta-portfolio-craft-1__cta sv-cta-portfolio-craft-1__cta--primary" href={primaryAction.href}>{primaryAction.label}</a> : null}
            {secondaryAction ? <a className="sv-cta-portfolio-craft-1__cta sv-cta-portfolio-craft-1__cta--secondary" href={secondaryAction.href}>{secondaryAction.label}</a> : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
