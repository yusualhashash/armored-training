import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { SectionContent } from '@/lib/training/navigation'

export function TrainingHeader({ currentSection }: { currentSection: SectionContent | null }) {
  return (
<header className="relative flex w-full max-w-full items-center justify-between gap-3 px-3 pb-4 pt-5 sm:gap-4 sm:px-10 sm:pt-10">
          {currentSection ? (
<div className="flex w-full min-w-0 flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
  <div className="flex min-w-0 items-center gap-3">
                <Button type="button" variant="ghost" size="icon" aria-label={`رجوع إلى ${currentSection.backLabel}`} onClick={() => window.history.back()} className="order-first size-11 shrink-0 rounded-full border border-white/10 bg-[#101216] text-white shadow-lg shadow-black/25 hover:bg-[#17191f]">
                  <ArrowRight className="size-5" aria-hidden="true" />
                </Button>
                <div className="min-w-0">
                  <p className="truncate text-xs font-medium text-white/50">رجوع إلى {currentSection.backLabel}</p>
                  <h1 className="mt-1 line-clamp-2 break-words text-base font-bold leading-tight tracking-tight text-white sm:text-xl">{currentSection.title}</h1>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08] shadow-lg shadow-black/10">
                <Sparkles className="size-5 text-rose-200" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="truncate text-xs font-medium tracking-[0.18em] text-white/45">مساحتك اليومية</p>
                <h1 className="mt-1 truncate text-lg font-semibold tracking-tight text-white">ابدأ من هنا</h1>
              </div>
            </div>
          )}
          {!currentSection && <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs text-white/55">يعمل دون إنترنت</span>}
        </header>
  )
}
