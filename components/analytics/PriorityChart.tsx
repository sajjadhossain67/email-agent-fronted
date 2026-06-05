'use client';
import { useStats } from '@/hooks/useStats';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';

const COLORS: Record<string, string> = {
  HIGH: '#ef4444',
  MEDIUM: '#f59e0b',
  LOW: '#10b981',
};

export function PriorityChart() {
  const { data: stats, isLoading } = useStats();
  const data = Object.entries(stats?.byPriority ?? {}).map(([name, value]) => ({
    name,
    value,
  }));

  return (
    <div className="bg-slate-800/80 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm">
      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-5">
        Priority Distribution
      </h3>
      {isLoading ? (
        <div className="h-48 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-slate-700 border-t-blue-500 rounded-full animate-spin" />
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data} barCategoryGap="30%">
            <XAxis
              dataKey="name"
              stroke="#475569"
              fontSize={11}
              tick={{ fill: '#64748b' }}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#475569"
              fontSize={11}
              tick={{ fill: '#64748b' }}
              tickLine={false}
              axisLine={false}
              allowDecimals={false}
            />
            <Tooltip
              cursor={{ fill: 'rgba(255,255,255,0.03)' }}
              contentStyle={{
                background: '#0f172a',
                border: '1px solid #334155',
                borderRadius: 12,
                fontSize: 12,
                color: '#f1f5f9',
              }}
            />
            <Bar dataKey="value" radius={[6, 6, 0, 0]}>
              {data.map(e => (
                <Cell
                  key={e.name}
                  fill={COLORS[e.name] ?? '#3b82f6'}
                  fillOpacity={0.85}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
