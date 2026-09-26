import type { PerformanceStandard, SportEvent } from '@/lib/types'

export type T72LoadTanksOnHeavyCarriersUnit = 'طاقم' | 'فصيلة' | 'سرية'

export const T72_LOAD_TANKS_ON_HEAVY_CARRIERS_UNITS: Array<{ id: T72LoadTanksOnHeavyCarriersUnit; label: string; thresholds: [number, number, number] }> = [
  { id: 'طاقم', label: 'الطاقم', thresholds: [600, 780, 960] },
  { id: 'فصيلة', label: 'الفصيلة', thresholds: [720, 900, 1080] },
  { id: 'سرية', label: 'السرية', thresholds: [780, 960, 1200] },
]

export function createT72LoadTanksOnHeavyCarriersEvent(unit: T72LoadTanksOnHeavyCarriersUnit): SportEvent {
  const thresholds = T72_LOAD_TANKS_ON_HEAVY_CARRIERS_UNITS.find((entry) => entry.id === unit)?.thresholds ?? [600, 780, 960]
  const standards: PerformanceStandard[] = [
    { time: thresholds[0], level: 'excellent' },
    { time: thresholds[1], level: 'good' },
    { time: thresholds[2], level: 'acceptable' },
    { time: Number.POSITIVE_INFINITY, level: 'poor' },
  ]
  return {
    id: `t72-load-tanks-on-heavy-carriers-${unit}`,
    name: `تحميل الدبابات على الحاملات ذات الحمولة الكبيرة (50 طن) - ${unit}`,
    description: 'قياس الزمن وفق معايير الأداء المعتمدة',
    maxScore: 0,
    categories: [],
    standards,
    scores: [],
  }
}
