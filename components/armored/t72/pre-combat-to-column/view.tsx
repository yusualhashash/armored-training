'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  ArmoredUnitSelector,
} from '@/components/armored/armored-unit-selector'
import type { T72PreCombatToColumnUnit } from '@/lib/armored/t72/pre-combat-to-column'
import {
  createT72PreCombatToColumnEvent,
  T72_PRE_COMBAT_TO_COLUMN_UNITS,
} from '@/lib/armored/t72/pre-combat-to-column'

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
      <ArmoredUnitSelector
        drillTitle="الانتقال من ترتيب ما قبل القتال الى الرتل (T-72)"
        tankModel="T-72"
        units={T72_PRE_COMBAT_TO_COLUMN_UNITS}
        onSelect={(unitId) =>
          openView(
            `t72-pre-combat-to-column-${unitId}` as T72PreCombatToColumnViewId,
          )
        }
      />
    )
  }

  const unit = activeView.replace(
    't72-pre-combat-to-column-',
    '',
  ) as T72PreCombatToColumnUnit

  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT72PreCombatToColumnEvent(unit)}
        showRecord={false}
        trainerInstructions={getInstructions(unit)}
        trainerRatings={UNIT_RATINGS[unit]}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}