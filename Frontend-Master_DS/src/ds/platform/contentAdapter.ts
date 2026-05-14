/**
 * Content adapter contract.
 *
 * Today, presets carry literal section content inline (titles, features, copy).
 * Tomorrow, the same section model may be backed by markdown files, MDX,
 * a headless CMS, or a database. The `ContentAdapter` interface gives the
 * platform a single seam to swap the content source without changing variant
 * components or preset shape.
 *
 * Resolution is synchronous so it stays server-renderable inside Next.js
 * server components. Async sources should pre-fetch content at preset-build
 * time and hand the resolved literals back to the in-memory adapter.
 *
 * NOTE: This is a contract-only addition in Phase 12A — the default
 * (`createInMemoryContentAdapter`) returns sections verbatim so existing
 * presets keep working with zero behaviour change.
 */

import type { PublicPageModel, PublicSectionModel } from "./publicSitePreset";

/**
 * A `ContentAdapter` resolves a section's content at render time. The default
 * in-memory adapter is a pass-through; markdown / MDX / CMS adapters override
 * `resolveSection` to merge external content into the section model before
 * the variant component sees it.
 */
export interface ContentAdapter {
  /** Stable identifier — used in audit reports. */
  readonly id: string;

  /**
   * Resolve a section model. Implementations MUST return a section of the
   * same `kind` and `id` as the input; only content fields may differ.
   *
   * Implementations MUST be synchronous (server-render friendly). Async
   * sources should hydrate the preset before render.
   */
  resolveSection(section: PublicSectionModel, ctx: ContentResolutionContext): PublicSectionModel;

  /**
   * Optional page-level hook. Defaults to identity. Adapters may use it to
   * inject computed sections (e.g., a "latest posts" list from markdown).
   */
  resolvePage?(page: PublicPageModel, ctx: ContentResolutionContext): PublicPageModel;
}

export type ContentResolutionContext = {
  /** Page identifier (route slug) the section is rendered under. */
  route: string;
  /** Active locale id, when the host preset declares i18n. */
  locale?: string;
};

/**
 * The default adapter: returns sections unchanged. Use this when preset
 * authors author literal content inline in the preset module (today's
 * behaviour).
 */
export function createInMemoryContentAdapter(): ContentAdapter {
  return {
    id: "in-memory",
    resolveSection(section) {
      return section;
    },
  };
}
