'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  ArmoredUnitSelector,
} from '@/components/armored/armored-unit-selector'
import type { T55_62MoveAndOccupyFiringLineUnit } from '@/lib/armored/t55-62/move-and-occupy-firing-line'
import {
  createT55_62MoveAndOccupyFiringLineEvent,
  T55_62_MOVE_AND_OCCUPY_FIRING_LINE_UNITS,
} from '@/lib/armored/t55-62/move-and-occupy-firing-line'

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
      <ArmoredUnitSelector
        drillTitle="التقدم واحتلال خط إطلاق النار"
        tankModel="T-55 / T-62"
        units={T55_62_MOVE_AND_OCCUPY_FIRING_LINE_UNITS}
        onSelect={(unitId) =>
          openView(
            `t55-62-move-and-occupy-firing-line-${unitId}` as T55_62MoveAndOccupyFiringLineViewId,
          )
        }
      />
    )
  }

  const unit = activeView.replace(
    't55-62-move-and-occupy-firing-line-',
    '',
  ) as T55_62MoveAndOccupyFiringLineUnit

  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT55_62MoveAndOccupyFiringLineEvent(unit)}
        showRecord={false}
        trainerInstructions={getInstructions(unit)}
        trainerRatings={UNIT_RATINGS[unit]}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}