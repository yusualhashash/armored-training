'use client'

import { ArmoredUnitButton } from '@/components/armored/armored-unit-button'
import type { T72Unit } from '@/lib/armored/t72/boarding'
import { createT72Event, T72_UNITS } from '@/lib/armored/t72/boarding'
import { TimerPanel } from '@/components/timer/timer-panel'

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
      <div className="grid gap-3 sm:gap-4">
        {T72_UNITS.map((unit) => (
          <ArmoredUnitButton
            key={unit.id}
            label={unit.label}
            onClick={() => openView(`t72-${unit.id}` as T72ViewId)}
          />
        ))}
      </div>
    )
  }

  const unit = activeView.replace('t72-', '') as T72Unit

  return (
    <TimerPanel
      event={createT72Event(unit)}
      showRecord={false}
      trainerInstructions={getInstructions(unit)}
      trainerRatings={UNIT_RATINGS[unit]}
      ratingsTitle="التقدير حسب الزمن"
    />
  )
}