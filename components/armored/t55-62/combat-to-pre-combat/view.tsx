'use client'

import { ArmoredUnitButton } from '@/components/armored/armored-unit-button'
import {
  createT55_62CombatToPreCombatEvent,
  type T55_62CombatToPreCombatUnit,
  T55_62_COMBAT_TO_PRE_COMBAT_UNITS,
} from '@/lib/armored/t55-62/combat-to-pre-combat'
import { TimerPanel } from '@/components/timer/timer-panel'

export type T55_62CombatToPreCombatViewId =
  | 't55-62-combat-to-pre-combat'
  | 't55-62-combat-to-pre-combat-فصيلة'
  | 't55-62-combat-to-pre-combat-سرية'
  | 't55-62-combat-to-pre-combat-كتيبة'

const UNIT_SUBJECT: Record<T55_62CombatToPreCombatUnit, string> = {
  فصيلة: 'الفصيلة',
  سرية: 'السرية',
  كتيبة: 'الكتيبة',
}

const UNIT_RATINGS: Record <T55_62CombatToPreCombatUnit, Array<{ score: string; rating: string }>> = {
  فصيلة: [
    { score: '40 ثا', rating: 'ممتاز' },
    { score: '45 ثا', rating: 'جيد' },
    { score: '55 ثا', rating: 'مقبول' },
  ],
  سرية: [
    { score: '55 ثا', rating: 'ممتاز' },
    { score: '1:00 دقيقة', rating: 'جيد' },
    { score: '2:10 دقيقة', rating: 'مقبول' },
  ],
  كتيبة: [
    { score: '3:10 دقيقة', rating: 'ممتاز' },
    { score: '3:30 دقيقة', rating: 'جيد' },
    { score: '4:10 دقيقة', rating: 'مقبول' },
  ],
}

function getInstructions(unit: T55_62CombatToPreCombatUnit) {
  const subject = UNIT_SUBJECT[unit]
  if (!subject) return 'لا يوجد تعليمات خاصة بهذا القسم'

  return `${subject} تهاجم بترتيب القتال. وبإيعاز (إشارة) تغيّر الوحدات تشكيلها إلى ترتيب ما قبل القتال (الفصيلة إلى الرتل) وتتابع الحركة.`
}

export function T55_62CombatToPreCombatView({
  activeView,
  openView,
}: {
  activeView: T55_62CombatToPreCombatViewId
  openView: (view: T55_62CombatToPreCombatViewId) => void
}) {
  if (activeView === 't55-62-combat-to-pre-combat') {
    return (
      <div className="grid gap-3 sm:gap-4">
        {T55_62_COMBAT_TO_PRE_COMBAT_UNITS.map((unit) => (
          <ArmoredUnitButton
            key={unit.id}
            label={unit.label}
            onClick={() => openView(`t55-62-combat-to-pre-combat-${unit.id}` as T55_62CombatToPreCombatViewId)}
          />
        ))}
      </div>
    )
  }

  const unit = activeView.replace(
    't55-62-combat-to-pre-combat-',
    '',
  ) as T55_62CombatToPreCombatUnit

  return (
    <TimerPanel
      event={createT55_62CombatToPreCombatEvent(unit)}
      showRecord={false}
      trainerInstructions={getInstructions(unit)}
      trainerRatings={UNIT_RATINGS[unit]}
      ratingsTitle="التقدير حسب الزمن"
    />
  )
}