/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "team" }>;

export const TEAM_PORTFOLIO_CRAFT_2_META: SectionVariantMeta = {
  id: "team-portfolio-craft-2",
  kind: "team",
  archetype: "portfolio-craft",
  label: "Team — Portfolio 4-Col Studio",
  description: "Four-column studio member grid with circular avatars, names and role lines; fade-in across cells.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft","fade-in"],
  effects: {},
  density: "comfortable",
  complexity: "standard",
};

export function TeamPortfolioCraft2(props: Model) {
  const { header, members } = props as any;
  return (
    <section className="sv-section-root sv-team-portfolio-craft-2" data-variant="team-portfolio-craft-2">
      <div className="sv-team-portfolio-craft-2__inner">
        {header ? (
          <div className="sv-team-portfolio-craft-2__header">
            {header.kicker ? <div className="sv-team-portfolio-craft-2__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-team-portfolio-craft-2__title">{header.title}</h2> : null}
          </div>
        ) : null}
        <ul className="sv-team-portfolio-craft-2__grid">
          {members.map((m: any) => (
            <li key={m.id} className="sv-team-portfolio-craft-2__member">
              <div className="sv-team-portfolio-craft-2__avatar" aria-hidden="true" />
              <div className="sv-team-portfolio-craft-2__name">{m.name}</div>
              <div className="sv-team-portfolio-craft-2__role">{m.role}</div>
              {m.bio ? <p className="sv-team-portfolio-craft-2__bio">{m.bio}</p> : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
