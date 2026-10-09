'use client'

import { Button } from '@/components/ui/button'
import { ChevronLeft, Shield } from 'lucide-react'
import type { T72UnloadTanksFromHeavyCarriersUnit } from '@/lib/armored/t72/unload-tanks-from-heavy-carriers'
import {
  createT72UnloadTanksFromHeavyCarriersEvent,
  T72_UNLOAD_TANKS_FROM_HEAVY_CARRIERS_UNITS,
} from '@/lib/armored/t72/unload-tanks-from-heavy-carriers'
import { TimerPanel } from '@/components/timer/timer-panel'

export type T72UnloadTanksFromHeavyCarriersViewId =
  | 't72-unload-tanks-from-heavy-carriers'
  | 't72-unload-tanks-from-heavy-carriers-طاقم'
  | 't72-unload-tanks-from-heavy-carriers-فصيلة'
  | 't72-unload-tanks-from-heavy-carriers-سرية'

const UNIT_RATINGS: Record <T72UnloadTanksFromHeavyCarriersUnit, Array<{ score: string; rating: string }>> = {
  طاقم: [
    { score: '8:00 دقيقة', rating: 'ممتاز' },
    { score: '9:00 دقيقة', rating: 'جيد' },
    { score: '10:00 دقيقة', rating: 'مقبول' },
  ],
  فصيلة: [
    { score: '8:00 دقيقة', rating: 'ممتاز' },
    { score: '9:00 دقيقة', rating: 'جيد' },
    { score: '10:00 دقيقة', rating: 'مقبول' },
  ],
  سرية: [
    { score: '9:00 دقيقة', rating: 'ممتاز' },
    { score: '10:00 دقيقة', rating: 'جيد' },
    { score: '11:00 دقيقة', rating: 'مقبول' },
  ],
}

const INSTRUCTIONS = [
  'الدبابة مثبتة فوق الحاملة، المدفع في الوضعية الأفقية، برج الدبابة مثبت. المزلقانات الكبيرة والصغيرة في وضعية الرحيل. بعد التنزيل تقف الدبابة على بعد ١٠ م خلف الحاملة. مزالق الحاملة وتجهيزات كبحها وسواها في وضعية الرحيل. الطاقم على بعد خطوتين أمام الدبابة.',
  'الأخطاء التي تخفض التقدير درجة واحدة:',
  '- إذا لم توضع تجهيزات الحاملة في وضعية الرحيل بعد التنزيل.',
  'يُحسب الوقت من إيعاز «لتنزيل الدبابات - ابدأ» حتى اصطفاف الطواقم على بعد خطوتين أمام الدبابات.',
].join('\n')

function getInstructions() {
  return INSTRUCTIONS
}

export function T72UnloadTanksFromHeavyCarriersView({
  activeView,
  openView,
}: {
  activeView: T72UnloadTanksFromHeavyCarriersViewId
  openView: (view: T72UnloadTanksFromHeavyCarriersViewId) => void
}) {
  if (activeView === 't72-unload-tanks-from-heavy-carriers') {
    return (
      <div className="grid gap-4">
        {T72_UNLOAD_TANKS_FROM_HEAVY_CARRIERS_UNITS.map((unit) => (
          <Button
            key={unit.id}
            type="button"
            variant="ghost"
            onClick={() =>
              openView(
                `t72-unload-tanks-from-heavy-carriers-${unit.id}` as T72UnloadTanksFromHeavyCarriersViewId,
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
    't72-unload-tanks-from-heavy-carriers-',
    '',
  ) as T72UnloadTanksFromHeavyCarriersUnit

  return (
    <TimerPanel
      event={createT72UnloadTanksFromHeavyCarriersEvent(unit)}
      showRecord={false}
      trainerInstructions={getInstructions()}
      trainerRatings={UNIT_RATINGS[unit]}
      ratingsTitle="التقدير حسب الزمن"
    />
  )
}