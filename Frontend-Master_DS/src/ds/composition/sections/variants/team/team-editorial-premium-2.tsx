/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "team" }>;

export const TEAM_EDITORIAL_PREMIUM_2_META: SectionVariantMeta = {
  id: "team-editorial-premium-2",
  kind: "team",
  archetype: "editorial-premium",
  label: "Team — Editorial 2-Column Bio Grid",
  description: "Two-column larger portrait grid with longer bios; for leadership pages; max 80rem.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft","stagger-text-60","fade-in"],
  effects: {},
  density: "extended",
  complexity: "rich",
};

export function TeamEditorialPremium2(props: Model) {
  const { header, members } = props as any;
  return (
    <section className="sv-section-root sv-team-editorial-premium-2" data-variant="team-editorial-premium-2">
      <div className="sv-team-editorial-premium-2__inner">
        {header ? (
          <div className="sv-team-editorial-premium-2__header">
            {header.kicker ? <div className="sv-team-editorial-premium-2__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-team-editorial-premium-2__title">{header.title}</h2> : null}
          </div>
        ) : null}
        <ul className="sv-team-editorial-premium-2__grid">
          {members.map((m: any) => (
            <li key={m.id} className="sv-team-editorial-premium-2__member">
              <div className="sv-team-editorial-premium-2__avatar" aria-hidden="true" />
              <div className="sv-team-editorial-premium-2__name">{m.name}</div>
              <div className="sv-team-editorial-premium-2__role">{m.role}</div>
              {m.bio ? <p className="sv-team-editorial-premium-2__bio">{m.bio}</p> : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
