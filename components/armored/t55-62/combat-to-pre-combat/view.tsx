'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  ArmoredUnitSelector,
} from '@/components/armored/armored-unit-selector'
import {
  createT55_62CombatToPreCombatEvent,
  type T55_62CombatToPreCombatUnit,
  T55_62_COMBAT_TO_PRE_COMBAT_UNITS,
} from '@/lib/armored/t55-62/combat-to-pre-combat'

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
      <ArmoredUnitSelector
        drillTitle="الانتقال من ترتيب القتال الى ترتيب ما قبل القتال (T-55 / T-62)"
        tankModel="T-55 / T-62"
        units={T55_62_COMBAT_TO_PRE_COMBAT_UNITS}
        onSelect={(unitId) =>
          openView(
            `t55-62-combat-to-pre-combat-${unitId}` as T55_62CombatToPreCombatViewId,
          )
        }
      />
    )
  }

  const unit = activeView.replace(
    't55-62-combat-to-pre-combat-',
    '',
  ) as T55_62CombatToPreCombatUnit
  
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT55_62CombatToPreCombatEvent(unit)}
        showRecord={false}
        trainerInstructions={getInstructions(unit)}
        trainerRatings={UNIT_RATINGS[unit]}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}