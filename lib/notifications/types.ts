export type NotificationPriority = 'urgent' | 'warning' | 'info' | 'success';

export interface BroadcastNotification {
  id: string;
  title: string;
  message: string;
  priority: NotificationPriority;
  timestamp: number;
  author: string;
  pinned?: boolean;
  expiresAt?: number;
  actionLabel?: string;
  actionView?: string;
  active: boolean;
  soundAlert?: boolean;
}

export interface BroadcastPackage {
  v: number; // version
  type: 'single' | 'all';
  data: BroadcastNotification | BroadcastNotification[];
  created: number;
  senderName?: string;
}
