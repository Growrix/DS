export * as blocks from "./blocks";
export * as patterns from "./patterns";
export * as templates from "./templates";
export * from "./sections";

// Direct re-exports of high-traffic composition utilities so consumers can
// `import { SectionPattern, PageTemplate } from "@/ds"` without going through
// the namespace barrel.
export { SectionPattern, type SectionPatternProps } from "./patterns/SectionPattern";
export { PageTemplate, type PageTemplateProps } from "./templates/PageTemplate";

// Wireframe layer — registered page recipes for AI-driven retrieval.
export {
  WIREFRAME_REGISTRY,
  WIREFRAME_META_LIST,
  getWireframe,
  getDefaultWireframe,
  listWireframes,
  getWireframeDemoPage,
  validateWireframes,
  type WireframeViolation,
} from "./templates/wireframes/_registry";
export type {
  WireframeMeta,
  WireframePurpose,
  WireframeShell,
  WireframeSectionSpec,
  WireframeRegistry,
  WireframeFilter,
} from "./templates/wireframes/_schema";
