'use client'

import type { ReactNode } from 'react'
import { Download, History, Share2, Trash2 } from 'lucide-react'

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

/** قسم قابل للطي يعرض سجل جلسات الاختبار مع تصدير الكل ومسح السجل. */
export function TestHistorySection({ count, isMobile, open, onToggle, onExportAll, onClear, emptyMessage, children }: TestHistorySectionProps) {
  const ExportIcon = isMobile ? Share2 : Download

  return (
    <section className="rounded-[2rem] border border-white/10 bg-[#101216] p-4 sm:p-6" aria-labelledby="history-title">
      <button type="button" onClick={onToggle} aria-expanded={open} className="flex w-full items-center justify-between text-right">
        <span className="flex items-center gap-2"><History className="size-4 text-white/60" aria-hidden="true" /><span id="history-title" className="text-base font-bold text-white">سجل الاختبارات</span></span>
        <span className="text-xs text-white/50">{count} جلسة</span>
      </button>

      {open && (
        <div className="mt-4">
          {count === 0 ? (
            <p className="py-4 text-center text-sm text-white/50">{emptyMessage}</p>
          ) : (
            <>
              <div className="mb-3 flex flex-col sm:flex-row gap-2">
                <Button type="button" variant="outline" onClick={onExportAll} className="h-10 flex-1 rounded-xl border-emerald-300/30 bg-transparent text-emerald-200 hover:bg-emerald-300/10 text-xs sm:text-sm whitespace-normal"><ExportIcon className="ml-2 size-4 shrink-0" aria-hidden="true" /><span className="truncate">{isMobile ? 'حفظ أو مشاركة السجل' : 'تصدير السجل كاملا'}</span></Button>
                <Button type="button" variant="outline" onClick={onClear} className="h-10 rounded-xl border-rose-300/30 bg-transparent text-rose-200 hover:bg-rose-300/10 text-xs sm:text-sm whitespace-normal"><Trash2 className="ml-2 size-4 shrink-0" aria-hidden="true" /><span>مسح السجل</span></Button>
              </div>
              <ul className="flex max-h-96 flex-col gap-2 overflow-y-auto">{children}</ul>
            </>
          )}
        </div>
      )}
    </section>
  )
}
