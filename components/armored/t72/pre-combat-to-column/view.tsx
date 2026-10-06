'use client'

import { ArmoredUnitButton } from '@/components/armored/armored-unit-button'
import type { T72PreCombatToColumnUnit } from '@/lib/armored/t72/pre-combat-to-column'
import {
  createT72PreCombatToColumnEvent,
  T72_PRE_COMBAT_TO_COLUMN_UNITS,
} from '@/lib/armored/t72/pre-combat-to-column'
import { TimerPanel } from '@/components/timer/timer-panel'

export type T72PreCombatToColumnViewId =
  | 't72-pre-combat-to-column'
  | 't72-pre-combat-to-column-سرية'
  | 't72-pre-combat-to-column-كتيبة'

const UNIT_SUBJECT: Record<T72PreCombatToColumnUnit, string> = {
  سرية: 'السرية',
  كتيبة: 'الكتيبة',
}

const UNIT_RATINGS: Record <T72PreCombatToColumnUnit, Array<{ score: string; rating: string }>> = {
  سرية: [
    { score: '1:40 دقيقة', rating: 'ممتاز' },
    { score: '1:50 دقيقة', rating: 'جيد' },
    { score: '2:10 دقيقة', rating: 'مقبول' },
  ],
  كتيبة: [
    { score: '3:00 دقيقة', rating: 'ممتاز' },
    { score: '3:20 دقيقة', rating: 'جيد' },
    { score: '4:00 دقيقة', rating: 'مقبول' },
  ],
}

function getInstructions(unit: T72PreCombatToColumnUnit) {
  const subject = UNIT_SUBJECT[unit]
  if (!subject) return 'لا يوجد تعليمات خاصة بهذا القسم'

  return `${subject} تهاجم بترتيب ما قبل القتال. وبإيعاز (إشارة) تغيّر الوحدات ترتيبها إلى الرتل وتتابع الحركة.`
}

export function T72PreCombatToColumnView({
  activeView,
  openView,
}: {
  activeView: T72PreCombatToColumnViewId
  openView: (view: T72PreCombatToColumnViewId) => void
}) {
  if (activeView === 't72-pre-combat-to-column') {
    return (
      <div className="grid gap-3 sm:gap-4">
        {T72_PRE_COMBAT_TO_COLUMN_UNITS.map((unit) => (
          <ArmoredUnitButton
            key={unit.id}
            label={unit.label}
            onClick={() => openView(`t72-pre-combat-to-column-${unit.id}` as T72PreCombatToColumnViewId)}
          />
        ))}
      </div>
    )
  }

  const unit = activeView.replace(
    't72-pre-combat-to-column-',
    '',
  ) as T72PreCombatToColumnUnit

  return (
    <TimerPanel
      event={createT72PreCombatToColumnEvent(unit)}
      showRecord={false}
      trainerInstructions={getInstructions(unit)}
      trainerRatings={UNIT_RATINGS[unit]}
      ratingsTitle="التقدير حسب الزمن"
    />
  )
}