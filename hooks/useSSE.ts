import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';

export function useSSE() {
  const qc = useQueryClient();
  useEffect(() => {
    const source = new EventSource(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/stream`,
    );
    source.onmessage = () => {
      qc.invalidateQueries({ queryKey: ['notifications'] });
      qc.invalidateQueries({ queryKey: ['stats'] });
    };
    source.onerror = () => {
      // SSE not available — silently close
      source.close();
    };
    return () => source.close();
  }, [qc]);
}
