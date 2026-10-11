'use client'

import {
    ArmoredUnitSelector,
} from '@/components/armored/armored-unit-selector';
import { TimerPanel } from '@/components/timer/timer-panel';
import type { T72MoveAndOccupyFiringLineUnit } from '@/lib/armored/t72/move-and-occupy-firing-line';
import {
    createT72MoveAndOccupyFiringLineEvent,
    T72_MOVE_AND_OCCUPY_FIRING_LINE_UNITS,
} from '@/lib/armored/t72/move-and-occupy-firing-line';

export type T72MoveAndOccupyFiringLineViewId =
  | 't72-move-and-occupy-firing-line'
  | 't72-move-and-occupy-firing-line-فصيلة'
  | 't72-move-and-occupy-firing-line-سرية'

const UNIT_SUBJECT: Record <T72MoveAndOccupyFiringLineUnit, string> = {
  فصيلة: 'الفصيلة',
  سرية: 'السرية',
}

const UNIT_RATINGS: Record <T72MoveAndOccupyFiringLineUnit, Array<{ score: string; rating: string }>> = {
  فصيلة: [
    { score: '6:00 دقيقة', rating: 'ممتاز' },
    { score: '7:00 دقيقة', rating: 'جيد' },
    { score: '8:00 دقيقة', rating: 'مقبول' },
  ],
  سرية: [
    { score: '6:30 دقيقة', rating: 'ممتاز' },
    { score: '7:30 دقيقة', rating: 'جيد' },
    { score: '9:00 دقيقة', rating: 'مقبول' },
  ],
}

function getInstructions(unit: T72MoveAndOccupyFiringLineUnit) {
  const subject = UNIT_SUBJECT[unit]
  if (!subject) return 'لا يوجد تعليمات خاصة بهذا القسم'

  return `الدبابات مع العناصر في المساتر (نقطة الاستناد). بعد الخط لا يقل عن ٢ كم. عند وصول الدبابات إلى الخط المحدد، تحضّر الطواقم المعطيات لتنفيذ الرمي بالتسديد المباشر، وتبلغ عن الاستعداد باللاسلكي.\nيُحسب الزمن من إيعاز (إشارة) «${subject} إلى الخط كذا - سر» حتى الإعلام «${subject} جاهزة».`
}

export function T72MoveAndOccupyFiringLineView({
  activeView,
  openView,
}: {
  activeView: T72MoveAndOccupyFiringLineViewId
  openView: (view: T72MoveAndOccupyFiringLineViewId) => void
}) {
  if (activeView === 't72-move-and-occupy-firing-line') {
    return (
      <ArmoredUnitSelector
        drillTitle="التحرك واحتلال خط رمي لصد هجمات العدو"
        tankModel="T-72"
        units={T72_MOVE_AND_OCCUPY_FIRING_LINE_UNITS}
        onSelect={(unitId) =>
          openView(
            `t72-move-and-occupy-firing-line-${unitId}` as T72MoveAndOccupyFiringLineViewId,
          )
        }
      />
    )
  }

  const unit = activeView.replace(
    't72-move-and-occupy-firing-line-',
    '',
  ) as T72MoveAndOccupyFiringLineUnit

  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT72MoveAndOccupyFiringLineEvent(unit)}
        showRecord={false}
        trainerInstructions={getInstructions(unit)}
        trainerRatings={UNIT_RATINGS[unit]}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}