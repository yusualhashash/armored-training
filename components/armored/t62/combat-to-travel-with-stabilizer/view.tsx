'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT62CombatToTravelWithStabilizerEvent,
  T62_COMBAT_TO_TRAVEL_WITH_STABILIZER_INSTRUCTIONS,
  T62_COMBAT_TO_TRAVEL_WITH_STABILIZER_RATINGS,
} from '@/lib/armored/t62/combat-to-travel-with-stabilizer'

export function T62CombatToTravelWithStabilizerView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT62CombatToTravelWithStabilizerEvent()}
        showRecord={false}
        trainerInstructions={T62_COMBAT_TO_TRAVEL_WITH_STABILIZER_INSTRUCTIONS}
        trainerRatings={T62_COMBAT_TO_TRAVEL_WITH_STABILIZER_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
