import { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary'|'secondary'|'outline'|'ghost';
  size?: 'sm'|'md'|'lg';
  children: ReactNode;
  fullWidth?: boolean;
}
export function Button({ variant='primary', size='md', children, fullWidth=false, className, ...props }: ButtonProps) {
  return (
    <button className={clsx(
      'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50',
      { 'bg-primary-500 text-white hover:bg-primary-600 shadow-lg': variant==='primary',
        'bg-secondary-500 text-white hover:bg-secondary-600': variant==='secondary',
        'border-2 border-primary-500 text-primary-500 hover:bg-primary-50': variant==='outline',
        'text-primary-600 hover:bg-primary-50': variant==='ghost',
        'px-3 py-1.5 text-sm': size==='sm',
        'px-6 py-3 text-base': size==='md',
        'px-8 py-4 text-lg': size==='lg',
        'w-full': fullWidth },
      className)} {...props}>{children}</button>
  );
}