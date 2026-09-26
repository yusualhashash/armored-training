'use client'

import { Check, Flag, RotateCcw } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface TimerControlsProps {
  isRunning: boolean
  isFinished: boolean
  hasStarted: boolean
  arrivalsCount: number
  onToggle: () => void
  onFinish: () => void
  onRecord: () => void
  onReset: () => void
  showRecord?: boolean
}

/** أزرار التحكم في ساعة الإيقاف. */
export function TimerControls({
  isRunning,
  isFinished,
  hasStarted,
  arrivalsCount,
  onToggle,
  onFinish,
  onRecord,
  onReset,
  showRecord = true,
}: TimerControlsProps) {
  if (isFinished) {
    return (
      <Button
        type="button"
        variant="ghost"
        onClick={onReset}
        className="h-14 w-full rounded-2xl border border-white/10 bg-[#101216] text-base font-bold text-white hover:bg-white/12 hover:text-white"
      >
        <RotateCcw data-icon="inline-start" aria-hidden="true" />
        إعادة المحاولة
      </Button>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-3 min-[380px]:grid-cols-2">
      <Button
        type="button"
        variant="ghost"
        onClick={onToggle}
        className={
          isRunning
            ? 'h-14 rounded-2xl border border-white/10 bg-[#101216] text-base font-bold text-white hover:bg-white/12 hover:text-white'
            : 'h-14 rounded-2xl border border-white/10 bg-[#101216] text-base font-bold text-white shadow-lg shadow-black/20 hover:bg-[#17191f] hover:text-white'
        }
      >
        {getToggleLabel(isRunning, hasStarted)}
      </Button>

      <Button
        type="button"
        variant="ghost"
        onClick={onFinish}
        disabled={!hasStarted}
className="h-14 rounded-2xl border border-red-400/30 bg-red-600 text-white text-base font-bold shadow-lg shadow-red-950/25 hover:bg-red-500 hover:text-white"
      >
        <Check data-icon="inline-start" aria-hidden="true" />
        انتهى
      </Button>

      {showRecord && (
        <Button
          type="button"
          variant="ghost"
          onClick={onRecord}
          disabled={!isRunning}
          className="col-span-full h-14 rounded-2xl border border-orange-300/30 bg-orange-500 text-base font-bold text-white shadow-lg shadow-orange-950/25 hover:bg-orange-400 hover:text-white"
        >
          <Flag data-icon="inline-start" aria-hidden="true" />
          تسجيل وصول {arrivalsCount > 0 ? `(${arrivalsCount})` : ''}
        </Button>
      )}
    </div>
  )
}

function getToggleLabel(isRunning: boolean, hasStarted: boolean): string {
  if (isRunning) return 'إيقاف مؤقت'
  return hasStarted ? 'متابعة' : 'ابدأ العداد'
}
