'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT55TravelToCombatWithStabilizerEvent,
  T55_TRAVEL_TO_COMBAT_WITH_STABILIZER_INSTRUCTIONS,
  T55_TRAVEL_TO_COMBAT_WITH_STABILIZER_RATINGS,
} from '@/lib/armored/t55/travel-to-combat-with-stabilizer'

export function T55TravelToCombatWithStabilizerView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT55TravelToCombatWithStabilizerEvent()}
        showRecord={false}
        trainerInstructions={T55_TRAVEL_TO_COMBAT_WITH_STABILIZER_INSTRUCTIONS}
        trainerRatings={T55_TRAVEL_TO_COMBAT_WITH_STABILIZER_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
