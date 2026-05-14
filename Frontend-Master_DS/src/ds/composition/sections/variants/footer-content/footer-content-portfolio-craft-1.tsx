/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "footer-content" }>;

export const FOOTER_CONTENT_PORTFOLIO_CRAFT_1_META: SectionVariantMeta = {
  id: "footer-content-portfolio-craft-1",
  kind: "footer-content",
  archetype: "portfolio-craft",
  label: "Footer — Portfolio Minimal Row",
  description: "Single-row minimal footer with name, copyright and small nav links; fade-in entry; compact density.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["fade-in"],
  effects: {},
  density: "compact",
  complexity: "minimal",
};

export function FooterContentPortfolioCraft1(props: Model) {
  const { brand, legalLinks, attribution } = props as any;
  return (
    <footer className="sv-section-root sv-footer-content-portfolio-craft-1" data-variant="footer-content-portfolio-craft-1">
      <div className="sv-footer-content-portfolio-craft-1__inner">
        {brand ? <span className="sv-footer-content-portfolio-craft-1__brand">{brand.name}</span> : null}
        {legalLinks && legalLinks.length > 0 ? (
          <ul className="sv-footer-content-portfolio-craft-1__legal">{legalLinks.map((l: any) => <li key={l.id}><a href={l.href}>{l.label}</a></li>)}</ul>
        ) : null}
        {attribution?.enabled ? <span className="sv-footer-content-portfolio-craft-1__attr">{attribution.text ?? "Built with care"}</span> : null}
      </div>
    </footer>
  );
}
