import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type FooterModel = Extract<PublicSectionModel, { kind: "footer-content" }>;

export const FOOTER_CONTENT_MODERN_SAAS_MINIMAL_META: SectionVariantMeta = {
  id: "footer-content-modern-saas-minimal",
  kind: "footer-content",
  archetype: "modern-saas",
  label: "Footer — Modern SaaS Minimal Strip",
  description:
    "Single-row minimal footer; brand wordmark left, inline legal links centre, attribution right; collapses to centred stack below 720 px.",
  supportsThemes: ["dark", "light"],
  motionPresets: [],
  effects: {},
  density: "compact",
  complexity: "minimal",
};

export function FooterContentModernSaasMinimal(props: FooterModel) {
  const { brand, legalLinks, attribution } = props;

  return (
    <footer
      className="sv-section-root sv-footer-content-modern-saas-minimal"
      data-variant={FOOTER_CONTENT_MODERN_SAAS_MINIMAL_META.id}
      data-archetype={FOOTER_CONTENT_MODERN_SAAS_MINIMAL_META.archetype}
    >
      <div className="sv-content-layer sv-footer-content-modern-saas-minimal__inner">
        {brand?.name ? (
          <div className="sv-footer-content-modern-saas-minimal__brand">{brand.name}</div>
        ) : null}

        {legalLinks && legalLinks.length > 0 ? (
          <ul className="sv-footer-content-modern-saas-minimal__legal">
            {legalLinks.map((l) => (
              <li key={l.id}>
                <a href={l.href} className="sv-footer-content-modern-saas-minimal__legal-link">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        ) : null}

        {attribution ? (
          <div className="sv-footer-content-modern-saas-minimal__attribution">
            {attribution.prefix ? <span>{attribution.prefix} </span> : null}
            <a href={attribution.url} aria-label={attribution.ariaLabel}>
              {attribution.linkText}
            </a>
            {attribution.suffix ? <span> {attribution.suffix}</span> : null}
          </div>
        ) : null}
      </div>
    </footer>
  );
}
