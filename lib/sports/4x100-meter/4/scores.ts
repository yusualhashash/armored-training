import type { ScoreEntry } from '@/lib/types'

/**
 * جدول علامات اختبار 4X100 متر ( الفئة العمرية الرابعة - ف٤ ): كل سطر يربط زمناً بالثواني بالعلامة المقابلة له،
 * وأي زمن أسرع من أول سطر يأخذ أعلى علامة، وأي زمن أبطأ من آخر سطر يأخذ صفراً.
 * الترتيب من الأسرع إلى الأبطأ.
 */
export const SPRINT_4X100M_CATEGORY_FOUR_SCORES: ScoreEntry[] = [
  // من 90 إلى 100
  { time: 68, score: 100 },  // 1,08 -> 68s
  { time: 69, score: 99 },   // 1,09 -> 69s
  { time: 70, score: 98 },   // 1,10 -> 70s
  { time: 71, score: 97 },   // 1,11 -> 71s
  { time: 72, score: 96 },   // 1,12 -> 72s
  { time: 73, score: 95 },   // 1,13 -> 73s
  { time: 74, score: 94 },   // 1,14 -> 74s
  { time: 75, score: 93 },   // 1,15 -> 75s
  { time: 76, score: 92 },   // 1,16 -> 76s
  { time: 77, score: 91 },   // 1,17 -> 77s
  { time: 78, score: 90 },   // 1,18 -> 78s

  // من 80 إلى 89
  { time: 79, score: 88 },   // 1,19 -> 79s
  { time: 80, score: 86 },   // 1,20 -> 80s
  { time: 81, score: 83 },   // 1,21 -> 81s
  { time: 82, score: 80 },   // 1,22 -> 82s

  // من 70 إلى 79
  { time: 83, score: 78 },   // 1,23 -> 83s
  { time: 84, score: 76 },   // 1,24 -> 84s
  { time: 85, score: 73 },   // 1,25 -> 85s
  { time: 86, score: 70 },   // 1,26 -> 86s

  // من 60 إلى 69
  { time: 87, score: 68 },   // 1,27 -> 87s
  { time: 88, score: 66 },   // 1,28 -> 88s
  { time: 89, score: 63 },   // 1,29 -> 89s
  { time: 90, score: 60 },   // 1,30 -> 90s

  // من 0 إلى 59
  { time: 91, score: 56 },   // 1,31 -> 91s
  { time: 92, score: 52 },   // 1,32 -> 92s
  { time: 93, score: 48 },   // 1,33 -> 93s
  { time: 94, score: 44 },   // 1,34 -> 94s
  { time: 95, score: 40 },   // 1,35 -> 95s
  { time: 96, score: 36 },   // 1,36 -> 96s
  { time: 97, score: 32 },   // 1,37 -> 97s
  { time: 98, score: 28 },   // 1,38 -> 98s
  { time: 99, score: 24 },   // 1,39 -> 99s
  { time: 100, score: 20 },  // 1,40 -> 100s
  { time: 101, score: 16 },  // 1,41 -> 101s
  { time: 102, score: 12 },  // 1,42 -> 102s
  { time: 103, score: 8 },   // 1,43 -> 103s
  { time: 104, score: 4 },   // 1,44 -> 104s
  { time: 105, score: 0 }    // 1,45 -> 105s
]
