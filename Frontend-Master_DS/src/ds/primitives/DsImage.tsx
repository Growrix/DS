/**
 * `DsImage` — DS-aware wrapper over `next/image`.
 *
 * Phase 12D — provides aspect-ratio tokens, a tokenized neutral
 * placeholder, and a consistent prop surface across variants. Variants
 * SHOULD use this primitive rather than `next/image` directly so the
 * placeholder + ratio behaviour stays consistent.
 *
 * `aspect` is a token id (e.g., `"widescreen"`); raw numeric ratios are
 * blocked by `ds:audit`. When `aspect` is supplied, the underlying
 * `<Image fill>` mode is used inside a wrapper `<div>` so layout stays
 * intrinsic without forcing `width`/`height` props.
 */

import * as React from "react";
import Image from "next/image";
import type { ImageProps as NextImageProps } from "next/image";

export type DsImageAspect =
  | "square"
  | "portrait"
  | "landscape"
  | "widescreen"
  | "cinema"
  | "card"
  | "hero";

export type DsImageProps = Omit<NextImageProps, "placeholder" | "blurDataURL"> & {
  /** Aspect-ratio token id. When supplied, the image fills its wrapper. */
  aspect?: DsImageAspect;
  /** Optional className on the wrapper element (NOT the underlying `<img>`). */
  wrapperClassName?: string;
  /** When true, renders a tokenized neutral placeholder while the image loads. */
  showPlaceholder?: boolean;
};

const ASPECT_CLASS: Record<DsImageAspect, string> = {
  square: "ds-aspect-square",
  portrait: "ds-aspect-portrait",
  landscape: "ds-aspect-landscape",
  widescreen: "ds-aspect-widescreen",
  cinema: "ds-aspect-cinema",
  card: "ds-aspect-card",
  hero: "ds-aspect-hero",
};

export function DsImage(props: DsImageProps) {
  const { aspect, wrapperClassName, showPlaceholder, alt, className, ...rest } = props;

  if (aspect) {
    const wrapperClasses = [
      "ds-media-wrapper",
      ASPECT_CLASS[aspect],
      showPlaceholder ? "ds-media-wrapper-placeholder" : "",
      wrapperClassName ?? "",
    ]
      .filter(Boolean)
      .join(" ");
    const imageClasses = ["ds-media-fill", className ?? ""].filter(Boolean).join(" ");
    return (
      <div className={wrapperClasses}>
        <Image
          {...rest}
          alt={alt}
          fill
          sizes={rest.sizes ?? "(min-width: 1024px) 50vw, 100vw"}
          className={imageClasses}
        />
      </div>
    );
  }

  return <Image {...rest} alt={alt} className={className} />;
}
