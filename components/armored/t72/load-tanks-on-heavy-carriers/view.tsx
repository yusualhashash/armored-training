'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  ArmoredUnitSelector,
} from '@/components/armored/armored-unit-selector'
import type { T72LoadTanksOnHeavyCarriersUnit } from '@/lib/armored/t72/load-tanks-on-heavy-carriers'
import {
  createT72LoadTanksOnHeavyCarriersEvent,
  T72_LOAD_TANKS_ON_HEAVY_CARRIERS_UNITS,
} from '@/lib/armored/t72/load-tanks-on-heavy-carriers'

export type T72LoadTanksOnHeavyCarriersViewId =
  | 't72-load-tanks-on-heavy-carriers'
  | 't72-load-tanks-on-heavy-carriers-طاقم'
  | 't72-load-tanks-on-heavy-carriers-فصيلة'
  | 't72-load-tanks-on-heavy-carriers-سرية'

const UNIT_RATINGS: Record <T72LoadTanksOnHeavyCarriersUnit, { score: string; rating: string }[]> = {
  طاقم: [
    { score: '10:00 دقيقة', rating: 'ممتاز' },
    { score: '13:00 دقيقة', rating: 'جيد' },
    { score: '16:00 دقيقة', rating: 'مقبول' },
  ],
  فصيلة: [
    { score: '12:00 دقيقة', rating: 'ممتاز' },
    { score: '15:00 دقيقة', rating: 'جيد' },
    { score: '18:00 دقيقة', rating: 'مقبول' },
  ],
  سرية: [
    { score: '15:00 دقيقة', rating: 'ممتاز' },
    { score: '18:00 دقيقة', rating: 'جيد' },
    { score: '22:00 دقيقة', rating: 'مقبول' },
  ],
}

const INSTRUCTIONS = [
  'الحاملة تتوقف على أرض مستوية حسب النظام الذي يحدده قائد وحدة الدبابات (لا يُسمح بميلان الأرض نحو الجهة المعاكسة لاتجاه حركة الحاملة، وعلى ألّا يزيد عن ٣ درجات). المزلقانات الكبيرة والصغيرة في وضعية الرحيل، الحاملة مكبوحة بمكابح الإيقاف، ودواليب الحاملة تستند على ركائز من طرف اتجاه الحركة.',
  'السائق في الحجرة يحافظ على كبح الحاملة، وباب الحجرة اليساري مفتوح. الدبابة على بعد ١٠ م خلف الحاملة. طاقم الدبابة على بعد خطوتين أمام الدبابة. بعد التحميل تُثبَّت الدبابة على ظهر الحاملة، المدفع في الوضعية الأفقية دون أن يمسّ الدولاب الاحتياطي للحاملة، برج الدبابة مثبت، الهوائي منزوع، الفتحات مغلقة.',
  'الأخطاء التي تخفض التقدير درجة واحدة:',
  '- جعل سلسلة الدبابة فوق الحاملة إلى الوراء حتى ملامسة المحدِّد.',
  '- القيام بالانعطافات فوق الحاملة.',
  '- سلسلة الدبابة المتوسطة بارزة عن حدود (أجناب) الحاملة بأكثر من ٣ سم (لا يُسمح بالبروز بالنسبة للدبابات الخفيفة والناقلات المدرعة المزنجرة).',
  'الأخطاء التي تعطي علامة (غير مقبول):',
  '- سقوط الدبابة من فوق الحاملة أثناء التحميل.',
  '- التثبيت غير الصحيح للدبابة (الناقلة المدرعة المزنجرة) المحمّلة فوق الحاملة.',
  'يُحسب الزمن من إيعاز «لتحميل الدبابات - ابدأ» حتى الإبلاغ عن انتهاء التحميل وتثبيت الدبابة.',
].join('\n')

function getInstructions() {
  return INSTRUCTIONS
}

export function T72LoadTanksOnHeavyCarriersView({
  activeView,
  openView,
}: {
  activeView: T72LoadTanksOnHeavyCarriersViewId
  openView: (view: T72LoadTanksOnHeavyCarriersViewId) => void
}) {
  if (activeView === 't72-load-tanks-on-heavy-carriers') {
    return (
      <ArmoredUnitSelector
        drillTitle="تحميل الدبابات على الحاملات ذات الحمولة الكبيرة (50 طن)"
        tankModel="T-72"
        units={T72_LOAD_TANKS_ON_HEAVY_CARRIERS_UNITS}
        onSelect={(unitId) =>
          openView(
            `t72-load-tanks-on-heavy-carriers-${unitId}` as T72LoadTanksOnHeavyCarriersViewId,
          )
        }
      />
    )
  }

  const unit = activeView.replace(
    't72-load-tanks-on-heavy-carriers-',
    '',
  ) as T72LoadTanksOnHeavyCarriersUnit

  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT72LoadTanksOnHeavyCarriersEvent(unit)}
        showRecord={false}
        trainerInstructions={getInstructions()}
        trainerRatings={UNIT_RATINGS[unit]}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}