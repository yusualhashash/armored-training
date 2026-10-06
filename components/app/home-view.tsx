import {
    BookOpen,
    ChevronLeft,
    Dumbbell,
    History,
    MapPin,
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
  {
    view: 'location' as const,
    label: 'مشاركة الموقع الميداني',
    description: 'إرسال إحداثيات وموقع التدريب عبر واتساب وتيليجرام مدعومة بخرائط Google.',
    icon: MapPin,
    eyebrow: 'الميدان والخرائط',
  },
]

export function HomeView({ openView }: HomeViewProps) {
  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="grid gap-4">
        {sectionCards.map(
          ({ view, label, description, icon: Icon, eyebrow }) => (
            <Button
              key={view}
              type="button"
              variant="ghost"
              onClick={() => openView(view)}
              className="group h-auto min-w-0 justify-between rounded-3xl border border-white/10 bg-[#101216] p-4 text-right text-white shadow-xl shadow-black/20 transition-all hover:-translate-y-0.5 hover:bg-[#17191f] sm:p-6"
            >
              <span className="flex items-center gap-4">
                <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-rose-200/10 text-rose-200 ring-1 ring-inset ring-rose-100/10">
                  <Icon className="size-6" aria-hidden="true" />
                </span>

                <span className="flex flex-col items-start gap-1">
                  <span className="text-xs text-white/40">
                    {eyebrow}
                  </span>

                  <span className="text-lg font-semibold">
                    {label}
                  </span>

                  <span className="text-xs font-normal text-white/50">
                    {description}
                  </span>
                </span>
              </span>

              <ChevronLeft
                className="size-5 text-white/35 transition-transform group-hover:-translate-x-1"
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
    <div className="flex min-w-0 items-center gap-3">
      <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-amber-200/20 bg-black/10 p-1 shadow-lg shadow-black/10 sm:size-16">
        <img
          src="/eagle-logo.png"
          alt="شعار النسر الذهبي"
          className="h-full w-full object-contain"
        />
      </div>

      <div className="min-w-0">
        <p className="truncate text-xs font-medium tracking-[0.18em] text-white/45">
        فرع تدريب المدرعات
        </p>

        <h1 className="mt-1 truncate text-lg font-semibold tracking-tight text-white">
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
