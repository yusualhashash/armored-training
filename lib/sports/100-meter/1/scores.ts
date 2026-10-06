import type { ScoreEntry } from '@/lib/types'

/**
 * جدول علامات اختبار 100 متر (الفئة العمرية الأولى): كل سطر يربط زمناً بالثواني بالعلامة المقابلة له，
 * وأي زمن أسرع من أول سطر يأخذ أعلى علامة، وأي زمن أبطأ من آخر سطر يأخذ صفراً.
 * الترتيب من الأسرع إلى الأبطأ.
 */
export const RUN_100M_CATEGORY_ONE_SCORES: ScoreEntry[] = [
  // ممتاز (13.0 – 14.0)
  { time: 13.0, score: 100 },
  { time: 13.1, score: 99 },
  { time: 13.2, score: 98 },
  { time: 13.3, score: 97 },
  { time: 13.4, score: 96 },
  { time: 13.5, score: 95 },
  { time: 13.6, score: 94 },
  { time: 13.7, score: 93 },
  { time: 13.8, score: 92 },
  { time: 13.9, score: 91 },
  { time: 14.0, score: 90 },

  // جيد جدا (14.1 – 14.2)
  { time: 14.1, score: 85 },
  { time: 14.2, score: 80 },

  // جيد (14.3 – 14.5)
  { time: 14.3, score: 77 },
  { time: 14.4, score: 74 },
  { time: 14.5, score: 70 },

  // مقبول (14.6 – 15.3)
  { time: 14.6, score: 69 },
  { time: 14.7, score: 68 },
  { time: 14.8, score: 67 },
  { time: 14.9, score: 66 },
  { time: 15.0, score: 65 },
  { time: 15.1, score: 64 },
  { time: 15.2, score: 62 },
  { time: 15.3, score: 60 },

  // غير مقبول (15.4 – 16.5)
  { time: 15.4, score: 55 },
  { time: 15.5, score: 50 },
  { time: 15.6, score: 45 },
  { time: 15.7, score: 40 },
  { time: 15.8, score: 35 },
  { time: 15.9, score: 30 },
  { time: 16.0, score: 25 },
  { time: 16.1, score: 20 },
  { time: 16.2, score: 15 },
  { time: 16.3, score: 10 },
  { time: 16.4, score: 5 },
  { time: 16.5, score: 0 },
]
