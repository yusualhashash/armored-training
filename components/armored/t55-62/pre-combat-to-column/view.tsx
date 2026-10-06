'use client'

import { ArmoredUnitButton } from '@/components/armored/armored-unit-button'
import type { T55_62PreCombatToColumnUnit } from '@/lib/armored/t55-62/pre-combat-to-column'
import {
  createT55_62PreCombatToColumnEvent,
  T55_62_PRE_COMBAT_TO_COLUMN_UNITS,
} from '@/lib/armored/t55-62/pre-combat-to-column'
import { TimerPanel } from '@/components/timer/timer-panel'

export type T55_62PreCombatToColumnViewId =
  | 't55-62-pre-combat-to-column'
  | 't55-62-pre-combat-to-column-سرية'
  | 't55-62-pre-combat-to-column-كتيبة'

const UNIT_SUBJECT: Record<T55_62PreCombatToColumnUnit, string> = {
  سرية: 'السرية',
  كتيبة: 'الكتيبة',
}

const UNIT_RATINGS: Record <T55_62PreCombatToColumnUnit, Array<{ score: string; rating: string }>> = {
  سرية: [
    { score: '1:50 دقيقة', rating: 'ممتاز' },
    { score: '2:00 دقيقة', rating: 'جيد' },
    { score: '2:25 دقيقة', rating: 'مقبول' },
  ],
  كتيبة: [
    { score: '3:25 دقيقة', rating: 'ممتاز' },
    { score: '3:50 دقيقة', rating: 'جيد' },
    { score: '4:35 دقيقة', rating: 'مقبول' },
  ],
}

function getInstructions(unit: T55_62PreCombatToColumnUnit) {
  const subject = UNIT_SUBJECT[unit]
  if (!subject) return 'لا يوجد تعليمات خاصة بهذا القسم'

  return `${subject} تهاجم بترتيب ما قبل القتال. وبإيعاز (إشارة) تغيّر الوحدات ترتيبها إلى الرتل وتتابع الحركة.`
}

export function T55_62PreCombatToColumnView({
  activeView,
  openView,
}: {
  activeView: T55_62PreCombatToColumnViewId
  openView: (view: T55_62PreCombatToColumnViewId) => void
}) {
  if (activeView === 't55-62-pre-combat-to-column') {
    return (
      <div className="grid gap-3 sm:gap-4">
        {T55_62_PRE_COMBAT_TO_COLUMN_UNITS.map((unit) => (
          <ArmoredUnitButton
            key={unit.id}
            label={unit.label}
            onClick={() => openView(`t55-62-pre-combat-to-column-${unit.id}` as T55_62PreCombatToColumnViewId)}
          />
        ))}
      </div>
    )
  }

  const unit = activeView.replace(
    't55-62-pre-combat-to-column-',
    '',
  ) as T55_62PreCombatToColumnUnit

  return (
    <TimerPanel
      event={createT55_62PreCombatToColumnEvent(unit)}
      showRecord={false}
      trainerInstructions={getInstructions(unit)}
      trainerRatings={UNIT_RATINGS[unit]}
      ratingsTitle="التقدير حسب الزمن"
    />
  )
}