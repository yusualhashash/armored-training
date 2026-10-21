'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT62DrawEnvelopeHelixEvent,
  T62_DRAW_ENVELOPE_HELIX_INSTRUCTIONS,
  T62_DRAW_ENVELOPE_HELIX_RATINGS,
} from '@/lib/armored/t62/draw-envelope-helix'

export function T62DrawEnvelopeHelixView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT62DrawEnvelopeHelixEvent()}
        showRecord={false}
        trainerInstructions={T62_DRAW_ENVELOPE_HELIX_INSTRUCTIONS}
        trainerRatings={T62_DRAW_ENVELOPE_HELIX_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
