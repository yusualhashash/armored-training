'use client'

import { Button } from '@/components/ui/button'
import { ChevronLeft, Shield } from 'lucide-react'
import type { T72DisembarkingUnit } from '@/lib/armored/t72/disembarking'
import { createT72DisembarkingEvent, T72_DISEMBARKING_UNITS } from '@/lib/armored/t72/disembarking'
import { TimerPanel } from '@/components/timer/timer-panel'

export type T72DisembarkingViewId =
  | 't72-disembarking'
  | 't72-disembarking-طاقم'
  | 't72-فصيلة'
  | 't72-سرية'

export function T72DisembarkingView({
  activeView,
  openView,
}: {
  activeView: T72DisembarkingViewId
  openView: (view: T72DisembarkingViewId) => void
}) {
  if (activeView === 't72-disembarking') {
    return (
      <div className="grid gap-4">
        {T72_DISEMBARKING_UNITS.map((unit) => (
          <Button
            key={unit.id}
            type="button"
            variant="ghost"
            onClick={() =>
              openView(`t72-disembarking-${unit.id}` as T72DisembarkingViewId)
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

                <span className="text-xs text-white/50">
                  نزول {unit.label} من الدبابة
                </span>
              </span>
            </span>
          </Button>
        ))}
      </div>
    )
  }

  const unit = activeView.replace('t72-disembarking-', '') as T72DisembarkingUnit

  return (
    <TimerPanel
      event={createT72DisembarkingEvent(unit)}
      showRecord={false}
    />
  )
}
