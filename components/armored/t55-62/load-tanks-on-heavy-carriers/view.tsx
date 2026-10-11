'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  ArmoredUnitSelector,
} from '@/components/armored/armored-unit-selector'
import type { T55_62LoadTanksOnHeavyCarriersUnit } from '@/lib/armored/t55-62/load-tanks-on-heavy-carriers'
import {
  createT55_62LoadTanksOnHeavyCarriersEvent,
  T55_62_LOAD_TANKS_ON_HEAVY_CARRIERS_UNITS,
} from '@/lib/armored/t55-62/load-tanks-on-heavy-carriers'

export type T55_62LoadTanksOnHeavyCarriersViewId =
  | 't55-62-load-tanks-on-heavy-carriers'
  | 't55-62-load-tanks-on-heavy-carriers-طاقم'
  | 't55-62-load-tanks-on-heavy-carriers-فصيلة'
  | 't55-62-load-tanks-on-heavy-carriers-سرية'

const UNIT_RATINGS: Record <T55_62LoadTanksOnHeavyCarriersUnit, { score: string; rating: string }[]> = {
  طاقم: [
    { score: '9:00 دقيقة', rating: 'ممتاز' },
    { score: '12:00 دقيقة', rating: 'جيد' },
    { score: '15:00 دقيقة', rating: 'مقبول' },
  ],
  فصيلة: [
    { score: '10:00 دقيقة', rating: 'ممتاز' },
    { score: '13:00 دقيقة', rating: 'جيد' },
    { score: '16:00 دقيقة', rating: 'مقبول' },
  ],
  سرية: [
    { score: '13:00 دقيقة', rating: 'ممتاز' },
    { score: '16:00 دقيقة', rating: 'جيد' },
    { score: '20:00 دقيقة', rating: 'مقبول' },
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

export function T55_62LoadTanksOnHeavyCarriersView({
  activeView,
  openView,
}: {
  activeView: T55_62LoadTanksOnHeavyCarriersViewId
  openView: (view: T55_62LoadTanksOnHeavyCarriersViewId) => void
}) {
  if (activeView === 't55-62-load-tanks-on-heavy-carriers') {
    return (
      <ArmoredUnitSelector
        drillTitle="تحميل الدبابات على الناقلات الثقيلة"
        tankModel="T-55 / T-62"
        units={T55_62_LOAD_TANKS_ON_HEAVY_CARRIERS_UNITS}
        onSelect={(unitId) =>
          openView(
            `t55-62-load-tanks-on-heavy-carriers-${unitId}` as T55_62LoadTanksOnHeavyCarriersViewId,
          )
        }
      />
    )
  }

  const unit = activeView.replace(
    't55-62-load-tanks-on-heavy-carriers-',
    '',
  ) as T55_62LoadTanksOnHeavyCarriersUnit

  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT55_62LoadTanksOnHeavyCarriersEvent(unit)}
        showRecord={false}
        trainerInstructions={getInstructions()}
        trainerRatings={UNIT_RATINGS[unit]}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}