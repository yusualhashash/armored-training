'use client'

import { Button } from '@/components/ui/button'
import { ChevronLeft, Shield } from 'lucide-react'
import type { T72DisembarkingUnit } from '@/lib/armored/t72/disembarking'
import {
  createT72DisembarkingEvent,
  T72_DISEMBARKING_UNITS,
} from '@/lib/armored/t72/disembarking'
import { TimerPanel } from '@/components/timer/timer-panel'

export type T72DisembarkingViewId =
  | 't72-disembarking'
  | 't72-disembarking-طاقم'
  | 't72-disembarking-فصيلة'
  | 't72-disembarking-سرية'

const UNIT_SUBJECT: Record<T72DisembarkingUnit, string> = {
  طاقم: 'الطواقم',
  فصيلة: 'الفصائل',
  سرية: 'السرية',
}

const UNIT_RATINGS: Record<T72DisembarkingUnit, { score: string; rating: string }[]> = {
  طاقم: [
    { score: '8 ثا', rating: 'ممتاز' },
    { score: '9 ثا', rating: 'جيد' },
    { score: '10 ثا', rating: 'مقبول' },
  ],
  فصيلة: [
    { score: '9 ثا', rating: 'ممتاز' },
    { score: '10 ثا', rating: 'جيد' },
    { score: '12 ثا', rating: 'مقبول' },
  ],
  سرية: [
    { score: '11 ثا', rating: 'ممتاز' },
    { score: '12 ثا', rating: 'جيد' },
    { score: '14 ثا', rating: 'مقبول' },
  ],
}

function getInstructions(unit: T72DisembarkingUnit) {
  const subject = UNIT_SUBJECT[unit]
  if (!subject) return 'لا يوجد تعليمات خاصة بهذا القسم'

  return `${subject} في الدبابات حسب أماكنهم (مع الكمامات وحقائب القادة)، فتحات الدخول مغلقة بالمزلاج.\nيُحسب الزمن من إيعاز (إشارة) «إلى القتال» حتى اصطفاف ${subject} بصف واحد على بعد ٢ – ٤ خطوات أمام (خلف) الدبابات، الوجه إلى الأمام (نحو الدبابات). عند ارتداء ${subject} الألبسة الشتوية يُزاد الزمن بمقدار ٢ ثانية.`
}

export function T72DisembarkingView({
  activeView,
  openView,
}: {
  activeView: T72DisembarkingViewId
  openView: (view: T72DisembarkingViewId) => void
}) {
  if (activeView === 't72-disembarking') {
    return (
      <div className="grid gap-4">
        {T72_DISEMBARKING_UNITS.map((unit) => (
          <Button
            key={unit.id}
            type="button"
            variant="ghost"
            onClick={() =>
              openView(`t72-disembarking-${unit.id}` as T72DisembarkingViewId)
            }
            dir="ltr"
            className="group flex h-auto w-full items-center justify-between rounded-3xl border border-white/10 bg-[#101216] p-5 text-right text-white hover:bg-[#17191f]"
          >
            <ChevronLeft
              className="order-1 text-white/40 transition-transform group-hover:-translate-x-1"
              aria-hidden="true"
            />

            <span dir="rtl" className="order-2 flex items-center gap-4">
              <span className="flex size-14 items-center justify-center rounded-2xl bg-rose-200/10 text-rose-200">
                <Shield aria-hidden="true" />
              </span>

              <span className="flex flex-col items-start gap-1">
                <span className="text-lg font-semibold">{unit.label}</span>
              </span>
            </span>
          </Button>
        ))}
      </div>
    )
  }

  const unit = activeView.replace(
    't72-disembarking-',
    '',
  ) as T72DisembarkingUnit

  return (
    <TimerPanel
      event={createT72DisembarkingEvent(unit)}
      showRecord={false}
      trainerInstructions={getInstructions(unit)}
      trainerRatings={UNIT_RATINGS[unit]}
      ratingsTitle="التقدير حسب الزمن"
    />
  )
}