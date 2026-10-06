'use client'

import { ArmoredUnitButton } from '@/components/armored/armored-unit-button'
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
      <div className="grid gap-3 sm:gap-4">
        {T72_UNLOAD_TANKS_FROM_HEAVY_CARRIERS_UNITS.map((unit) => (
          <ArmoredUnitButton
            key={unit.id}
            label={unit.label}
            onClick={() => openView(`t72-unload-tanks-from-heavy-carriers-${unit.id}` as T72UnloadTanksFromHeavyCarriersViewId)}
          />
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