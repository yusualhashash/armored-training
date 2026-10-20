'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT62TravelToCombatWithStabilizerEvent,
  T62_TRAVEL_TO_COMBAT_WITH_STABILIZER_INSTRUCTIONS,
  T62_TRAVEL_TO_COMBAT_WITH_STABILIZER_RATINGS,
} from '@/lib/armored/t62/travel-to-combat-with-stabilizer'

export function T62TravelToCombatWithStabilizerView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT62TravelToCombatWithStabilizerEvent()}
        showRecord={false}
        trainerInstructions={T62_TRAVEL_TO_COMBAT_WITH_STABILIZER_INSTRUCTIONS}
        trainerRatings={T62_TRAVEL_TO_COMBAT_WITH_STABILIZER_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
