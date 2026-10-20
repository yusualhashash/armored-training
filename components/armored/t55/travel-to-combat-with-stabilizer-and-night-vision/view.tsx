'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT55TravelToCombatWithStabilizerAndNightVisionEvent,
  T55_TRAVEL_TO_COMBAT_WITH_STABILIZER_AND_NIGHT_VISION_INSTRUCTIONS,
  T55_TRAVEL_TO_COMBAT_WITH_STABILIZER_AND_NIGHT_VISION_RATINGS,
} from '@/lib/armored/t55/travel-to-combat-with-stabilizer-and-night-vision'

export function T55TravelToCombatWithStabilizerAndNightVisionView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT55TravelToCombatWithStabilizerAndNightVisionEvent()}
        showRecord={false}
        trainerInstructions={T55_TRAVEL_TO_COMBAT_WITH_STABILIZER_AND_NIGHT_VISION_INSTRUCTIONS}
        trainerRatings={T55_TRAVEL_TO_COMBAT_WITH_STABILIZER_AND_NIGHT_VISION_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
