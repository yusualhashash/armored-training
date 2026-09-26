import { roundToTenth, TENTHS_PER_SECOND } from '@/lib/performance'
import type { PerformanceLevel, PerformanceStandard } from '@/lib/types'

/** نطاق زمني واحد لعرضه في جدول معايير الأداء. */
export interface StandardRange {
  level: PerformanceLevel
  lowerSeconds: number
  upperSeconds: number
}

/**
 * يحوّل المعايير إلى نطاقات زمنية متتابعة دون فراغات:
 * بداية كل نطاق هي نهاية النطاق الذي قبله زائد خطوة الجدول
 * (عُشر الثانية للاختبارات القصيرة، وثانية واحدة لما يزيد عن دقيقة).
 */
export function buildStandardRanges(standards: PerformanceStandard[]): StandardRange[] {
  const step = resolveStep(standards)

  return standards.map((standard, index) => ({
    level: standard.level,
    lowerSeconds: index === 0 ? 0 : roundToTenth(standards[index - 1].time + step),
    upperSeconds: standard.time,
  }))
}

function resolveStep(standards: PerformanceStandard[]): number {
  const finiteTimes = standards.filter((standard) => Number.isFinite(standard.time)).map((standard) => standard.time)
  const slowestStandard = Math.max(0, ...finiteTimes)

  return slowestStandard < 60 ? 1 / TENTHS_PER_SECOND : 1
}
