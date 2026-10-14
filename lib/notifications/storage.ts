import type { BroadcastNotification, BroadcastPackage } from './types';

const STORAGE_KEY = 'armored_training_broadcast_notifications_v1';
const DISMISSED_KEY = 'armored_training_dismissed_notifications_v1';
const BROADCAST_CHANNEL_NAME = 'armored_broadcast_channel';

// Default initial bulletins available offline from day one
export const DEFAULT_NOTIFICATIONS: BroadcastNotification[] = [
  {
    id: 'default-bulletin-1',
    title: 'تعليمات اختبارات اللياقة والجاهزية القتالية',
    message: 'الالتزام الكامل بالمعدلات الزمنية المعتمدة لاختبارات الجري والتمارين البدنية وفق لائحة التدريب المقررة.',
    priority: 'info',
    timestamp: Date.now() - 1000 * 60 * 60 * 2, // 2 hours ago
    author: 'شعبة التدريب الميداني',
    pinned: true,
    active: true,
    actionLabel: 'بدء اختبارات الرياضة',
    actionView: 'sports',
    soundAlert: false,
  },
  {
    id: 'default-bulletin-2',
    title: 'تنبيه تدريبي: معدلات الانفتاح القتالي لأطقم الدبابات',
    message: 'التأكيد على دقة احتساب أزمنة الركوب، النزول، والتحول من رتل إلى قتال لدبابات T-72 و T-55/62.',
    priority: 'warning',
    timestamp: Date.now() - 1000 * 60 * 60 * 5, // 5 hours ago
    author: 'قيادة سلاح المدرعات',
    pinned: false,
    active: true,
    actionLabel: 'معدلات المدرعات',
    actionView: 'armored',
    soundAlert: false,
  },
];

// Memory fallback if localStorage is disabled
let memoryStore: BroadcastNotification[] = [];
let memoryDismissed: string[] = [];

export function getNotifications(): BroadcastNotification[] {
  if (typeof window === 'undefined') return DEFAULT_NOTIFICATIONS;

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      // Seed with defaults
      saveNotifications(DEFAULT_NOTIFICATIONS, false);
      return DEFAULT_NOTIFICATIONS;
    }
    const parsed = JSON.parse(raw) as BroadcastNotification[];
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : DEFAULT_NOTIFICATIONS;
  } catch (err) {
    console.warn('Error reading notifications from localStorage', err);
    return memoryStore.length > 0 ? memoryStore : DEFAULT_NOTIFICATIONS;
  }
}

export function saveNotifications(notifications: BroadcastNotification[], broadcast = true): void {
  memoryStore = notifications;
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(notifications));
      window.dispatchEvent(new CustomEvent('armored_notifications_updated'));

      if (broadcast && typeof BroadcastChannel !== 'undefined') {
        const channel = new BroadcastChannel(BROADCAST_CHANNEL_NAME);
        channel.postMessage({ type: 'SYNC_NOTIFICATIONS', payload: notifications });
        channel.close();
      }
    } catch (err) {
      console.warn('Error saving notifications to localStorage', err);
    }
  }
}

export function addNotification(notification: Omit<BroadcastNotification, 'id' | 'timestamp'>): BroadcastNotification {
  const current = getNotifications();
  const newItem: BroadcastNotification = {
    ...notification,
    id: 'notice-' + Date.now().toString(36) + '-' + Math.random().toString(36).substring(2, 6),
    timestamp: Date.now(),
  };

  const updated = [newItem, ...current];
  saveNotifications(updated, true);

  // Play audio sound if requested
  if (notification.soundAlert) {
    playTacticalAlertSound(notification.priority);
  }

  return newItem;
}

export function updateNotification(id: string, patch: Partial<BroadcastNotification>): void {
  const current = getNotifications();
  const updated = current.map((n) => (n.id === id ? { ...n, ...patch } : n));
  saveNotifications(updated, true);
}

export function deleteNotification(id: string): void {
  const current = getNotifications();
  const updated = current.filter((n) => n.id !== id);
  saveNotifications(updated, true);
}

export function getDismissedIds(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(DISMISSED_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return memoryDismissed;
  }
}

export function dismissNotification(id: string): void {
  if (typeof window === 'undefined') return;
  try {
    const dismissed = getDismissedIds();
    if (!dismissed.includes(id)) {
      const updated = [...dismissed, id];
      memoryDismissed = updated;
      localStorage.setItem(DISMISSED_KEY, JSON.stringify(updated));
      window.dispatchEvent(new CustomEvent('armored_notifications_updated'));
    }
  } catch (err) {
    console.warn('Error saving dismissed notification', err);
  }
}

export function undismissNotification(id: string): void {
  if (typeof window === 'undefined') return;
  try {
    const dismissed = getDismissedIds().filter((dId) => dId !== id);
    memoryDismissed = dismissed;
    localStorage.setItem(DISMISSED_KEY, JSON.stringify(dismissed));
    window.dispatchEvent(new CustomEvent('armored_notifications_updated'));
  } catch (err) {
    console.warn('Error removing dismissed notification', err);
  }
}

