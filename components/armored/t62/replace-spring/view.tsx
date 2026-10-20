'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT62ReplaceSpringEvent,
  T62_REPLACE_SPRING_INSTRUCTIONS,
  T62_REPLACE_SPRING_RATINGS,
} from '@/lib/armored/t62/replace-spring'

export function T62ReplaceSpringView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT62ReplaceSpringEvent()}
        showRecord={false}
        trainerInstructions={T62_REPLACE_SPRING_INSTRUCTIONS}
        trainerRatings={T62_REPLACE_SPRING_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
