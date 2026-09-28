'use client'

import { Button } from '@/components/ui/button'
import { ChevronLeft, Shield } from 'lucide-react'
import type { T55_62MoveAndOccupyFiringLineUnit } from '@/lib/armored/t55-62/move-and-occupy-firing-line'
import {
  createT55_62MoveAndOccupyFiringLineEvent,
  T55_62_MOVE_AND_OCCUPY_FIRING_LINE_UNITS,
} from '@/lib/armored/t55-62/move-and-occupy-firing-line'
import { TimerPanel } from '@/components/timer/timer-panel'

export type T55_62MoveAndOccupyFiringLineViewId =
  | 't55-62-move-and-occupy-firing-line'
  | 't55-62-move-and-occupy-firing-line-فصيلة'
  | 't55-62-move-and-occupy-firing-line-سرية'

const UNIT_SUBJECT: Record<T55_62MoveAndOccupyFiringLineUnit, string> = {
  فصيلة: 'الفصيلة',
  سرية: 'السرية',
}

const UNIT_RATINGS: Record <T55_62MoveAndOccupyFiringLineUnit, Array<{ score: string; rating: string }>> = {
  فصيلة: [
    { score: '6:30 دقيقة', rating: 'ممتاز' },
    { score: '7:30 دقيقة', rating: 'جيد' },
    { score: '9:00 دقيقة', rating: 'مقبول' },
  ],
  سرية: [
    { score: '7:00 دقيقة', rating: 'ممتاز' },
    { score: '8:00 دقيقة', rating: 'جيد' },
    { score: '10:00 دقيقة', rating: 'مقبول' },
  ],
}

function getInstructions(unit: T55_62MoveAndOccupyFiringLineUnit) {
  const subject = UNIT_SUBJECT[unit]
  if (!subject) return 'لا يوجد تعليمات خاصة بهذا القسم'

  return `الدبابات مع العناصر في المساتر (نقطة الاستناد). بعد الخط لا يقل عن ٢ كم. عند وصول الدبابات إلى الخط المحدد، تحضّر الطواقم المعطيات لتنفيذ الرمي بالتسديد المباشر، وتبلغ عن الاستعداد باللاسلكي.\nيُحسب الزمن من إيعاز (إشارة) «${subject} إلى الخط كذا - سر» حتى الإعلام «${subject} جاهزة».`
}

export function T55_62MoveAndOccupyFiringLineView({
  activeView,
  openView,
}: {
  activeView: T55_62MoveAndOccupyFiringLineViewId
  openView: (view: T55_62MoveAndOccupyFiringLineViewId) => void
}) {
  if (activeView === 't55-62-move-and-occupy-firing-line') {
    return (
      <div className="grid gap-4">
        {T55_62_MOVE_AND_OCCUPY_FIRING_LINE_UNITS.map((unit) => (
          <Button
            key={unit.id}
            type="button"
            variant="ghost"
            onClick={() =>
              openView(
                `t55-62-move-and-occupy-firing-line-${unit.id}` as T55_62MoveAndOccupyFiringLineViewId,
              )
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
    't55-62-move-and-occupy-firing-line-',
    '',
  ) as T55_62MoveAndOccupyFiringLineUnit

  return (
    <TimerPanel
      event={createT55_62MoveAndOccupyFiringLineEvent(unit)}
      showRecord={false}
      trainerInstructions={getInstructions(unit)}
      trainerRatings={UNIT_RATINGS[unit]}
      ratingsTitle="التقدير حسب الزمن"
    />
  )
}