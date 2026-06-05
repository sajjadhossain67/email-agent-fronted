'use client';
import { useDashboardStore } from '@/store/dashboardStore';

const FILTERS = [
  { label: 'All',    value: 'all',    emoji: null   },
  { label: 'High',   value: 'HIGH',   emoji: '🔴'  },
  { label: 'Medium', value: 'MEDIUM', emoji: '🟡'  },
  { label: 'Low',    value: 'LOW',    emoji: '🟢'  },
] as const;

export function FilterBar() {
  const { filter, setFilter } = useDashboardStore();
  return (
    <div className="flex gap-2 flex-wrap">
      {FILTERS.map(f => (
        <button
          key={f.value}
          onClick={() => setFilter(f.value as typeof filter)}
          className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200
            ${
              filter === f.value
                ? 'bg-blue-500/15 text-blue-400 border-blue-500/40 shadow-[0_0_12px_rgba(59,130,246,0.15)]'
                : 'bg-slate-800/80 text-slate-400 border-slate-700/50 hover:border-slate-500/60 hover:text-slate-300'
            }`}
        >
          {f.emoji && <span className="mr-1">{f.emoji}</span>}
          {f.label}
        </button>
      ))}
    </div>
  );
}
