'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT72AmmunitionEvent,
  T72_AMMUNITION_INSTRUCTIONS,
  T72_AMMUNITION_RATINGS,
} from '@/lib/armored/t72/ammunition-stacking'

export function T72AmmunitionStackingView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT72AmmunitionEvent()}
        showRecord={false}
        trainerInstructions={T72_AMMUNITION_INSTRUCTIONS}
        trainerRatings={T72_AMMUNITION_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
