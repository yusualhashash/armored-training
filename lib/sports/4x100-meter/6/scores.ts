import type { ScoreEntry } from '@/lib/types'

/**
 * جدول علامات اختبار 4X100 متر ( الفئة العمرية السادسة - ف٦ ): كل سطر يربط زمناً بالثواني بالعلامة المقابلة له،
 * وأي زمن أسرع من أول سطر يأخذ أعلى علامة، وأي زمن أبطأ من آخر سطر يأخذ صفراً.
 * الترتيب من الأسرع إلى الأبطأ.
 */
export const SPRINT_4X100M_CATEGORY_SIX_SCORES: ScoreEntry[] = [
  // من 90 إلى 100
  { time: 75, score: 100 },  // 1,15 -> 75s
  { time: 76, score: 99 },   // 1,16 -> 76s
  { time: 77, score: 98 },   // 1,17 -> 77s
  { time: 78, score: 97 },   // 1,18 -> 78s
  { time: 79, score: 96 },   // 1,19 -> 79s
  { time: 80, score: 95 },   // 1,20 -> 80s
  { time: 81, score: 94 },   // 1,21 -> 81s
  { time: 82, score: 93 },   // 1,22 -> 82s
  { time: 83, score: 92 },   // 1,23 -> 83s
  { time: 84, score: 91 },   // 1,24 -> 84s
  { time: 85, score: 90 },   // 1,25 -> 85s

  // من 80 إلى 89
  { time: 86, score: 88 },   // 1,26 -> 86s
  { time: 87, score: 86 },   // 1,27 -> 87s
  { time: 88, score: 84 },   // 1,28 -> 88s
  { time: 89, score: 82 },   // 1,29 -> 89s
  { time: 90, score: 80 },   // 1,30 -> 90s

  // من 70 إلى 79
  { time: 91, score: 78 },   // 1,31 -> 91s
  { time: 92, score: 76 },   // 1,32 -> 92s
  { time: 93, score: 74 },   // 1,33 -> 93s
  { time: 94, score: 72 },   // 1,34 -> 94s
  { time: 95, score: 70 },   // 1,35 -> 95s

  // من 60 إلى 69
  { time: 96, score: 69 },   // 1,36 -> 96s
  { time: 97, score: 68 },   // 1,37 -> 97s
  { time: 98, score: 67 },   // 1,38 -> 98s
  { time: 99, score: 66 },   // 1,39 -> 99s
  { time: 100, score: 65 },  // 1,40 -> 100s
  { time: 101, score: 64 },  // 1,41 -> 101s
  { time: 102, score: 63 },  // 1,42 -> 102s
  { time: 103, score: 62 },  // 1,43 -> 103s
  { time: 104, score: 61 },  // 1,44 -> 104s
  { time: 105, score: 60 },  // 1,45 -> 105s

  // من 0 إلى 59
  { time: 106, score: 58 },  // 1,46 -> 106s
  { time: 107, score: 56 },  // 1,47 -> 107s
  { time: 108, score: 54 },  // 1,48 -> 108s
  { time: 109, score: 52 },  // 1,49 -> 109s
  { time: 110, score: 50 },  // 1,50 -> 110s
  { time: 111, score: 48 },  // 1,51 -> 111s
  { time: 112, score: 46 },  // 1,52 -> 112s
  { time: 113, score: 44 },  // 1,53 -> 113s
  { time: 114, score: 42 },  // 1,54 -> 114s
  { time: 115, score: 40 },  // 1,55 -> 115s
  { time: 116, score: 38 },  // 1,56 -> 116s
  { time: 117, score: 36 },  // 1,57 -> 117s
  { time: 118, score: 34 },  // 1,58 -> 118s
  { time: 119, score: 32 },  // 1,59 -> 119s
  { time: 120, score: 30 },  // 2,00 -> 120s
  { time: 121, score: 27 },  // 2,01 -> 121s
  { time: 122, score: 24 },  // 2,02 -> 122s
  { time: 123, score: 21 },  // 2,03 -> 123s
  { time: 124, score: 18 },  // 2,04 -> 124s
  { time: 125, score: 15 },  // 2,05 -> 125s
  { time: 126, score: 12 },  // 2,06 -> 126s
  { time: 127, score: 9 },   // 2,07 -> 127s
  { time: 128, score: 6 },   // 2,08 -> 128s
  { time: 129, score: 3 },   // 2,09 -> 129s
  { time: 130, score: 0 }    // 2,10 -> 130s
]
