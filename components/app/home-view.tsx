'use client'

import {
  ChevronLeft,
  Dumbbell,
  History,
  Medal,
  Shield,
  Star,
  Timer,
  Zap,
} from 'lucide-react'

import { Button } from '@/components/ui/button'

import type { OpenView } from '@/lib/app/types'

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
                <span className="text-[11px] font-semibold tracking-wider text-emerald-400">
                  القسم الأول · اللياقة البدنية
                </span>
                <span className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  الرياضة
                </span>
              </div>
            </div>

            <div className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/60 transition-transform group-hover:-translate-x-1 group-hover:text-white group-hover:border-emerald-400/30">
              <ChevronLeft className="size-5" aria-hidden="true" />
            </div>
          </div>

          <p className="mt-3 text-xs sm:text-sm text-white/65 leading-relaxed">
            اختبارات الجري (100م، 1كم، 2كم، 3كم، 5كم، 4×100م)، سحب الجسم على الثابت (العقلة)، ثني ومد الذراعين (الضغط)، وتمرين البطن.
          </p>

          <div className="mt-4 flex items-center gap-2 text-[11px] text-white/45 font-medium border-t border-white/[0.06] pt-3">
            <span>7 فئات عمرية</span>
            <span aria-hidden="true">·</span>
            <span>توقيت بالدقائق والثواني</span>
            <span aria-hidden="true">·</span>
            <span className="text-amber-300/80">علامات معتمدة</span>
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
                <span className="text-[11px] font-semibold tracking-wider text-amber-400">
                  القسم الثاني · المدرعات والميدان
                </span>
                <span className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  أسلحة ورمي
                </span>
              </div>
            </div>

            <div className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/60 transition-transform group-hover:-translate-x-1 group-hover:text-white group-hover:border-emerald-400/30">
              <ChevronLeft className="size-5" aria-hidden="true" />
            </div>
          </div>

          <p className="mt-3 text-xs sm:text-sm text-white/65 leading-relaxed">
            اختبارات ركوب وترجل طواقم وفصائل وسرايا دبابات T-72 و T-55/62، التشكيلات القتالية، احتلال خط الرمي، وتحميل الدبابات على الناقلات.
          </p>

          <div className="mt-4 flex items-center gap-2 text-[11px] text-white/45 font-medium border-t border-white/[0.06] pt-3">
            <span>دبابات T-72</span>
            <span aria-hidden="true">·</span>
            <span>دبابات T-55 و T-62</span>
            <span aria-hidden="true">·</span>
            <span className="text-emerald-300/80">تعليمات تكتيكية</span>
          </div>
        </button>
      </div>

      {/* Quick Launch Strip */}
      <div className="grid grid-cols-2 gap-3 pt-2">
        <button
          type="button"
          onClick={() => openView('history')}
          className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0a140e] p-3.5 text-right transition hover:border-emerald-500/30 hover:bg-[#0f1d14]"
        >
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-300">
            <History className="size-5" />
          </div>
          <div className="min-w-0">
            <span className="block text-xs font-bold text-white">سجل التدريب</span>
            <span className="block text-[11px] text-white/45 truncate">مراجعة وتصدير Excel</span>
          </div>
        </button>

        <button
          type="button"
          onClick={() => openView('favorites')}
          className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0a140e] p-3.5 text-right transition hover:border-amber-500/30 hover:bg-[#0f1d14]"
        >
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-300">
            <Star className="size-5" />
          </div>
          <div className="min-w-0">
            <span className="block text-xs font-bold text-white">المفضلة</span>
            <span className="block text-[11px] text-white/45 truncate">الاختبارات المثبتة</span>
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
