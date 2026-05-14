import * as React from "react";

import { SectionPattern } from "@/ds/composition/patterns/SectionPattern";
import { toHeader } from "@/ds/composition/sections/_helpers";
import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type TeamModel = Extract<PublicSectionModel, { kind: "team" }>;

export const TEAM_MODERN_SAAS_GRID_META: SectionVariantMeta = {
  id: "team-modern-saas-grid",
  kind: "team",
  archetype: "modern-saas",
  label: "Team — Modern SaaS Grid",
  description:
    "Three-column member grid; each member has circular avatar plate, name, role, optional bio (60ch), inline social links. Stagger reveal on enter.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft", "stagger-text-60"],
  effects: {},
  density: "comfortable",
  complexity: "standard",
};

export function TeamModernSaasGrid(props: TeamModel) {
  const { header, members } = props;
  return (
    <SectionPattern container="wide" header={toHeader(header)}>
      <ul
        className="sv-team-modern-saas-grid motion-stagger-text-60"
        data-variant={TEAM_MODERN_SAAS_GRID_META.id}
        data-archetype={TEAM_MODERN_SAAS_GRID_META.archetype}
      >
        {members.map((m) => (
          <li key={m.id} className="sv-team-modern-saas-grid__card motion-rise-soft">
            <div className="sv-team-modern-saas-grid__avatar" aria-hidden="true">
              {m.name.charAt(0)}
            </div>
            <h3 className="sv-team-modern-saas-grid__name">{m.name}</h3>
            <div className="sv-team-modern-saas-grid__role">{m.role}</div>
            {m.bio ? <p className="sv-team-modern-saas-grid__bio">{m.bio}</p> : null}
            {m.socials && m.socials.length > 0 ? (
              <ul className="sv-team-modern-saas-grid__socials">
                {m.socials.map((s) => (
                  <li key={s.id}>
                    <a
                      href={s.href}
                      className="sv-team-modern-saas-grid__social"
                      aria-label={`${m.name} on ${s.label}`}
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </SectionPattern>
  );
}
