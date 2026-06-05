'use client';
import { formatDistanceToNow } from 'date-fns';
import type { Notification, Priority } from '@/types';
import { useMarkRead } from '@/hooks/useNotifications';
import { priorityConfig } from '@/lib/utils';

export function NotificationCard({ notification: n }: { notification: Notification }) {
  const { mutate: markRead, isPending } = useMarkRead();
  const s = priorityConfig[n.priority as Priority] ?? priorityConfig.LOW;

  return (
    <div
      onClick={() => !n.isRead && !isPending && markRead(n.id)}
      className={`relative bg-slate-800/80 border border-slate-700/50 rounded-2xl p-5
        flex gap-4 transition-all duration-200 backdrop-blur-sm overflow-hidden
        hover:border-slate-500/60 hover:shadow-lg hover:shadow-black/20 hover:translate-x-0.5
        animate-slide-in group
        ${n.isRead ? 'opacity-55' : 'cursor-pointer'}`}
    >
      {/* Left priority accent bar */}
      <div className={`absolute left-0 top-5 bottom-5 w-[3px] rounded-r-full ${s.bar}`} />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] to-transparent pointer-events-none" />

      {/* Priority icon */}
      <span className="text-xl mt-0.5 shrink-0 relative z-10">{s.icon}</span>

      {/* Main content */}
      <div className="flex-1 min-w-0 relative z-10">
        <div className="flex items-center gap-2 flex-wrap mb-1">
          <span className="font-semibold text-white truncate max-w-[380px] text-sm leading-tight">
            {n.subject}
          </span>
          <span
            className={`text-[10px] font-bold px-2 py-0.5 rounded-full border shrink-0 uppercase tracking-wider ${s.badge}`}
          >
            {n.category.replace(/_/g, ' ')}
          </span>
          {!n.isRead && (
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse shrink-0" />
          )}
        </div>

        <p className="text-[11px] text-slate-500 bg-slate-900/70 inline-block px-2 py-0.5 rounded mb-2 font-mono truncate max-w-[300px]">
          {n.from}
        </p>

        <p className="text-sm text-slate-300 leading-relaxed">{n.reason}</p>

        {n.bodyPreview && (
          <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
            {n.bodyPreview}
          </p>
        )}
      </div>

      {/* Right meta */}
      <div className="shrink-0 text-right flex flex-col items-end gap-2 relative z-10">
        <span className="text-[11px] text-slate-600 whitespace-nowrap">
          {formatDistanceToNow(new Date(n.receivedAt), { addSuffix: true })}
        </span>
        <span className={`text-[10px] font-black px-2.5 py-1 rounded-lg border uppercase tracking-widest ${s.badge}`}>
          {n.priority}
        </span>
        {!n.isRead && (
          <span className="text-[10px] text-slate-600 group-hover:text-blue-500 transition-colors">
            Click to read
          </span>
        )}
      </div>
    </div>
  );
}
