import type { ScoreEntry } from '@/lib/types'

/**
 * جدول علامات لاختبار 100 متر (الفئة العمرية الثانية): كل سطر يربط زمناً بالثواني بالعلامة المقابلة له，
 * وأي زمن أسرع من أول سطر يأخذ أعلى علامة، وأي زمن أبطأ من آخر سطر يأخذ صفراً.
 * الترتيب من الأسرع إلى الأبطأ.
 */
export const RUN_100M_CATEGORY_TWO_SCORES: ScoreEntry[] = [
  // ممتاز (13.1 – 14.1)
  { time: 13.1, score: 100 },
  { time: 13.2, score: 99 },
  { time: 13.3, score: 98 },
  { time: 13.4, score: 97 },
  { time: 13.5, score: 96 },
  { time: 13.6, score: 95 },
  { time: 13.7, score: 94 },
  { time: 13.8, score: 93 },
  { time: 13.9, score: 92 },
  { time: 14.0, score: 91 },
  { time: 14.1, score: 90 },

  // جيد جداً (14.2 – 14.4)
  { time: 14.2, score: 87 },
  { time: 14.3, score: 84 },
  { time: 14.4, score: 80 },

  // جيد (14.5 – 14.6)
  { time: 14.5, score: 75 },
  { time: 14.6, score: 70 },

  // مقبول (14.7 – 15.6)
  { time: 14.7, score: 69 },
  { time: 14.8, score: 68 },
  { time: 14.9, score: 67 },
  { time: 15.0, score: 66 },
  { time: 15.1, score: 65 },
  { time: 15.2, score: 64 },
  { time: 15.3, score: 63 },
  { time: 15.4, score: 62 },
  { time: 15.5, score: 61 },
  { time: 15.6, score: 60 },

  // غير مقبول (15.7 – 16.8)
  { time: 15.7, score: 55 },
  { time: 15.8, score: 50 },
  { time: 15.9, score: 45 },
  { time: 16.0, score: 40 },
  { time: 16.1, score: 35 },
  { time: 16.2, score: 30 },
  { time: 16.3, score: 25 },
  { time: 16.4, score: 20 },
  { time: 16.5, score: 15 },
  { time: 16.6, score: 10 },
  { time: 16.7, score: 5 },
  { time: 16.8, score: 0 },
]
