import * as React from "react";

import { SectionPattern } from "@/ds/composition/patterns/SectionPattern";
import { toHeader } from "@/ds/composition/sections/_helpers";
import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type LogoModel = Extract<PublicSectionModel, { kind: "logo-cloud" }>;

export const LOGO_CLOUD_MODERN_SAAS_MARQUEE_META: SectionVariantMeta = {
  id: "logo-cloud-modern-saas-marquee",
  kind: "logo-cloud",
  archetype: "modern-saas",
  label: "Logo Cloud — Modern SaaS Marquee",
  description:
    "Single-row horizontal marquee of logo labels. Track is duplicated for seamless loop. Mono tone in steady state. Pauses on hover. Suppressed under prefers-reduced-motion.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["fade-in"],
  effects: {},
  density: "compact",
  complexity: "minimal",
};

export function LogoCloudModernSaasMarquee(props: LogoModel) {
  const { header, logos } = props;
  const looped = React.useMemo(() => [...logos, ...logos], [logos]);

  return (
    <SectionPattern container="wide" header={toHeader(header)}>
      <div
        className="sv-logo-cloud-modern-saas-marquee"
        data-variant={LOGO_CLOUD_MODERN_SAAS_MARQUEE_META.id}
        data-archetype={LOGO_CLOUD_MODERN_SAAS_MARQUEE_META.archetype}
        aria-roledescription="logo wall"
      >
        <div className="sv-logo-cloud-modern-saas-marquee__track">
          {looped.map((logo, idx) => (
            <div
              key={`${logo.id}-${idx}`}
              className="sv-logo-cloud-modern-saas-marquee__item"
              aria-hidden={idx >= logos.length ? true : undefined}
            >
              {logo.label}
            </div>
          ))}
        </div>
      </div>
    </SectionPattern>
  );
}
