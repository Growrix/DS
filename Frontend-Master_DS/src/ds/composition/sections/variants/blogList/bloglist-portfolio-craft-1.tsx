/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "blogList" }>;

export const BLOGLIST_PORTFOLIO_CRAFT_1_META: SectionVariantMeta = {
  id: "bloglist-portfolio-craft-1",
  kind: "blogList",
  archetype: "portfolio-craft",
  label: "Blog List — Portfolio Indexed List",
  description: "Indexed list view of journal entries with two-digit numerals, title and date; fade-in entry.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft","fade-in"],
  effects: {},
  density: "comfortable",
  complexity: "standard",
};

export function BloglistPortfolioCraft1(props: Model) {
  const { header, posts } = props as any;
  return (
    <section className="sv-section-root sv-bloglist-portfolio-craft-1" data-variant="bloglist-portfolio-craft-1">
      <div className="sv-bloglist-portfolio-craft-1__inner">
        {header ? (
          <div className="sv-bloglist-portfolio-craft-1__header">
            {header.kicker ? <div className="sv-bloglist-portfolio-craft-1__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-bloglist-portfolio-craft-1__title">{header.title}</h2> : null}
          </div>
        ) : null}
        <ol className="sv-bloglist-portfolio-craft-1__list">
          {posts.map((p: any) => (
            <li key={p.id} className="sv-bloglist-portfolio-craft-1__row">
              <a className="sv-bloglist-portfolio-craft-1__link" href={p.href}>
                <h3 className="sv-bloglist-portfolio-craft-1__post-title">{p.title}</h3>
                {p.excerpt ? <p className="sv-bloglist-portfolio-craft-1__excerpt">{p.excerpt}</p> : null}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
