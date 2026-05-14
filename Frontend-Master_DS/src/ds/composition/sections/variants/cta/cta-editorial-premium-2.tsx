/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "cta" }>;

export const CTA_EDITORIAL_PREMIUM_2_META: SectionVariantMeta = {
  id: "cta-editorial-premium-2",
  kind: "cta",
  archetype: "editorial-premium",
  label: "CTA — Editorial Banner Bar",
  description: "Horizontal accent banner bar with title-left, single CTA right; max 80rem; radius-xl.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft"],
  effects: {},
  density: "extended",
  complexity: "standard",
};

export function CtaEditorialPremium2(props: Model) {
  const { header, body, primaryAction } = props as any;
  return (
    <section className="sv-section-root sv-cta-editorial-premium-2" data-variant="cta-editorial-premium-2">
      <div className="sv-cta-editorial-premium-2__bar">
        <div className="sv-cta-editorial-premium-2__copy">
          {header?.title ? <h2 className="sv-cta-editorial-premium-2__title">{header.title}</h2> : null}
          {body ? <p className="sv-cta-editorial-premium-2__body">{body}</p> : null}
        </div>
        {primaryAction ? <a className="sv-cta-editorial-premium-2__cta" href={primaryAction.href}>{primaryAction.label}</a> : null}
      </div>
    </section>
  );
}
