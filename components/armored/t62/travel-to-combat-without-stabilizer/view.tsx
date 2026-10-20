'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT62TravelToCombatEvent,
  T62_TRAVEL_TO_COMBAT_INSTRUCTIONS,
  T62_TRAVEL_TO_COMBAT_RATINGS,
} from '@/lib/armored/t62/travel-to-combat-without-stabilizer'

export function T62TravelToCombatView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT62TravelToCombatEvent()}
        showRecord={false}
        trainerInstructions={T62_TRAVEL_TO_COMBAT_INSTRUCTIONS}
        trainerRatings={T62_TRAVEL_TO_COMBAT_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
