import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        'bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-2xl',
        'shadow-[0_0_30px_rgba(123,176,255,0.05)]',
        'transition-all duration-300',
        'hover:border-white/[0.15] hover:shadow-[0_0_40px_rgba(123,176,255,0.12)] hover:-translate-y-0.5',
        className
      )}
    >
      {children}
    </div>
  );
}
