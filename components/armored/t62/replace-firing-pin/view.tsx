'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT62ReplaceFiringPinEvent,
  T62_REPLACE_FIRING_PIN_INSTRUCTIONS,
  T62_REPLACE_FIRING_PIN_RATINGS,
} from '@/lib/armored/t62/replace-firing-pin'

export function T62ReplaceFiringPinView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT62ReplaceFiringPinEvent()}
        showRecord={false}
        trainerInstructions={T62_REPLACE_FIRING_PIN_INSTRUCTIONS}
        trainerRatings={T62_REPLACE_FIRING_PIN_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
