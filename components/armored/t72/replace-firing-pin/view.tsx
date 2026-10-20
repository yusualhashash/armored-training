'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT72ReplaceFiringPinEvent,
  T72_REPLACE_FIRING_PIN_INSTRUCTIONS,
  T72_REPLACE_FIRING_PIN_RATINGS,
} from '@/lib/armored/t72/replace-firing-pin'

export function T72ReplaceFiringPinView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT72ReplaceFiringPinEvent()}
        showRecord={false}
        trainerInstructions={T72_REPLACE_FIRING_PIN_INSTRUCTIONS}
        trainerRatings={T72_REPLACE_FIRING_PIN_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
