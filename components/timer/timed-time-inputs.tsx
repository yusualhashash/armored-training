'use client'

import type { ReactNode } from 'react'
import { Trophy, X } from 'lucide-react'

import { formatDisplayTime } from '@/lib/test-history'

interface TimedTimeInputsProps {
  /** أزمنة المتدربين المسجلة بالثواني. */
  times: string[]
  /** الحد الأعلى لعدد المتدربين. */
  maxTrainees?: number
  onChange?: (index: number, raw: string) => void
  onAdd?: () => void
  onRemove?: (index: number) => void
  onSubmit: () => void
  /** بطاقة النتيجة التي تُعرض أسفل الحقول. */
  children?: ReactNode
}

/** حقول عرض أزمنة وصول المتدربين المسجلة تلقائياً عبر زر تسجيل وصول بتصميم تكتيكي. */
export function TimedTimeInputs({
  times,
  onRemove,
  onSubmit,
  children,
}: TimedTimeInputsProps) {
  const recordedTimes = times.filter((value) => value !== '')

  // إذا لم يتم تسجيل أي وصول بعد ولا توجد نتائج، يُخفى القسم بالكامل
  if (recordedTimes.length === 0 && !children) {
    return null
  }

  return (
    <section className="rounded-3xl border border-emerald-500/20 bg-[#0c1610] p-4 sm:p-6 shadow-md" aria-labelledby="times-title">
      {recordedTimes.length > 0 && (
        <>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 id="times-title" className="text-base font-bold text-white tracking-tight">
                أزمنة الوصول المسجلة
              </h2>
              <p className="mt-0.5 text-xs text-white/50">
                سُجلت أزمنة المتدربين تلقائياً عبر ساعة الإيقاف ({recordedTimes.length} متدرب).
              </p>
            </div>
            <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-300">
              {recordedTimes.length} وصول
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-5">
            {recordedTimes.map((time, index) => (
              <div
                key={index}
                className="relative flex flex-col rounded-2xl border border-emerald-500/15 bg-[#08120b] p-3 text-center transition-colors hover:border-emerald-500/35"
              >
                {onRemove && (
                  <button
                    type="button"
                    onClick={() => onRemove(index)}
                    className="absolute -top-1.5 -left-1.5 flex size-5 items-center justify-center rounded-full bg-red-600 text-white shadow-sm hover:bg-red-500 transition active:scale-95"
                    title="حذف هذا المتدرب"
                    aria-label={`حذف المتدرب ${index + 1}`}
                  >
                    <X className="size-3" />
                  </button>
                )}
                <span className="text-[11px] font-medium text-white/60 mb-1.5">
                  المتدرب {index + 1}
                </span>
                <div className="h-10 w-full flex items-center justify-center rounded-xl border border-emerald-500/20 bg-black/40 px-2 text-center text-sm font-mono font-bold text-emerald-300 select-none cursor-default">
                  {formatDisplayTime(time)}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5">
            <button
              type="button"
              onClick={onSubmit}
              className="flex h-13 w-full items-center justify-center gap-2 rounded-2xl border border-amber-400/30 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-amber-950/30 hover:brightness-105 active:scale-[0.99] transition-all"
            >
              <Trophy className="size-5" />
              <span>عرض النتيجة والتقييم النهائي</span>
            </button>
          </div>
        </>
      )}

      {children}
    </section>
  )
}
