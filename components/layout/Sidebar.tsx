'use client';
import { Bell, BarChart3 } from 'lucide-react';
import { useDashboardStore } from '@/store/dashboardStore';
import { useNotifications } from '@/hooks/useNotifications';

export function Sidebar() {
  const { view, setView } = useDashboardStore();
  const { data: notifications } = useNotifications();
  const unreadCount = (notifications ?? []).filter(n => !n.isRead).length;

  const navItems = [
    {
      id: 'notifications' as const,
      label: 'Notifications',
      icon: Bell,
      badge: unreadCount > 0 ? unreadCount : null,
    },
    {
      id: 'analytics' as const,
      label: 'Analytics',
      icon: BarChart3,
      badge: null,
    },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-slate-900/95 border-r border-slate-800/80
      flex flex-col backdrop-blur-sm z-40">
      {/* Logo */}
      <div className="p-6 border-b border-slate-800/80">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600
            flex items-center justify-center shadow-lg shadow-blue-500/25">
            <span className="text-lg">✉️</span>
          </div>
          <div>
            <p className="text-sm font-bold text-white leading-tight">Email AI</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest">Agent Dashboard</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 flex flex-col gap-1">
        {navItems.map(({ id, label, icon: Icon, badge }) => (
          <button
            key={id}
            onClick={() => setView(id)}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl
              text-sm font-medium transition-all duration-200 group
              ${
                view === id
                  ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.1)]'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60 border border-transparent'
              }`}
          >
            <span className="flex items-center gap-3">
              <Icon size={16} className={view === id ? 'text-blue-400' : 'text-slate-500 group-hover:text-slate-300'} />
              {label}
            </span>
            {badge !== null && (
              <span className="min-w-5 h-5 bg-blue-500 text-white text-[10px] font-black
                rounded-full flex items-center justify-center px-1 animate-pulse">
                {badge > 99 ? '99+' : badge}
              </span>
            )}
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-800/80">
        <div className="flex items-center gap-2.5">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-slate-500">Agent active</span>
        </div>
      </div>
    </aside>
  );
}
