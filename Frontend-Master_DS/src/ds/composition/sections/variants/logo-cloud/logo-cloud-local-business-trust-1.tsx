/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "logo-cloud" }>;

export const LOGO_CLOUD_LOCAL_BUSINESS_TRUST_1_META: SectionVariantMeta = {
  id: "logo-cloud-local-business-trust-1",
  kind: "logo-cloud",
  archetype: "local-business-trust",
  label: "Logo Cloud — Local Auto-Fit Grid",
  description: "Auto-fit logo grid at 9rem min cell on raised surface; foreground-muted opacity; fade-in entry.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["fade-in"],
  effects: {},
  density: "comfortable",
  complexity: "minimal",
};

export function LogoCloudLocalBusinessTrust1(props: Model) {
  const { header, logos } = props as any;
  return (
    <section className="sv-section-root sv-logo-cloud-local-business-trust-1" data-variant="logo-cloud-local-business-trust-1">
      <div className="sv-logo-cloud-local-business-trust-1__inner">
        {header?.title ? <h2 className="sv-logo-cloud-local-business-trust-1__title">{header.title}</h2> : null}
        <ul className="sv-logo-cloud-local-business-trust-1__grid">
          {logos.map((l: any) => (
            <li key={l.id} className="sv-logo-cloud-local-business-trust-1__cell">
              {l.href ? <a href={l.href} className="sv-logo-cloud-local-business-trust-1__link">{l.label}</a> : <span>{l.label}</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
