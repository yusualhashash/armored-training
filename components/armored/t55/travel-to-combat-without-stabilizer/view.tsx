'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT55TravelToCombatEvent,
  T55_TRAVEL_TO_COMBAT_INSTRUCTIONS,
  T55_TRAVEL_TO_COMBAT_RATINGS,
} from '@/lib/armored/t55/travel-to-combat-without-stabilizer'

export function T55TravelToCombatView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT55TravelToCombatEvent()}
        showRecord={false}
        trainerInstructions={T55_TRAVEL_TO_COMBAT_INSTRUCTIONS}
        trainerRatings={T55_TRAVEL_TO_COMBAT_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
