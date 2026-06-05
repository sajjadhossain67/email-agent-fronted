import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'high' | 'medium' | 'low';
  className?: string;
}

const VARIANTS = {
  default: 'bg-slate-700/50 text-slate-300 border-slate-600',
  high:    'bg-red-500/10 text-red-400 border-red-500/30',
  medium:  'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
  low:     'bg-green-500/10 text-green-400 border-green-500/30',
};

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold border uppercase tracking-wider',
        VARIANTS[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
