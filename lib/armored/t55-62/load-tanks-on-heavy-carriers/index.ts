import type { PerformanceStandard, SportEvent } from '@/lib/types'

export type T55_62LoadTanksOnHeavyCarriersUnit = 'طاقم' | 'فصيلة' | 'سرية'

export const T55_62_LOAD_TANKS_ON_HEAVY_CARRIERS_UNITS: Array<{ id: T55_62LoadTanksOnHeavyCarriersUnit; label: string; thresholds: [number, number, number] }> = [
  { id: 'طاقم', label: 'الطاقم', thresholds: [540, 720, 900] },
  { id: 'فصيلة', label: 'الفصيلة', thresholds: [600, 780, 960] }, 
  { id: 'سرية', label: 'السرية', thresholds: [780, 960, 1200] },
]

export function createT55_62LoadTanksOnHeavyCarriersEvent(unit: T55_62LoadTanksOnHeavyCarriersUnit): SportEvent {
  const thresholds = T55_62_LOAD_TANKS_ON_HEAVY_CARRIERS_UNITS.find((entry) => entry.id === unit)?.thresholds ?? [540, 720, 900]
  const standards: PerformanceStandard[] = [
    { time: thresholds[0], level: 'excellent' },
    { time: thresholds[1], level: 'good' },
    { time: thresholds[2], level: 'acceptable' },
    { time: Number.POSITIVE_INFINITY, level: 'poor' },
  ]
  return {
    id: `t55-62-load-tanks-on-heavy-carriers-${unit}`,
    name: `تحميل الدبابات على الحاملات ذات الحمولة الكبيرة (50 طن) - ${unit}`,
    description: 'قياس الزمن وفق معايير الأداء المعتمدة',
    maxScore: 0,
    categories: [],
    standards,
    scores: [],
  }
}
