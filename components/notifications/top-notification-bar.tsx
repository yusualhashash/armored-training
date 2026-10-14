'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  Bell,
  AlertTriangle,
  Info,
  CheckCircle2,
  X,
  ChevronLeft,
  ChevronRight,
  Radio,
  Sliders,
  QrCode,
  Sparkles,
  Volume2,
} from 'lucide-react';
import type { BroadcastNotification } from '@/lib/notifications/types';
import type { OpenView } from '@/lib/app/types';
import {
  getNotifications,
  getDismissedIds,
  dismissNotification,
  importNotificationPackage,
  playTacticalAlertSound,
} from '@/lib/notifications/storage';
import { NotificationDetailsModal } from './notification-details-modal';
import { BroadcastControlModal } from './broadcast-control-modal';
import { QrScannerModal } from './qr-scanner-modal';

interface TopNotificationBarProps {
  openView?: OpenView;
}

export function TopNotificationBar({ openView }: TopNotificationBarProps) {
  const [notifications, setNotifications] = useState<BroadcastNotification[]>([]);
  const [dismissedIds, setDismissedIds] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Modals state
  const [detailsNotice, setDetailsNotice] = useState<BroadcastNotification | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isControlOpen, setIsControlOpen] = useState(false);
  const [isScannerOpen, setIsScannerOpen] = useState(false);

  const loadData = useCallback(() => {
    setNotifications(getNotifications());
    setDismissedIds(getDismissedIds());
  }, []);

  // Listen to cross-tab broadcast and window events
  useEffect(() => {
    loadData();

    // Check if URL has #notice= parameter for 1-tap offline import
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash && hash.includes('notice=')) {
        const res = importNotificationPackage(hash);
        if (res.success) {
          loadData();
          // Clear hash without reload
          window.history.replaceState(null, '', window.location.pathname + window.location.search);
        }
      }

      // Check query param ?notice=
      const urlParams = new URLSearchParams(window.location.search);
      const noticeParam = urlParams.get('notice');
      if (noticeParam) {
        const res = importNotificationPackage(noticeParam);
        if (res.success) {
          loadData();
          urlParams.delete('notice');
          const newSearch = urlParams.toString();
          window.history.replaceState(
            null,
            '',
            window.location.pathname + (newSearch ? `?${newSearch}` : '') + window.location.hash
          );
        }
      }
    }

    const handleUpdate = () => {
      loadData();
    };

    window.addEventListener('armored_notifications_updated', handleUpdate);

    let channel: BroadcastChannel | null = null;
    if (typeof BroadcastChannel !== 'undefined') {
      channel = new BroadcastChannel('armored_broadcast_channel');
      channel.onmessage = (event) => {
        if (event.data?.type === 'SYNC_NOTIFICATIONS') {
          loadData();
          playTacticalAlertSound('info');
        }
      };
    }

    return () => {
      window.removeEventListener('armored_notifications_updated', handleUpdate);
      if (channel) channel.close();
    };
  }, [loadData]);

  // Filter visible notices: active and not dismissed
  const visibleNotices = notifications.filter(
    (n) => n.active && !dismissedIds.includes(n.id)
  );

  // Sort visible notices: urgent first, then pinned, then latest timestamp
  const sortedNotices = [...visibleNotices].sort((a, b) => {
    if (a.priority === 'urgent' && b.priority !== 'urgent') return -1;
    if (b.priority === 'urgent' && a.priority !== 'urgent') return 1;
    if (a.pinned && !b.pinned) return -1;
    if (b.pinned && !a.pinned) return 1;
    return b.timestamp - a.timestamp;
  });

  // Ensure current index is within bounds
  useEffect(() => {
    if (currentIndex >= sortedNotices.length && sortedNotices.length > 0) {
      setCurrentIndex(0);
    }
  }, [currentIndex, sortedNotices.length]);

  const activeNotice = sortedNotices[currentIndex] || sortedNotices[0];

  const handleDismiss = (id: string) => {
    dismissNotification(id);
    setDismissedIds((prev) => [...prev, id]);
  };

  const handleNext = () => {
    if (sortedNotices.length <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % sortedNotices.length);
  };

  const handlePrev = () => {
    if (sortedNotices.length <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + sortedNotices.length) % sortedNotices.length);
  };

  const handleOpenDetails = (notice: BroadcastNotification) => {
    setDetailsNotice(notice);
    setIsDetailsOpen(true);
  };

  const handleShareFromDetails = (notice: BroadcastNotification) => {
    setIsDetailsOpen(false);
    setIsControlOpen(true);
  };

  const priorityStyles = {
    urgent: {
      barBg: 'from-red-950/40 via-red-900/20 to-black/60 border-red-500/40 text-red-200',
      badge: 'border-red-500/50 bg-red-500/20 text-red-300',
      icon: AlertTriangle,
      iconColor: 'text-red-400 animate-pulse',
      label: 'عاجل جداً',
    },
    warning: {
      barBg: 'from-amber-950/40 via-amber-900/15 to-black/60 border-amber-500/40 text-amber-200',
      badge: 'border-amber-500/50 bg-amber-500/20 text-amber-300',
      icon: Bell,
      iconColor: 'text-amber-400',
      label: 'تنبيه تدريبي',
    },
    info: {
      barBg: 'from-emerald-950/40 via-emerald-900/15 to-black/60 border-emerald-500/35 text-emerald-200',
      badge: 'border-emerald-500/50 bg-emerald-500/20 text-emerald-300',
      icon: Info,
      iconColor: 'text-emerald-400',
      label: 'تعميم رسمي',
    },
    success: {
      barBg: 'from-teal-950/40 via-teal-900/15 to-black/60 border-teal-500/35 text-teal-200',
      badge: 'border-teal-500/50 bg-teal-500/20 text-teal-300',
      icon: CheckCircle2,
      iconColor: 'text-teal-400',
      label: 'تأكيد',
    },
  };

  return (
    <>
      {/* The Top Notification Banner Section */}
      {activeNotice ? (
        <section
          aria-label="شريط التعاميم والتنبيهات الميدانية"
          className="relative z-20 w-full border-b backdrop-blur-xl bg-gradient-to-r transition-all duration-300 shadow-md"
        >
          <div
            className={`flex items-center justify-between gap-2 px-3 py-2 sm:px-6 sm:py-2.5 border-b ${
              priorityStyles[activeNotice.priority].barBg
            }`}
          >
            {/* Left/Start side: Icon + Badge + Title + Message snippet */}
            <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
              {/* Tactical Icon */}
              <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-black/40 border border-white/10">
                {(() => {
                  const Icon = priorityStyles[activeNotice.priority].icon;
                  return (
                    <Icon
                      className={`size-4 ${priorityStyles[activeNotice.priority].iconColor}`}
                      aria-hidden="true"
                    />
                  );
                })()}
              </div>

              {/* Priority badge */}
              <span
                className={`hidden xs:inline-flex shrink-0 items-center rounded-md border px-2 py-0.5 text-[10px] sm:text-[11px] font-bold ${
                  priorityStyles[activeNotice.priority].badge
                }`}
              >
                {priorityStyles[activeNotice.priority].label}
              </span>

              {/* Title & snippet */}
              <div
                onClick={() => handleOpenDetails(activeNotice)}
                className="flex min-w-0 flex-1 cursor-pointer items-center gap-2 hover:opacity-90"
              >
                <span className="truncate text-xs sm:text-sm font-bold text-white tracking-tight">
                  {activeNotice.title}
                </span>
                <span className="hidden md:inline-block truncate text-xs text-white/60">
                  — {activeNotice.message}
                </span>
              </div>
            </div>

            {/* Right side: Carousel Controls (if multiple) + Details + Manage + Dismiss */}
            <div className="flex items-center gap-1 sm:gap-2 shrink-0">
              {/* Pagination if multiple active notices */}
              {sortedNotices.length > 1 && (
                <div className="flex items-center gap-0.5 rounded-lg border border-white/10 bg-black/40 px-1.5 py-0.5 text-[10px] text-white/70">
                  <button
                    type="button"
                    onClick={handlePrev}
                    title="التعميم السابق"
                    className="p-1 hover:text-white"
                  >
                    <ChevronRight className="size-3" />
                  </button>
                  <span className="font-mono text-[11px] font-semibold text-emerald-300">
                    {currentIndex + 1}/{sortedNotices.length}
                  </span>
                  <button
                    type="button"
                    onClick={handleNext}
                    title="التعميم التالي"
                    className="p-1 hover:text-white"
                  >
                    <ChevronLeft className="size-3" />
                  </button>
                </div>
              )}

              {/* Details button */}
              <button
                type="button"
                onClick={() => handleOpenDetails(activeNotice)}
                className="rounded-lg border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] font-bold text-white hover:bg-white/15 transition-all active:scale-95"
              >
                التفاصيل
              </button>

              {/* Broadcast control center button */}
              <button
                type="button"
                onClick={() => setIsControlOpen(true)}
                title="لوحة تحكم وتوزيع التعاميم بدون إنترنت"
                className="flex size-7 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/15 text-emerald-300 hover:bg-emerald-500/25 active:scale-95"
              >
                <Radio className="size-3.5" />
              </button>

              {/* Dismiss button */}
              <button
                type="button"
                onClick={() => handleDismiss(activeNotice.id)}
                title="إخفاء التعميم الحالي"
                className="flex size-7 items-center justify-center rounded-lg text-white/50 hover:bg-white/10 hover:text-white transition-all"
              >
                <X className="size-3.5" />
              </button>
            </div>
          </div>
        </section>
      ) : null}

      {/* Details Modal */}
      <NotificationDetailsModal
        isOpen={isDetailsOpen}
        notification={detailsNotice}
        onClose={() => setIsDetailsOpen(false)}
        onShare={handleShareFromDetails}
        openView={openView}
      />

      {/* Broadcast Control Center Modal */}
      <BroadcastControlModal
        isOpen={isControlOpen}
        onClose={() => setIsControlOpen(false)}
        onOpenScanner={() => setIsScannerOpen(true)}
        onRefresh={loadData}
      />

      {/* QR Code Offline Camera Scanner Modal */}
      <QrScannerModal
        isOpen={isScannerOpen}
        onClose={() => setIsScannerOpen(false)}
        onSuccess={() => loadData()}
      />
    </>
  );
}

