'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  ArmoredUnitSelector,
} from '@/components/armored/armored-unit-selector'
import type { T55_62ColumnToCombatFlankUnit } from '@/lib/armored/t55-62/column-to-combat-flank'
import {
  createT55_62ColumnToCombatFlankEvent,
  T55_62_COLUMN_TO_COMBAT_FLANK_UNITS,
} from '@/lib/armored/t55-62/column-to-combat-flank'

export type T55_62ColumnToCombatFlankViewId =
  | 't55-62-column-to-combat-flank'
  | 't55-62-column-to-combat-flank-فصيلة'
  | 't55-62-column-to-combat-flank-سرية'
  | 't55-62-column-to-combat-flank-كتيبة'

const UNIT_RATINGS: Record <T55_62ColumnToCombatFlankUnit, Array<{ score: string; rating: string }>> = {
  فصيلة: [
    { score: '18 ثا', rating: 'ممتاز' },
    { score: '20 ثا', rating: 'جيد' },
    { score: '24 ثا', rating: 'مقبول' },
  ],
  سرية: [
    { score: '25 ثا', rating: 'ممتاز' },
    { score: '30 ثا', rating: 'جيد' },
    { score: '35 ثا', rating: 'مقبول' },
  ],
  كتيبة: [
    { score: '40 ثا', rating: 'ممتاز' },
    { score: '50 ثا', rating: 'جيد' },
    { score: '1:10 دقيقة', rating: 'مقبول' },
  ],
}

function getInstructions() {
  return `الوحدات تقوم بالمسير. المدافع مثبتة على الوضعية الأمامية، الغلافات منزوعة عن الأسلحة، وبإيعاز (إشارة) تنفتح بترتيب القتال بالاتجاه المحدد، ويجري تحويل الأسلحة من وضعية الرحيل إلى وضعية القتال وتتابع الحركة.`
}

export function T55_62ColumnToCombatFlankView({
  activeView,
  openView,
}: {
  activeView: T55_62ColumnToCombatFlankViewId
  openView: (view: T55_62ColumnToCombatFlankViewId) => void
}) {
  if (activeView === 't55-62-column-to-combat-flank') {
    return (
      <ArmoredUnitSelector
        drillTitle="الفتح من رتل التحرك الى ترتيب القتال الصد هجوم معاد (باتجاه الجوانب)"
        tankModel="T-55 / T-62"
        units={T55_62_COLUMN_TO_COMBAT_FLANK_UNITS}
        onSelect={(unitId) =>
          openView(
            `t55-62-column-to-combat-flank-${unitId}` as T55_62ColumnToCombatFlankViewId,
          )
        }
      />
    )
  }

  const unit = activeView.replace(
    't55-62-column-to-combat-flank-',
    '',
  ) as T55_62ColumnToCombatFlankUnit

  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT55_62ColumnToCombatFlankEvent(unit)}
        showRecord={false}
        trainerInstructions={getInstructions()}
        trainerRatings={UNIT_RATINGS[unit]}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}