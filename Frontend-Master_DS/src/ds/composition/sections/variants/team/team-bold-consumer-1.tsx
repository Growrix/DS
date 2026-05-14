/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "team" }>;

export const TEAM_BOLD_CONSUMER_1_META: SectionVariantMeta = {
  id: "team-bold-consumer-1",
  kind: "team",
  archetype: "bold-consumer",
  label: "Team — Bold 4-Col Grid",
  description: "Four-column team grid with circular avatars, bold names and role lines; stagger-text-60 across cells.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft","stagger-text-60"],
  effects: {},
  density: "comfortable",
  complexity: "standard",
};

export function TeamBoldConsumer1(props: Model) {
  const { header, members } = props as any;
  return (
    <section className="sv-section-root sv-team-bold-consumer-1" data-variant="team-bold-consumer-1">
      <div className="sv-team-bold-consumer-1__inner">
        {header ? (
          <div className="sv-team-bold-consumer-1__header">
            {header.kicker ? <div className="sv-team-bold-consumer-1__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-team-bold-consumer-1__title">{header.title}</h2> : null}
          </div>
        ) : null}
        <ul className="sv-team-bold-consumer-1__grid">
          {members.map((m: any) => (
            <li key={m.id} className="sv-team-bold-consumer-1__member">
              <div className="sv-team-bold-consumer-1__avatar" aria-hidden="true" />
              <div className="sv-team-bold-consumer-1__name">{m.name}</div>
              <div className="sv-team-bold-consumer-1__role">{m.role}</div>
              {m.bio ? <p className="sv-team-bold-consumer-1__bio">{m.bio}</p> : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
