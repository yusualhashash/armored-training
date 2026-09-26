import type { ScoreEntry } from '@/lib/types'

/**
 * جدول علامات اختبار 1 كيلومتر (الفئة الرابعة): تم تحويل القيم من دقائق وثوانٍ إلى ثوانٍ صافية.
 * كل سطر يربط زمناً بالثواني بالعلامة المقابلة له، وأي زمن أسرع من أول سطر يأخذ أعلى علامة،
 * وأي زمن أبطأ من آخر سطر يأخذ صفراً. الترتيب من الأسرع إلى الأبطأ.
 */
export const RUN_1KM_CATEGORY_FOUR_SCORES: ScoreEntry[] = [
  // ممتاز (200 – 230 ثانية / 3:20 – 3:40)
  { time: 200, score: 100 }, // 3.20
  { time: 202, score: 99 },  // 3.22
  { time: 204, score: 98 },  // 3.24
  { time: 206, score: 97 },  // 3.26
  { time: 208, score: 96 },  // 3.28
  { time: 210, score: 95 },  // 3.30
  { time: 212, score: 94 },  // 3.32
  { time: 214, score: 93 },  // 3.34
  { time: 216, score: 92 },  // 3.36
  { time: 218, score: 91 },  // 3.38
  { time: 220, score: 90 },  // 3.40

  // جيد جداً (221 – 230 ثانية / 3:41 – 3:50)
  { time: 221, score: 89 },  // 3.41
  { time: 222, score: 88 },  // 3.42
  { time: 223, score: 87 },  // 3.43
  { time: 224, score: 86 },  // 3.44
  { time: 225, score: 85 },  // 3.45
  { time: 226, score: 84 },  // 3.46
  { time: 227, score: 83 },  // 3.47
  { time: 228, score: 82 },  // 3.48
  { time: 229, score: 81 },  // 3.49
  { time: 230, score: 80 },  // 3.50

  // جيد (231 – 245 ثانية / 3:51 – 4:05)
  { time: 231, score: 79 },  // 3.51
  { time: 232, score: 78 },  // 3.52
  { time: 233, score: 77 },  // 3.53
  { time: 234, score: 76 },  // 3.54
  { time: 235, score: 75 },  // 3.55
  { time: 237, score: 74 },  // 3.57
  { time: 249, score: 73 },  // 4.09
  { time: 250, score: 72 },  // 4.10
  { time: 243, score: 71 },  // 4.3 (المقصود 4:03 ثانية)
  { time: 245, score: 70 },  // 4.5 (المقصود 4:05 ثانية)

  // مقبول (247 – 255 ثانية / 4:07 – 4:15)
  { time: 247, score: 69 },  // 4.7
  { time: 249, score: 68 },  // 4.9
  { time: 251, score: 67 },  // 4.11
  { time: 253, score: 66 },  // 4.13
  { time: 255, score: 65 },  // 4.15

  // غير مقبول (258 – 295 ثانية / 4:18 – 4:55)
  { time: 258, score: 64 },  // 4.18
  { time: 261, score: 63 },  // 4.21
  { time: 264, score: 62 },  // 4.24
  { time: 267, score: 61 },  // 4.27
  { time: 270, score: 60 },  // 4.30
  { time: 271, score: 58 },  // 4.31
  { time: 272, score: 56 },  // 4.32
  { time: 273, score: 54 },  // 4.33
  { time: 274, score: 52 },  // 4.34
  { time: 275, score: 50 },  // 4.35
  { time: 276, score: 48 },  // 4.36
  { time: 277, score: 46 },  // 4.37
  { time: 278, score: 44 },  // 4.38
  { time: 279, score: 42 },  // 4.39
  { time: 280, score: 40 },  // 4.40
  { time: 281, score: 38 },  // 4.41
  { time: 282, score: 36 },  // 4.42
  { time: 283, score: 34 },  // 4.43
  { time: 284, score: 32 },  // 4.44
  { time: 285, score: 30 },  // 4.45
  { time: 286, score: 27 },  // 4.46
  { time: 287, score: 24 },  // 4.47
  { time: 288, score: 21 },  // 4.48
  { time: 289, score: 18 },  // 4.49
  { time: 290, score: 15 },  // 4.50
  { time: 291, score: 12 },  // 4.51
  { time: 292, score: 9 },   // 4.52
  { time: 293, score: 6 },   // 4.53
  { time: 294, score: 3 },   // 4.54
  { time: 295, score: 0 },   // 4.55
]
