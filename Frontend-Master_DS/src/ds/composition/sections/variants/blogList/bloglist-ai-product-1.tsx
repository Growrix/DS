/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type Model = Extract<PublicSectionModel, { kind: "blogList" }>;

export const BLOGLIST_AI_PRODUCT_1_META: SectionVariantMeta = {
  id: "bloglist-ai-product-1",
  kind: "blogList",
  archetype: "ai-product",
  label: "Blog List â€” AI 3-Col Cards",
  description: "Three-column blog cards with cover, title, date, excerpt; stagger-text-60 across cards on entry.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["fade-in","stagger-text-60"],
  effects: {},
  density: "comfortable",
  complexity: "standard",
};

export function BloglistAiProduct1(props: Model) {
  const { header, posts } = props as any;
  return (
    <section className="sv-section-root sv-bloglist-ai-product-1" data-variant="bloglist-ai-product-1">
      <div className="sv-bloglist-ai-product-1__inner">
        {header ? (
          <div className="sv-bloglist-ai-product-1__header">
            {header.kicker ? <div className="sv-bloglist-ai-product-1__kicker">{header.kicker}</div> : null}
            {header.title ? <h2 className="sv-bloglist-ai-product-1__title">{header.title}</h2> : null}
          </div>
        ) : null}
        <ul className="sv-bloglist-ai-product-1__grid">
          {posts.map((p: any) => (
            <li key={p.id} className="sv-bloglist-ai-product-1__card">
              <div className="sv-bloglist-ai-product-1__thumb" aria-hidden="true" />
              <h3 className="sv-bloglist-ai-product-1__post-title"><a href={p.href}>{p.title}</a></h3>
              {p.excerpt ? <p className="sv-bloglist-ai-product-1__excerpt">{p.excerpt}</p> : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
