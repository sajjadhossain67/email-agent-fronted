import { create } from 'zustand';
import type { Priority } from '@/types';

type View = 'notifications' | 'analytics';
type Filter = 'all' | Priority;

interface DashboardState {
  view: View;
  filter: Filter;
  setView: (v: View) => void;
  setFilter: (f: Filter) => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  view: 'notifications',
  filter: 'all',
  setView: (view) => set({ view }),
  setFilter: (filter) => set({ filter }),
}));
