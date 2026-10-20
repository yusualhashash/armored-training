'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT72TravelToCombatWithStabilizerAndNightVisionEvent,
  T72_TRAVEL_TO_COMBAT_WITH_STABILIZER_AND_NIGHT_VISION_INSTRUCTIONS,
  T72_TRAVEL_TO_COMBAT_WITH_STABILIZER_AND_NIGHT_VISION_RATINGS,
} from '@/lib/armored/t72/travel-to-combat-with-stabilizer-and-night-vision'

export function T72TravelToCombatWithStabilizerAndNightVisionView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT72TravelToCombatWithStabilizerAndNightVisionEvent()}
        showRecord={false}
        trainerInstructions={T72_TRAVEL_TO_COMBAT_WITH_STABILIZER_AND_NIGHT_VISION_INSTRUCTIONS}
        trainerRatings={T72_TRAVEL_TO_COMBAT_WITH_STABILIZER_AND_NIGHT_VISION_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
