'use client';
import { useNotifications } from '@/hooks/useNotifications';
import { useDashboardStore } from '@/store/dashboardStore';
import { NotificationCard } from './NotificationCard';
import { EmptyState } from './EmptyState';
import { Spinner } from '@/components/ui/Spinner';
import type { Notification } from '@/types';

export function NotificationList() {
  const { data: notifications, isLoading, isError } = useNotifications();
  const filter = useDashboardStore(s => s.filter);

  if (isLoading) return <Spinner />;

  if (isError) {
    return (
      <div className="text-center py-24">
        <div className="text-5xl mb-4">⚠️</div>
        <h3 className="text-lg font-semibold text-red-400 mb-2">Backend unavailable</h3>
        <p className="text-sm text-slate-500 max-w-xs mx-auto">
          Could not connect to the API. Make sure the NestJS backend is running on port 3000.
        </p>
      </div>
    );
  }

  const filtered = (notifications ?? []).filter(
    (n: Notification) => filter === 'all' || n.priority === filter,
  );

  if (!filtered.length) return <EmptyState />;

  return (
    <div className="flex flex-col gap-3">
      {filtered.map((n: Notification, i: number) => (
        <div
          key={n.id}
          style={{ animationDelay: `${i * 50}ms` }}
        >
          <NotificationCard notification={n} />
        </div>
      ))}
    </div>
  );
}
