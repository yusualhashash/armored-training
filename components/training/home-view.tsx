import { ChevronLeft, Dumbbell, Medal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { NavigationProps } from '@/lib/training/navigation'

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

export function HomeView({ openView }: Pick<NavigationProps, 'openView'>) {
  return (
<div className="mx-auto w-full max-w-2xl">
  <div className="grid gap-4">
    {sectionCards.map(({ view, label, description, icon: Icon, eyebrow }) => (
      <Button key={view} type="button" variant="ghost" onClick={() => openView(view)} className="group h-auto min-w-0 justify-between rounded-3xl border border-white/10 bg-[#101216] p-4 text-right text-white shadow-xl shadow-black/20 transition-all hover:-translate-y-0.5 hover:bg-[#17191f] sm:p-6">
        <span className="flex items-center gap-4">
          <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-rose-200/10 text-rose-200 ring-1 ring-inset ring-rose-100/10"><Icon className="size-6" aria-hidden="true" /></span>
          <span className="flex flex-col items-start gap-1"><span className="text-xs text-white/40">{eyebrow}</span><span className="text-lg font-semibold">{label}</span><span className="text-xs font-normal text-white/50">{description}</span></span>
        </span>
        <ChevronLeft className="size-5 text-white/35 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
      </Button>
    ))}
  </div>
</div>
  )
}
