'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  ArmoredUnitSelector,
} from '@/components/armored/armored-unit-selector'
import type { T72CombatToPreCombatUnit } from '@/lib/armored/t72/combat-to-pre-combat'
import {
  createT72CombatToPreCombatEvent,
  T72_COMBAT_TO_PRE_COMBAT_UNITS,
} from '@/lib/armored/t72/combat-to-pre-combat'

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
      <ArmoredUnitSelector
        drillTitle="الانتقال من ترتيب القتال الى ترتيب ما قبل القتال"
        tankModel="T-72"
        units={T72_COMBAT_TO_PRE_COMBAT_UNITS}
        onSelect={(unitId) =>
          openView(
            `t72-combat-to-pre-combat-${unitId}` as T72CombatToPreCombatViewId,
          )
        }
      />
    )
  }

  const unit = activeView.replace(
    't72-combat-to-pre-combat-',
    '',
  ) as T72CombatToPreCombatUnit

  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT72CombatToPreCombatEvent(unit)}
        showRecord={false}
        trainerInstructions={getInstructions(unit)}
        trainerRatings={UNIT_RATINGS[unit]}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}