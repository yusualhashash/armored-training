'use client'

import type { ReactNode } from 'react'
import { ChevronDown, Download, History, Share2, Trash2 } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface TestHistorySectionProps {
  /** عدد الجلسات المحفوظة لنفس الاختبار والفئة العمرية. */
  count: number
  isMobile: boolean
  open: boolean
  onToggle: () => void
  onExportAll: () => void
  onClear: () => void
  emptyMessage: string
  /** قائمة الجلسات المعروضة. */
  children: ReactNode
}

/** قسم قابل للطي يعرض سجل جلسات الاختبار مع تصدير الكل ومسح السجل بتصميم تكتيكي. */
export function TestHistorySection({ count, isMobile, open, onToggle, onExportAll, onClear, emptyMessage, children }: TestHistorySectionProps) {
  const ExportIcon = isMobile ? Share2 : Download

  return (
    <section className="rounded-3xl border border-emerald-500/20 bg-[#0c1610] p-4 sm:p-6 shadow-sm" aria-labelledby="history-title">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between text-right transition hover:opacity-90 active:scale-[0.99]"
      >
        <span className="flex items-center gap-2.5">
          <div className="flex size-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-300">
            <History className="size-4" aria-hidden="true" />
          </div>
          <span id="history-title" className="text-base font-bold text-white tracking-tight">سجل هذا الاختبار</span>
        </span>

        <div className="flex items-center gap-2">
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-xs font-semibold text-white/60">
            {count} جلسة
          </span>
          <ChevronDown className={`size-4 text-white/40 transition-transform ${open ? 'rotate-180' : ''}`} />
        </div>
      </button>

      {open && (
        <div className="mt-5 border-t border-white/10 pt-4">
          {count === 0 ? (
            <p className="py-4 text-center text-xs sm:text-sm text-white/50">{emptyMessage}</p>
          ) : (
            <>
              <div className="mb-3 flex gap-2">
                <button
                  type="button"
                  onClick={onExportAll}
                  className="flex h-10 flex-1 items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-xs font-bold text-emerald-300 hover:bg-emerald-500/20 active:scale-95 transition"
                >
                  <ExportIcon className="size-3.5" aria-hidden="true" />
                  <span>{isMobile ? 'حفظ أو مشاركة السجل' : 'تصدير السجل كاملاً إلى Excel'}</span>
                </button>
                <button
                  type="button"
                  onClick={onClear}
                  className="flex h-10 items-center justify-center gap-1.5 rounded-xl border border-red-500/30 bg-red-500/10 px-3 text-xs font-bold text-red-300 hover:bg-red-500/20 active:scale-95 transition"
                >
                  <Trash2 className="size-3.5" aria-hidden="true" />
                  <span>مسح</span>
                </button>
              </div>
              <ul className="flex max-h-96 flex-col gap-2 overflow-y-auto pr-1">{children}</ul>
            </>
          )}
        </div>
      )}
    </section>
  )
}
