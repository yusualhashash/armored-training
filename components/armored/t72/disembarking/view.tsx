'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  ArmoredUnitSelector,
  ArmoredTimerHeader,
} from '@/components/armored/armored-unit-selector'
import type { T72DisembarkingUnit } from '@/lib/armored/t72/disembarking'
import {
  createT72DisembarkingEvent,
  T72_DISEMBARKING_UNITS,
} from '@/lib/armored/t72/disembarking'

export type T72DisembarkingViewId =
  | 't72-disembarking'
  | 't72-disembarking-طاقم'
  | 't72-disembarking-فصيلة'
  | 't72-disembarking-سرية'

const UNIT_SUBJECT: Record<T72DisembarkingUnit, string> = {
  طاقم: 'الطواقم',
  فصيلة: 'الفصائل',
  سرية: 'السرية',
}

const UNIT_RATINGS: Record<T72DisembarkingUnit, { score: string; rating: string }[]> = {
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

function getInstructions(unit: T72DisembarkingUnit) {
  const subject = UNIT_SUBJECT[unit]
  if (!subject) return 'لا يوجد تعليمات خاصة بهذا القسم'

  return `${subject} في الدبابات حسب أماكنهم (مع الكمامات وحقائب القادة)، فتحات الدخول مغلقة بالمزلاج.\nيُحسب الزمن من إيعاز (إشارة) «إلى القتال» حتى اصطفاف ${subject} بصف واحد على بعد ٢ – ٤ خطوات أمام (خلف) الدبابات، الوجه إلى الأمام (نحو الدبابات). عند ارتداء ${subject} الألبسة الشتوية يُزاد الزمن بمقدار ٢ ثانية.`
}

export function T72DisembarkingView({
  activeView,
  openView,
}: {
  activeView: T72DisembarkingViewId
  openView: (view: T72DisembarkingViewId) => void
}) {
  if (activeView === 't72-disembarking') {
    return (
      <ArmoredUnitSelector
        drillTitle="نزول الطواقم من الدبابة (T-72)"
        tankModel="T-72"
        units={T72_DISEMBARKING_UNITS}
        onSelect={(unitId) =>
          openView(`t72-disembarking-${unitId}` as T72DisembarkingViewId)
        }
      />
    )
  }

  const unit = activeView.replace(
    't72-disembarking-',
    '',
  ) as T72DisembarkingUnit
  const unitLabel =
    T72_DISEMBARKING_UNITS.find((u) => u.id === unit)?.label ?? unit

  return (
    <div className="mx-auto w-full max-w-3xl">
      <ArmoredTimerHeader
        drillTitle="نزول الطواقم من الدبابة (T-72)"
        unitLabel={unitLabel}
        onBack={() => openView('t72-disembarking')}
      />
      <TimerPanel
        event={createT72DisembarkingEvent(unit)}
        showRecord={false}
        trainerInstructions={getInstructions(unit)}
        trainerRatings={UNIT_RATINGS[unit]}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}