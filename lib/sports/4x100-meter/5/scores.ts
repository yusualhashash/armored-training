import type { ScoreEntry } from '@/lib/types'

/**
 * جدول علامات اختبار 4X100 متر ( الفئة العمرية الخامسة - ف٥ ): كل سطر يربط زمناً بالثواني بالعلامة المقابلة له،
 * وأي زمن أسرع من أول سطر يأخذ أعلى علامة، وأي زمن أبطأ من آخر سطر يأخذ صفراً.
 * الترتيب من الأسرع إلى الأبطأ.
 */
export const SPRINT_4X100M_CATEGORY_FIVE_SCORES: ScoreEntry[] = [
  // من 90 إلى 100
  { time: 70, score: 100 },  // 1,10 -> 70s
  { time: 71, score: 99 },   // 1,11 -> 71s
  { time: 72, score: 98 },   // 1,12 -> 72s
  { time: 73, score: 97 },   // 1,13 -> 73s
  { time: 74, score: 96 },   // 1,14 -> 74s
  { time: 75, score: 95 },   // 1,15 -> 75s
  { time: 76, score: 94 },   // 1,16 -> 76s
  { time: 77, score: 93 },   // 1,17 -> 77s
  { time: 78, score: 92 },   // 1,18 -> 78s
  { time: 79, score: 91 },   // 1,19 -> 79s
  { time: 80, score: 90 },   // 1,20 -> 80s

  // من 80 إلى 89
  { time: 81, score: 88 },   // 1,21 -> 81s
  { time: 82, score: 86 },   // 1,22 -> 82s
  { time: 83, score: 84 },   // 1,23 -> 83s
  { time: 84, score: 82 },   // 1,24 -> 84s
  { time: 85, score: 80 },   // 1,25 -> 85s

  // من 70 إلى 79
  { time: 86, score: 78 },   // 1,26 -> 86s
  { time: 87, score: 76 },   // 1,27 -> 87s
  { time: 88, score: 74 },   // 1,28 -> 88s
  { time: 89, score: 72 },   // 1,29 -> 89s
  { time: 90, score: 70 },   // 1,30 -> 90s

  // من 60 إلى 69
  { time: 91, score: 68 },   // 1,31 -> 91s
  { time: 92, score: 66 },   // 1,32 -> 92s
  { time: 93, score: 64 },   // 1,33 -> 93s
  { time: 94, score: 62 },   // 1,34 -> 94s
  { time: 95, score: 60 },   // 1,35 -> 95s

  // من 0 إلى 59
  { time: 96, score: 58 },   // 1,36 -> 96s
  { time: 97, score: 56 },   // 1,37 -> 97s
  { time: 98, score: 54 },   // 1,38 -> 98s
  { time: 99, score: 52 },   // 1,39 -> 99s
  { time: 100, score: 50 },  // 1,40 -> 100s
  { time: 101, score: 46 },  // 1,41 -> 101s
  { time: 102, score: 42 },  // 1,42 -> 102s
  { time: 103, score: 38 },  // 1,43 -> 103s
  { time: 104, score: 34 },  // 1,44 -> 104s
  { time: 105, score: 30 },  // 1,45 -> 105s
  { time: 106, score: 26 },  // 1,46 -> 106s
  { time: 107, score: 22 },  // 1,47 -> 107s
  { time: 108, score: 18 },  // 1,48 -> 108s
  { time: 109, score: 14 },  // 1,49 -> 109s
  { time: 110, score: 10 },  // 1,50 -> 110s
  { time: 111, score: 5 },   // 1,51 -> 111s
  { time: 112, score: 0 }    // 1,52 -> 112s
]
