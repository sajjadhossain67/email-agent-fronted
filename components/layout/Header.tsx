'use client';
import { useState } from 'react';
import { RefreshCw, Trash2, Zap } from 'lucide-react';
import { usePoll } from '@/hooks/usePoll';
import { useClearAll } from '@/hooks/useNotifications';
import { useDashboardStore } from '@/store/dashboardStore';
import { ConfirmDialog } from '@/components/ui/ConfirmDialog';

export function Header() {
  const view = useDashboardStore(s => s.view);
  const { mutate: poll, isPending: isPolling } = usePoll();
  const { mutate: clearAll, isPending: isClearing } = useClearAll();
  const [showConfirm, setShowConfirm] = useState(false);

  const title = view === 'notifications' ? 'Notifications' : 'Analytics';
  const subtitle = view === 'notifications'
    ? 'AI-classified important emails'
    : 'Email classification breakdown';

  return (
    <>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-white tracking-tight">{title}</h1>
          <p className="text-sm text-slate-500 mt-0.5">{subtitle}</p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {view === 'notifications' && (
            <button
              onClick={() => setShowConfirm(true)}
              disabled={isClearing}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold
                text-slate-400 border border-slate-700/60 rounded-xl
                hover:border-red-500/40 hover:text-red-400 transition-all duration-200
                disabled:opacity-50 disabled:cursor-not-allowed"
              title="Clear all notifications"
            >
              <Trash2 size={14} />
              <span className="hidden sm:inline">Clear All</span>
            </button>
          )}

          <button
            onClick={() => poll()}
            disabled={isPolling}
            className="flex items-center gap-2 px-4 py-2 text-xs font-bold
              bg-blue-500/10 text-blue-400 border border-blue-500/30 rounded-xl
              hover:bg-blue-500/20 hover:border-blue-400/50 transition-all duration-200
              disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(59,130,246,0.1)]"
          >
            {isPolling ? (
              <RefreshCw size={14} className="animate-spin" />
            ) : (
              <Zap size={14} />
            )}
            {isPolling ? 'Polling…' : 'Poll Now'}
          </button>
        </div>
      </div>

      <ConfirmDialog
        open={showConfirm}
        title="Clear all notifications?"
        description="This will permanently delete all notifications from the dashboard. This action cannot be undone."
        confirmLabel="Yes, clear all"
        cancelLabel="Cancel"
        destructive
        onConfirm={() => {
          clearAll();
          setShowConfirm(false);
        }}
        onCancel={() => setShowConfirm(false)}
      />
    </>
  );
}
