import { ReactNode } from 'react';
import { clsx } from 'clsx';
interface CardProps { children: ReactNode; className?: string; hover?: boolean; padding?: 'none'|'sm'|'md'|'lg'; }
export function Card({ children, className, hover=false, padding='md' }: CardProps) {
  return (
    <div className={clsx('bg-white rounded-2xl shadow-soft border border-gray-100',
      { 'hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300': hover,
        'p-0':padding==='none','p-4':padding==='sm','p-6':padding==='md','p-8':padding==='lg' },
      className)}>{children}</div>
  );
}