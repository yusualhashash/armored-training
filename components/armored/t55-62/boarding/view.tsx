'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  ArmoredUnitSelector,
  ArmoredTimerHeader,
} from '@/components/armored/armored-unit-selector'
import type { T55_62Unit } from '@/lib/armored/t55-62/boarding'
import {
  createT55_62Event,
  T55_62_UNITS,
} from '@/lib/armored/t55-62/boarding'

export type T55_62ViewId =
  | 't55-62-boarding'
  | 't55-62-طاقم'
  | 't55-62-فصيلة'
  | 't55-62-سرية'

const UNIT_SUBJECT: Record<T55_62Unit, string> = {
  طاقم: 'الطواقم',
  فصيلة: 'الفصائل',
  سرية: 'السرية',
}

const UNIT_RATINGS: Record<T55_62Unit, { score: string; rating: string }[]> = {
  طاقم: [
    { score: '9 ثا', rating: 'ممتاز' },
    { score: '10 ثا', rating: 'جيد' },
    { score: '12 ثا', rating: 'مقبول' },
  ],
  فصيلة: [
    { score: '10 ثا', rating: 'ممتاز' },
    { score: '11 ثا', rating: 'جيد' },
    { score: '13 ثا', rating: 'مقبول' },
  ],
  سرية: [
    { score: '12 ثا', rating: 'ممتاز' },
    { score: '13 ثا', rating: 'جيد' },
    { score: '16 ثا', rating: 'مقبول' },
  ],
}

function getInstructions(unit: T55_62Unit) {
  const subject = UNIT_SUBJECT[unit]
  if (!subject) return 'لا يوجد تعليمات خاصة بهذا القسم'

  return `${subject} على بعد ٢ - ٤ خطوات في صف واحد (مع الكمامات وحقائب القادة) أمام (خلف) الدبابات، الوجه إلى الأمام (نحو الدبابات). فتحات الدخول محررة من الرتاج، وبعد الركوب تُغلق الفتحات بالرتاج.\nيُحسب الوقت من إيعاز (إشارة) «إلى أماكنكم» حتى إغلاق الفتحات بالرتاج. وعند ارتداء ${subject} الألبسة الشتوية يُزاد الزمن بمقدار ٢ ثانية.`
}

export function T55_62View({
  activeView,
  openView,
}: {
  activeView: T55_62ViewId
  openView: (view: T55_62ViewId) => void
}) {
  if (activeView === 't55-62-boarding') {
    return (
      <ArmoredUnitSelector
        drillTitle="ركوب الطواقم في الدبابة (T-55 / T-62)"
        tankModel="T-55 / T-62"
        units={T55_62_UNITS}
        onSelect={(unitId) => openView(`t55-62-${unitId}` as T55_62ViewId)}
      />
    )
  }

  const unit = activeView.replace('t55-62-', '') as T55_62Unit
  const unitLabel = T55_62_UNITS.find((u) => u.id === unit)?.label ?? unit

  return (
    <div className="mx-auto w-full max-w-3xl">
      <ArmoredTimerHeader
        drillTitle="ركوب الطواقم في الدبابة (T-55 / T-62)"
        unitLabel={unitLabel}
        onBack={() => openView('t55-62-boarding')}
      />
      <TimerPanel
        event={createT55_62Event(unit)}
        showRecord={false}
        trainerInstructions={getInstructions(unit)}
        trainerRatings={UNIT_RATINGS[unit]}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}