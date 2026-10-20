'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT62CombatToTravelWithStabilizerOffEvent,
  T62_COMBAT_TO_TRAVEL_WITH_STABILIZER_OFF_INSTRUCTIONS,
  T62_COMBAT_TO_TRAVEL_WITH_STABILIZER_OFF_RATINGS,
} from '@/lib/armored/t62/combat-to-travel-with-stabilizer-off'

export function T62CombatToTravelWithStabilizerOffView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT62CombatToTravelWithStabilizerOffEvent()}
        showRecord={false}
        trainerInstructions={T62_COMBAT_TO_TRAVEL_WITH_STABILIZER_OFF_INSTRUCTIONS}
        trainerRatings={T62_COMBAT_TO_TRAVEL_WITH_STABILIZER_OFF_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
