'use client'

import type { LucideIcon } from 'lucide-react';
import {
    Award,
    ChevronLeft,
    Clock,
    Flag,
    Layers,
    Shield,
    Users
} from 'lucide-react';

export interface ArmoredUnitOption {
  id: string
  label: string
}

interface ArmoredUnitSelectorProps {
  drillTitle: string
  tankModel?: string
  units: readonly ArmoredUnitOption[] | ArmoredUnitOption[]
  onSelect: (unitId: string) => void
}

interface UnitDetail {
  icon: LucideIcon
  accentColor: string
  bgBadge: string
  iconBorder: string
  cardBorder: string
}

const UNIT_DETAILS: Record<string, UnitDetail> = {
  طاقم: {
    icon: Users,
    accentColor: 'text-emerald-300',
    bgBadge: 'bg-emerald-400/10 text-emerald-300 border-emerald-400/25',
    iconBorder: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300',
    cardBorder: 'hover:border-emerald-500/40 hover:bg-[#0e1c13]',
  },
  فصيلة: {
    icon: Layers,
    accentColor: 'text-cyan-300',
    bgBadge: 'bg-cyan-400/10 text-cyan-300 border-cyan-400/25',
    iconBorder: 'border-cyan-400/30 bg-cyan-400/10 text-cyan-300',
    cardBorder: 'hover:border-cyan-500/40 hover:bg-[#0c1a1e]',
  },
  سرية: {
    icon: Flag,
    accentColor: 'text-amber-300',
    bgBadge: 'bg-amber-400/10 text-amber-300 border-amber-400/25',
    iconBorder: 'border-amber-400/30 bg-amber-400/10 text-amber-300',
    cardBorder: 'hover:border-amber-500/40 hover:bg-[#1a180e]',
  },
  كتيبة: {
    icon: Award,
    accentColor: 'text-rose-300',
    bgBadge: 'bg-rose-400/10 text-rose-300 border-rose-400/25',
    iconBorder: 'border-rose-400/30 bg-rose-400/10 text-rose-300',
    cardBorder: 'hover:border-rose-500/40 hover:bg-[#1c0f14]',
  },
}

const DEFAULT_DETAIL: UnitDetail = {
  icon: Shield,
  accentColor: 'text-emerald-300',
  bgBadge: 'bg-emerald-400/10 text-emerald-300 border-emerald-400/25',
  iconBorder: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300',
  cardBorder: 'hover:border-emerald-500/40 hover:bg-[#0e1c13]',
}

/**
 * واجهة تكتيكية محسنة لاختيار مستوى التشكيل (طاقم / فصيلة / سرية / كتيبة)
 */
export function ArmoredUnitSelector({
  drillTitle,
  tankModel,
  units,
  onSelect,
}: ArmoredUnitSelectorProps) {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 sm:gap-5">
      {/* Exercise context card */}
      <div className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-[#0c1811] via-[#09130e] to-[#060b08] p-5 sm:p-6 shadow-lg shadow-black/30">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-12 -top-12 size-40 rounded-full bg-emerald-500/10 blur-3xl"
        />

        <div className="relative z-10 flex flex-col gap-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
              <Shield className="size-3.5" aria-hidden="true" />
              <span>{tankModel ?? 'سلاح الدروع'}</span>
            </span>

            <span className="inline-flex items-center gap-1 text-[11px] text-white/50">
              <Clock className="size-3" aria-hidden="true" />
              <span>احتساب زمني دقيق</span>
            </span>
          </div>

          <div>
            <h2 className="text-base sm:text-sm font-bold text-white tracking-tight">
              {drillTitle}
            </h2>
          </div>
        </div>
      </div>

      {/* Units Selection Grid */}
      <div className="grid gap-3 sm:gap-3.5">
        {units.map((unit) => {
          const detail = UNIT_DETAILS[unit.id] ?? DEFAULT_DETAIL
          const Icon = detail.icon

          return (
            <button
              key={unit.id}
              type="button"
              onClick={() => onSelect(unit.id)}
              className={`group relative flex w-full min-w-0 items-center justify-between rounded-2xl border border-white/10 bg-[#0a140e] p-4 sm:p-5 text-right text-white shadow-sm transition-all duration-200 ${detail.cardBorder} active:scale-[0.99]`}
            >
              <div className="flex min-w-0 flex-1 items-center gap-3.5 sm:gap-4">
                <div
                  className={`flex size-13 shrink-0 items-center justify-center rounded-2xl border ${detail.iconBorder} transition-transform duration-200 group-hover:scale-105 shadow-inner`}
                >
                  <Icon className="size-6" aria-hidden="true" />
                </div>

                <div className="flex min-w-0 flex-1 flex-col items-start gap-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-base sm:text-md font-bold text-white tracking-tight">
                      {unit.label}
                    </span>
                  </div>

                </div>
              </div>

              <div className="mr-2 flex size-9 shrink-0 items-center justify-center rounded-xl border border-white/5 bg-white/[0.03] text-white/40 transition-all duration-200 group-hover:-translate-x-1 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 group-hover:text-emerald-300">
                <ChevronLeft className="size-5" aria-hidden="true" />
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}