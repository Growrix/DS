/**
 * `DsSkeleton` — token-driven loading placeholder.
 *
 * Phase 12E — provides a consistent loading state across variants. Uses
 * `ds.media.css` `ds-aspect-*` tokens for shape control and a
 * tokenized shimmer animation that respects `prefers-reduced-motion`
 * (defined in `ds.media.css`).
 */

import * as React from "react";

import type { DsImageAspect } from "./DsImage";

const ASPECT_CLASS: Record<DsImageAspect, string> = {
  square: "ds-aspect-square",
  portrait: "ds-aspect-portrait",
  landscape: "ds-aspect-landscape",
  widescreen: "ds-aspect-widescreen",
  cinema: "ds-aspect-cinema",
  card: "ds-aspect-card",
  hero: "ds-aspect-hero",
};

export type DsSkeletonProps = {
  /** Shape of the placeholder. Defaults to `landscape` when omitted. */
  aspect?: DsImageAspect;
  /** Accessible label. Falls back to "Loading…". */
  ariaLabel?: string;
  className?: string;
};

export function DsSkeleton({ aspect, ariaLabel, className }: DsSkeletonProps) {
  const classes = [
    "ds-skeleton",
    aspect ? ASPECT_CLASS[aspect] : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");
  return <div className={classes} role="status" aria-label={ariaLabel ?? "Loading…"} aria-busy="true" />;
}
