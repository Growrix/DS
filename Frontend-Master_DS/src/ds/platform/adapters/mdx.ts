/**
 * MDX content adapter — STUB.
 *
 * Phase 12A delivers only the contract; the MDX loader is not yet wired.
 * Calling `createMdxContentAdapter` throws so consumers can adopt the
 * interface today and fail loudly if they expect a working implementation.
 *
 * The full adapter will arrive in a follow-up phase and will accept a
 * `Record<string, MDXComponent>` keyed by section id, allowing MDX
 * documents to override section bodies while keeping the DS variant shell
 * intact.
 *
 * Until then, projects that need MDX content should compile MDX into
 * preset literals at build time and use `createInMemoryContentAdapter`.
 */

import type { ContentAdapter } from "../contentAdapter";

export type MdxAdapterOptions = {
  /** Reserved: directory of per-section MDX files. */
  contentRoot?: string;
};

export function createMdxContentAdapter(): ContentAdapter {
  throw new Error(
    "createMdxContentAdapter: stub. Phase 12A ships the contract only. " +
      "Compile MDX to preset literals and use createInMemoryContentAdapter " +
      "until the full adapter ships.",
  );
}
