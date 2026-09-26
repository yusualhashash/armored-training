import type { ScoreEntry } from '@/lib/types'

/**
 * جدول علامات اختبار 1 كيلومتر (الفئة الثالثة): تم تحويل القيم من دقائق وثوانٍ إلى ثوانٍ صافية.
 * كل سطر يربط زمناً بالثواني بالعلامة المقابلة له، وأي زمن أسرع من أول سطر يأخذ أعلى علامة،
 * وأي زمن أبطأ من آخر سطر يأخذ صفراً. الترتيب من الأسرع إلى الأبطأ.
 */
export const RUN_1KM_CATEGORY_THREE_SCORES: ScoreEntry[] = [
  // ممتاز (190 – 220 ثانية / 3:10 – 3:40)
  { time: 190, score: 100 }, // 3.10
  { time: 192, score: 99 },  // 3.12
  { time: 194, score: 98 },  // 3.14
  { time: 196, score: 97 },  // 3.16
  { time: 198, score: 96 },  // 3.18
  { time: 200, score: 95 },  // 3.20
  { time: 202, score: 94 },  // 3.22
  { time: 204, score: 93 },  // 3.24
  { time: 206, score: 92 },  // 3.26
  { time: 208, score: 91 },  // 3.28
  { time: 210, score: 90 },  // 3.30

  // جيد جداً (211 – 220 ثانية / 3:31 – 3:40)
  { time: 211, score: 89 },  // 3.31
  { time: 212, score: 88 },  // 3.32
  { time: 213, score: 87 },  // 3.33
  { time: 214, score: 86 },  // 3.34
  { time: 215, score: 85 },  // 3.35
  { time: 216, score: 84 },  // 3.36
  { time: 217, score: 83 },  // 3.37
  { time: 218, score: 82 },  // 3.38
  { time: 219, score: 81 },  // 3.39
  { time: 220, score: 80 },  // 3.40

  // جيد (221 – 235 ثانية / 3:41 – 3:55)
  { time: 221, score: 79 },  // 3.41
  { time: 222, score: 78 },  // 3.42
  { time: 223, score: 77 },  // 3.43
  { time: 224, score: 76 },  // 3.44
  { time: 225, score: 75 },  // 3.45
  { time: 227, score: 74 },  // 3.47
  { time: 229, score: 73 },  // 3.49
  { time: 231, score: 72 },  // 3.51
  { time: 233, score: 71 },  // 3.53
  { time: 235, score: 70 },  // 3.55

  // مقبول (237 – 255 ثانية / 3:57 – 4:15)
  { time: 237, score: 69 },  // 3.57
  { time: 239, score: 68 },  // 3.59
  { time: 250, score: 67 },  // 4.10
  { time: 251, score: 66 },  // 4.11
  { time: 253, score: 65 },  // 4.13
  { time: 255, score: 64 },  // 4.15

  // غير مقبول (256 – 280 ثانية / 4:16 – 4:40)
  { time: 256, score: 63 },  // 4.16
  { time: 257, score: 62 },  // 4.17
  { time: 258, score: 61 },  // 4.18
  { time: 259, score: 60 },  // 4.19
  { time: 260, score: 58 },  // 4.20
  { time: 261, score: 56 },  // 4.21
  { time: 262, score: 54 },  // 4.22
  { time: 263, score: 52 },  // 4.23
  { time: 264, score: 50 },  // 4.24
  { time: 265, score: 48 },  // 4.25
  { time: 266, score: 46 },  // 4.26
  { time: 267, score: 44 },  // 4.27
  { time: 268, score: 42 },  // 4.28
  { time: 269, score: 40 },  // 4.29
  { time: 270, score: 38 },  // 4.30
  { time: 271, score: 36 },  // 4.31
  { time: 272, score: 34 },  // 4.32
  { time: 273, score: 32 },  // 4.33
  { time: 274, score: 30 },  // 4.34
  { time: 275, score: 27 },  // 4.35
  { time: 276, score: 24 },  // 4.36
  { time: 277, score: 21 },  // 4.37
  { time: 278, score: 18 },  // 4.38
  { time: 279, score: 15 },  // 4.39
  { time: 280, score: 12 },  // 4.40
  { time: 281, score: 9 },   // 4.41
  { time: 282, score: 6 },   // 4.42
  { time: 283, score: 3 },   // 4.43
  { time: 284, score: 0 },   // 4.44
]
