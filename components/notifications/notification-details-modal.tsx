'use client';

import { X, Calendar, User, AlertTriangle, Info, Bell, CheckCircle2, QrCode, ArrowLeft } from 'lucide-react';
import type { BroadcastNotification } from '@/lib/notifications/types';
import type { OpenView, View } from '@/lib/app/types';

interface NotificationDetailsModalProps {
  notification: BroadcastNotification | null;
  isOpen: boolean;
  onClose: () => void;
  onShare: (notification: BroadcastNotification) => void;
  openView?: OpenView;
}

export function NotificationDetailsModal({
  notification,
  isOpen,
  onClose,
  onShare,
  openView,
}: NotificationDetailsModalProps) {
  if (!isOpen || !notification) return null;

  const priorityConfig = {
    urgent: {
      label: 'عاجل جداً',
      badgeClass: 'border-red-500/40 bg-red-500/15 text-red-300',
      icon: AlertTriangle,
    },
    warning: {
      label: 'تنبيه تدريبي',
      badgeClass: 'border-amber-500/40 bg-amber-500/15 text-amber-300',
      icon: Bell,
    },
    info: {
      label: 'تعميم رسمي',
      badgeClass: 'border-emerald-500/40 bg-emerald-500/15 text-emerald-300',
      icon: Info,
    },
    success: {
      label: 'تأكيد إنجاز',
      badgeClass: 'border-teal-500/40 bg-teal-500/15 text-teal-300',
      icon: CheckCircle2,
    },
  }[notification.priority];

  const Icon = priorityConfig.icon;
  const formattedDate = new Date(notification.timestamp).toLocaleDateString('ar-EG', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  const handleActionClick = () => {
    if (notification.actionView && openView) {
      openView(notification.actionView as View);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg rounded-3xl border border-emerald-500/30 bg-[#0a150f] p-6 shadow-2xl text-white">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 border-b border-emerald-500/20 pb-4">
          <div className="flex items-start gap-3">
            <div className={`mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-2xl border ${priorityConfig.badgeClass}`}>
              <Icon className="size-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] font-bold ${priorityConfig.badgeClass}`}>
                  {priorityConfig.label}
                </span>
                {notification.pinned && (
                  <span className="rounded-md border border-amber-400/30 bg-amber-400/10 px-2 py-0.5 text-[11px] font-bold text-amber-300">
                    مثبت
                  </span>
                )}
              </div>
              <h2 className="text-base sm:text-lg font-bold leading-tight text-white">
                {notification.title}
              </h2>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-white/60 hover:bg-white/10 hover:text-white"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="mt-4 space-y-4">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-4 text-sm leading-relaxed text-white/90 whitespace-pre-line">
            {notification.message}
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-white/60 border-t border-white/5 pt-3">
            <div className="flex items-center gap-1.5">
              <User className="size-3.5 text-emerald-400" />
              <span>الجهة المصدرة: <strong className="text-emerald-300">{notification.author || 'القيادة العامة'}</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="size-3.5 text-white/40" />
              <span>{formattedDate}</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-emerald-500/20 pt-4">
          <button
            type="button"
            onClick={() => onShare(notification)}
            className="inline-flex items-center gap-1.5 rounded-xl border border-emerald-500/30 bg-emerald-500/15 px-3.5 py-2 text-xs font-semibold text-emerald-300 hover:bg-emerald-500/25 active:scale-95"
          >
            <QrCode className="size-3.5" />
            <span>مشاركة عبر كود QR</span>
          </button>

          <div className="flex items-center gap-2">
            {notification.actionView && openView && (
              <button
                type="button"
                onClick={handleActionClick}
                className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-500 px-4 py-2 text-xs font-bold text-black shadow-lg hover:bg-emerald-400 active:scale-95"
              >
                <span>{notification.actionLabel || 'الانتقال للقسم المعني'}</span>
                <ArrowLeft className="size-3.5" />
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 hover:bg-white/10"
            >
              إغلاق
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
