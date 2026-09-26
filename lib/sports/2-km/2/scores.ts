import type { ScoreEntry } from '@/lib/types'

/**
 * جدول علامات اختبار 2 كيلومتر ( الفئة العمرية الثانية - ف٢ ): كل سطر يربط زمناً بالثواني بالعلامة المقابلة له،
 * وأي زمن أسرع من أول سطر يأخذ أعلى علامة، وأي زمن أبطأ من آخر سطر يأخذ صفراً.
 * الترتيب من الأسرع إلى الأبطأ.
 */
export const RUN_2KM_CATEGORY_TWO_SCORES: ScoreEntry[] = [
  // من 90 إلى 100
  { time: 400, score: 100 }, // 6,40 -> 400s
  { time: 410, score: 99 },  // 6,50 -> 410s
  { time: 420, score: 98 },  // 7,00 -> 420s
  { time: 425, score: 97 },  // 7,05 -> 425s
  { time: 430, score: 96 },  // 7,10 -> 430s
  { time: 440, score: 94 },  // 7,20 -> 440s
  { time: 450, score: 92 },  // 7,30 -> 450s
  { time: 460, score: 90 },  // 7,40 -> 460s

  // من 80 إلى 89
  { time: 461, score: 89 },  // 7,41 -> 461s
  { time: 462, score: 88 },  // 7,42 -> 462s
  { time: 463, score: 87 },  // 7,43 -> 463s
  { time: 464, score: 86 },  // 7,44 -> 464s
  { time: 465, score: 85 },  // 7,45 -> 465s
  { time: 467, score: 84 },  // 7,47 -> 467s
  { time: 469, score: 83 },  // 7,49 -> 469s
  { time: 471, score: 82 },  // 7,51 -> 471s
  { time: 473, score: 81 },  // 7,53 -> 473s
  { time: 475, score: 80 },  // 7,55 -> 475s

  // من 70 إلى 79
  { time: 476, score: 79 },  // 7,56 -> 476s
  { time: 477, score: 78 },  // 7,57 -> 477s
  { time: 478, score: 79 },  // 7,58 -> 478s
  { time: 479, score: 76 },  // 7,59 -> 479s
  { time: 480, score: 75 },  // 8,00 -> 480s
  { time: 482, score: 74 },  // 8,02 -> 482s
  { time: 484, score: 73 },  // 8,04 -> 484s
  { time: 486, score: 72 },  // 8,06 -> 486s
  { time: 488, score: 71 },  // 8,08 -> 488s
  { time: 490, score: 70 },  // 8,10 -> 490s

  // من 60 إلى 69
  { time: 493, score: 69 },  // 8,13 -> 493s
  { time: 496, score: 68 },  // 8,16 -> 496s
  { time: 499, score: 67 },  // 8,19 -> 499s
  { time: 502, score: 66 },  // 8,22 -> 502s
  { time: 505, score: 65 },  // 8,25 -> 505s
  { time: 508, score: 64 },  // 8,28 -> 508s
  { time: 511, score: 63 },  // 8,31 -> 511s
  { time: 514, score: 62 },  // 8,34 -> 514s
  { time: 517, score: 61 },  // 8,37 -> 517s
  { time: 520, score: 60 },  // 8,40 -> 520s

  // من 0 إلى 59
  { time: 521, score: 59 },  // 8,41 -> 521s
  { time: 522, score: 58 },  // 8,42 -> 522s
  { time: 523, score: 57 },  // 8,43 -> 523s
  { time: 524, score: 56 },  // 8,44 -> 524s
  { time: 525, score: 55 },  // 8,45 -> 525s
  { time: 526, score: 54 },  // 8,46 -> 526s
  { time: 527, score: 53 },  // 8,47 -> 527s
  { time: 528, score: 52 },  // 8,48 -> 528s
  { time: 529, score: 51 },  // 8,49 -> 529s
  { time: 530, score: 50 },  // 8,50 -> 530s
  { time: 531, score: 48 },  // 8,51 -> 531s
  { time: 532, score: 46 },  // 8,52 -> 532s
  { time: 533, score: 44 },  // 8,53 -> 533s
  { time: 534, score: 42 },  // 8,54 -> 534s
  { time: 535, score: 40 },  // 8,55 -> 535s
  { time: 536, score: 38 },  // 8,56 -> 536s
  { time: 537, score: 36 },  // 8,57 -> 537s
  { time: 538, score: 34 },  // 8,58 -> 538s
  { time: 539, score: 32 },  // 8,59 -> 539s
  { time: 540, score: 30 },  // 9,00 -> 540s
  { time: 541, score: 28 },  // 9,01 -> 541s
  { time: 542, score: 26 },  // 9,02 -> 542s
  { time: 543, score: 24 },  // 9,03 -> 543s
  { time: 544, score: 22 },  // 9,04 -> 544s
  { time: 545, score: 20 },  // 9,05 -> 545s
  { time: 546, score: 16 },  // 9,06 -> 546s
  { time: 547, score: 12 },  // 9,07 -> 547s
  { time: 548, score: 8 },   // 9,08 -> 548s
  { time: 549, score: 4 },   // 9,09 -> 549s
  { time: 550, score: 0 }    // 9,10 -> 550s
]
