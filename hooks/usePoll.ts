import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notificationsApi } from '@/lib/api';
import toast from 'react-hot-toast';

export function usePoll() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: notificationsApi.triggerPoll,
    onSuccess: (result) => {
      qc.invalidateQueries({ queryKey: ['notifications'] });
      qc.invalidateQueries({ queryKey: ['stats'] });
      toast.success(`Poll done: ${result.important} important email(s) found.`);
    },
    onError: () => toast.error('Poll failed. Is the backend running?'),
  });
}
