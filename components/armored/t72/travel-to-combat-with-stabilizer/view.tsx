'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT72TravelToCombatWithStabilizerEvent,
  T72_TRAVEL_TO_COMBAT_WITH_STABILIZER_INSTRUCTIONS,
  T72_TRAVEL_TO_COMBAT_WITH_STABILIZER_RATINGS,
} from '@/lib/armored/t72/travel-to-combat-with-stabilizer'

export function T72TravelToCombatWithStabilizerView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT72TravelToCombatWithStabilizerEvent()}
        showRecord={false}
        trainerInstructions={T72_TRAVEL_TO_COMBAT_WITH_STABILIZER_INSTRUCTIONS}
        trainerRatings={T72_TRAVEL_TO_COMBAT_WITH_STABILIZER_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
