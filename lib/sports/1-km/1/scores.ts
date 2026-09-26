import type { ScoreEntry } from '@/lib/types'

/**
 * جدول علامات اختبار 1 كيلومتر ( الفئة العمرية الأولى ): كل سطر يربط زمناً بالثواني بالعلامة المقابلة له،
 * وأي زمن أسرع من أول سطر يأخذ أعلى علامة، وأي زمن أبطأ من آخر سطر يأخذ صفراً.
 * الترتيب من الأسرع إلى الأبطأ.
 */
export const RUN_1KM_CATEGORY_ONE_SCORES: ScoreEntry[] = [
  // من 90 إلى 100
  { time: 170, score: 100 }, // 2,50
  { time: 172, score: 99 },  // 2,52
  { time: 174, score: 98 },  // 2,54
  { time: 176, score: 97 },  // 2,56
  { time: 178, score: 96 },  // 2,58
  { time: 180, score: 95 },  // 3,00
  { time: 182, score: 94 },  // 3,02
  { time: 184, score: 93 },  // 3,04
  { time: 186, score: 92 },  // 3,06
  { time: 188, score: 91 },  // 3,08
  { time: 190, score: 90 },  // 3,10

  // من 80 إلى 89
  { time: 191, score: 89 },  // 3,11
  { time: 192, score: 88 },  // 3,12
  { time: 193, score: 87 },  // 3,13
  { time: 194, score: 86 },  // 3,14
  { time: 195, score: 85 },  // 3,15
  { time: 196, score: 84 },  // 3,16
  { time: 197, score: 83 },  // 3,17
  { time: 198, score: 82 },  // 3,18
  { time: 199, score: 81 },  // 3,19
  { time: 200, score: 80 },  // 3,20

  // من 70 إلى 79
  { time: 201, score: 79 },  // 3,21
  { time: 202, score: 78 },  // 3,22
  { time: 203, score: 77 },  // 3,23
  { time: 204, score: 76 },  // 3,24
  { time: 205, score: 75 },  // 3,25
  { time: 207, score: 74 },  // 3,27
  { time: 209, score: 73 },  // 3,29
  { time: 211, score: 72 },  // 3,31
  { time: 213, score: 71 },  // 3,33
  { time: 215, score: 70 },  // 3,35

  // من 60 إلى 69
  { time: 217, score: 69 },  // 3,37
  { time: 225, score: 65 },  // 3,45
  { time: 227, score: 64 },  // 3,47
  { time: 229, score: 63 },  // 3,49
  { time: 231, score: 62 },  // 3,51
  { time: 233, score: 61 },  // 3,53
  { time: 235, score: 60 },  // 3,55

  // من 0 إلى 59
  { time: 236, score: 58 },  // 3,56
  { time: 237, score: 56 },  // 3,57
  { time: 238, score: 54 },  // 3,58
  { time: 239, score: 52 },  // 3,59
  { time: 240, score: 50 },  // 4,00
  { time: 241, score: 48 },  // 4,1
  { time: 242, score: 46 },  // 4,2
  { time: 243, score: 44 },  // 4,3
  { time: 244, score: 42 },  // 4,4
  { time: 245, score: 40 },  // 4,5
  { time: 246, score: 38 },  // 4,6
  { time: 247, score: 36 },  // 4,7
  { time: 248, score: 34 },  // 4,8
  { time: 249, score: 32 },  // 4,9
  { time: 250, score: 30 },  // 4,10
  { time: 251, score: 27 },  // 4,11
  { time: 252, score: 24 },  // 4,12
  { time: 253, score: 21 },  // 4,13
  { time: 254, score: 18 },  // 4,14
  { time: 255, score: 15 },  // 4,15
  { time: 256, score: 12 },  // 4,16
  { time: 257, score: 9 },   // 4,17
  { time: 258, score: 6 },   // 4,18
  { time: 259, score: 3 },   // 4,19
  { time: 260, score: 0 }    // 4,20
]
