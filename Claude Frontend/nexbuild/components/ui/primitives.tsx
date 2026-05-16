import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

// ============================================================
// CONTAINER
// ============================================================
interface ContainerProps {
  children:  ReactNode;
  className?: string;
  size?:     "default" | "sm" | "xs";
}

const containerSizes = {
  default: "max-w-[1240px]",
  sm:      "max-w-[960px]",
  xs:      "max-w-[720px]",
};

export function Container({ children, className, size = "default" }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        containerSizes[size],
        className,
      )}
    >
      {children}
    </div>
  );
}

// ============================================================
// SECTION WRAPPER
// ============================================================
interface SectionWrapperProps {
  children:   ReactNode;
  className?: string;
  id?:        string;
  bg?:        "white" | "light" | "primary" | "dark";
  paddingY?:  "sm" | "md" | "lg" | "xl" | "none";
}

const bgStyles = {
  white:   "bg-white",
  light:   "bg-[#F7F8FC]",
  primary: "bg-primary text-white",
  dark:    "bg-dark text-white",
};

const paddingStyles = {
  none: "",
  sm:   "py-12 md:py-16",
  md:   "py-16 md:py-24",
  lg:   "py-20 md:py-32",
  xl:   "py-24 md:py-40",
};

export function SectionWrapper({
  children,
  className,
  id,
  bg = "white",
  paddingY = "md",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(bgStyles[bg], paddingStyles[paddingY], className)}
    >
      {children}
    </section>
  );
}

// ============================================================
// SECTION LABEL
// ============================================================
interface SectionLabelProps {
  children:   ReactNode;
  className?: string;
  light?:     boolean;
}

export function SectionLabel({ children, className, light }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "section-label mb-3",
        light ? "text-accent" : "text-accent",
        className,
      )}
    >
      {children}
    </p>
  );
}

// ============================================================
// HEADING
// ============================================================
type HeadingLevel = "h1" | "h2" | "h3" | "h4";
type HeadingSize  = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

interface HeadingProps {
  as?:        HeadingLevel;
  size?:      HeadingSize;
  children:   ReactNode;
  className?: string;
  italic?:    boolean;
  light?:     boolean;
}

const headingSizes: Record<HeadingSize, string> = {
  xs:  "text-lg md:text-xl",
  sm:  "text-xl md:text-2xl",
  md:  "text-2xl md:text-3xl",
  lg:  "text-3xl md:text-4xl",
  xl:  "text-4xl md:text-5xl",
  "2xl": "text-5xl md:text-6xl",
  "3xl": "text-6xl md:text-7xl",
};

export function Heading({
  as: Tag = "h2",
  size = "lg",
  children,
  className,
  italic,
  light,
}: HeadingProps) {
  return (
    <Tag
      className={cn(
        "heading-display",
        headingSizes[size],
        italic && "italic",
        light ? "text-white" : "text-primary",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

// ============================================================
// DIVIDER
// ============================================================
export function Divider({ className }: { className?: string }) {
  return (
    <hr className={cn("border-neutral-100", className)} />
  );
}

// ============================================================
// BADGE
// ============================================================
interface BadgeProps {
  children:   ReactNode;
  variant?:   "accent" | "primary" | "neutral";
  className?: string;
}

export function Badge({ children, variant = "accent", className }: BadgeProps) {
  const styles = {
    accent:  "bg-accent/10 text-accent border-accent/20",
    primary: "bg-primary/10 text-primary border-primary/20",
    neutral: "bg-neutral-100 text-neutral-600 border-neutral-200",
  };
  return (
    <span
      className={cn(
        "inline-block text-xs font-semibold tracking-widest uppercase",
        "px-3 py-1 rounded-full border",
        styles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
