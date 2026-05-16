import { ReactNode } from 'react';
import { clsx } from 'clsx';
interface BadgeProps { children: ReactNode; variant?: 'primary'|'success'|'gray'; }
export function Badge({ children, variant='primary' }: BadgeProps) {
  return (
    <span className={clsx('inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold',
      { 'bg-primary-100 text-primary-700':variant==='primary',
        'bg-green-100 text-green-700':variant==='success',
        'bg-gray-100 text-gray-700':variant==='gray' })}>{children}</span>
  );
}