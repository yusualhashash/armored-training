'use client'

import { ArmoredUnitButton } from '@/components/armored/armored-unit-button'
import type { T55_62DisembarkingUnit } from '@/lib/armored/t55-62/disembarking'
import {
  createT55_62DisembarkingEvent,
  T55_62_DISEMBARKING_UNITS,
} from '@/lib/armored/t55-62/disembarking'
import { TimerPanel } from '@/components/timer/timer-panel'

export type T55_62DisembarkingViewId =
  | 't55-62-disembarking'
  | 't55-62-disembarking-طاقم'
  | 't55-62-disembarking-فصيلة'
  | 't55-62-disembarking-سرية'

const UNIT_SUBJECT: Record<T55_62DisembarkingUnit, string> = {
  طاقم: 'الطواقم',
  فصيلة: 'الفصائل',
  سرية: 'السرية',
}

const UNIT_RATINGS: Record<T55_62DisembarkingUnit, { score: string; rating: string }[]> = {
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

function getInstructions(unit: T55_62DisembarkingUnit) {
  const subject = UNIT_SUBJECT[unit]
  if (!subject) return 'لا يوجد تعليمات خاصة بهذا القسم'

  return `${subject} في الدبابات حسب أماكنهم (مع الكمامات وحقائب القادة)، فتحات الدخول مغلقة بالمزلاج.\nيُحسب الزمن من إيعاز (إشارة) «إلى القتال» حتى اصطفاف ${subject} بصف واحد على بعد ٢ – ٤ خطوات أمام (خلف) الدبابات، الوجه إلى الأمام (نحو الدبابات). عند ارتداء ${subject} الألبسة الشتوية يُزاد الزمن بمقدار ٢ ثانية.`
}

export function T55_62DisembarkingView({
  activeView,
  openView,
}: {
  activeView: T55_62DisembarkingViewId
  openView: (view: T55_62DisembarkingViewId) => void
}) {
  if (activeView === 't55-62-disembarking') {
    return (
      <div className="grid gap-3 sm:gap-4">
        {T55_62_DISEMBARKING_UNITS.map((unit) => (
          <ArmoredUnitButton
            key={unit.id}
            label={unit.label}
            onClick={() => openView(`t55-62-disembarking-${unit.id}` as T55_62DisembarkingViewId)}
          />
        ))}
      </div>
    )
  }

  const unit = activeView.replace(
    't55-62-disembarking-',
    '',
  ) as T55_62DisembarkingUnit

  return (
    <TimerPanel
      event={createT55_62DisembarkingEvent(unit)}
      showRecord={false}
      trainerInstructions={getInstructions(unit)}
      trainerRatings={UNIT_RATINGS[unit]}
      ratingsTitle="التقدير حسب الزمن"
    />
  )
}