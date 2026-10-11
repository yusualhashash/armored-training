'use client'

import { ChevronLeft, Dumbbell, Medal, Timer, Sparkles } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface SportsCategoryCardProps {
  title: string
  subtitle?: string
  birthYears?: string
  icon?: LucideIcon
  iconType?: 'dumbbell' | 'medal' | 'timer'
  categoryNumber?: number | string
  onClick: () => void
}

export function SportsCategoryCard({
  title,
  subtitle,
  birthYears,
  icon,
  iconType = 'medal',
  categoryNumber,
  onClick,
}: SportsCategoryCardProps) {
  const IconComponent =
    icon ??
    (iconType === 'dumbbell'
      ? Dumbbell
      : iconType === 'timer'
        ? Timer
        : Medal)

  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative flex w-full min-w-0 flex-col overflow-hidden rounded-3xl border border-emerald-500/20 bg-[#0c1610] p-5 sm:p-6 text-right transition-all duration-300 hover:border-emerald-500/40 hover:bg-[#101e16] hover:shadow-[0_12px_30px_rgba(0,0,0,0.4)] active:scale-[0.99]"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 min-w-0 flex-1">
          {/* Tactical Badge Icon - matches Home and Armored style */}
          <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-amber-400/30 bg-gradient-to-br from-amber-400/20 to-amber-500/5 text-amber-300 shadow-md transition-transform duration-200 group-hover:scale-105">
            <IconComponent className="size-7" aria-hidden="true" />
          </div>

          <div className="flex flex-col items-start gap-1 min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-semibold tracking-wider text-emerald-400">
                {subtitle ? subtitle : 'اللياقة البدنية · المعيار العسكري'}
              </span>
            </div>

            <div className="flex items-center gap-2 max-w-full">
              <span className="text-lg sm:text-md font-bold text-white tracking-tight truncate">
                {title}
              </span>
            </div>
          </div>
        </div>

        {/* Chevron Back/Enter Button */}
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/60 transition-transform group-hover:-translate-x-1 group-hover:text-white group-hover:border-emerald-400/30">
          <ChevronLeft className="size-5" aria-hidden="true" />
        </div>
      </div>

      {birthYears && (
        <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-3 text-[11px] text-white/50 font-medium">
          <div className="flex items-center gap-2">
            <span className="text-white/70">{birthYears}</span>
          </div>
          <span className="text-emerald-400/90 font-semibold group-hover:text-emerald-300">
            بدء التقييم
          </span>
        </div>
      )}
    </button>
  )
}

export function SportsTestHeroHeader({
  title,
}: {
  title: string
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-emerald-500/25 bg-[#0c1610] p-5 sm:p-6 shadow-[0_12px_30px_rgba(0,0,0,0.4)] mb-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-amber-400/30 bg-gradient-to-br from-amber-400/20 to-amber-500/5 text-amber-300 shadow-md">
            <Dumbbell className="size-7" aria-hidden="true" />
          </div>

          <div className="flex flex-col items-start gap-1">
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              {title}
            </h2>
          </div>
        </div>
      </div>

    </div>
  )
}
