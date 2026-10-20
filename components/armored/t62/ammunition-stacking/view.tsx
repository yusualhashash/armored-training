'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT62AmmunitionEvent,
  T62_AMMUNITION_INSTRUCTIONS,
  T62_AMMUNITION_RATINGS,
} from '@/lib/armored/t62/ammunition-stacking'

export function T62AmmunitionStackingView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT62AmmunitionEvent()}
        showRecord={false}
        trainerInstructions={T62_AMMUNITION_INSTRUCTIONS}
        trainerRatings={T62_AMMUNITION_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
