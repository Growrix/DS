/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "blogList" }>;

export const BLOGLIST_EDITORIAL_PREMIUM_3_META: SectionVariantMeta = {
  id: "bloglist-editorial-premium-3",
  kind: "blogList",
  archetype: "editorial-premium",
  label: "Blog list — Editorial Indexed Rows",
  description: "Vertical indexed rows of posts with hairline dividers; max 64rem column for long-form reading.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["fade-in"],
  effects: {},
  density: "extended",
  complexity: "minimal",
};

export function BloglistEditorialPremium3(props: Model) {
  const { header, posts } = props as any;
  return (
    <section className="sv-section-root sv-bloglist-editorial-premium-3" data-variant="bloglist-editorial-premium-3">
      <div className="sv-bloglist-editorial-premium-3__inner">
        {header ? (
          <div className="sv-bloglist-editorial-premium-3__header">
            {header.kicker ? <div className="sv-bloglist-editorial-premium-3__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-bloglist-editorial-premium-3__title">{header.title}</h2> : null}
          </div>
        ) : null}
        <ol className="sv-bloglist-editorial-premium-3__list">
          {posts.map((p: any) => (
            <li key={p.id} className="sv-bloglist-editorial-premium-3__row">
              <a className="sv-bloglist-editorial-premium-3__link" href={p.href}>
                <h3 className="sv-bloglist-editorial-premium-3__post-title">{p.title}</h3>
                {p.excerpt ? <p className="sv-bloglist-editorial-premium-3__excerpt">{p.excerpt}</p> : null}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
