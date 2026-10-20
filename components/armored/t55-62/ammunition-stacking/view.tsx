'use client'

import { ChevronLeft, Shield } from 'lucide-react'
import type { OpenView } from '@/lib/app/types'

interface T55_62AmmunitionStackingViewProps {
  openView: OpenView
}

export function T55_62AmmunitionStackingView({ openView }: T55_62AmmunitionStackingViewProps) {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 sm:gap-5">
      {/* Exercise context card */}
      <div className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-[#0c1811] via-[#09130e] to-[#060b08] p-5 sm:p-6 shadow-lg shadow-black/30">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-12 -top-12 size-40 rounded-full bg-emerald-500/10 blur-3xl"
        />

        <div className="relative z-10 flex flex-col gap-3">
          <div className="flex items-center gap-1.5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
              <Shield className="size-3.5" aria-hidden="true" />
              <span>اختر طراز الدبابة للتنضيد</span>
            </span>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
              تنضيد الوحدة النارية في الدبابة (الوحدة النارية بالكامل)
            </h2>
            <p className="mt-1 text-xs text-white/60">
              تختلف المعايير الزمنية بين دبابة T-55 ودبابة T-62، يرجى تحديد الطراز لمتابعة التقييم:
            </p>
          </div>
        </div>
      </div>

      {/* Tank selection buttons */}
      <div className="grid gap-3.5">
        <button
          type="button"
          onClick={() => openView('t55-ammunition-stacking')}
          className="group relative flex w-full min-w-0 items-center justify-between rounded-2xl border border-white/10 bg-[#0a140e] p-5 text-right text-white shadow-sm transition-all duration-200 hover:border-emerald-500/40 hover:bg-[#0e1c13] active:scale-[0.99]"
        >
          <div className="flex min-w-0 flex-1 items-center gap-4">
            <div className="flex size-13 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 transition-transform duration-200 group-hover:scale-105 shadow-inner">
              <Shield className="size-6" aria-hidden="true" />
            </div>

            <div className="flex min-w-0 flex-1 flex-col items-start gap-1">
              <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                دبابة T-55
              </span>
              <span className="text-xs text-white/50">
                المعايير: ممتاز 13 د | جيد 14 د + 30 ثا | مقبول 16 د
              </span>
            </div>
          </div>

          <div className="mr-2 flex size-9 shrink-0 items-center justify-center rounded-xl border border-white/5 bg-white/[0.03] text-white/40 transition-all duration-200 group-hover:-translate-x-1 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 group-hover:text-emerald-300">
            <ChevronLeft className="size-5" aria-hidden="true" />
          </div>
        </button>

        <button
          type="button"
          onClick={() => openView('t62-ammunition-stacking')}
          className="group relative flex w-full min-w-0 items-center justify-between rounded-2xl border border-white/10 bg-[#0a140e] p-5 text-right text-white shadow-sm transition-all duration-200 hover:border-emerald-500/40 hover:bg-[#0e1c13] active:scale-[0.99]"
        >
          <div className="flex min-w-0 flex-1 items-center gap-4">
            <div className="flex size-13 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 transition-transform duration-200 group-hover:scale-105 shadow-inner">
              <Shield className="size-6" aria-hidden="true" />
            </div>

            <div className="flex min-w-0 flex-1 flex-col items-start gap-1">
              <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                دبابة T-62
              </span>
              <span className="text-xs text-white/50">
                المعايير: ممتاز 17 د + 30 ثا | جيد 19 د | مقبول 23 د
              </span>
            </div>
          </div>

          <div className="mr-2 flex size-9 shrink-0 items-center justify-center rounded-xl border border-white/5 bg-white/[0.03] text-white/40 transition-all duration-200 group-hover:-translate-x-1 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 group-hover:text-emerald-300">
            <ChevronLeft className="size-5" aria-hidden="true" />
          </div>
        </button>
      </div>
    </div>
  )
}
