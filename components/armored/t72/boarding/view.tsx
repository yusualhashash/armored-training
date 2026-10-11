'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  ArmoredUnitSelector,
} from '@/components/armored/armored-unit-selector'
import type { T72Unit } from '@/lib/armored/t72/boarding'
import { createT72Event, T72_UNITS } from '@/lib/armored/t72/boarding'

export type T72ViewId =
  | 't72-boarding'
  | 't72-طاقم'
  | 't72-فصيلة'
  | 't72-سرية'

const UNIT_SUBJECT: Record<T72Unit, string> = {
  طاقم: 'الطواقم',
  فصيلة: 'الفصائل',
  سرية: 'السرية',
}

const UNIT_RATINGS: Record<T72Unit, { score: string; rating: string }[]> = {
  طاقم: [
    { score: '8 ثا', rating: 'ممتاز' },
    { score: '9 ثا', rating: 'جيد' },
    { score: '10 ثا', rating: 'مقبول' },
  ],
  فصيلة: [
    { score: '9 ثا', rating: 'ممتاز' },
    { score: '10 ثا', rating: 'جيد' },
    { score: '12 ثا', rating: 'مقبول' },
  ],
  سرية: [
    { score: '11 ثا', rating: 'ممتاز' },
    { score: '12 ثا', rating: 'جيد' },
    { score: '14 ثا', rating: 'مقبول' },
  ],
}

function getInstructions(unit: T72Unit) {
  const subject = UNIT_SUBJECT[unit]
  if (!subject) return 'لا يوجد تعليمات خاصة بهذا القسم'

  return `${subject} على بعد ٢ - ٤ خطوات في صف واحد (مع الكمامات وحقائب القادة) أمام (خلف) الدبابات، الوجه إلى الأمام (نحو الدبابات). فتحات الدخول محررة من الرتاج، وبعد الركوب تُغلق الفتحات بالرتاج.\nيُحسب الوقت من إيعاز (إشارة) «إلى أماكنكم» حتى إغلاق الفتحات بالرتاج. وعند ارتداء ${subject} الألبسة الشتوية يُزاد الزمن بمقدار ٢ ثانية.`
}

export function T72View({
  activeView,
  openView,
}: {
  activeView: T72ViewId
  openView: (view: T72ViewId) => void
}) {
  if (activeView === 't72-boarding') {
    return (
      <ArmoredUnitSelector
        drillTitle="ركوب الطواقم في الدبابة"
        tankModel="T-72"
        units={T72_UNITS}
        onSelect={(unitId) => openView(`t72-${unitId}` as T72ViewId)}
      />
    )
  }

  const unit = activeView.replace('t72-', '') as T72Unit

  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT72Event(unit)}
        showRecord={false}
        trainerInstructions={getInstructions(unit)}
        trainerRatings={UNIT_RATINGS[unit]}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}