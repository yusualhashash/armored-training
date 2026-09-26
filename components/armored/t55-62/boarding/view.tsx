'use client'

import { Button } from '@/components/ui/button'
import { ChevronLeft, Shield } from 'lucide-react'
import {
  createT55_62Event,
  type T55_62Unit,
  T55_62_UNITS,
} from '@/lib/armored/t55-62/boarding'
import { TimerPanel } from '@/components/timer/timer-panel'

export type T55_62ViewId =
  | 't55-62-boarding'
  | 't55-62-طاقم'
  | 't55-62-فصيلة'
  | 't55-62-سرية'

export function T55_62View({
  activeView,
  openView,
}: {
  activeView: T55_62ViewId
  openView: (view: T55_62ViewId) => void
}) {
  if (activeView === 't55-62-boarding') {
    return (
      <div className="grid gap-4">
        {T55_62_UNITS.map((unit) => (
          <Button
            key={unit.id}
            type="button"
            variant="ghost"
            onClick={() =>
              openView(`t55-62-${unit.id}` as T55_62ViewId)
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
                  ركوب {unit.label} في الدبابة
                </span>
              </span>
            </span>
          </Button>
        ))}
      </div>
    )
  }

  const unit = activeView.replace(
    't55-62-',
    '',
  ) as T55_62Unit

  return (
    <TimerPanel
      event={createT55_62Event(unit)}
      showRecord={false}
    />
  )
}