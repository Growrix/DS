'use client'

import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { ButtonProps } from '@/types'

const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-primary-600 text-white hover:bg-primary-700 shadow-green hover:shadow-lg focus-visible:ring-primary-400',
  secondary:
    'bg-forest text-white hover:bg-forest-mid shadow-md hover:shadow-lg focus-visible:ring-forest',
  outline:
    'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white focus-visible:ring-primary-400',
  ghost:
    'text-primary-600 hover:bg-primary-50 focus-visible:ring-primary-400',
  accent:
    'bg-accent-400 text-forest font-bold hover:bg-accent-500 shadow-accent hover:shadow-lg focus-visible:ring-accent-300',
}

const sizeStyles: Record<NonNullable<ButtonProps['size']>, string> = {
  sm:  'px-4 py-2 text-sm gap-1.5',
  md:  'px-6 py-3 text-base gap-2',
  lg:  'px-8 py-3.5 text-base gap-2',
  xl:  'px-10 py-4 text-lg gap-2.5',
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  className,
  fullWidth,
  disabled,
  type = 'button',
  external,
  icon,
  iconPosition = 'right',
}: ButtonProps) {
  const base = cn(
    'inline-flex items-center justify-center rounded-md font-semibold font-display',
    'transition-all duration-250 ease-smooth',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:pointer-events-none',
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && 'w-full',
    className
  )

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  )

  if (href) {
    const linkProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
    return (
      <Link href={href} className={base} {...linkProps}>
        {content}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={base}>
      {content}
    </button>
  )
}
