'use client'

import { ArmoredUnitButton } from '@/components/armored/armored-unit-button'
import type { T72CombatToPreCombatUnit } from '@/lib/armored/t72/combat-to-pre-combat'
import {
  createT72CombatToPreCombatEvent,
  T72_COMBAT_TO_PRE_COMBAT_UNITS,
} from '@/lib/armored/t72/combat-to-pre-combat'
import { TimerPanel } from '@/components/timer/timer-panel'

export type T72CombatToPreCombatViewId =
  | 't72-combat-to-pre-combat'
  | 't72-combat-to-pre-combat-فصيلة'
  | 't72-combat-to-pre-combat-سرية'
  | 't72-combat-to-pre-combat-كتيبة'

const UNIT_SUBJECT: Record<T72CombatToPreCombatUnit, string> = {
  فصيلة: 'الفصيلة',
  سرية: 'السرية',
  كتيبة: 'الكتيبة',
}

const UNIT_RATINGS: Record <T72CombatToPreCombatUnit, Array<{ score: string; rating: string }>> = {
  فصيلة: [
    { score: '30 ثا', rating: 'ممتاز' },
    { score: '35 ثا', rating: 'جيد' },
    { score: '42 ثا', rating: 'مقبول' },
  ],
  سرية: [
    { score: '50 ثا', rating: 'ممتاز' },
    { score: '55 ثا', rating: 'جيد' },
    { score: '1:05 دقيقة', rating: 'مقبول' },
  ],
  كتيبة: [
    { score: '2:45 دقيقة', rating: 'ممتاز' },
    { score: '3:00 دقيقة', rating: 'جيد' },
    { score: '3:30 دقيقة', rating: 'مقبول' },
  ],
}

function getInstructions(unit: T72CombatToPreCombatUnit) {
  const subject = UNIT_SUBJECT[unit]
  if (!subject) return 'لا يوجد تعليمات خاصة بهذا القسم'

  return `${subject} تهاجم بترتيب القتال. وبإيعاز (إشارة) تغيّر الوحدات تشكيلها إلى ترتيب ما قبل القتال (الفصيلة إلى الرتل) وتتابع الحركة.`
}

export function T72CombatToPreCombatView({
  activeView,
  openView,
}: {
  activeView: T72CombatToPreCombatViewId
  openView: (view: T72CombatToPreCombatViewId) => void
}) {
  if (activeView === 't72-combat-to-pre-combat') {
    return (
      <div className="grid gap-3 sm:gap-4">
        {T72_COMBAT_TO_PRE_COMBAT_UNITS.map((unit) => (
          <ArmoredUnitButton
            key={unit.id}
            label={unit.label}
            onClick={() => openView(`t72-combat-to-pre-combat-${unit.id}` as T72CombatToPreCombatViewId)}
          />
        ))}
      </div>
    )
  }

  const unit = activeView.replace(
    't72-combat-to-pre-combat-',
    '',
  ) as T72CombatToPreCombatUnit

  return (
    <TimerPanel
      event={createT72CombatToPreCombatEvent(unit)}
      showRecord={false}
      trainerInstructions={getInstructions(unit)}
      trainerRatings={UNIT_RATINGS[unit]}
      ratingsTitle="التقدير حسب الزمن"
    />
  )
}