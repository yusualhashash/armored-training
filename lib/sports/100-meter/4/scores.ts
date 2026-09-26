import type { ScoreEntry } from '@/lib/types'

/**
 * جدول علامات لاختبار 100 متر (الفئة العمرية الرابعة): كل سطر يربط زمناً بالثواني بالعلامة المقابلة له，
 * وأي زمن أسرع من أول سطر يأخذ أعلى علامة، وأي زمن أبطأ من آخر سطر يأخذ صفراً.
 * الترتيب من الأسرع إلى الأبطأ.
 */
export const RUN_100M_CATEGORY_FOUR_SCORES: ScoreEntry[] = [
  // ممتاز (14.0 – 15.0)
  { time: 14.0, score: 100 },
  { time: 14.1, score: 99 },
  { time: 14.2, score: 98 },
  { time: 14.3, score: 97 },
  { time: 14.4, score: 96 },
  { time: 14.5, score: 95 },
  { time: 14.6, score: 94 },
  { time: 14.7, score: 93 },
  { time: 14.8, score: 92 },
  { time: 14.9, score: 91 },
  { time: 15.0, score: 90 },

  // جيد جداً (15.1 – 15.4)
  { time: 15.1, score: 88 },
  { time: 15.2, score: 86 },
  { time: 15.3, score: 83 },
  { time: 15.4, score: 80 },

  // جيد (15.5 – 15.8)
  { time: 15.5, score: 78 },
  { time: 15.6, score: 76 },
  { time: 15.7, score: 73 },
  { time: 15.8, score: 70 },

  // مقبول (15.9 – 16.6)
  { time: 15.9, score: 69 },
  { time: 16.0, score: 68 },
  { time: 16.1, score: 67 },
  { time: 16.2, score: 66 },
  { time: 16.3, score: 65 },
  { time: 16.4, score: 64 },
  { time: 16.5, score: 62 },
  { time: 16.6, score: 60 },

  // غير مقبول (16.7 – 17.7)
  { time: 16.7, score: 55 },
  { time: 16.8, score: 50 },
  { time: 16.9, score: 45 },
  { time: 17.0, score: 40 },
  { time: 17.1, score: 35 },
  { time: 17.2, score: 30 },
  { time: 17.3, score: 25 },
  { time: 17.4, score: 20 },
  { time: 17.5, score: 15 },
  { time: 17.6, score: 10 },
  { time: 17.7, score: 0 },
]
