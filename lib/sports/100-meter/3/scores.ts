import type { ScoreEntry } from '@/lib/types'

/**
 * جدول علامات لاختبار 100 متر (الفئة العمرية الثالثة): كل سطر يربط زمناً بالثواني بالعلامة المقابلة له，
 * وأي زمن أسرع من أول سطر يأخذ أعلى علامة، وأي زمن أبطأ من آخر سطر يأخذ صفراً.
 * الترتيب من الأسرع إلى الأبطأ.
 */
export const RUN_100M_CATEGORY_THREE_SCORES: ScoreEntry[] = [
  // ممتاز (13.2 – 14.2)
  { time: 13.2, score: 100 },
  { time: 13.3, score: 99 },
  { time: 13.4, score: 98 },
  { time: 13.5, score: 97 },
  { time: 13.6, score: 96 },
  { time: 13.7, score: 95 },
  { time: 13.8, score: 94 },
  { time: 13.9, score: 93 },
  { time: 14.0, score: 92 },
  { time: 14.1, score: 91 },
  { time: 14.2, score: 90 },

  // جيد جداً (14.3 – 14.6)
  { time: 14.3, score: 88 },
  { time: 14.4, score: 86 },
  { time: 14.5, score: 83 },
  { time: 14.6, score: 80 },

  // جيد (14.7 – 15.0)
  { time: 14.7, score: 78 },
  { time: 14.8, score: 76 },
  { time: 14.9, score: 73 },
  { time: 15.0, score: 70 },

  // مقبول (15.1 – 16.0)
  { time: 15.1, score: 69 },
  { time: 15.2, score: 68 },
  { time: 15.3, score: 67 },
  { time: 15.4, score: 66 },
  { time: 15.5, score: 65 },
  { time: 15.6, score: 64 },
  { time: 15.7, score: 63 },
  { time: 15.8, score: 62 },
  { time: 15.9, score: 61 },
  { time: 16.0, score: 60 },

  // غير مقبول (16.1 – 17.5)
  { time: 16.1, score: 58 },
  { time: 16.2, score: 56 },
  { time: 16.3, score: 54 },
  { time: 16.4, score: 52 },
  { time: 16.5, score: 50 },
  { time: 16.6, score: 45 },
  { time: 16.7, score: 40 },
  { time: 16.8, score: 35 },
  { time: 16.9, score: 30 },
  { time: 17.0, score: 25 },
  { time: 17.1, score: 20 },
  { time: 17.2, score: 15 },
  { time: 17.3, score: 10 },
  { time: 17.4, score: 5 },
  { time: 17.5, score: 0 },
]
