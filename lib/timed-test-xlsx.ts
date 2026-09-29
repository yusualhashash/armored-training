import { getPerformanceLevelLabel, resolvePerformanceLevel } from '@/lib/performance'
import { buildStandardRanges, formatStandardRange } from '@/lib/standard-ranges'
import {
  fileStamp,
  formatClock,
  formatDate,
  formatDuration,
  type TimedHistoryEntry,
} from '@/lib/test-history'
import type { AgeCategory, SportEvent } from '@/lib/types'
import { buildXlsx, type Cell } from '@/lib/xlsx-writer'

/** ملف Excel جاهز للتنزيل أو المشاركة. */
export interface GeneratedFile {
  blob: Blob
  name: string
}

const RESULTS_SHEET = 'النتائج'
const HISTORY_SHEET = 'السجل'
const SECOND_COLUMN = 'الزمن (ثانية)'
const TRAINEE_INFO_HEADERS = ['اسم المتدرب', 'الرقم العسكري', 'مكان العمل']
const TRAINEE_INFO_EMPTY: Cell[] = ['', '', '']

const HISTORY_HEADERS = ['التاريخ', 'الوقت', 'الاختبار', 'الفئة العمرية', 'مدة الاختبار', 'رقم المتدرب', SECOND_COLUMN, 'النتيجة', 'التقدير']

/** يحوّل الزمن إلى رقم مضبوط على عُشر الثانية لخانة Excel رقمية. */
const toTenthNumber = (seconds: number) => Math.round(seconds * 10) / 10

const headerRow = (labels: string[]): Cell[] => labels.map((label) => ({ v: label, s: 'header' as const }))

const historyRow = (entry: TimedHistoryEntry, event: SportEvent, resultIndex: number, seconds: number, score: number): Cell[] => [
  formatDate(entry.savedAt),
  formatClock(entry.savedAt),
  entry.eventName,
  entry.categoryName,
  formatDuration(entry.durationMs),
  resultIndex + 1,
  toTenthNumber(seconds),
  score,
  getPerformanceLevelLabel(resolvePerformanceLevel(event, seconds)),
]

const historyRows = (event: SportEvent, entries: TimedHistoryEntry[]): Cell[][] =>
  entries.flatMap((entry) => entry.results.map((result, index) => historyRow(entry, event, index, result.seconds, result.score)))

/** ملف جلسة واحدة: نتائجها ومعايير الأداء والحالة الراهنة للسجل. */
export function buildTimedEntryFile(event: SportEvent, category: AgeCategory, entry: TimedHistoryEntry, history: TimedHistoryEntry[]): GeneratedFile {
  const ranges = buildStandardRanges(event.standards)

  const blob = buildXlsx([
    {
      name: RESULTS_SHEET,
      widths: [14, 22, 16, 18, 16, 12, 16],
      rows: [
        [{ v: `اختبار ${event.name}`, s: 'title' }],
        [],
        [{ v: 'الفئة العمرية', s: 'label' }, category.name],
        [{ v: 'مواليد', s: 'label' }, category.birthYears],
        [{ v: 'التاريخ', s: 'label' }, formatDate(entry.savedAt)],
        [{ v: 'الوقت', s: 'label' }, formatClock(entry.savedAt)],
        [{ v: 'مدة الاختبار', s: 'label' }, formatDuration(entry.durationMs)],
        [{ v: 'عدد المتدربين', s: 'label' }, entry.results.length],
        [],
        headerRow(['رقم المتدرب', ...TRAINEE_INFO_HEADERS, SECOND_COLUMN, 'النتيجة', 'التقدير']),
        ...entry.results.map((result, index): Cell[] => [
          index + 1,
          ...TRAINEE_INFO_EMPTY,
          toTenthNumber(result.seconds),
          result.score,
          getPerformanceLevelLabel(resolvePerformanceLevel(event, result.seconds)),
        ]),
        [],
        [{ v: 'معايير الأداء', s: 'title' }],
        headerRow(['النطاق الزمني', 'التقدير']),
        ...ranges.map((range): Cell[] => [formatStandardRange(range), getPerformanceLevelLabel(range.level)]),
      ],
    },
    {
      name: HISTORY_SHEET,
      widths: [14, 10, 22, 16, 14, 12, 14, 10, 14],
      rows: [headerRow(HISTORY_HEADERS), ...historyRows(event, history)],
    },
  ])

  return { blob, name: `نتائج-${event.name}-${category.name}-${fileStamp(entry.savedAt)}.xlsx` }
}

/** ملف السجل الكامل لاختبار واحد وفئة عمرية واحدة. */
export function buildTimedHistoryFile(event: SportEvent, category: AgeCategory, history: TimedHistoryEntry[]): GeneratedFile {
  const blob = buildXlsx([
    {
      name: HISTORY_SHEET,
      widths: [14, 10, 22, 16, 14, 12, 14, 10, 14],
      rows: [headerRow(HISTORY_HEADERS), ...historyRows(event, history)],
    },
  ])

  return { blob, name: `سجل-${event.name}-${category.name}.xlsx` }
}
