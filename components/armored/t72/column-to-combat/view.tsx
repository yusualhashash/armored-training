'use client'

import { ArmoredUnitButton } from '@/components/armored/armored-unit-button'
import type { T72ColumnToCombatUnit } from '@/lib/armored/t72/column-to-combat'
import {
  createT72ColumnToCombatEvent,
  T72_COLUMN_TO_COMBAT_UNITS,
} from '@/lib/armored/t72/column-to-combat'
import { TimerPanel } from '@/components/timer/timer-panel'

export type T72ColumnToCombatViewId =
  | 't72-column-to-combat'
  | 't72-column-to-combat-سرية'
  | 't72-column-to-combat-كتيبة'

const UNIT_RATINGS: Record <T72ColumnToCombatUnit, Array<{ score: string; rating: string }>> = {
  سرية: [
    { score: '2:35 دقيقة', rating: 'ممتاز' },
    { score: '2:50 دقيقة', rating: 'جيد' },
    { score: '3:20 دقيقة', rating: 'مقبول' },
  ],
  كتيبة: [
    { score: '5:30 دقيقة', rating: 'ممتاز' },
    { score: '6:00 دقيقة', rating: 'جيد' },
    { score: '7:10 دقيقة', rating: 'مقبول' },
  ],
}

function getInstructions() {
  return `الوحدات تقوم بالمسير. المدافع مثبتة على الوضعية الأمامية، الغلافات منزوعة عن الأسلحة، وبإيعاز (إشارة) تنفتح بترتيب القتال بالاتجاه المحدد، ويجري تحويل الأسلحة من وضعية الرحيل إلى وضعية القتال وتتابع الحركة.`
}

export function T72ColumnToCombatView({
  activeView,
  openView,
}: {
  activeView: T72ColumnToCombatViewId
  openView: (view: T72ColumnToCombatViewId) => void
}) {
  if (activeView === 't72-column-to-combat') {
    return (
      <div className="grid gap-3 sm:gap-4">
        {T72_COLUMN_TO_COMBAT_UNITS.map((unit) => (
          <ArmoredUnitButton
            key={unit.id}
            label={unit.label}
            onClick={() => openView(`t72-column-to-combat-${unit.id}` as T72ColumnToCombatViewId)}
          />
        ))}
      </div>
    )
  }

  const unit = activeView.replace(
    't72-column-to-combat-',
    '',
  ) as T72ColumnToCombatUnit

  return (
    <TimerPanel
      event={createT72ColumnToCombatEvent(unit)}
      showRecord={false}
      trainerInstructions={getInstructions()}
      trainerRatings={UNIT_RATINGS[unit]}
      ratingsTitle="التقدير حسب الزمن"
    />
  )
}