export function clearDismissed(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(DISMISSED_KEY);
    memoryDismissed = [];
    window.dispatchEvent(new CustomEvent('armored_notifications_updated'));
  } catch (err) {
    console.warn('Error clearing dismissed notifications', err);
  }
}

// ==========================================
// OFFLINE ENCODING & EXPORT UTILITIES
// ==========================================

export function encodeNotificationPackage(data: BroadcastNotification | BroadcastNotification[], senderName?: string): string {
  const pkg: BroadcastPackage = {
    v: 1,
    type: Array.isArray(data) ? 'all' : 'single',
    data,
    created: Date.now(),
    senderName: senderName || 'القائد الميداني',
  };

  const jsonStr = JSON.stringify(pkg);
  // Encode to UTF-8 safe base64
  const encoded = typeof window !== 'undefined' 
    ? btoa(unescape(encodeURIComponent(jsonStr)))
    : Buffer.from(jsonStr).toString('base64');
  return `ATN1:${encoded}`;
}

export function decodeNotificationPackage(rawString: string): { success: boolean; data?: BroadcastPackage; error?: string } {
  try {
    let clean = rawString.trim();
    if (clean.includes('#notice=')) {
      clean = clean.split('#notice=')[1].split('&')[0];
    } else if (clean.includes('notice=')) {
      clean = clean.split('notice=')[1].split('&')[0];
    }

    if (clean.startsWith('ATN1:')) {
      clean = clean.substring(5);
    }

    const decodedStr = typeof window !== 'undefined'
      ? decodeURIComponent(escape(atob(clean)))
      : Buffer.from(clean, 'base64').toString('utf-8');

    const pkg = JSON.parse(decodedStr) as BroadcastPackage;
    if (!pkg || typeof pkg !== 'object' || !pkg.data) {
      return { success: false, error: 'صيغة بيانات التعميم غير صالحة' };
    }

    return { success: true, data: pkg };
  } catch (err) {
    return { success: false, error: 'تعذر فك تشفير حزمة التعميم' };
  }
}

export function importNotificationPackage(rawString: string): { success: boolean; count: number; error?: string } {
  const result = decodeNotificationPackage(rawString);
  if (!result.success || !result.data) {
    return { success: false, count: 0, error: result.error || 'فشل الاستيراد' };
  }

  const current = getNotifications();
  const existingIds = new Set(current.map((n) => n.id));
  const itemsToImport = Array.isArray(result.data.data) ? result.data.data : [result.data.data];

  let addedCount = 0;
  const merged = [...current];

  for (const item of itemsToImport) {
    if (!item.id || !item.title) continue;
    if (existingIds.has(item.id)) {
      // update existing
      const idx = merged.findIndex((n) => n.id === item.id);
      if (idx !== -1) merged[idx] = { ...merged[idx], ...item, active: true };
    } else {
      // append new
      merged.unshift({
        ...item,
        active: true,
        timestamp: item.timestamp || Date.now(),
      });
      existingIds.add(item.id);
      addedCount++;
    }
  }

  saveNotifications(merged, true);

  // Play sound if any item had sound alert
  if (itemsToImport.some((it) => it.soundAlert || it.priority === 'urgent')) {
    playTacticalAlertSound('urgent');
  }

  return { success: true, count: addedCount };
}

// Generate an offline share link with hash parameter
export function generateOfflineShareUrl(notice: BroadcastNotification): string {
  if (typeof window === 'undefined') return '';
  const token = encodeNotificationPackage(notice);
  const origin = window.location.origin;
  const pathname = window.location.pathname;
  return `${origin}${pathname}#notice=${token}`;
}

// ==========================================
// TACTICAL AUDIO SYNTHESIZER (100% OFFLINE)
// ==========================================
export function playTacticalAlertSound(priority: BroadcastNotification['priority'] = 'info') {
  if (typeof window === 'undefined') return;

  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;

    const ctx = new AudioCtx();
    const now = ctx.currentTime;

    if (priority === 'urgent') {
      // High-low tactical alarm pulse
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';

      osc.frequency.setValueAtTime(880, now);
      osc.frequency.setValueAtTime(440, now + 0.12);
      osc.frequency.setValueAtTime(880, now + 0.24);
      osc.frequency.setValueAtTime(440, now + 0.36);

      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.5);
    } else {
      // Double tactical chirp
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';

      osc.frequency.setValueAtTime(700, now);
      osc.frequency.exponentialRampToValueAtTime(1100, now + 0.09);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.12);
    }

    // Trigger subtle haptic vibration on devices supporting it
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      if (priority === 'urgent') {
        navigator.vibrate([150, 80, 150]);
      } else {
        navigator.vibrate(70);
      }
    }
  } catch (err) {
    // Ignore audio failures if autoplay policy restricts
  }
}
