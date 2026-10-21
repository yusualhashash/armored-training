'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT72DrawEnvelopeHelixEvent,
  T72_DRAW_ENVELOPE_HELIX_INSTRUCTIONS,
  T72_DRAW_ENVELOPE_HELIX_RATINGS,
} from '@/lib/armored/t72/draw-envelope-helix'

export function T72DrawEnvelopeHelixView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT72DrawEnvelopeHelixEvent()}
        showRecord={false}
        trainerInstructions={T72_DRAW_ENVELOPE_HELIX_INSTRUCTIONS}
        trainerRatings={T72_DRAW_ENVELOPE_HELIX_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
