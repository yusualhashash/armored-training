import { Button } from '@/components/ui/button'
import { ChevronLeft, Shield } from 'lucide-react'

interface ArmoredUnitButtonProps {
  label: string
  onClick: () => void
}

export function ArmoredUnitButton({ label, onClick }: ArmoredUnitButtonProps) {
  return (
    <Button
      type="button"
      variant="ghost"
      onClick={onClick}
      className="group h-auto w-full min-w-0 justify-between rounded-3xl border border-white/10 bg-[#101216] px-3.5 py-4 text-right text-white hover:bg-[#17191f] sm:p-5 whitespace-normal"
    >
      <span className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-rose-200/10 text-rose-200 sm:size-14">
          <Shield className="size-5 sm:size-6" aria-hidden="true" />
        </span>

        <span className="flex min-w-0 flex-1 flex-col items-start gap-1">
          <span className="block w-full min-w-0 whitespace-normal break-words text-base sm:text-lg font-semibold leading-snug">
            {label}
          </span>
        </span>
      </span>

      <ChevronLeft
        className="size-5 shrink-0 text-white/40 transition-transform group-hover:-translate-x-1"
        aria-hidden="true"
      />
    </Button>
  )
}
