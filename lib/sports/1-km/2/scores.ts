import type { ScoreEntry } from '@/lib/types'

/**
 * جدول علامات اختبار 1 كيلومتر (الفئة  العمرية الثانية): كل سطر يربط زمناً بالثواني بالعلامة المقابلة له،
 * وأي زمن أسرع من أول سطر يأخذ أعلى علامة، وأي زمن أبطأ من آخر سطر يأخذ صفراً.
 * الترتيب من الأسرع إلى الأبطأ.
 */
export const RUN_1KM_CATEGORY_TWO_SCORES: ScoreEntry[] = [
  // ممتاز (180 – 200)
  { time: 180, score: 100 },
  { time: 182, score: 99 },
  { time: 184, score: 98 },
  { time: 186, score: 97 },
  { time: 188, score: 96 },
  { time: 190, score: 95 },
  { time: 192, score: 94 },
  { time: 194, score: 93 },
  { time: 196, score: 92 },
  { time: 198, score: 91 },
  { time: 200, score: 90 },

  // جيد جداً (201 – 210)
  { time: 201, score: 89 },
  { time: 202, score: 88 },
  { time: 203, score: 87 },
  { time: 204, score: 86 },
  { time: 205, score: 85 },
  { time: 206, score: 84 },
  { time: 207, score: 83 },
  { time: 208, score: 82 },
  { time: 209, score: 81 },
  { time: 210, score: 80 },

  // جيد (211 – 225)
  { time: 211, score: 79 },
  { time: 212, score: 78 },
  { time: 213, score: 77 },
  { time: 214, score: 76 },
  { time: 215, score: 75 },
  { time: 217, score: 74 },
  { time: 219, score: 73 },
  { time: 221, score: 72 },
  { time: 223, score: 71 },
  { time: 225, score: 70 },

  // مقبول (227 – 235)
  { time: 227, score: 69 },
  { time: 229, score: 68 },
  { time: 231, score: 67 },
  { time: 233, score: 66 },
  { time: 235, score: 65 },

  // غير مقبول (237 – 270)
  { time: 237, score: 64 },
  { time: 239, score: 63 },
  { time: 241, score: 62 },
  { time: 243, score: 61 },
  { time: 245, score: 60 },
  { time: 246, score: 58 },
  { time: 247, score: 56 },
  { time: 248, score: 54 },
  { time: 249, score: 52 },
  { time: 250, score: 50 },
  { time: 251, score: 48 },
  { time: 252, score: 46 },
  { time: 253, score: 44 },
  { time: 254, score: 42 },
  { time: 255, score: 40 },
  { time: 256, score: 38 },
  { time: 257, score: 36 },
  { time: 258, score: 34 },
  { time: 259, score: 32 },
  { time: 260, score: 30 },
  { time: 261, score: 27 },
  { time: 262, score: 24 },
  { time: 263, score: 21 },
  { time: 264, score: 18 },
  { time: 265, score: 15 },
  { time: 266, score: 12 },
  { time: 267, score: 9 },
  { time: 268, score: 6 },
  { time: 269, score: 3 },
  { time: 270, score: 0 },
]
