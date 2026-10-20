'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT55CombatToTravelWithStabilizerOffEvent,
  T55_COMBAT_TO_TRAVEL_WITH_STABILIZER_OFF_INSTRUCTIONS,
  T55_COMBAT_TO_TRAVEL_WITH_STABILIZER_OFF_RATINGS,
} from '@/lib/armored/t55/combat-to-travel-with-stabilizer-off'

export function T55CombatToTravelWithStabilizerOffView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT55CombatToTravelWithStabilizerOffEvent()}
        showRecord={false}
        trainerInstructions={T55_COMBAT_TO_TRAVEL_WITH_STABILIZER_OFF_INSTRUCTIONS}
        trainerRatings={T55_COMBAT_TO_TRAVEL_WITH_STABILIZER_OFF_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
