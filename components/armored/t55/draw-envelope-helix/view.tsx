'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT55DrawEnvelopeHelixEvent,
  T55_DRAW_ENVELOPE_HELIX_INSTRUCTIONS,
  T55_DRAW_ENVELOPE_HELIX_RATINGS,
} from '@/lib/armored/t55/draw-envelope-helix'

export function T55DrawEnvelopeHelixView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT55DrawEnvelopeHelixEvent()}
        showRecord={false}
        trainerInstructions={T55_DRAW_ENVELOPE_HELIX_INSTRUCTIONS}
        trainerRatings={T55_DRAW_ENVELOPE_HELIX_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
