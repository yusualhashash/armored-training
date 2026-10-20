'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT72TravelToCombatEvent,
  T72_TRAVEL_TO_COMBAT_INSTRUCTIONS,
  T72_TRAVEL_TO_COMBAT_RATINGS,
} from '@/lib/armored/t72/travel-to-combat-without-stabilizer'

export function T72TravelToCombatView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT72TravelToCombatEvent()}
        showRecord={false}
        trainerInstructions={T72_TRAVEL_TO_COMBAT_INSTRUCTIONS}
        trainerRatings={T72_TRAVEL_TO_COMBAT_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
