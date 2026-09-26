'use client'

import { Button } from '@/components/ui/button'
import { ChevronLeft, Shield } from 'lucide-react'
import type { T72MoveAndOccupyFiringLineUnit } from '@/lib/armored/t72/move-and-occupy-firing-line'
import { createT72MoveAndOccupyFiringLineEvent, T72_MOVE_AND_OCCUPY_FIRING_LINE_UNITS } from '@/lib/armored/t72/move-and-occupy-firing-line'
import { TimerPanel } from '@/components/timer/timer-panel'

export type T72MoveAndOccupyFiringLineViewId =
  | 't72-move-and-occupy-firing-line'
  | 't72-move-and-occupy-firing-line-فصيلة'
  | 't72-move-and-occupy-firing-line-سرية'

export function T72MoveAndOccupyFiringLineView({
  activeView,
  openView,
}: {
  activeView: T72MoveAndOccupyFiringLineViewId
  openView: (view: T72MoveAndOccupyFiringLineViewId) => void
}) {
  if (activeView === 't72-move-and-occupy-firing-line') {
    return (
      <div className="grid gap-4">
        {T72_MOVE_AND_OCCUPY_FIRING_LINE_UNITS.map((unit) => (
          <Button
            key={unit.id}
            type="button"
            variant="ghost"
            onClick={() =>
              openView(`t72-move-and-occupy-firing-line-${unit.id}` as T72MoveAndOccupyFiringLineViewId)
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

  const unit = activeView.replace('t72-move-and-occupy-firing-line-', '') as T72MoveAndOccupyFiringLineUnit

  return (
    <TimerPanel
      event={createT72MoveAndOccupyFiringLineEvent(unit)}
      showRecord={false}
    />
  )
}
