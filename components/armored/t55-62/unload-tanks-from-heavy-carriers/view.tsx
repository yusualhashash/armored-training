'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  ArmoredUnitSelector,
} from '@/components/armored/armored-unit-selector'
import type { T55_62UnloadTanksFromHeavyCarriersUnit } from '@/lib/armored/t55-62/unload-tanks-from-heavy-carriers'
import {
  createT55_62UnloadTanksFromHeavyCarriersEvent,
  T55_62_UNLOAD_TANKS_FROM_HEAVY_CARRIERS_UNITS,
} from '@/lib/armored/t55-62/unload-tanks-from-heavy-carriers'

export type T55_62UnloadTanksFromHeavyCarriersViewId =
  | 't55-62-unload-tanks-from-heavy-carriers'
  | 't55-62-unload-tanks-from-heavy-carriers-طاقم'
  | 't55-62-unload-tanks-from-heavy-carriers-فصيلة'
  | 't55-62-unload-tanks-from-heavy-carriers-سرية'

const UNIT_RATINGS: Record <T55_62UnloadTanksFromHeavyCarriersUnit, Array<{ score: string; rating: string }>> = {
  طاقم: [
    { score: '5:00 دقيقة', rating: 'ممتاز' },
    { score: '6:00 دقيقة', rating: 'جيد' },
    { score: '7:00 دقيقة', rating: 'مقبول' },
  ],
  فصيلة: [
    { score: '5:00 دقيقة', rating: 'ممتاز' },
    { score: '6:00 دقيقة', rating: 'جيد' },
    { score: '7:00 دقيقة', rating: 'مقبول' },
  ],
  سرية: [
    { score: '6:00 دقيقة', rating: 'ممتاز' },
    { score: '7:00 دقيقة', rating: 'جيد' },
    { score: '8:00 دقيقة', rating: 'مقبول' },
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

export function T55_62UnloadTanksFromHeavyCarriersView({
  activeView,
  openView,
}: {
  activeView: T55_62UnloadTanksFromHeavyCarriersViewId
  openView: (view: T55_62UnloadTanksFromHeavyCarriersViewId) => void
}) {
  if (activeView === 't55-62-unload-tanks-from-heavy-carriers') {
    return (
      <ArmoredUnitSelector
        drillTitle="تنزيل الدبابات عن الحاملات ذات الحمولة الكبيرة (50 طن) "
        tankModel="T-55 / T-62"
        units={T55_62_UNLOAD_TANKS_FROM_HEAVY_CARRIERS_UNITS}
        onSelect={(unitId) =>
          openView(
            `t55-62-unload-tanks-from-heavy-carriers-${unitId}` as T55_62UnloadTanksFromHeavyCarriersViewId,
          )
        }
      />
    )
  }

  const unit = activeView.replace(
    't55-62-unload-tanks-from-heavy-carriers-',
    '',
  ) as T55_62UnloadTanksFromHeavyCarriersUnit

  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT55_62UnloadTanksFromHeavyCarriersEvent(unit)}
        showRecord={false}
        trainerInstructions={getInstructions()}
        trainerRatings={UNIT_RATINGS[unit]}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}