import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/** Merge Tailwind classes intelligently */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Truncate string to max length */
export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str
  return str.slice(0, maxLength).trimEnd() + '…'
}

/** Format a date string */
export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/** Build a placeholder image URL */
export function placeholderImg(
  width: number,
  height: number,
  seed?: string | number
): string {
  const id = seed ?? Math.floor(Math.random() * 100)
  return `https://picsum.photos/seed/${id}/${width}/${height}`
}

/** Stagger animation delay helper */
export function staggerDelay(index: number, base = 100): string {
  return `${index * base}ms`
}
