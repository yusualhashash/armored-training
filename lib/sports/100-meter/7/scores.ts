import type { ScoreEntry } from '@/lib/types'

/**
 * جدول علامات لاختبار 100 متر (الفئة العمرية السابعة): كل سطر يربط زمناً بالثواني بالعلامة المقابلة له，
 * وأي زمن أسرع من أول سطر يأخذ أعلى علامة، وأي زمن أبطأ من آخر سطر يأخذ صفراً.
 * الترتيب من الأسرع إلى الأبطأ.
 */
export const RUN_100M_CATEGORY_SEVEN_SCORES: ScoreEntry[] = [
  // ممتاز (15.5 – 16.5)
  { time: 15.5, score: 100 },
  { time: 15.6, score: 99 },
  { time: 15.7, score: 98 },
  { time: 15.8, score: 97 },
  { time: 15.9, score: 96 },
  { time: 16.0, score: 95 },
  { time: 16.1, score: 94 },
  { time: 16.2, score: 93 },
  { time: 16.3, score: 92 },
  { time: 16.4, score: 91 },
  { time: 16.5, score: 90 },

  // جيد جداً (16.6 – 17.0)
  { time: 16.6, score: 88 },
  { time: 16.7, score: 86 },
  { time: 16.8, score: 84 },
  { time: 16.9, score: 82 },
  { time: 17.0, score: 80 },

  // جيد (17.1 – 17.5)
  { time: 17.1, score: 78 },
  { time: 17.2, score: 76 },
  { time: 17.3, score: 74 },
  { time: 17.4, score: 72 },
  { time: 17.5, score: 70 },

  // مقبول (17.6 – 18.5)
  { time: 17.6, score: 69 },
  { time: 17.7, score: 68 },
  { time: 17.8, score: 67 },
  { time: 17.9, score: 66 },
  { time: 18.0, score: 65 },
  { time: 18.1, score: 64 },
  { time: 18.2, score: 63 },
  { time: 18.3, score: 62 },
  { time: 18.4, score: 61 },
  { time: 18.5, score: 60 },

  // غير مقبول (18.6 – 19.6)
  { time: 18.6, score: 55 },
  { time: 18.7, score: 50 },
  { time: 18.8, score: 45 },
  { time: 18.9, score: 40 },
  { time: 19.0, score: 35 },
  { time: 19.1, score: 30 },
  { time: 19.2, score: 25 },
  { time: 19.3, score: 20 },
  { time: 19.4, score: 15 },
  { time: 19.5, score: 10 },
  { time: 19.6, score: 0 },
]
