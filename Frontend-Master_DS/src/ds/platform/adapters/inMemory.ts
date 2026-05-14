/**
 * In-memory content adapter — pass-through over literal preset content.
 *
 * This is the default adapter used by `PublicPresetPage` when no explicit
 * adapter is supplied. It mirrors today's behaviour: section content lives
 * inline on the preset and is rendered as-is.
 */

export { createInMemoryContentAdapter } from "../contentAdapter";
export type { ContentAdapter, ContentResolutionContext } from "../contentAdapter";
