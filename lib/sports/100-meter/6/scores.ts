import type { ScoreEntry } from '@/lib/types'

/**
 * جدول علامات لاختبار 100 متر (الفئة العمرية السادسة): كل سطر يربط زمناً بالثواني بالعلامة المقابلة له，
 * وأي زمن أسرع من أول سطر يأخذ أعلى علامة، وأي زمن أبطأ من آخر سطر يأخذ صفراً.
 * الترتيب من الأسرع إلى الأبطأ.
 */
export const RUN_100M_CATEGORY_SIX_SCORES: ScoreEntry[] = [
  // ممتاز (15.0 – 16.0)
  { time: 15.0, score: 100 },
  { time: 15.1, score: 99 },
  { time: 15.2, score: 98 },
  { time: 15.3, score: 97 },
  { time: 15.4, score: 96 },
  { time: 15.5, score: 95 },
  { time: 15.6, score: 94 },
  { time: 15.7, score: 93 },
  { time: 15.8, score: 92 },
  { time: 15.9, score: 91 },
  { time: 16.0, score: 90 },

  // جيد جداً (16.1 – 16.5)
  { time: 16.1, score: 88 },
  { time: 16.2, score: 86 },
  { time: 16.3, score: 84 },
  { time: 16.4, score: 82 },
  { time: 16.5, score: 80 },

  // جيد (16.6 – 17.0)
  { time: 16.6, score: 78 },
  { time: 16.7, score: 76 },
  { time: 16.8, score: 74 },
  { time: 16.9, score: 72 },
  { time: 17.0, score: 70 },

  // مقبول (17.1 – 18.0)
  { time: 17.1, score: 69 },
  { time: 17.2, score: 68 },
  { time: 17.3, score: 67 },
  { time: 17.4, score: 66 },
  { time: 17.5, score: 65 },
  { time: 17.6, score: 64 },
  { time: 17.7, score: 63 },
  { time: 17.8, score: 62 },
  { time: 17.9, score: 61 },
  { time: 18.0, score: 60 },

  // غير مقبول (18.1 – 19.3)
  { time: 18.1, score: 55 },
  { time: 18.2, score: 50 },
  { time: 18.3, score: 45 },
  { time: 18.4, score: 40 },
  { time: 18.6, score: 35 },
  { time: 18.8, score: 30 },
  { time: 18.9, score: 25 },
  { time: 19.0, score: 20 },
  { time: 19.1, score: 15 },
  { time: 19.2, score: 10 },
  { time: 19.3, score: 0 },
]
