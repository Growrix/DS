"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "accent";
type ButtonSize    = "sm" | "md" | "lg";

interface ButtonProps {
  variant?:  ButtonVariant;
  size?:     ButtonSize;
  href?:     string;
  external?: boolean;
  disabled?: boolean;
  className?: string;
  children:  ReactNode;
  onClick?:  () => void;
  type?:     "button" | "submit" | "reset";
  icon?:     ReactNode;
  iconPosition?: "left" | "right";
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-dark shadow-accent hover:shadow-lg hover:-translate-y-0.5",
  secondary:
    "bg-primary text-white hover:bg-primary-600 hover:-translate-y-0.5",
  outline:
    "border-2 border-accent text-accent hover:bg-accent hover:text-white",
  ghost:
    "text-primary hover:text-accent hover:bg-primary-50",
  accent:
    "bg-white text-primary hover:bg-accent hover:text-white border border-neutral-200",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-7 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({
  variant = "primary",
  size    = "md",
  href,
  external,
  disabled,
  className,
  children,
  onClick,
  type = "button",
  icon,
  iconPosition = "right",
}: ButtonProps) {
  const base = cn(
    "inline-flex items-center gap-2 font-accent font-semibold tracking-wide",
    "rounded-ds-sm transition-all duration-200 ease-out cursor-pointer",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
    "disabled:opacity-50 disabled:pointer-events-none",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  const content = (
    <>
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </>
  );

  if (href) {
    const linkProps = external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};
    return (
      <Link href={href} className={base} {...linkProps}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={base}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}
