'use client'

import { Dumbbell, Medal, Timer, ChevronLeft, Zap, Shield, Sparkles } from 'lucide-react'
import type { OpenView } from '@/lib/app/types'

interface SportsSectionViewProps {
  openView: OpenView
}

const sportsTests = [
  {
    id: 'stomach',
    title: 'تمرين المعدة',
    category: 'التمرين الأول · ثني الجذع',
    description: 'اختبار التكرارات للبطن والمعدة وفق 7 فئات عمرية مع وضعية الثبات أو اليدين عالياً.',
    spec: '7 فئات عمرية · تكرارات بالدقيقة',
    icon: Dumbbell,
    accent: 'amber',
  },
  {
    id: 'pushups',
    title: 'التمرين السادس (الضغط)',
    category: 'التمرين الثاني · القوة العضلية',
    description: 'ثني ومد الذراعين من وضع الانبطاح المائل مع احتساب التكرارات والدرجات المعتمدة.',
    spec: '7 فئات عمرية · قوة الذراعين والصدر',
    icon: Dumbbell,
    accent: 'amber',
  },
  {
    id: 'compound-strength',
    title: 'القوة المركبة',
    category: 'التمرين الثالث · القوة الشاملة',
    description: 'اختبار الحركات المركبة لقياس اللياقة العضلية العامة والتحمل العضلي.',
    spec: '7 فئات عمرية · أداء مركب',
    icon: Dumbbell,
    accent: 'amber',
  },
  {
    id: 'pullups',
    title: 'سحب الجسم على الثابت (العقلة)',
    category: 'التمرين الرابع · القوة والشد',
    description: 'اختبار العقلة وسحب الجسم كاملاً حتى تجاوز الذقن للبار بدون أرجحة.',
    spec: '7 فئات عمرية · قوة السحب والقبضة',
    icon: Dumbbell,
    accent: 'amber',
  },
  {
    id: 'hundred',
    title: 'سباق 100 متر',
    category: 'المسار الخامس · السرعة القصوى',
    description: 'سباق السرعة الانفجارية لمسافة مئة متر مع تسجيل الزمن بالثواني وأجزائها.',
    spec: '7 فئات عمرية · توقيت رقمي دقيق',
    icon: Timer,
    accent: 'emerald',
  },
  {
    id: 'one-km',
    title: 'سباق 1 كم',
    category: 'المسار السادس · التحمل السريع',
    description: 'سباق الجري لمسافة كيلومتر واحد لاختبار اللياقة الهوائية والسرعة المستمرة.',
    spec: '7 فئات عمرية · دقائق وثواني',
    icon: Timer,
    accent: 'emerald',
  },
  {
    id: 'two-km',
    title: 'سباق 2 كم',
    category: 'المسار السابع · المسافات المتوسطة',
    description: 'سباق الجري لمسافة 2000 متر لقياس الكفاءة التنفسية والتحمل البدني.',
    spec: '4 فئات عمرية · دقائق وثواني',
    icon: Timer,
    accent: 'emerald',
  },
  {
    id: 'three-km',
    title: 'سباق 3 كم',
    category: 'المسار الثامن · التحمل الميداني',
    description: 'سباق الجري لمسافة 3000 متر للمقاتلين لاختبار الجهد البدني والجلد.',
    spec: '3 فئات عمرية · دقائق وثواني',
    icon: Timer,
    accent: 'emerald',
  },
  {
    id: 'five-km',
    title: 'سباق 5 كم',
    category: 'المسار التاسع · التحمل الأقصى',
    description: 'سباق الضاحية لمسافة 5000 متر لاختبار أقصى درجات الجلد والتحمل العضلي الدوري.',
    spec: '3 فئات عمرية · دقائق وثواني',
    icon: Timer,
    accent: 'emerald',
  },
  {
    id: '4x100',
    title: 'سباق التتابع 4×100 متر',
    category: 'المسار العاشر · العمل الجماعي',
    description: 'سباق التتابع الميداني السريع للفرق الأربعة مع تسليم وتسلم عصا التتابع.',
    spec: '6 فئات عمرية · فريق 4 متدربين',
    icon: Timer,
    accent: 'emerald',
  },
] as const

export function SportsMainView({ openView }: SportsSectionViewProps) {
  return (
    <div className="mx-auto w-full max-w-2xl space-y-6">
      {/* Tactical Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl border border-emerald-500/25 bg-[#0c1610] p-5 sm:p-6 shadow-[0_12px_30px_rgba(0,0,0,0.4)]">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-amber-400/30 bg-gradient-to-br from-amber-400/20 to-amber-500/5 text-amber-300 shadow-md">
              <Dumbbell className="size-7" aria-hidden="true" />
            </div>

            <div className="flex flex-col items-start gap-1">
              <span className="text-[11px] font-semibold tracking-wider text-emerald-400">
                القسم الأول · اللياقة البدنية والجاهزية
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                اختبارات التربية الرياضية
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-1.5 rounded-xl border border-amber-400/25 bg-amber-400/10 px-3 py-1.5 text-xs font-bold text-amber-300">
            <Sparkles className="size-3.5" aria-hidden="true" />
            <span>10 اختبارات</span>
          </div>
        </div>

        <p className="mt-3 text-xs sm:text-sm text-white/65 leading-relaxed">
          اختر الاختبار الرياضي للوصول إلى الفئات العمرية المعتمدة، وساعات التوقيت، وجداول المعايير التقديرية (ممتاز، جيد جداً، جيد، مقبول).
        </p>

        <div className="mt-4 flex items-center gap-2 text-[11px] text-white/45 font-medium border-t border-white/[0.06] pt-3">
          <span>ساعة إيقاف دقيقة</span>
          <span aria-hidden="true">·</span>
          <span>تصدير Excel فوري</span>
          <span aria-hidden="true">·</span>
          <span className="text-amber-300/80">حفظ تلقائي للسجل</span>
        </div>
      </div>

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
                    <span
                      className={`text-[11px] font-semibold tracking-wider ${
                        isEmerald ? 'text-emerald-400' : 'text-amber-400'
                      }`}
                    >
                      {test.category}
                    </span>
                    <span className="text-lg sm:text-xl font-bold text-white tracking-tight truncate max-w-full">
                      {test.title}
                    </span>
                  </div>
                </div>

                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/60 transition-transform group-hover:-translate-x-1 group-hover:text-white group-hover:border-emerald-400/30">
                  <ChevronLeft className="size-5" aria-hidden="true" />
                </div>
              </div>

              <p className="mt-3 text-xs sm:text-sm text-white/65 leading-relaxed text-right">
                {test.description}
              </p>

              <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-3 text-[11px] text-white/45 font-medium">
                <div className="flex items-center gap-2">
                  <span>{test.spec}</span>
                </div>
                <span className="text-emerald-400/90 font-semibold group-hover:text-emerald-300">
                  عرض الفئات العمرية
                </span>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
