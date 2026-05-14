/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "team" }>;

export const TEAM_AI_PRODUCT_1_META: SectionVariantMeta = {
  id: "team-ai-product-1",
  kind: "team",
  archetype: "ai-product",
  label: "Team â€” AI 4-Col Grid",
  description: "Four-column team grid with circular avatars, names and role lines; stagger-text-60 across cells.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["fade-in","stagger-text-60"],
  effects: {},
  density: "comfortable",
  complexity: "standard",
};

export function TeamAiProduct1(props: Model) {
  const { header, members } = props as any;
  return (
    <section className="sv-section-root sv-team-ai-product-1" data-variant="team-ai-product-1">
      <div className="sv-team-ai-product-1__inner">
        {header ? (
          <div className="sv-team-ai-product-1__header">
            {header.kicker ? <div className="sv-team-ai-product-1__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-team-ai-product-1__title">{header.title}</h2> : null}
          </div>
        ) : null}
        <ul className="sv-team-ai-product-1__grid">
          {members.map((m: any) => (
            <li key={m.id} className="sv-team-ai-product-1__member">
              <div className="sv-team-ai-product-1__avatar" aria-hidden="true" />
              <div className="sv-team-ai-product-1__name">{m.name}</div>
              <div className="sv-team-ai-product-1__role">{m.role}</div>
              {m.bio ? <p className="sv-team-ai-product-1__bio">{m.bio}</p> : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
