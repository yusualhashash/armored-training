'use client'

import { Check, Flag, Pause, Play, RotateCcw } from 'lucide-react'

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

/** أزرار التحكم في ساعة الإيقاف بتصميم تكتيكي عسكري مريح وسريع الاستجابة. */
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
      <button
        type="button"
        onClick={onReset}
        className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl border border-white/15 bg-[#0f1d14] text-base font-bold text-white shadow-md transition-all hover:bg-[#14261b] hover:border-emerald-500/30 active:scale-[0.98]"
      >
        <RotateCcw className="size-5 text-emerald-300" aria-hidden="true" />
        <span>إعادة المحاولة والبدء من جديد</span>
      </button>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-3 min-[380px]:grid-cols-2">
      {/* Start / Pause / Resume button */}
      <button
        type="button"
        onClick={onToggle}
        className={`flex h-14 items-center justify-center gap-2 rounded-2xl text-base font-bold transition-all shadow-lg active:scale-[0.98] ${
          isRunning
            ? 'border border-amber-400/30 bg-amber-500 text-slate-950 shadow-amber-950/30 hover:bg-amber-400'
            : hasStarted
            ? 'border border-emerald-400/30 bg-emerald-600 text-white shadow-emerald-950/40 hover:bg-emerald-500'
            : 'border border-emerald-400/40 bg-emerald-600 text-white shadow-emerald-950/50 hover:bg-emerald-500'
        }`}
      >
        {isRunning ? (
          <>
            <Pause className="size-5" aria-hidden="true" />
            <span>إيقاف مؤقت</span>
          </>
        ) : hasStarted ? (
          <>
            <Play className="size-5 fill-current" aria-hidden="true" />
            <span>متابعة العداد</span>
          </>
        ) : (
          <>
            <Play className="size-5 fill-current" aria-hidden="true" />
            <span>ابدأ العداد</span>
          </>
        )}
      </button>

      {/* Finish button */}
      <button
        type="button"
        onClick={onFinish}
        disabled={!hasStarted}
        className={`flex h-14 items-center justify-center gap-2 rounded-2xl text-base font-bold transition-all active:scale-[0.98] ${
          hasStarted
            ? 'border border-red-500/40 bg-red-600 text-white shadow-lg shadow-red-950/40 hover:bg-red-500'
            : 'border border-white/10 bg-white/[0.04] text-white/30 cursor-not-allowed'
        }`}
      >
        <Check className="size-5" aria-hidden="true" />
        <span>انتهى الاختبار</span>
      </button>

      {/* Record Arrival button */}
      {showRecord && (
        <button
          type="button"
          onClick={onRecord}
          disabled={!isRunning}
          className={`col-span-full flex h-14 items-center justify-center gap-2 rounded-2xl text-base font-bold transition-all active:scale-[0.98] ${
            isRunning
              ? 'border border-amber-400/40 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-950/40 hover:brightness-105'
              : 'border border-white/10 bg-white/[0.04] text-white/30 cursor-not-allowed'
          }`}
        >
          <Flag className="size-5" aria-hidden="true" />
          <span>تسجيل وصول متدرب</span>
          {arrivalsCount > 0 && (
            <span className="mr-1.5 flex size-6 items-center justify-center rounded-full bg-slate-950/30 text-xs font-mono font-bold text-slate-950">
              {arrivalsCount}
            </span>
          )}
        </button>
      )}
    </div>
  )
}
