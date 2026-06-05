import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { formatDistanceToNow, format } from 'date-fns';
import type { Priority } from '@/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(iso: string) {
  return format(new Date(iso), 'MMM d, yyyy h:mm a');
}

export function formatRelative(iso: string) {
  return formatDistanceToNow(new Date(iso), { addSuffix: true });
}

export const priorityConfig: Record<
  Priority,
  { bar: string; badge: string; icon: string; label: string }
> = {
  HIGH: {
    bar: 'bg-red-500',
    badge: 'bg-red-500/10 text-red-400 border-red-500/30',
    icon: '🔴',
    label: 'High',
  },
  MEDIUM: {
    bar: 'bg-yellow-500',
    badge: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
    icon: '🟡',
    label: 'Medium',
  },
  LOW: {
    bar: 'bg-green-500',
    badge: 'bg-green-500/10 text-green-400 border-green-500/30',
    icon: '🟢',
    label: 'Low',
  },
};