// Dedicated Header Bell Button with unread notifications counter
export function NotificationHeaderButton({
  onOpenControl,
}: {
  onOpenControl?: () => void;
}) {
  const [unreadCount, setUnreadCount] = useState(0);
  const [isControlOpen, setIsControlOpen] = useState(false);
  const [isScannerOpen, setIsScannerOpen] = useState(false);

  const updateCount = useCallback(() => {
    const list = getNotifications().filter((n) => n.active);
    const dismissed = getDismissedIds();
    const undismissed = list.filter((n) => !dismissed.includes(n.id));
    setUnreadCount(undismissed.length);
  }, []);

  useEffect(() => {
    updateCount();
    window.addEventListener('armored_notifications_updated', updateCount);
    return () => {
      window.removeEventListener('armored_notifications_updated', updateCount);
    };
  }, [updateCount]);

  const handleClick = () => {
    if (onOpenControl) {
      onOpenControl();
    } else {
      setIsControlOpen(true);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        title="التعاميم والتنبيهات الميدانية (بدون إنترنت)"
        className="relative flex size-9 items-center justify-center rounded-xl border border-emerald-500/25 bg-emerald-500/10 text-emerald-300 transition-all hover:bg-emerald-500/20 hover:border-emerald-500/40 active:scale-95"
      >
        <Radio className="size-4" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-md animate-pulse">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>

      {/* Modals */}
      <BroadcastControlModal
        isOpen={isControlOpen}
        onClose={() => setIsControlOpen(false)}
        onOpenScanner={() => setIsScannerOpen(true)}
        onRefresh={updateCount}
      />

      <QrScannerModal
        isOpen={isScannerOpen}
        onClose={() => setIsScannerOpen(false)}
        onSuccess={() => updateCount()}
      />
    </>
  );
}
