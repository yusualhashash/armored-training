'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  ArmoredUnitSelector,
 } from '@/components/armored/armored-unit-selector'
import type { T72UnloadTanksFromHeavyCarriersUnit } from '@/lib/armored/t72/unload-tanks-from-heavy-carriers'
import {
  createT72UnloadTanksFromHeavyCarriersEvent,
  T72_UNLOAD_TANKS_FROM_HEAVY_CARRIERS_UNITS,
} from '@/lib/armored/t72/unload-tanks-from-heavy-carriers'

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
      <ArmoredUnitSelector
        drillTitle="تفريغ الدبابات من الناقلات الثقيلة (T-72)"
        tankModel="T-72"
        units={T72_UNLOAD_TANKS_FROM_HEAVY_CARRIERS_UNITS}
        onSelect={(unitId) =>
          openView(
            `t72-unload-tanks-from-heavy-carriers-${unitId}` as T72UnloadTanksFromHeavyCarriersViewId,
          )
        }
      />
    )
  }

  const unit = activeView.replace(
    't72-unload-tanks-from-heavy-carriers-',
    '',
  ) as T72UnloadTanksFromHeavyCarriersUnit

  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT72UnloadTanksFromHeavyCarriersEvent(unit)}
        showRecord={false}
        trainerInstructions={getInstructions()}
        trainerRatings={UNIT_RATINGS[unit]}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}