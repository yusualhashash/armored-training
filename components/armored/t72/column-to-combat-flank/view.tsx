'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  ArmoredUnitSelector,
  ArmoredTimerHeader,
} from '@/components/armored/armored-unit-selector'
import type { T72ColumnToCombatFlankUnit } from '@/lib/armored/t72/column-to-combat-flank'
import {
  createT72ColumnToCombatFlankEvent,
  T72_COLUMN_TO_COMBAT_FLANK_UNITS,
} from '@/lib/armored/t72/column-to-combat-flank'

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
      <ArmoredUnitSelector
        drillTitle="الفتح من رتل التحرك الى ترتيب القتال الصد هجوم معاد (باتجاه الجوانب) (T-72)"
        tankModel="T-72"
        units={T72_COLUMN_TO_COMBAT_FLANK_UNITS}
        onSelect={(unitId) =>
          openView(
            `t72-column-to-combat-flank-${unitId}` as T72ColumnToCombatFlankViewId,
          )
        }
      />
    )
  }

  const unit = activeView.replace(
    't72-column-to-combat-flank-',
    '',
  ) as T72ColumnToCombatFlankUnit
  const unitLabel =
    T72_COLUMN_TO_COMBAT_FLANK_UNITS.find((u) => u.id === unit)?.label ?? unit

  return (
    <div className="mx-auto w-full max-w-3xl">
      <ArmoredTimerHeader
        drillTitle="الفتح من رتل التحرك الى ترتيب القتال الصد هجوم معاد (باتجاه الجوانب) (T-72)"
        unitLabel={unitLabel}
        onBack={() => openView('t72-column-to-combat-flank')}
      />
      <TimerPanel
        event={createT72ColumnToCombatFlankEvent(unit)}
        showRecord={false}
        trainerInstructions={getInstructions()}
        trainerRatings={UNIT_RATINGS[unit]}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}