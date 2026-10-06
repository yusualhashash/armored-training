'use client'

import { Button } from '@/components/ui/button'
import { ChevronLeft, Shield } from 'lucide-react'
import type { T55_62ColumnToCombatFlankUnit } from '@/lib/armored/t55-62/column-to-combat-flank'
import {
  createT55_62ColumnToCombatFlankEvent,
  T55_62_COLUMN_TO_COMBAT_FLANK_UNITS,
} from '@/lib/armored/t55-62/column-to-combat-flank'
import { TimerPanel } from '@/components/timer/timer-panel'

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
      <div className="grid gap-4">
        {T55_62_COLUMN_TO_COMBAT_FLANK_UNITS.map((unit) => (
          <Button
            key={unit.id}
            type="button"
            variant="ghost"
            onClick={() =>
              openView(
                `t55-62-column-to-combat-flank-${unit.id}` as T55_62ColumnToCombatFlankViewId,
              )
            }
            dir="ltr"
            className="group flex h-auto w-full items-center justify-between rounded-3xl border border-white/10 bg-[#101216] p-5 text-right text-white hover:bg-[#17191f]"
          >
            <ChevronLeft
              className="order-1 text-white/40 transition-transform group-hover:-translate-x-1"
              aria-hidden="true"
            />

            <span dir="rtl" className="order-2 flex items-center gap-4">
              <span className="flex size-14 items-center justify-center rounded-2xl bg-rose-200/10 text-rose-200">
                <Shield aria-hidden="true" />
              </span>

              <span className="flex flex-col items-start gap-1">
                <span className="text-lg font-semibold">{unit.label}</span>
              </span>
            </span>
          </Button>
        ))}
      </div>
    )
  }

  const unit = activeView.replace(
    't55-62-column-to-combat-flank-',
    '',
  ) as T55_62ColumnToCombatFlankUnit

  return (
    <TimerPanel
      event={createT55_62ColumnToCombatFlankEvent(unit)}
      showRecord={false}
      trainerInstructions={getInstructions()}
      trainerRatings={UNIT_RATINGS[unit]}
      ratingsTitle="التقدير حسب الزمن"
    />
  )
}