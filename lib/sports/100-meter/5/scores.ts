import type { ScoreEntry } from '@/lib/types'

/**
 * جدول علامات لاختبار 100 متر (الفئة العمرية الخامسة): كل سطر يربط زمناً بالثواني بالعلامة المقابلة له،
 * وأي زمن أسرع من أول سطر يأخذ أعلى علامة، وأي زمن أبطأ من آخر سطر يأخذ صفراً.
 * الترتيب من الأسرع إلى الأبطأ.
 */
export const RUN_100M_CATEGORY_FIVE_SCORES: ScoreEntry[] = [
  // ممتاز (14.6 – 15.6)
  { time: 14.6, score: 100 },
  { time: 14.7, score: 99 },
  { time: 14.8, score: 98 },
  { time: 14.9, score: 97 },
  { time: 15.0, score: 96 },
  { time: 15.1, score: 95 },
  { time: 15.2, score: 94 },
  { time: 15.3, score: 93 },
  { time: 15.4, score: 92 },
  { time: 15.5, score: 91 },
  { time: 15.6, score: 90 },

  // جيد جداً (15.7 – 16.0)
  { time: 15.7, score: 88 },
  { time: 15.8, score: 86 },
  { time: 15.9, score: 83 },
  { time: 16.0, score: 80 },

  // جيد (16.1 – 16.4)
  { time: 16.1, score: 78 },
  { time: 16.2, score: 76 },
  { time: 16.3, score: 73 },
  { time: 16.4, score: 70 },

  // مقبول (16.5 – 17.2)
  { time: 16.5, score: 68 },
  { time: 16.6, score: 66 },
  { time: 16.7, score: 65 },
  { time: 16.8, score: 64 },
  { time: 16.9, score: 63 },
  { time: 17.0, score: 62 },
  { time: 17.1, score: 61 },
  { time: 17.2, score: 60 },

  // غير مقبول (17.3 – 18.3)
  { time: 17.3, score: 55 },
  { time: 17.4, score: 50 },
  { time: 17.5, score: 45 },
  { time: 17.6, score: 40 },
  { time: 17.7, score: 35 },
  { time: 17.8, score: 30 },
  { time: 17.9, score: 25 },
  { time: 18.0, score: 15 },
  { time: 18.1, score: 10 },
  { time: 18.2, score: 5 },
  { time: 18.3, score: 0 },
]
