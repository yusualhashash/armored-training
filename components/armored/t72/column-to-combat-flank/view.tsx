'use client'

import { ArmoredUnitButton } from '@/components/armored/armored-unit-button'
import type { T72ColumnToCombatFlankUnit } from '@/lib/armored/t72/column-to-combat-flank'
import {
  createT72ColumnToCombatFlankEvent,
  T72_COLUMN_TO_COMBAT_FLANK_UNITS,
} from '@/lib/armored/t72/column-to-combat-flank'
import { TimerPanel } from '@/components/timer/timer-panel'

export type T72ColumnToCombatFlankViewId =
  | 't72-column-to-combat-flank'
  | 't72-column-to-combat-flank-فصيلة'
  | 't72-column-to-combat-flank-سرية'
  | 't72-column-to-combat-flank-كتيبة'

const UNIT_RATINGS: Record <T72ColumnToCombatFlankUnit, Array<{ score: string; rating: string }>> = {
  فصيلة: [
    { score: '16 ثا', rating: 'ممتاز' },
    { score: '18 ثا', rating: 'جيد' },
    { score: '20 ثا', rating: 'مقبول' },
  ],
  سرية: [
    { score: '20 ثا', rating: 'ممتاز' },
    { score: '25 ثا', rating: 'جيد' },
    { score: '30 ثا', rating: 'مقبول' },
  ],
  كتيبة: [
    { score: '35 ثا', rating: 'ممتاز' },
    { score: '40 ثا', rating: 'جيد' },
    { score: '45 ثا', rating: 'مقبول' },
  ],
}

function getInstructions() {
  return `الوحدات تقوم بالمسير. المدافع مثبتة على الوضعية الأمامية، الغلافات منزوعة عن الأسلحة، وبإيعاز (إشارة) تنفتح بترتيب القتال بالاتجاه المحدد، ويجري تحويل الأسلحة من وضعية الرحيل إلى وضعية القتال وتتابع الحركة.`
}

export function T72ColumnToCombatFlankView({
  activeView,
  openView,
}: {
  activeView: T72ColumnToCombatFlankViewId
  openView: (view: T72ColumnToCombatFlankViewId) => void
}) {
  if (activeView === 't72-column-to-combat-flank') {
    return (
      <div className="grid gap-3 sm:gap-4">
        {T72_COLUMN_TO_COMBAT_FLANK_UNITS.map((unit) => (
          <ArmoredUnitButton
            key={unit.id}
            label={unit.label}
            onClick={() => openView(`t72-column-to-combat-flank-${unit.id}` as T72ColumnToCombatFlankViewId)}
          />
        ))}
      </div>
    )
  }

  const unit = activeView.replace(
    't72-column-to-combat-flank-',
    '',
  ) as T72ColumnToCombatFlankUnit

  return (
    <TimerPanel
      event={createT72ColumnToCombatFlankEvent(unit)}
      showRecord={false}
      trainerInstructions={getInstructions()}
      trainerRatings={UNIT_RATINGS[unit]}
      ratingsTitle="التقدير حسب الزمن"
    />
  )
}