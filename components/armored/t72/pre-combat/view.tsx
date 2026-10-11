'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  ArmoredUnitSelector,
} from '@/components/armored/armored-unit-selector'
import type { T72PreCombatUnit } from '@/lib/armored/t72/pre-combat'
import {
  createT72PreCombatEvent,
  T72_PRE_COMBAT_UNITS,
} from '@/lib/armored/t72/pre-combat'

export type T72PreCombatViewId =
  | 't72-pre-combat'
  | 't72-pre-combat-سرية'
  | 't72-pre-combat-كتيبة'

const UNIT_SUBJECT: Record<T72PreCombatUnit, string> = {
  سرية: 'السرية',
  كتيبة: 'الكتيبة',
}

const UNIT_RATINGS: Record<T72PreCombatUnit, { score: string; rating: string }[]> = {
  سرية: [
    { score: '1:50 دقيقة', rating: 'ممتاز' },
    { score: '2:00 دقيقة', rating: 'جيد' },
    { score: '2:25 دقيقة', rating: 'مقبول' },
  ],
  كتيبة: [
    { score: '3:10 دقيقة', rating: 'ممتاز' },
    { score: '3:30 دقيقة', rating: 'جيد' },
    { score: '4:10 دقيقة', rating: 'مقبول' },
  ],
}

function getInstructions(unit: T72PreCombatUnit) {
  const subject = UNIT_SUBJECT[unit]
  if (!subject) return 'لا يوجد تعليمات خاصة بهذا القسم'

  return `تقوم ${subject} بالمسير في الرتل. تنفتح الوحدات بإيعاز (إشارة) وتتابع الحركة بترتيب ما قبل القتال.`
}

export function T72PreCombatView({
  activeView,
  openView,
}: {
  activeView: T72PreCombatViewId
  openView: (view: T72PreCombatViewId) => void
}) {
  if (activeView === 't72-pre-combat') {
    return (
      <ArmoredUnitSelector
        drillTitle="الانتقال من تشكيلة الرتل إلى ترتيب ما قبل القتال (T-72)"
        tankModel="T-72"
        units={T72_PRE_COMBAT_UNITS}
        onSelect={(unitId) =>
          openView(`t72-pre-combat-${unitId}` as T72PreCombatViewId)
        }
      />
    )
  }

  const unit = activeView.replace('t72-pre-combat-', '') as T72PreCombatUnit

  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT72PreCombatEvent(unit)}
        showRecord={false}
        trainerInstructions={getInstructions(unit)}
        trainerRatings={UNIT_RATINGS[unit]}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}