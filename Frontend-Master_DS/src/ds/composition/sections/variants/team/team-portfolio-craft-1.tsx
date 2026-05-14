/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "team" }>;

export const TEAM_PORTFOLIO_CRAFT_1_META: SectionVariantMeta = {
  id: "team-portfolio-craft-1",
  kind: "team",
  archetype: "portfolio-craft",
  label: "Team — Portfolio 2-Col Studio",
  description: "Two-column studio member grid with circular avatars, names and role lines; rise-soft across cells.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft","fade-in"],
  effects: {},
  density: "comfortable",
  complexity: "standard",
};

export function TeamPortfolioCraft1(props: Model) {
  const { header, members } = props as any;
  return (
    <section className="sv-section-root sv-team-portfolio-craft-1" data-variant="team-portfolio-craft-1">
      <div className="sv-team-portfolio-craft-1__inner">
        {header ? (
          <div className="sv-team-portfolio-craft-1__header">
            {header.kicker ? <div className="sv-team-portfolio-craft-1__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-team-portfolio-craft-1__title">{header.title}</h2> : null}
          </div>
        ) : null}
        <ul className="sv-team-portfolio-craft-1__grid">
          {members.map((m: any) => (
            <li key={m.id} className="sv-team-portfolio-craft-1__member">
              <div className="sv-team-portfolio-craft-1__avatar" aria-hidden="true" />
              <div className="sv-team-portfolio-craft-1__name">{m.name}</div>
              <div className="sv-team-portfolio-craft-1__role">{m.role}</div>
              {m.bio ? <p className="sv-team-portfolio-craft-1__bio">{m.bio}</p> : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
