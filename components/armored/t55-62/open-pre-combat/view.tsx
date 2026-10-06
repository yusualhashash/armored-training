'use client'

import { ArmoredUnitButton } from '@/components/armored/armored-unit-button'
import type { T55_62OpenPreCombatUnit } from '@/lib/armored/t55-62/open-pre-combat'
import {
  createT55_62OpenPreCombatEvent,
  T55_62_OPEN_PRE_COMBAT_UNITS,
} from '@/lib/armored/t55-62/open-pre-combat'
import { TimerPanel } from '@/components/timer/timer-panel'

export type T55_62OpenPreCombatViewId =
  | 't55-62-open-pre-combat'
  | 't55-62-open-pre-combat-فصيلة'
  | 't55-62-open-pre-combat-سرية'
  | 't55-62-open-pre-combat-كتيبة'

const UNIT_SUBJECT: Record<T55_62OpenPreCombatUnit, string> = {
  فصيلة: 'الفصيلة',
  سرية: 'السرية',
  كتيبة: 'الكتيبة',
}

const UNIT_RATINGS: Record <T55_62OpenPreCombatUnit, { score: string; rating: string }[]> = {
  فصيلة: [
    { score: '45 ثا', rating: 'ممتاز' },
    { score: '50 ثا', rating: 'جيد' },
    { score: '1:00 دقيقة', rating: 'مقبول' },
  ],
  سرية: [
    { score: '1:00 دقيقة', rating: 'ممتاز' },
    { score: '1:10 دقيقة', rating: 'جيد' },
    { score: '1:25 دقيقة', rating: 'مقبول' },
  ],
  كتيبة: [
    { score: '3:10 دقيقة', rating: 'ممتاز' },
    { score: '3:30 دقيقة', rating: 'جيد' },
    { score: '4:10 دقيقة', rating: 'مقبول' },
  ],
}

function getInstructions(unit: T55_62OpenPreCombatUnit) {
  const subject = UNIT_SUBJECT[unit]
  if (!subject) return 'لا يوجد تعليمات خاصة بهذا القسم'

  return `${subject} تهاجم بترتيب ما قبل القتال (الفصيلة بالرتل)، وبإيعاز (إشارة) تنفتح الوحدات بترتيب القتال وتتابع الحركة.`
}

export function T55_62OpenPreCombatView({
  activeView,
  openView,
}: {
  activeView: T55_62OpenPreCombatViewId
  openView: (view: T55_62OpenPreCombatViewId) => void
}) {
  if (activeView === 't55-62-open-pre-combat') {
    return (
      <div className="grid gap-3 sm:gap-4">
        {T55_62_OPEN_PRE_COMBAT_UNITS.map((unit) => (
          <ArmoredUnitButton
            key={unit.id}
            label={unit.label}
            onClick={() => openView(`t55-62-open-pre-combat-${unit.id}` as T55_62OpenPreCombatViewId)}
          />
        ))}
      </div>
    )
  }

  const unit = activeView.replace(
    't55-62-open-pre-combat-',
    '',
  ) as T55_62OpenPreCombatUnit

  return (
    <TimerPanel
      event={createT55_62OpenPreCombatEvent(unit)}
      showRecord={false}
      trainerInstructions={getInstructions(unit)}
      trainerRatings={UNIT_RATINGS[unit]}
      ratingsTitle="التقدير حسب الزمن"
    />
  )
}