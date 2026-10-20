'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT72CombatToTravelWithStabilizerEvent,
  T72_COMBAT_TO_TRAVEL_WITH_STABILIZER_INSTRUCTIONS,
  T72_COMBAT_TO_TRAVEL_WITH_STABILIZER_RATINGS,
} from '@/lib/armored/t72/combat-to-travel-with-stabilizer'

export function T72CombatToTravelWithStabilizerView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT72CombatToTravelWithStabilizerEvent()}
        showRecord={false}
        trainerInstructions={T72_COMBAT_TO_TRAVEL_WITH_STABILIZER_INSTRUCTIONS}
        trainerRatings={T72_COMBAT_TO_TRAVEL_WITH_STABILIZER_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
