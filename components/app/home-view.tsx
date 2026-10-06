import {
    BookOpen,
    ChevronLeft,
    Dumbbell,
    History,
    Medal
} from 'lucide-react';

import { Button } from '@/components/ui/button';

import type { OpenView } from '@/lib/app/types'


interface HomeViewProps {
  openView: OpenView
}

const sectionCards = [
  {
    view: 'sports' as const,
    label: 'الرياضة',
    description: 'اختر نوع الرياضة للوصول إلى تفاصيل المنافسات.',
    icon: Dumbbell,
    eyebrow: 'القسم الأول',
  },
  {
    view: 'armored' as const,
    label: 'أسلحة ورمي',
    description: 'اختبارات الدبابات والمهارات الميدانية.',
    icon: Medal,
    eyebrow: 'القسم الثاني',
  },
]

export function HomeView({ openView }: HomeViewProps) {
  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="grid gap-3 sm:gap-4">
        {sectionCards.map(
          ({ view, label, description, icon: Icon, eyebrow }) => (
            <Button
              key={view}
              type="button"
              variant="ghost"
              onClick={() => openView(view)}
              className="group h-auto w-full min-w-0 justify-between rounded-3xl border border-white/10 bg-[#101216] px-3.5 py-4 text-right text-white shadow-xl shadow-black/20 transition-all hover:bg-[#17191f] sm:p-6 whitespace-normal"
            >
              <span className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-rose-200/10 text-rose-200 ring-1 ring-inset ring-rose-100/10 sm:size-14">
                  <Icon className="size-5 sm:size-6" aria-hidden="true" />
                </span>

                <span className="flex min-w-0 flex-1 flex-col items-start gap-1">
                  <span className="text-xs text-white/40">
                    {eyebrow}
                  </span>

                  <span className="block w-full min-w-0 whitespace-normal break-words text-base font-semibold leading-snug sm:text-lg">
                    {label}
                  </span>

                  <span className="block w-full min-w-0 whitespace-normal break-words text-xs font-normal leading-relaxed text-white/50">
                    {description}
                  </span>
                </span>
              </span>

              <ChevronLeft
                className="size-5 shrink-0 text-white/35 transition-transform group-hover:-translate-x-1"
                aria-hidden="true"
              />
            </Button>
          ),
        )}
      </div>
    </div>
  )
}

export function HomeHeader() {
  return (
    <div className="flex min-w-0 flex-1 items-center gap-2.5 sm:gap-3">
      <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-amber-200/20 bg-black/10 p-1 shadow-lg shadow-black/10 sm:size-16">
        <img
          src="/eagle-logo.png"
          alt="شعار النسر الذهبي"
          className="h-full w-full object-contain"
        />
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-[11px] font-medium tracking-wider text-white/45 sm:text-xs">
          فرع تدريب المدرعات
        </p>

        <h1 className="mt-0.5 truncate text-base font-semibold tracking-tight text-white sm:text-lg">
          المعدلات الزمنية
        </h1>
      </div>
    </div>
  )
}

export function GuideHeader() {
  return (
    <div className="flex min-w-0 items-center gap-3">
      <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08]">
        <BookOpen
          className="size-5 text-rose-200"
          aria-hidden="true"
        />
      </div>

      <div className="min-w-0">
        <p className="truncate text-xs font-medium tracking-[0.18em] text-white/45">
          مساحتك اليومية
        </p>

        <h1 className="mt-1 truncate text-lg font-semibold tracking-tight text-white">
          التعليمات
        </h1>
      </div>
    </div>
  )
}
