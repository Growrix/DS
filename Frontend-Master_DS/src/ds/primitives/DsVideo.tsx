/**
 * `DsVideo` — DS-aware `<video>` primitive.
 *
 * Phase 12D — provides aspect-ratio tokens, poster support, and a
 * `prefers-reduced-motion` guard. When the user has reduced-motion
 * enabled, autoplay is suppressed and the poster is shown statically.
 *
 * Aspect tokens match `DsImage`. Raw aspect ratios are blocked by
 * `ds:audit`; consumers MUST use the token surface.
 */

"use client";

import * as React from "react";

export type DsVideoAspect =
  | "square"
  | "portrait"
  | "landscape"
  | "widescreen"
  | "cinema"
  | "card"
  | "hero";

export type DsVideoProps = {
  src: string;
  poster?: string;
  /** Accessible label — required when video conveys meaning. */
  ariaLabel?: string;
  aspect?: DsVideoAspect;
  /** When true, autoplay is requested. Suppressed under reduced-motion. */
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  className?: string;
  wrapperClassName?: string;
};

const ASPECT_CLASS: Record<DsVideoAspect, string> = {
  square: "ds-aspect-square",
  portrait: "ds-aspect-portrait",
  landscape: "ds-aspect-landscape",
  widescreen: "ds-aspect-widescreen",
  cinema: "ds-aspect-cinema",
  card: "ds-aspect-card",
  hero: "ds-aspect-hero",
};

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const listener = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);
  return reduced;
}

export function DsVideo(props: DsVideoProps) {
  const {
    src,
    poster,
    ariaLabel,
    aspect,
    autoPlay,
    loop,
    muted,
    controls,
    className,
    wrapperClassName,
  } = props;
  const reducedMotion = usePrefersReducedMotion();
  const shouldAutoplay = autoPlay && !reducedMotion;

  const video = (
    <video
      src={src}
      poster={poster}
      aria-label={ariaLabel}
      autoPlay={shouldAutoplay}
      loop={loop}
      muted={muted || shouldAutoplay}
      playsInline
      controls={controls}
      className={
        aspect ? ["ds-media-video-fill", className ?? ""].filter(Boolean).join(" ") : className
      }
    />
  );

  if (aspect) {
    const wrapperClasses = ["ds-media-wrapper", ASPECT_CLASS[aspect], wrapperClassName ?? ""]
      .filter(Boolean)
      .join(" ");
    return <div className={wrapperClasses}>{video}</div>;
  }
  return video;
}
