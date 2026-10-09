import type { PerformanceLevel, SportEvent } from '@/lib/types'

/** جداول المعايير والعلامات مضبوطة على عُشر الثانية. */
export const TENTHS_PER_SECOND = 10

const LEVEL_LABELS: Record<PerformanceLevel, string> = {
  excellent: 'ممتاز',
  veryGood: 'جيد جدا',
  good: 'جيد',
  acceptable: 'مقبول',
  poor: 'غير مقبول',
}

const LEVEL_COLORS: Record<PerformanceLevel, string> = {
  excellent: 'text-emerald-300',
  veryGood: 'text-teal-300',
  good: 'text-sky-300',
  acceptable: 'text-amber-300',
  poor: 'text-rose-300',
}

/** يضبط الزمن على عُشر الثانية حتى يطابق المستوى والعلامة الجدولين. */
export function roundToTenth(seconds: number): number {
  return Math.round(seconds * TENTHS_PER_SECOND) / TENTHS_PER_SECOND
}

export function getPerformanceLevelLabel(level: PerformanceLevel): string {
  return LEVEL_LABELS[level]
}

export function getPerformanceLevelColor(level: PerformanceLevel): string {
  return LEVEL_COLORS[level]
}

/** يحدد المستوى من العلامة، مع استخدام المعايير الزمنية للاختبارات التي لا تملك جدول علامات. */
export function resolvePerformanceLevel(event: SportEvent, seconds: number): PerformanceLevel {
  const score = getPerformanceScore(event, seconds)

  if (score !== null) {
    if (score >= 90) return 'excellent'
    if (score >= 80) return 'veryGood'
    if (score >= 70) return 'good'
    if (score >= 60) return 'acceptable'
    return 'poor'
  }

  const time = roundToTenth(seconds)
  const matchedStandard = event.standards.find((standard) => time <= standard.time)
  return matchedStandard ? matchedStandard.level : 'poor'
}

/** العلامة المقابلة للزمن، أو null إذا كان الاختبار بلا جدول علامات. */
export function getPerformanceScore(event: SportEvent, seconds: number): number | null {
  if (event.scores.length === 0 || !Number.isFinite(seconds)) return null

  const time = roundToTenth(seconds)
  const matchedEntry = event.scores.find((entry) => time <= (entry.time ?? Number.POSITIVE_INFINITY))
  if (matchedEntry) return matchedEntry.score

  // أبطأ من آخر سطر في الجدول.
  return 0
}
