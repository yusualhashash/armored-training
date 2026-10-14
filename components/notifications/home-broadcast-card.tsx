'use client';

import { useState, useEffect, useCallback } from 'react';
import { Radio, QrCode, Plus, ChevronLeft, ShieldCheck, Bell } from 'lucide-react';
import { getNotifications, getDismissedIds } from '@/lib/notifications/storage';
import { BroadcastControlModal } from './broadcast-control-modal';
import { QrScannerModal } from './qr-scanner-modal';

export function HomeBroadcastCard() {
  const [activeCount, setActiveCount] = useState(0);
  const [isControlOpen, setIsControlOpen] = useState(false);
  const [isScannerOpen, setIsScannerOpen] = useState(false);

  const updateCount = useCallback(() => {
    const list = getNotifications().filter((n) => n.active);
    setActiveCount(list.length);
  }, []);

  useEffect(() => {
    updateCount();
    window.addEventListener('armored_notifications_updated', updateCount);
    return () => {
      window.removeEventListener('armored_notifications_updated', updateCount);
    };
  }, [updateCount]);

  return (
    <>
      <div className="relative overflow-hidden rounded-3xl border border-emerald-500/25 bg-gradient-to-br from-[#0c1a12] via-[#09140e] to-[#050c08] p-5 shadow-lg">
        {/* Glow accent */}
        <div className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-emerald-500/10 blur-2xl" />

        <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 shadow-inner">
              <Radio className="size-6 animate-pulse" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-base font-bold text-white tracking-tight">
                  التعاميم والتنبيهات الميدانية
                </span>
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                  {activeCount} تعميم نشط
                </span>
              </div>
              <p className="mt-0.5 text-xs text-white/60">
                بث وإرسال التعليمات للأجهزة بدون إنترنت عبر كود الاستجابة السريعة QR
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
            <button
              type="button"
              onClick={() => setIsScannerOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-xs font-bold text-emerald-300 hover:bg-emerald-500/20 active:scale-95"
            >
              <QrCode className="size-3.5" />
              <span>مسح تعميم</span>
            </button>

            <button
              type="button"
              onClick={() => setIsControlOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-500 px-3.5 py-2 text-xs font-bold text-black shadow-md hover:bg-emerald-400 active:scale-95"
            >
              <Plus className="size-3.5" />
              <span>إدارة وبث</span>
            </button>
          </div>
        </div>
      </div>

      {/* Control Modal */}
      <BroadcastControlModal
        isOpen={isControlOpen}
        onClose={() => setIsControlOpen(false)}
        onOpenScanner={() => setIsScannerOpen(true)}
        onRefresh={updateCount}
      />

      {/* Scanner Modal */}
      <QrScannerModal
        isOpen={isScannerOpen}
        onClose={() => setIsScannerOpen(false)}
        onSuccess={() => updateCount()}
      />
    </>
  );
}
