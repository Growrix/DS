/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "team" }>;

export const TEAM_EDITORIAL_PREMIUM_1_META: SectionVariantMeta = {
  id: "team-editorial-premium-1",
  kind: "team",
  archetype: "editorial-premium",
  label: "Team — Editorial 4-Column Portrait Grid",
  description: "Four-column portrait grid with circular avatars (96px), name + role + bio; max 80rem; spacious gap-6.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft","stagger-text-60"],
  effects: {},
  density: "extended",
  complexity: "standard",
};

export function TeamEditorialPremium1(props: Model) {
  const { header, members } = props as any;
  return (
    <section className="sv-section-root sv-team-editorial-premium-1" data-variant="team-editorial-premium-1">
      <div className="sv-team-editorial-premium-1__inner">
        {header ? (
          <div className="sv-team-editorial-premium-1__header">
            {header.kicker ? <div className="sv-team-editorial-premium-1__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-team-editorial-premium-1__title">{header.title}</h2> : null}
          </div>
        ) : null}
        <ul className="sv-team-editorial-premium-1__grid">
          {members.map((m: any) => (
            <li key={m.id} className="sv-team-editorial-premium-1__member">
              <div className="sv-team-editorial-premium-1__avatar" aria-hidden="true" />
              <div className="sv-team-editorial-premium-1__name">{m.name}</div>
              <div className="sv-team-editorial-premium-1__role">{m.role}</div>
              {m.bio ? <p className="sv-team-editorial-premium-1__bio">{m.bio}</p> : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
