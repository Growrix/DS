/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "footer-content" }>;

export const FOOTER_CONTENT_EDITORIAL_PREMIUM_1_META: SectionVariantMeta = {
  id: "footer-content-editorial-premium-1",
  kind: "footer-content",
  archetype: "editorial-premium",
  label: "Footer — Editorial Columns",
  description: "Brand block + multi-column nav + legal links + social row; surface-sunken; max 80rem.",
  supportsThemes: ["dark", "light"],
  motionPresets: [],
  effects: {},
  density: "extended",
  complexity: "standard",
};

export function FooterContentEditorialPremium1(props: Model) {
  const { brand, columns, socials, legalLinks, attribution } = props as any;
  return (
    <footer className="sv-section-root sv-footer-content-editorial-premium-1" data-variant="footer-content-editorial-premium-1">
      <div className="sv-footer-content-editorial-premium-1__inner">
        <div className="sv-footer-content-editorial-premium-1__top">
          {brand ? (
            <div className="sv-footer-content-editorial-premium-1__brand">
              <div className="sv-footer-content-editorial-premium-1__brand-name">{brand.name}</div>
              {brand.tagline ? <p className="sv-footer-content-editorial-premium-1__tagline">{brand.tagline}</p> : null}
            </div>
          ) : null}
          {columns && columns.length > 0 ? (
            <nav className="sv-footer-content-editorial-premium-1__cols">
              {columns.map((col: any, i: number) => (
                <div key={i} className="sv-footer-content-editorial-premium-1__col">
                  <h3 className="sv-footer-content-editorial-premium-1__col-title">{col.title}</h3>
                  <ul className="sv-footer-content-editorial-premium-1__col-list">
                    {col.links.map((l: any, j: number) => <li key={j}><a href={l.href} className="sv-footer-content-editorial-premium-1__col-link">{l.label}</a></li>)}
                  </ul>
                </div>
              ))}
            </nav>
          ) : null}
        </div>
        <div className="sv-footer-content-editorial-premium-1__bottom">
          {legalLinks && legalLinks.length > 0 ? (
            <ul className="sv-footer-content-editorial-premium-1__legal">{legalLinks.map((l: any) => <li key={l.id}><a href={l.href}>{l.label}</a></li>)}</ul>
          ) : null}
          {socials && socials.length > 0 ? (
            <ul className="sv-footer-content-editorial-premium-1__socials">{socials.map((s: any) => <li key={s.id}><a href={s.href} aria-label={s.label}>{s.label}</a></li>)}</ul>
          ) : null}
        </div>
        {attribution?.enabled ? <p className="sv-footer-content-editorial-premium-1__attr">{attribution.text ?? "Built with care"}</p> : null}
      </div>
    </footer>
  );
}
