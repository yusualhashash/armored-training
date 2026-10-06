import { ChevronLeft, Timer } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface SectionButtonProps {
  label: string
  description?: string
  subLabel?: string
  icon?: LucideIcon
  onClick: () => void
}

export function SectionButton({
  label,
  description,
  subLabel,
  icon: Icon = Timer,
  onClick,
}: SectionButtonProps) {
  return (
    <Button
      type="button"
      variant="ghost"
      onClick={onClick}
      className="group h-auto w-full min-w-0 justify-between rounded-3xl border border-white/10 bg-[#101216] px-3.5 py-4 text-right text-white hover:bg-[#17191f] sm:p-5 whitespace-normal"
    >
      <span className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-rose-200/10 text-rose-200 sm:size-14">
          <Icon className="size-5 sm:size-6" aria-hidden="true" />
        </span>

        <span className="flex min-w-0 flex-1 flex-col items-start gap-1">
          <span className="block w-full min-w-0 whitespace-normal break-words text-sm font-semibold leading-snug sm:text-lg sm:leading-normal">
            {label}
            {subLabel && (
              <span className="mr-1.5 text-xs font-normal text-white/60">
                ({subLabel})
              </span>
            )}
          </span>

          {description && (
            <span className="block w-full min-w-0 whitespace-normal break-words text-xs font-normal leading-relaxed text-white/50">
              {description}
            </span>
          )}
        </span>
      </span>

      <ChevronLeft
        className="size-5 shrink-0 text-white/35 transition-transform group-hover:-translate-x-1"
        aria-hidden="true"
      />
    </Button>
  )
}