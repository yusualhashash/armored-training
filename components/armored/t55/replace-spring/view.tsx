'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT55ReplaceSpringEvent,
  T55_REPLACE_SPRING_INSTRUCTIONS,
  T55_REPLACE_SPRING_RATINGS,
} from '@/lib/armored/t55/replace-spring'

export function T55ReplaceSpringView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT55ReplaceSpringEvent()}
        showRecord={false}
        trainerInstructions={T55_REPLACE_SPRING_INSTRUCTIONS}
        trainerRatings={T55_REPLACE_SPRING_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
