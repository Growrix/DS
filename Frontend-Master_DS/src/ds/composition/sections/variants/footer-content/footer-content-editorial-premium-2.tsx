/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "footer-content" }>;

export const FOOTER_CONTENT_EDITORIAL_PREMIUM_2_META: SectionVariantMeta = {
  id: "footer-content-editorial-premium-2",
  kind: "footer-content",
  archetype: "editorial-premium",
  label: "Footer — Editorial Minimal Row",
  description: "Single-row minimal footer: brand name + legal links + attribution; padding-8; for one-page sites.",
  supportsThemes: ["dark", "light"],
  motionPresets: [],
  effects: {},
  density: "compact",
  complexity: "minimal",
};

export function FooterContentEditorialPremium2(props: Model) {
  const { brand, legalLinks, attribution } = props as any;
  return (
    <footer className="sv-section-root sv-footer-content-editorial-premium-2" data-variant="footer-content-editorial-premium-2">
      <div className="sv-footer-content-editorial-premium-2__inner">
        {brand ? <span className="sv-footer-content-editorial-premium-2__brand">{brand.name}</span> : null}
        {legalLinks && legalLinks.length > 0 ? (
          <ul className="sv-footer-content-editorial-premium-2__legal">{legalLinks.map((l: any) => <li key={l.id}><a href={l.href}>{l.label}</a></li>)}</ul>
        ) : null}
        {attribution?.enabled ? <span className="sv-footer-content-editorial-premium-2__attr">{attribution.text ?? "Built with care"}</span> : null}
      </div>
    </footer>
  );
}
