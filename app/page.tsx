'use client';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { StatsBar } from '@/components/dashboard/StatsBar';
import { FilterBar } from '@/components/dashboard/FilterBar';
import { NotificationList } from '@/components/dashboard/NotificationList';
import { PriorityChart } from '@/components/analytics/PriorityChart';
import { CategoryChart } from '@/components/analytics/CategoryChart';
import { useDashboardStore } from '@/store/dashboardStore';

export default function DashboardPage() {
  const view = useDashboardStore(s => s.view);

  return (
    <div className="flex h-screen bg-slate-950 text-white overflow-hidden">
      <Sidebar />
      <main className="flex-1 ml-64 overflow-y-auto">
        <div className="p-8 flex flex-col gap-6 min-h-full">
          <Header />
          <StatsBar />
          {view === 'notifications' ? (
            <>
              <FilterBar />
              <NotificationList />
            </>
          ) : (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <PriorityChart />
                <CategoryChart />
              </div>
              <AnalyticsSummary />
            </>
          )}
        </div>
      </main>
    </div>
  );
}

function AnalyticsSummary() {
  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm">
      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
        About the Charts
      </h3>
      <p className="text-sm text-slate-500 leading-relaxed">
        Charts update every 10 seconds. Priority Distribution shows HIGH/MEDIUM/LOW counts.
        Category Breakdown shows the top 8 classification categories from the AI model.
      </p>
    </div>
  );
}
