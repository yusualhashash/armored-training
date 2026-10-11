'use client'

import {
    ChevronLeft,
    Dumbbell,
    Medal
} from 'lucide-react';

import type { OpenView } from '@/lib/app/types';

interface HomeViewProps {
  openView: OpenView
}

export function HomeView({ openView }: HomeViewProps) {
  return (
    <div className="mx-auto w-full max-w-2xl space-y-6">
      {/* Main Core Sections */}
      <div className="grid gap-4">
        {/* Section 1: Sports */}
        <button
          type="button"
          onClick={() => openView('sports')}
          className="group relative flex w-full flex-col overflow-hidden rounded-3xl border border-emerald-500/20 bg-[#0c1610] p-5 sm:p-6 text-right transition-all duration-300 hover:border-emerald-500/40 hover:bg-[#101e16] hover:shadow-[0_12px_30px_rgba(0,0,0,0.4)] active:scale-[0.99]"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-amber-400/30 bg-gradient-to-br from-amber-400/20 to-amber-500/5 text-amber-300 shadow-md">
                <Dumbbell className="size-7" aria-hidden="true" />
              </div>

              <div className="flex flex-col items-start gap-1">
                <span className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  الرياضة
                </span>
              </div>
            </div>

            <div className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/60 transition-transform group-hover:-translate-x-1 group-hover:text-white group-hover:border-emerald-400/30">
              <ChevronLeft className="size-5" aria-hidden="true" />
            </div>
          </div>
        </button>

        {/* Section 2: Armored & Weapons */}
        <button
          type="button"
          onClick={() => openView('armored')}
          className="group relative flex w-full flex-col overflow-hidden rounded-3xl border border-emerald-500/20 bg-[#0c1610] p-5 sm:p-6 text-right transition-all duration-300 hover:border-emerald-500/40 hover:bg-[#101e16] hover:shadow-[0_12px_30px_rgba(0,0,0,0.4)] active:scale-[0.99]"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/30 bg-gradient-to-br from-emerald-400/20 to-emerald-500/5 text-emerald-300 shadow-md">
                <Medal className="size-7" aria-hidden="true" />
              </div>

              <div className="flex flex-col items-start gap-1">
                <span className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  أسلحة ورمي
                </span>
              </div>
            </div>

            <div className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/60 transition-transform group-hover:-translate-x-1 group-hover:text-white group-hover:border-emerald-400/30">
              <ChevronLeft className="size-5" aria-hidden="true" />
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}

export function HomeHeader() {
  return (
    <div className="flex min-w-0 items-center gap-3">
      <div className="relative flex size-12 shrink-0 items-center justify-center rounded-2xl border border-amber-400/30 bg-gradient-to-b from-amber-400/15 to-transparent p-1 shadow-sm">
        <img
          src="/eagle-logo.png"
          alt="شعار النسر الذهبي"
          className="h-full w-full object-contain drop-shadow"
        />
      </div>

      <div className="min-w-0">
        <h1 className="truncate text-base font-bold text-white tracking-tight sm:text-lg">
          المعدلات الزمنية
        </h1>
        <p className="truncate text-[11px] font-medium text-emerald-400/80">
          فرع تدريب المدرعات · منظومة التقييم
        </p>
      </div>
    </div>
  )
}
