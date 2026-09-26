import { ChevronLeft, Timer } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface SectionButtonProps {
  label: string
  description: string
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
    <Button
      type="button"
      variant="ghost"
      onClick={onClick}
      className="group h-auto w-full min-w-0 justify-between rounded-3xl border border-white/10 bg-[#101216] px-3 py-4 text-right text-white hover:bg-[#17191f] sm:p-5"
    >
      <span className="flex min-w-0 flex-1 items-center gap-3">
        <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-rose-200/10 text-rose-200">
          <Icon className="size-6" aria-hidden="true" />
        </span>

        <span className="flex min-w-0 flex-1 flex-col items-start gap-1">
          <span className="block whitespace-normal break-words text-sm font-semibold leading-7 sm:text-lg sm:leading-normal">
            {label}
          </span>

          <span className="block whitespace-normal break-words text-xs font-normal leading-5 text-white/50">
            {description}
          </span>
        </span>
      </span>

      <ChevronLeft
        className="size-5 shrink-0 text-white/35 transition-transform group-hover:-translate-x-1"
        aria-hidden="true"
      />
    </Button>
  )
}