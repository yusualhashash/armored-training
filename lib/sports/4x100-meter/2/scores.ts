import type { ScoreEntry } from '@/lib/types'

/**
 * جدول علامات اختبار 4X100 متر ( الفئة العمرية الثانية - ف٢ ): كل سطر يربط زمناً بالثواني بالعلامة المقابلة له،
 * وأي زمن أسرع من أول سطر يأخذ أعلى علامة، وأي زمن أبطأ من آخر سطر يأخذ صفراً.
 * الترتيب من الأسرع إلى الأبطأ.
 */
export const SPRINT_4X100M_CATEGORY_TWO_SCORES: ScoreEntry[] = [
  // من 90 إلى 100
  { time: 62, score: 100 },  // 1,02 -> 62s
  { time: 63, score: 99 },   // 1,03 -> 63s
  { time: 64, score: 98 },   // 1,04 -> 64s
  { time: 65, score: 97 },   // 1,05 -> 65s
  { time: 66, score: 96 },   // 1,06 -> 66s
  { time: 67, score: 95 },   // 1,07 -> 67s
  { time: 68, score: 94 },   // 1,08 -> 68s
  { time: 69, score: 93 },   // 1,09 -> 69s
  { time: 70, score: 92 },   // 1,10 -> 70s
  { time: 71, score: 91 },   // 1,11 -> 71s
  { time: 72, score: 90 },   // 1,12 -> 72s

  // من 80 إلى 89
  { time: 73, score: 87 },   // 1,13 -> 73s
  { time: 74, score: 84 },   // 1,14 -> 74s
  { time: 75, score: 80 },   // 1,15 -> 75s

  // من 70 إلى 79
  { time: 76, score: 77 },   // 1,16 -> 76s
  { time: 77, score: 74 },   // 1,17 -> 77s
  { time: 78, score: 70 },   // 1,18 -> 78s

  // من 60 إلى 69
  { time: 79, score: 68 },   // 1,19 -> 79s
  { time: 80, score: 66 },   // 1,20 -> 80s
  { time: 81, score: 63 },   // 1,21 -> 81s
  { time: 82, score: 60 },   // 1,22 -> 82s

  // من 0 إلى 59
  { time: 83, score: 58 },   // 1,23 -> 83s
  { time: 84, score: 56 },   // 1,24 -> 84s
  { time: 85, score: 54 },   // 1,25 -> 85s
  { time: 86, score: 52 },   // 1,26 -> 86s
  { time: 87, score: 50 },   // 1,27 -> 87s
  { time: 88, score: 46 },   // 1,28 -> 88s
  { time: 89, score: 42 },   // 1,29 -> 89s
  { time: 90, score: 38 },   // 1,30 -> 90s
  { time: 91, score: 34 },   // 1,31 -> 91s
  { time: 92, score: 30 },   // 1,32 -> 92s
  { time: 93, score: 26 },   // 1,33 -> 93s
  { time: 94, score: 22 },   // 1,34 -> 94s
  { time: 95, score: 18 },   // 1,35 -> 95s
  { time: 96, score: 14 },   // 1,36 -> 96s
  { time: 97, score: 10 },   // 1,37 -> 97s
  { time: 98, score: 5 },    // 1,38 -> 98s
  { time: 99, score: 0 }     // 1,39 -> 99s
]
