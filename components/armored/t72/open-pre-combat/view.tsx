'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  ArmoredUnitSelector,
} from '@/components/armored/armored-unit-selector'
import type { T72OpenPreCombatUnit } from '@/lib/armored/t72/open-pre-combat'
import {
  createT72OpenPreCombatEvent,
  T72_OPEN_PRE_COMBAT_UNITS,
} from '@/lib/armored/t72/open-pre-combat'

export type T72OpenPreCombatViewId =
  | 't72-open-pre-combat'
  | 't72-open-pre-combat-فصيلة'
  | 't72-open-pre-combat-سرية'
  | 't72-open-pre-combat-كتيبة'

const UNIT_SUBJECT: Record<T72OpenPreCombatUnit, string> = {
  فصيلة: 'الفصيلة',
  سرية: 'السرية',
  كتيبة: 'الكتيبة',
}

const UNIT_RATINGS: Record <T72OpenPreCombatUnit, { score: string; rating: string }[]> = {
  فصيلة: [
    { score: '35 ثا', rating: 'ممتاز' },
    { score: '40 ثا', rating: 'جيد' },
    { score: '50 ثا', rating: 'مقبول' },
  ],
  سرية: [
    { score: '55 ثا', rating: 'ممتاز' },
    { score: '1:00 دقيقة', rating: 'جيد' },
    { score: '1:10 دقيقة', rating: 'مقبول' },
  ],
  كتيبة: [
    { score: '2:45 دقيقة', rating: 'ممتاز' },
    { score: '3:00 دقيقة', rating: 'جيد' },
    { score: '3:30 دقيقة', rating: 'مقبول' },
  ],
}

function getInstructions(unit: T72OpenPreCombatUnit) {
  const subject = UNIT_SUBJECT[unit]
  if (!subject) return 'لا يوجد تعليمات خاصة بهذا القسم'

  return `${subject} تهاجم بترتيب ما قبل القتال (الفصيلة بالرتل)، وبإيعاز (إشارة) تنفتح الوحدات بترتيب القتال وتتابع الحركة.`
}

export function T72OpenPreCombatView({
  activeView,
  openView,
}: {
  activeView: T72OpenPreCombatViewId
  openView: (view: T72OpenPreCombatViewId) => void
}) {
  if (activeView === 't72-open-pre-combat') {
    return (
      <ArmoredUnitSelector
        drillTitle="الفتح من ترتيب ما قبل القتال (T-72)"
        tankModel="T-72"
        units={T72_OPEN_PRE_COMBAT_UNITS}
        onSelect={(unitId) =>
          openView(`t72-open-pre-combat-${unitId}` as T72OpenPreCombatViewId)
        }
      />
    )
  }

  const unit = activeView.replace(
    't72-open-pre-combat-',
    '',
  ) as T72OpenPreCombatUnit

  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT72OpenPreCombatEvent(unit)}
        showRecord={false}
        trainerInstructions={getInstructions(unit)}
        trainerRatings={UNIT_RATINGS[unit]}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}