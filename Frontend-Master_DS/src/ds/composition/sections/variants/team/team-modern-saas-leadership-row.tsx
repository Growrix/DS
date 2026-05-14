import * as React from "react";

import { SectionPattern } from "@/ds/composition/patterns/SectionPattern";
import { toHeader } from "@/ds/composition/sections/_helpers";
import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type TeamModel = Extract<PublicSectionModel, { kind: "team" }>;

export const TEAM_MODERN_SAAS_LEADERSHIP_ROW_META: SectionVariantMeta = {
  id: "team-modern-saas-leadership-row",
  kind: "team",
  archetype: "modern-saas",
  label: "Team — Modern SaaS Leadership Row",
  description:
    "First member rendered as featured leadership card (larger avatar, longer bio); remaining members rendered in 4-col auto-fit grid below. Collapses to single column under 720 px.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft", "stagger-text-60"],
  effects: {},
  density: "comfortable",
  complexity: "standard",
};

export function TeamModernSaasLeadershipRow(props: TeamModel) {
  const { header, members } = props;
  const [lead, ...rest] = members;
  return (
    <SectionPattern container="wide" header={toHeader(header)}>
      <div
        className="sv-team-modern-saas-leadership-row motion-stagger-text-60"
        data-variant={TEAM_MODERN_SAAS_LEADERSHIP_ROW_META.id}
        data-archetype={TEAM_MODERN_SAAS_LEADERSHIP_ROW_META.archetype}
      >
        {lead ? (
          <article className="sv-team-modern-saas-leadership-row__lead motion-rise-soft">
            <div className="sv-team-modern-saas-leadership-row__lead-avatar" aria-hidden="true">
              {lead.name.charAt(0)}
            </div>
            <div className="sv-team-modern-saas-leadership-row__lead-body">
              <h3 className="sv-team-modern-saas-leadership-row__lead-name">{lead.name}</h3>
              <div className="sv-team-modern-saas-leadership-row__lead-role">{lead.role}</div>
              {lead.bio ? (
                <p className="sv-team-modern-saas-leadership-row__lead-bio">{lead.bio}</p>
              ) : null}
              {lead.socials && lead.socials.length > 0 ? (
                <ul className="sv-team-modern-saas-leadership-row__lead-socials">
                  {lead.socials.map((s) => (
                    <li key={s.id}>
                      <a href={s.href}>{s.label}</a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </article>
        ) : null}
        {rest.length > 0 ? (
          <ul className="sv-team-modern-saas-leadership-row__grid">
            {rest.map((m) => (
              <li
                key={m.id}
                className="sv-team-modern-saas-leadership-row__card motion-rise-soft"
              >
                <div
                  className="sv-team-modern-saas-leadership-row__avatar"
                  aria-hidden="true"
                >
                  {m.name.charAt(0)}
                </div>
                <h4 className="sv-team-modern-saas-leadership-row__name">{m.name}</h4>
                <div className="sv-team-modern-saas-leadership-row__role">{m.role}</div>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </SectionPattern>
  );
}
