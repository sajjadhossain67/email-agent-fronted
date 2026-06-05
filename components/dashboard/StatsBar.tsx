'use client';
import { useStats } from '@/hooks/useStats';

export function StatsBar() {
  const { data: stats } = useStats();
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <StatCard label="Total"  value={stats?.total}              />
      <StatCard label="Unread" value={stats?.unread} color="text-blue-400" />
      <StatCard label="High"   value={stats?.byPriority?.HIGH}   color="text-red-400"    />
      <StatCard label="Medium" value={stats?.byPriority?.MEDIUM} color="text-yellow-400" />
    </div>
  );
}

function StatCard({
  label,
  value,
  color = 'text-white',
}: {
  label: string;
  value?: number;
  color?: string;
}) {
  return (
    <div
      className="relative bg-slate-800/80 border border-slate-700/50 rounded-2xl p-6 text-center
        hover:-translate-y-1 hover:border-slate-500/50 transition-all duration-200
        backdrop-blur-sm overflow-hidden group"
    >
      {/* Subtle gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />
      <div className={`text-5xl font-black tabular-nums ${color} relative`}>
        {value ?? '–'}
      </div>
      <div className="text-[11px] text-slate-500 font-semibold uppercase mt-2 tracking-widest relative">
        {label}
      </div>
    </div>
  );
}
