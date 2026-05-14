/**
 * Markdown content adapter — STUB.
 *
 * Phase 12A delivers only the contract; the markdown loader is not yet
 * wired. Calling `createMarkdownContentAdapter` throws so consumers can
 * adopt the interface today and fail loudly if they expect a working
 * implementation. The full adapter will arrive in a follow-up phase and
 * will:
 *   1. Accept a `Record<string, MarkdownEntry>` keyed by section id.
 *   2. Parse front-matter for kind-specific fields (title, lede, features).
 *   3. Merge front-matter values into the section model.
 *   4. Render the markdown body into rich-text fields via the DS's
 *      `<Prose>` primitive.
 *
 * Until then, projects that need external content should pre-compile their
 * markdown into a preset module at build time and hand it to the in-memory
 * adapter.
 */

import type { ContentAdapter } from "../contentAdapter";

export type MarkdownAdapterOptions = {
  /** Reserved: directory containing per-section markdown files. */
  contentRoot?: string;
};

export function createMarkdownContentAdapter(): ContentAdapter {
  throw new Error(
    "createMarkdownContentAdapter: stub. Phase 12A ships the contract only. " +
      "Pre-compile markdown to a preset and use createInMemoryContentAdapter " +
      "until the full adapter ships.",
  );
}
