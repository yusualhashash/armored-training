'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT55AmmunitionEvent,
  T55_AMMUNITION_INSTRUCTIONS,
  T55_AMMUNITION_RATINGS,
} from '@/lib/armored/t55/ammunition-stacking'

export function T55AmmunitionStackingView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT55AmmunitionEvent()}
        showRecord={false}
        trainerInstructions={T55_AMMUNITION_INSTRUCTIONS}
        trainerRatings={T55_AMMUNITION_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
