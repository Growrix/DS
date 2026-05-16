import React from 'react'
import { cn } from '@/lib/utils'
import type { ContainerProps, SectionHeaderProps, CardProps } from '@/types'

// ─── Container ───────────────────────────────────────────────────────────────

const containerSizes: Record<NonNullable<ContainerProps['size']>, string> = {
  sm:   'max-w-3xl',
  md:   'max-w-5xl',
  lg:   'max-w-6xl',
  xl:   'max-w-7xl',
  full: 'max-w-full',
}

export function Container({ children, className, size = 'xl' }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        containerSizes[size],
        className
      )}
    >
      {children}
    </div>
  )
}

// ─── Section Header ──────────────────────────────────────────────────────────

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  titleClassName,
  className,
  inverted = false,
}: SectionHeaderProps) {
  const alignClass = {
    left:   'text-left',
    center: 'text-center mx-auto',
    right:  'text-right ml-auto',
  }[align]

  return (
    <div className={cn('max-w-2xl', alignClass, className)}>
      {eyebrow && (
        <p
          className={cn(
            'mb-3 text-sm font-semibold uppercase tracking-widest font-display',
            inverted ? 'text-accent-400' : 'text-primary-600'
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'font-display font-bold leading-tight tracking-tight',
          'text-display-md sm:text-display-lg',
          inverted ? 'text-white' : 'text-forest',
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-body-md leading-relaxed',
            inverted ? 'text-white/75' : 'text-neutral-600'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

// ─── Badge ───────────────────────────────────────────────────────────────────

interface BadgeProps {
  children: React.ReactNode
  variant?: 'primary' | 'accent' | 'neutral' | 'white'
  className?: string
  size?: 'sm' | 'md'
}

export function Badge({
  children,
  variant = 'primary',
  className,
  size = 'sm',
}: BadgeProps) {
  const variants: Record<string, string> = {
    primary: 'bg-primary-100 text-primary-700',
    accent:  'bg-accent-100  text-accent-700',
    neutral: 'bg-neutral-100 text-neutral-700',
    white:   'bg-white/20    text-white',
  }
  const sizes: Record<string, string> = {
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-3    py-1   text-sm',
  }
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full font-semibold font-display uppercase tracking-wide',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  )
}

// ─── Card ────────────────────────────────────────────────────────────────────

const cardVariants: Record<NonNullable<CardProps['variant']>, string> = {
  default:  'bg-white shadow-card',
  elevated: 'bg-white shadow-xl',
  bordered: 'bg-white border border-neutral-200',
  ghost:    'bg-neutral-50',
}

const cardPadding: Record<NonNullable<CardProps['padding']>, string> = {
  none: '',
  sm:   'p-4',
  md:   'p-6',
  lg:   'p-8',
}

export function Card({
  variant = 'default',
  className,
  children,
  hover = false,
  padding = 'md',
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl overflow-hidden transition-all duration-300',
        cardVariants[variant],
        cardPadding[padding],
        hover && 'hover:shadow-card-hover hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  )
}

// ─── Divider ─────────────────────────────────────────────────────────────────

export function Divider({ className }: { className?: string }) {
  return <hr className={cn('border-neutral-200', className)} />
}

// ─── Section Wrapper ─────────────────────────────────────────────────────────

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  as?: 'section' | 'div' | 'article'
}

export function Section({ children, className, id, as: Tag = 'section' }: SectionProps) {
  return (
    <Tag id={id} className={cn('py-16 sm:py-20 lg:py-24', className)}>
      {children}
    </Tag>
  )
}

// ─── Icon Box ────────────────────────────────────────────────────────────────

interface IconBoxProps {
  icon: React.ReactNode
  variant?: 'primary' | 'accent' | 'white'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function IconBox({
  icon,
  variant = 'primary',
  size = 'md',
  className,
}: IconBoxProps) {
  const variants: Record<string, string> = {
    primary: 'bg-primary-100 text-primary-600',
    accent:  'bg-accent-100  text-accent-600',
    white:   'bg-white/20    text-white',
  }
  const sizes: Record<string, string> = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  }
  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-xl',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {icon}
    </div>
  )
}
