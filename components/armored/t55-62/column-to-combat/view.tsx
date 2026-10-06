'use client'

import { ArmoredUnitButton } from '@/components/armored/armored-unit-button'
import type { T55_62ColumnToCombatUnit } from '@/lib/armored/t55-62/column-to-combat'
import {
  createT55_62ColumnToCombatEvent,
  T55_62_COLUMN_TO_COMBAT_UNITS,
} from '@/lib/armored/t55-62/column-to-combat'
import { TimerPanel } from '@/components/timer/timer-panel'

export type T55_62ColumnToCombatViewId =
  | 't55-62-column-to-combat'
  | 't55-62-column-to-combat-سرية'
  | 't55-62-column-to-combat-كتيبة'

const UNIT_RATINGS: Record <T55_62ColumnToCombatUnit, Array<{ score: string; rating: string }>> = {
  سرية: [
    { score: '3:00 دقيقة', rating: 'ممتاز' },
    { score: '3:20 دقيقة', rating: 'جيد' },
    { score: '4:00 دقيقة', rating: 'مقبول' },
  ],
  كتيبة: [
    { score: '6:25 دقيقة', rating: 'ممتاز' },
    { score: '7:00 دقيقة', rating: 'جيد' },
    { score: '8:20 دقيقة', rating: 'مقبول' },
  ],
}

function getInstructions() {
  return `الوحدات تقوم بالمسير. المدافع مثبتة على الوضعية الأمامية، الغلافات منزوعة عن الأسلحة، وبإيعاز (إشارة) تنفتح بترتيب القتال بالاتجاه المحدد، ويجري تحويل الأسلحة من وضعية الرحيل إلى وضعية القتال وتتابع الحركة.`
}

export function T55_62ColumnToCombatView({
  activeView,
  openView,
}: {
  activeView: T55_62ColumnToCombatViewId
  openView: (view: T55_62ColumnToCombatViewId) => void
}) {
  if (activeView === 't55-62-column-to-combat') {
    return (
      <div className="grid gap-3 sm:gap-4">
        {T55_62_COLUMN_TO_COMBAT_UNITS.map((unit) => (
          <ArmoredUnitButton
            key={unit.id}
            label={unit.label}
            onClick={() => openView(`t55-62-column-to-combat-${unit.id}` as T55_62ColumnToCombatViewId)}
          />
        ))}
      </div>
    )
  }

  const unit = activeView.replace(
    't55-62-column-to-combat-',
    '',
  ) as T55_62ColumnToCombatUnit

  return (
    <TimerPanel
      event={createT55_62ColumnToCombatEvent(unit)}
      showRecord={false}
      trainerInstructions={getInstructions()}
      trainerRatings={UNIT_RATINGS[unit]}
      ratingsTitle="التقدير حسب الزمن"
    />
  )
}