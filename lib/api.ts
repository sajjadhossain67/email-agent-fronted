import axios from 'axios';
import type { Notification, Stats, PollResult } from '@/types';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10_000,
});

export const notificationsApi = {
  getAll: () =>
    api.get<Notification[]>('/notifications').then(r => r.data),

  getStats: () =>
    api.get<Stats>('/stats').then(r => r.data),

  markRead: (id: number) =>
    api.patch<Notification>(`/notifications/${id}/read`).then(r => r.data),

  triggerPoll: () =>
    api.post<PollResult>('/poll').then(r => r.data),

  clearAll: () =>
    api.delete('/notifications').then(() => undefined),
};
