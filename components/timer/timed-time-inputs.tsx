'use client'

import type { ReactNode } from 'react'
import { X, Trophy } from 'lucide-react'

import { Button } from '@/components/ui/button'
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

/** حقول عرض أزمنة وصول المتدربين المسجلة تلقائياً عبر زر تسجيل وصول. */
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
    <section className="rounded-[2rem] border border-white/10 bg-[#101216] p-4 sm:p-6" aria-labelledby="times-title">
      {recordedTimes.length > 0 && (
        <>
          <div className="mb-4 flex items-center justify-between gap-2">
            <div className="min-w-0 flex-1">
              <h2 id="times-title" className="text-sm sm:text-base font-bold text-white">
                أزمنة الوصول المسجلة
              </h2>
              <p className="mt-1 text-xs text-white/50 break-words">
                سُجلت أزمنة المتدربين تلقائياً عبر ساعة الإيقاف ({recordedTimes.length} متدرب).
              </p>
            </div>
            <span className="shrink-0 rounded-full border border-rose-200/20 bg-rose-200/10 px-2.5 py-1 text-xs font-semibold text-rose-200 whitespace-nowrap">
              {recordedTimes.length} وصول
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-5">
            {recordedTimes.map((time, index) => (
              <div
                key={index}
                className="relative flex flex-col rounded-xl border border-white/10 bg-white/[0.05] p-2.5 text-center transition-colors hover:border-white/20"
              >
                {onRemove && (
                  <button
                    type="button"
                    onClick={() => onRemove(index)}
                    className="absolute -top-1.5 -left-1.5 flex size-5 items-center justify-center rounded-full bg-rose-500 text-white shadow-sm hover:bg-rose-600 transition"
                    title="حذف هذا المتدرب"
                    aria-label={`حذف المتدرب ${index + 1}`}
                  >
                    <X className="size-3" />
                  </button>
                )}
                <span className="text-[11px] font-medium text-white/60 mb-1">
                  المتدرب {index + 1}
                </span>
                <div
                  className="h-10 w-full flex items-center justify-center rounded-lg border border-white/10 bg-black/30 px-2 text-center text-sm font-mono font-bold text-rose-200 select-none cursor-default"
                >
                  {formatDisplayTime(time)}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <Button
              type="button"
              onClick={onSubmit}
              className="h-12 w-full rounded-xl bg-rose-200 font-bold text-[#24131b] hover:bg-rose-100 shadow-md flex items-center justify-center gap-2 text-sm"
            >
              <Trophy className="size-4" />
              <span>عرض النتيجة والتقييم</span>
            </Button>
          </div>
        </>
      )}

      {children}
    </section>
  )
}
