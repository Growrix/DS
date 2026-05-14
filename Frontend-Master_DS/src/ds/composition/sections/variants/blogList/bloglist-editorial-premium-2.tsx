/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "blogList" }>;

export const BLOGLIST_EDITORIAL_PREMIUM_2_META: SectionVariantMeta = {
  id: "bloglist-editorial-premium-2",
  kind: "blogList",
  archetype: "editorial-premium",
  label: "Blog list — Editorial 2-Column Cards",
  description: "Two-column blog cards with 16:10 thumb, large title, restrained excerpt; max 80rem container.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft","stagger-text-60"],
  effects: {},
  density: "extended",
  complexity: "standard",
};

export function BloglistEditorialPremium2(props: Model) {
  const { header, posts } = props as any;
  return (
    <section className="sv-section-root sv-bloglist-editorial-premium-2" data-variant="bloglist-editorial-premium-2">
      <div className="sv-bloglist-editorial-premium-2__inner">
        {header ? (
          <div className="sv-bloglist-editorial-premium-2__header">
            {header.kicker ? <div className="sv-bloglist-editorial-premium-2__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-bloglist-editorial-premium-2__title">{header.title}</h2> : null}
          </div>
        ) : null}
        <ul className="sv-bloglist-editorial-premium-2__grid">
          {posts.map((p: any) => (
            <li key={p.id} className="sv-bloglist-editorial-premium-2__card">
              <div className="sv-bloglist-editorial-premium-2__thumb" aria-hidden="true" />
              <h3 className="sv-bloglist-editorial-premium-2__post-title"><a href={p.href}>{p.title}</a></h3>
              {p.excerpt ? <p className="sv-bloglist-editorial-premium-2__excerpt">{p.excerpt}</p> : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
