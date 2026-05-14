/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "blogList" }>;

export const BLOGLIST_BOLD_CONSUMER_1_META: SectionVariantMeta = {
  id: "bloglist-bold-consumer-1",
  kind: "blogList",
  archetype: "bold-consumer",
  label: "Blog List — Bold 3-Col Cards",
  description: "Three-column blog cards with cover image, bold title, date and excerpt; magnetic-hover lift on card hover.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft","magnetic-hover"],
  effects: {},
  density: "comfortable",
  complexity: "standard",
};

export function BloglistBoldConsumer1(props: Model) {
  const { header, posts } = props as any;
  return (
    <section className="sv-section-root sv-bloglist-bold-consumer-1" data-variant="bloglist-bold-consumer-1">
      <div className="sv-bloglist-bold-consumer-1__inner">
        {header ? (
          <div className="sv-bloglist-bold-consumer-1__header">
            {header.kicker ? <div className="sv-bloglist-bold-consumer-1__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-bloglist-bold-consumer-1__title">{header.title}</h2> : null}
          </div>
        ) : null}
        <ul className="sv-bloglist-bold-consumer-1__grid">
          {posts.map((p: any) => (
            <li key={p.id} className="sv-bloglist-bold-consumer-1__card">
              <div className="sv-bloglist-bold-consumer-1__thumb" aria-hidden="true" />
              <h3 className="sv-bloglist-bold-consumer-1__post-title"><a href={p.href}>{p.title}</a></h3>
              {p.excerpt ? <p className="sv-bloglist-bold-consumer-1__excerpt">{p.excerpt}</p> : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
