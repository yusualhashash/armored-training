/**
 * أدوات سجل الاختبارات الزمنية: صيغ التاريخ والزمن والتخزين المحلي.
 * مُشتركة بين شاشات الاختبارات التي تحفظ نتائجها في المتصفح.
 */

export interface TimedHistoryResult {
  /** زمن المتدرب بالثواني. */
  seconds: number
  /** العلامة المقابلة للزمن. */
  score: number
}

export interface TimedHistoryEntry {
  id: string
  /** تاريخ ووقت الحفظ بصيغة ISO. */
  savedAt: string
  eventName: string
  categoryName: string
  /** زمن ساعة الإيقاف عند إنهاء الاختبار، أو null إذا لم تُستخدم. */
  durationMs: number | null
  results: TimedHistoryResult[]
}

export type TimedShareTarget = { kind: 'entry'; entry: TimedHistoryEntry } | { kind: 'all' }

const MILLIS_PER_CENTI = 10
const CENTIS_PER_SECOND = 100
const CENTIS_PER_MINUTE = 6000
const TENTHS_PER_SECOND = 10

/** يضيف صفراً بادئاً حتى يصبح الرقم من خانتين. */
export function pad2(value: number): string {
  return String(value).padStart(2, '0')
}

/** تاريخ مقروء بصيغة يوم/شهر/سنة. */
export function formatDate(iso: string): string {
  const date = new Date(iso)
  return `${pad2(date.getDate())}/${pad2(date.getMonth() + 1)}/${date.getFullYear()}`
}

/** وقت مقروء بصيغة ساعة:دقيقة. */
export function formatClock(iso: string): string {
  const date = new Date(iso)
  return `${pad2(date.getHours())}:${pad2(date.getMinutes())}`
}

/** مدة ساعة الإيقاف بصيغة دقائق:ثواني.أجزاء المئة، أو شرطة إذا لم تُستخدم. */
export function formatDuration(ms: number | null): string {
  if (ms === null) return '—'
  const totalCentis = Math.floor(ms / MILLIS_PER_CENTI)
  const minutes = Math.floor(totalCentis / CENTIS_PER_MINUTE)
  const seconds = Math.floor((totalCentis % CENTIS_PER_MINUTE) / CENTIS_PER_SECOND)
  const centis = totalCentis % CENTIS_PER_SECOND
  return `${pad2(minutes)}:${pad2(seconds)}.${pad2(centis)}`
}

/** الزمن بالثواني مضبوطاً على عُشر الثانية، مثل 13.5. */
export function formatSecondsValue(seconds: number): string {
  return (Math.round(seconds * TENTHS_PER_SECOND) / TENTHS_PER_SECOND).toFixed(1)
}

/** طابع زمني آمن لاستخدامه في أسماء الملفات. */
export function fileStamp(iso: string): string {
  return iso.slice(0, 16).replace('T', '_').replace(':', '-')
}

/** يقرأ قائمة محفوظة من التخزين المحلي، ويعيد قائمة فارغة عند الفشل. */
export function loadStoredList<T>(key: string): T[] {
  if (typeof window === 'undefined') return []
  try {
    const parsed = JSON.parse(window.localStorage.getItem(key) ?? '[]')
    return Array.isArray(parsed) ? (parsed as T[]) : []
  } catch {
    return []
  }
}

/** يحفظ القائمة في التخزين المحلي، ويتجاهل الفشل (امتلاء أو حظر). */
export function saveStoredList<T>(key: string, items: T[]): void {
  try {
    window.localStorage.setItem(key, JSON.stringify(items))
  } catch {
    // لا شيء: السجل لن يُحفظ
  }
}

/** يبني معرّفاً فريداً لجلسة محفوظة. */
export function createEntryId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`
}

/** يبقي أحدث `max` جلسة فقط لنفس الاختبار والفئة العمرية. */
export function trimEntries<T extends { eventName: string; categoryName: string }>(entries: T[], max: number): T[] {
  const kept: T[] = []
  const counters = new Map<string, number>()

  for (const entry of entries) {
    const scope = `${entry.eventName}::${entry.categoryName}`
    const seen = (counters.get(scope) ?? 0) + 1
    counters.set(scope, seen)
    if (seen <= max) kept.push(entry)
  }

  return kept
}
