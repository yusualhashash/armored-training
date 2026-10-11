'use client'

import type { OpenView } from '@/lib/app/types';
import { ChevronLeft, Dumbbell, Timer } from 'lucide-react';

interface SportsSectionViewProps {
  openView: OpenView
}

const sportsTests = [
  {
    id: 'stomach',
    title: 'تمرين المعدة',
    icon: Dumbbell,
    accent: 'amber',
  },
  {
    id: 'pushups',
    title: 'التمرين السادس (الضغط)',
    icon: Dumbbell,
    accent: 'amber',
  },
  {
    id: 'compound-strength',
    title: 'القوة المركبة',
    icon: Dumbbell,
    accent: 'amber',
  },
  {
    id: 'pullups',
    title: 'سحب الجسم على الثابت (العقلة)',
    icon: Dumbbell,
    accent: 'amber',
  },
  {
    id: 'hundred',
    title: 'سباق 100 متر',
    icon: Timer,
    accent: 'emerald',
  },
  {
    id: 'one-km',
    title: 'سباق 1 كم',
    icon: Timer,
    accent: 'emerald',
  },
  {
    id: 'two-km',
    title: 'سباق 2 كم',
    icon: Timer,
    accent: 'emerald',
  },
  {
    id: 'three-km',
    title: 'سباق 3 كم',
    icon: Timer,
    accent: 'emerald',
  },
  {
    id: 'five-km',
    title: 'سباق 5 كم',
    icon: Timer,
    accent: 'emerald',
  },
  {
    id: '4x100',
    title: 'سباق التتابع 4×100 متر',
    icon: Timer,
    accent: 'emerald',
  },
] as const

export function SportsMainView({ openView }: SportsSectionViewProps) {
  return (
    <div className="mx-auto w-full max-w-2xl space-y-6">
      {/* Tests Grid */}
      <div className="grid gap-3.5 sm:gap-4">
        {sportsTests.map((test) => {
          const Icon = test.icon
          const isEmerald = test.accent === 'emerald'

          return (
            <button
              key={test.id}
              type="button"
              onClick={() => openView(test.id as any)}
              className="group relative flex w-full flex-col overflow-hidden rounded-3xl border border-emerald-500/20 bg-[#0c1610] p-5 sm:p-6 text-right transition-all duration-300 hover:border-emerald-500/40 hover:bg-[#101e16] hover:shadow-[0_12px_30px_rgba(0,0,0,0.4)] active:scale-[0.99]"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 min-w-0 flex-1">
                  <div
                    className={`flex size-14 shrink-0 items-center justify-center rounded-2xl border shadow-md transition-transform duration-200 group-hover:scale-105 ${
                      isEmerald
                        ? 'border-emerald-400/30 bg-gradient-to-br from-emerald-400/20 to-emerald-500/5 text-emerald-300'
                        : 'border-amber-400/30 bg-gradient-to-br from-amber-400/20 to-amber-500/5 text-amber-300'
                    }`}
                  >
                    <Icon className="size-7" aria-hidden="true" />
                  </div>

                  <div className="flex flex-col items-start gap-1 min-w-0 flex-1">

                    <span className="text-lg sm:text-md font-bold text-white tracking-tight truncate max-w-full">
                      {test.title}
                    </span>
                  </div>
                </div>

                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/60 transition-transform group-hover:-translate-x-1 group-hover:text-white group-hover:border-emerald-400/30">
                  <ChevronLeft className="size-5" aria-hidden="true" />
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
