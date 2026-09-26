import type { ScoreEntry } from '@/lib/types'

/**
 * جدول علامات اختبار 4X100 متر ( الفئة العمرية الأولى - ف١ ): كل سطر يربط زمناً بالثواني بالعلامة المقابلة له،
 * وأي زمن أسرع من أول سطر يأخذ أعلى علامة، وأي زمن أبطأ من آخر سطر يأخذ صفراً.
 * الترتيب من الأسرع إلى الأبطأ.
 */
export const SPRINT_4X100M_CATEGORY_ONE_SCORES: ScoreEntry[] = [
  // من 90 إلى 100
  { time: 60, score: 100 },  // 1,00 -> 60s
  { time: 61, score: 99 },   // 1,01 -> 61s
  { time: 62, score: 98 },   // 1,02 -> 62s
  { time: 63, score: 97 },   // 1,03 -> 63s
  { time: 64, score: 96 },   // 1,04 -> 64s
  { time: 65, score: 95 },   // 1,05 -> 65s
  { time: 66, score: 94 },   // 1,06 -> 66s
  { time: 67, score: 93 },   // 1,07 -> 67s
  { time: 68, score: 92 },   // 1,08 -> 68s
  { time: 69, score: 91 },   // 1,09 -> 69s
  { time: 70, score: 90 },   // 1,10 -> 70s

  // من 80 إلى 89
  { time: 71, score: 87 },   // 1,11 -> 71s
  { time: 72, score: 84 },   // 1,12 -> 72s
  { time: 73, score: 80 },   // 1,13 -> 80s

  // من 70 إلى 79
  { time: 74, score: 77 },   // 1,14 -> 74s
  { time: 75, score: 74 },   // 1,15 -> 75s
  { time: 76, score: 70 },   // 1,16 -> 76s

  // من 60 إلى 69
  { time: 77, score: 68 },   // 1,17 -> 77s
  { time: 78, score: 66 },   // 1,18 -> 78s
  { time: 79, score: 63 },   // 1,19 -> 79s
  { time: 80, score: 60 },   // 1,20 -> 80s

  // من 0 إلى 59
  { time: 81, score: 58 },   // 1,21 -> 81s
  { time: 82, score: 56 },   // 1,22 -> 82s
  { time: 83, score: 54 },   // 1,23 -> 83s
  { time: 84, score: 52 },   // 1,24 -> 84s
  { time: 85, score: 50 },   // 1,25 -> 85s
  { time: 86, score: 46 },   // 1,26 -> 86s
  { time: 87, score: 42 },   // 1,27 -> 87s
  { time: 88, score: 38 },   // 1,28 -> 88s
  { time: 89, score: 34 },   // 1,29 -> 89s
  { time: 90, score: 30 },   // 1,30 -> 90s
  { time: 91, score: 26 },   // 1,31 -> 91s
  { time: 92, score: 22 },   // 1,32 -> 92s
  { time: 93, score: 18 },   // 1,33 -> 93s
  { time: 94, score: 14 },   // 1,34 -> 94s
  { time: 95, score: 10 },   // 1,35 -> 95s
  { time: 96, score: 5 },    // 1,36 -> 96s
  { time: 97, score: 0 }     // 1,37 -> 97s
]
