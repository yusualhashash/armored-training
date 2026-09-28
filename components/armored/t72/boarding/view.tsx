'use client'

import { Button } from '@/components/ui/button'
import { ChevronLeft, Shield } from 'lucide-react'
import type { T72Unit } from '@/lib/armored/t72/boarding'
import { createT72Event, T72_UNITS } from '@/lib/armored/t72/boarding'
import { TimerPanel } from '@/components/timer/timer-panel'

export type T72ViewId =
  | 't72-boarding'
  | 't72-طاقم'
  | 't72-فصيلة'
  | 't72-سرية'

export function T72View({
  activeView,
  openView,
}: {
  activeView: T72ViewId
  openView: (view: T72ViewId) => void
}) {
  if (activeView === 't72-boarding') {
    return (
      <div className="grid gap-4">
        {T72_UNITS.map((unit) => (
          <Button
            key={unit.id}
            type="button"
            variant="ghost"
            onClick={() =>
              openView(`t72-${unit.id}` as T72ViewId)
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

  const unit = activeView.replace('t72-', '') as T72Unit

  return (
    <TimerPanel
      event={createT72Event(unit)}
      showRecord={false}
      trainerInstructions={
        unit === 'طاقم'
          ? 'الطواقم على بعد ٢–٤ خطوات في صف واحد أمام الدبابات، بالكمامات وحقائب القادة، والوجه نحو الدبابات. تكون فتحات الدخول مفتوحة، وبعد الركوب تُغلق بالرتاج.\nيُحسب الوقت من إشارة «إلى أماكنكم» حتى إغلاق الفتحات. عند ارتداء الألبسة الشتوية يُضاف ثانيتان.'
          : unit === 'فصيلة'
          ? 'الفصائل على بعد ٢–٤ خطوات في صف واحد أمام الدبابات، بالكمامات وحقائب القادة، والوجه نحو الدبابات. تكون فتحات الدخول مفتوحة، وبعد الركوب تُغلق بالرتاج.\nيُحسب الوقت من إشارة «إلى أماكنكم» حتى إغلاق الفتحات. عند ارتداء الألبسة الشتوية يُضاف ثانيتان.'
          : unit === 'سرية'
          ? 'السرية على بعد ٢–٤ خطوات في صف واحد أمام الدبابات، بالكمامات وحقائب القادة، والوجه نحو الدبابات. تكون فتحات الدخول مفتوحة، وبعد الركوب تُغلق بالرتاج.\nيُحسب الوقت من إشارة «إلى أماكنكم» حتى إغلاق الفتحات. عند ارتداء الألبسة الشتوية يُضاف ثانيتان.'
  : 'لا يوجد تعليمات خاصة بهذا القسم'
  }
  trainerRatings={unit === 'طاقم' ? [
    { score: '8', rating: 'ممتاز' },
    { score: '9', rating: 'جيد' },
    { score: '10', rating: 'مقبول' },
  ] : undefined}

    />
  )
}
