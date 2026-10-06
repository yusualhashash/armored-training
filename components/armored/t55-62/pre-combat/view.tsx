'use client'

import { ArmoredUnitButton } from '@/components/armored/armored-unit-button'
import {
  createT55_62PreCombatEvent,
  type T55_62PreCombatUnit,
  T55_62_PRE_COMBAT_UNITS,
} from '@/lib/armored/t55-62/pre-combat'
import { TimerPanel } from '@/components/timer/timer-panel'

export type T55_62PreCombatViewId =
  | 't55-62-pre-combat'
  | 't55-62-pre-combat-سرية'
  | 't55-62-pre-combat-كتيبة'

const UNIT_SUBJECT: Record<T55_62PreCombatUnit, string> = {
  سرية: 'السرية',
  كتيبة: 'الكتيبة',
}

const UNIT_RATINGS: Record<T55_62PreCombatUnit, { score: string; rating: string }[]> = {
  سرية: [
    { score: '2:00 دقيقة', rating: 'ممتاز' },
    { score: '2:15 دقيقة', rating: 'جيد' },
    { score: '2:45 دقيقة', rating: 'مقبول' },
  ],
  كتيبة: [
    { score: '3:30 دقيقة', rating: 'ممتاز' },
    { score: '4:00 دقيقة', rating: 'جيد' },
    { score: '4:50 دقيقة', rating: 'مقبول' },
  ],
}

function getInstructions(unit: T55_62PreCombatUnit) {
  const subject = UNIT_SUBJECT[unit]
  if (!subject) return 'لا يوجد تعليمات خاصة بهذا القسم'

  return `تقوم ${subject} بالمسير في الرتل. تنفتح الوحدات بإيعاز (إشارة) وتتابع الحركة بترتيب ما قبل القتال.`
}

export function T55_62PreCombatView({
  activeView,
  openView,
}: {
  activeView: T55_62PreCombatViewId
  openView: (view: T55_62PreCombatViewId) => void
}) {
  if (activeView === 't55-62-pre-combat') {
    return (
      <div className="grid gap-3 sm:gap-4">
        {T55_62_PRE_COMBAT_UNITS.map((unit) => (
          <ArmoredUnitButton
            key={unit.id}
            label={unit.label}
            onClick={() => openView(`t55-62-pre-combat-${unit.id}` as T55_62PreCombatViewId)}
          />
        ))}
      </div>
    )
  }

  const unit = activeView.replace(
    't55-62-pre-combat-',
    '',
  ) as T55_62PreCombatUnit

  return (
    <TimerPanel
      event={createT55_62PreCombatEvent(unit)}
      showRecord={false}
      trainerInstructions={getInstructions(unit)}
      trainerRatings={UNIT_RATINGS[unit]}
      ratingsTitle="التقدير حسب الزمن"
    />
  )
}