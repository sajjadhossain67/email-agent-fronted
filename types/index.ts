export type Priority = 'HIGH' | 'MEDIUM' | 'LOW';

export interface Notification {
  id: number;
  from: string;
  subject: string;
  priority: Priority;
  category: string;
  reason: string;
  bodyPreview: string | null;
  isRead: boolean;
  receivedAt: string; // ISO 8601
}

export interface Stats {
  total: number;
  unread: number;
  byPriority: Record<Priority, number>;
  byCategory: Record<string, number>;
}

export interface PollResult {
  success: boolean;
  processed: number;
  important: number;
  skipped: number;
}
