'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT55CombatToTravelWithStabilizerEvent,
  T55_COMBAT_TO_TRAVEL_WITH_STABILIZER_INSTRUCTIONS,
  T55_COMBAT_TO_TRAVEL_WITH_STABILIZER_RATINGS,
} from '@/lib/armored/t55/combat-to-travel-with-stabilizer'

export function T55CombatToTravelWithStabilizerView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT55CombatToTravelWithStabilizerEvent()}
        showRecord={false}
        trainerInstructions={T55_COMBAT_TO_TRAVEL_WITH_STABILIZER_INSTRUCTIONS}
        trainerRatings={T55_COMBAT_TO_TRAVEL_WITH_STABILIZER_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
