import { useQuery } from '@tanstack/react-query';
import { notificationsApi } from '@/lib/api';

export function useStats() {
  return useQuery({
    queryKey: ['stats'],
    queryFn: notificationsApi.getStats,
    refetchInterval: 10_000,
  });
}
