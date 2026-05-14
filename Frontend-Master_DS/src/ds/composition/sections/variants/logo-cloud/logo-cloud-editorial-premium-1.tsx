/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "logo-cloud" }>;

export const LOGO_CLOUD_EDITORIAL_PREMIUM_1_META: SectionVariantMeta = {
  id: "logo-cloud-editorial-premium-1",
  kind: "logo-cloud",
  archetype: "editorial-premium",
  label: "Logo cloud — Editorial Quiet Row",
  description: "Quiet logo wall with muted text labels in auto-fit grid; minimal chrome; centred row.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["fade-in"],
  effects: {},
  density: "comfortable",
  complexity: "minimal",
};

export function LogoCloudEditorialPremium1(props: Model) {
  const { header, logos } = props as any;
  return (
    <section className="sv-section-root sv-logo-cloud-editorial-premium-1" data-variant="logo-cloud-editorial-premium-1">
      <div className="sv-logo-cloud-editorial-premium-1__inner">
        {header?.title ? <h2 className="sv-logo-cloud-editorial-premium-1__title">{header.title}</h2> : null}
        <ul className="sv-logo-cloud-editorial-premium-1__grid">
          {logos.map((l: any) => (
            <li key={l.id} className="sv-logo-cloud-editorial-premium-1__cell">
              {l.href ? <a href={l.href} className="sv-logo-cloud-editorial-premium-1__link">{l.label}</a> : <span>{l.label}</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
