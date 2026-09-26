'use client'

import { Button } from '@/components/ui/button'
import { ChevronLeft, Shield } from 'lucide-react'
import type { T72ColumnToCombatFlankUnit } from '@/lib/armored/t72/column-to-combat-flank'
import { createT72ColumnToCombatFlankEvent, T72_COLUMN_TO_COMBAT_FLANK_UNITS } from '@/lib/armored/t72/column-to-combat-flank'
import { TimerPanel } from '@/components/timer/timer-panel'

export type T72ColumnToCombatFlankViewId =
  | 't72-column-to-combat-flank'
  | 't72-column-to-combat-flank-فصيلة'
  | 't72-column-to-combat-flank-سرية'
  | 't72-column-to-combat-flank-كتيبة'

export function T72ColumnToCombatFlankView({
  activeView,
  openView,
}: {
  activeView: T72ColumnToCombatFlankViewId
  openView: (view: T72ColumnToCombatFlankViewId) => void
}) {
  if (activeView === 't72-column-to-combat-flank') {
    return (
      <div className="grid gap-4">
        {T72_COLUMN_TO_COMBAT_FLANK_UNITS.map((unit) => (
          <Button
            key={unit.id}
            type="button"
            variant="ghost"
            onClick={() =>
              openView(`t72-column-to-combat-flank-${unit.id}` as T72ColumnToCombatFlankViewId)
            }
            dir="ltr"
            className="group flex h-auto w-full items-center justify-between rounded-3xl border border-white/10 bg-[#101216] p-5 text-right text-white hover:bg-[#17191f]"
          >
            <ChevronLeft
              className="order-1 text-white/40 transition-transform group-hover:-translate-x-1"
              aria-hidden="true"
            />

            <span
              dir="rtl"
              className="order-2 flex items-center gap-4"
            >
              <span className="flex size-14 items-center justify-center rounded-2xl bg-rose-200/10 text-rose-200">
                <Shield aria-hidden="true" />
              </span>

              <span className="flex flex-col items-start gap-1">
                <span className="text-lg font-semibold">
                  {unit.label}
                </span>
              </span>
            </span>
          </Button>
        ))}
      </div>
    )
  }

  const unit = activeView.replace('t72-column-to-combat-flank-', '') as T72ColumnToCombatFlankUnit

  return (
    <TimerPanel
      event={createT72ColumnToCombatFlankEvent(unit)}
      showRecord={false}
    />
  )
}
