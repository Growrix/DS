/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "logo-cloud" }>;

export const LOGO_CLOUD_STARTUP_CONVERSION_1_META: SectionVariantMeta = {
  id: "logo-cloud-startup-conversion-1",
  kind: "logo-cloud",
  archetype: "startup-conversion",
  label: "Logo Cloud — Startup Auto-Fit Grid",
  description: "Auto-fit logo grid at 9rem min cell on raised surface; foreground-muted opacity; rise-soft entry.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft"],
  effects: {},
  density: "comfortable",
  complexity: "minimal",
};

export function LogoCloudStartupConversion1(props: Model) {
  const { header, logos } = props as any;
  return (
    <section className="sv-section-root sv-logo-cloud-startup-conversion-1" data-variant="logo-cloud-startup-conversion-1">
      <div className="sv-logo-cloud-startup-conversion-1__inner">
        {header?.title ? <h2 className="sv-logo-cloud-startup-conversion-1__title">{header.title}</h2> : null}
        <ul className="sv-logo-cloud-startup-conversion-1__grid">
          {logos.map((l: any) => (
            <li key={l.id} className="sv-logo-cloud-startup-conversion-1__cell">
              {l.href ? <a href={l.href} className="sv-logo-cloud-startup-conversion-1__link">{l.label}</a> : <span>{l.label}</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
