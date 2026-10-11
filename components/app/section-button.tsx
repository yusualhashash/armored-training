import { ChevronLeft, Timer } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface SectionButtonProps {
  label: string
  description: string | null
  icon?: LucideIcon
  onClick: () => void
}

export function SectionButton({
  label,
  description,
  icon: Icon = Timer,
  onClick,
}: SectionButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative flex w-full min-w-0 items-center justify-between rounded-2xl border border-emerald-500/15 bg-[#0c1610] p-4 text-right text-white shadow-sm transition-all duration-200 hover:border-emerald-500/35 hover:bg-[#101e16] hover:shadow-md active:scale-[0.99]"
    >
      <div className="flex min-w-0 flex-1 items-center gap-3.5">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300 transition-colors group-hover:border-emerald-400/40 group-hover:bg-emerald-400/20">
          <Icon className="size-6" aria-hidden="true" />
        </div>

        <div className="flex min-w-0 flex-1 flex-col items-start gap-0.5">
          <span className="block whitespace-normal break-words text-sm font-bold text-white sm:text-base">
            {label}
          </span>

          <span className="block whitespace-normal break-words text-xs text-white/55 leading-relaxed">
            {description}
          </span>
        </div>
      </div>

      <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/5 bg-white/[0.03] text-white/40 transition-transform group-hover:-translate-x-1 group-hover:text-emerald-300 group-hover:border-emerald-500/20">
        <ChevronLeft className="size-4" aria-hidden="true" />
      </div>
    </button>
  )
}