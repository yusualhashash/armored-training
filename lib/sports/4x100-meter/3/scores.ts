import type { ScoreEntry } from '@/lib/types'

/**
 * جدول علامات اختبار 4X100 متر ( الفئة العمرية الثالثة - ف٣ ): كل سطر يربط زمناً بالثواني بالعلامة المقابلة له،
 * وأي زمن أسرع من أول سطر يأخذ أعلى علامة، وأي زمن أبطأ من آخر سطر يأخذ صفراً.
 * الترتيب من الأسرع إلى الأبطأ.
 */
export const SPRINT_4X100M_CATEGORY_THREE_SCORES: ScoreEntry[] = [
  // من 90 إلى 100
  { time: 65, score: 100 },  // 1,05 -> 65s
  { time: 66, score: 99 },   // 1,06 -> 66s
  { time: 67, score: 98 },   // 1,07 -> 67s
  { time: 68, score: 97 },   // 1,08 -> 68s
  { time: 69, score: 96 },   // 1,09 -> 69s
  { time: 70, score: 95 },   // 1,10 -> 70s
  { time: 71, score: 94 },   // 1,11 -> 71s
  { time: 72, score: 93 },   // 1,12 -> 72s
  { time: 73, score: 92 },   // 1,13 -> 73s
  { time: 74, score: 91 },   // 1,14 -> 74s
  { time: 75, score: 90 },   // 1,15 -> 75s

  // من 80 إلى 89
  { time: 76, score: 87 },   // 1,16 -> 76s
  { time: 77, score: 84 },   // 1,17 -> 77s
  { time: 78, score: 80 },   // 1,18 -> 78s

  // من 70 إلى 79
  { time: 79, score: 78 },   // 1,19 -> 79s
  { time: 80, score: 76 },   // 1,20 -> 80s
  { time: 81, score: 73 },   // 1,21 -> 81s
  { time: 82, score: 70 },   // 1,22 -> 82s

  // من 60 إلى 69
  { time: 83, score: 68 },   // 1,23 -> 83s
  { time: 84, score: 66 },   // 1,24 -> 84s
  { time: 85, score: 64 },   // 1,25 -> 85s
  { time: 86, score: 62 },   // 1,26 -> 86s
  { time: 87, score: 60 },   // 1,27 -> 87s

  // من 0 إلى 59
  { time: 88, score: 56 },   // 1,28 -> 88s
  { time: 89, score: 52 },   // 1,29 -> 89s
  { time: 90, score: 48 },   // 1,30 -> 90s
  { time: 91, score: 44 },   // 1,31 -> 91s
  { time: 92, score: 40 },   // 1,32 -> 92s
  { time: 93, score: 36 },   // 1,33 -> 93s
  { time: 94, score: 32 },   // 1,34 -> 94s
  { time: 95, score: 28 },   // 1,35 -> 95s
  { time: 96, score: 24 },   // 1,36 -> 96s
  { time: 97, score: 20 },   // 1,37 -> 97s
  { time: 98, score: 15 },   // 1,38 -> 98s
  { time: 99, score: 10 },   // 1,39 -> 99s
  { time: 100, score: 5 },   // 1,40 -> 100s
  { time: 101, score: 0 }    // 1,41 -> 101s
]
