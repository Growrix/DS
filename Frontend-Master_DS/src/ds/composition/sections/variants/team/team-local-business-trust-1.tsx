/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "team" }>;

export const TEAM_LOCAL_BUSINESS_TRUST_1_META: SectionVariantMeta = {
  id: "team-local-business-trust-1",
  kind: "team",
  archetype: "local-business-trust",
  label: "Team — Local 4-Col Grid",
  description: "Four-column staff grid with circular avatars, names and role lines; fade-in across cells.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft","fade-in"],
  effects: {},
  density: "comfortable",
  complexity: "standard",
};

export function TeamLocalBusinessTrust1(props: Model) {
  const { header, members } = props as any;
  return (
    <section className="sv-section-root sv-team-local-business-trust-1" data-variant="team-local-business-trust-1">
      <div className="sv-team-local-business-trust-1__inner">
        {header ? (
          <div className="sv-team-local-business-trust-1__header">
            {header.kicker ? <div className="sv-team-local-business-trust-1__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-team-local-business-trust-1__title">{header.title}</h2> : null}
          </div>
        ) : null}
        <ul className="sv-team-local-business-trust-1__grid">
          {members.map((m: any) => (
            <li key={m.id} className="sv-team-local-business-trust-1__member">
              <div className="sv-team-local-business-trust-1__avatar" aria-hidden="true" />
              <div className="sv-team-local-business-trust-1__name">{m.name}</div>
              <div className="sv-team-local-business-trust-1__role">{m.role}</div>
              {m.bio ? <p className="sv-team-local-business-trust-1__bio">{m.bio}</p> : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
