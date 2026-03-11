import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-inter font-semibold rounded-xl',
        'px-6 py-3 min-h-[44px] text-base',
        'transition-all duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-base',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        variant === 'primary' && [
          'bg-gradient-to-r from-brand-blue to-brand-cyan text-[#080b14]',
          'hover:shadow-[0_0_24px_rgba(123,176,255,0.4)] hover:-translate-y-0.5',
          'not-disabled:active:translate-y-0',
        ],
        variant === 'secondary' && [
          'border border-brand-blue/40 text-brand-blue bg-transparent',
          'hover:border-brand-blue hover:bg-brand-blue/10',
        ],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
