import { CountScoreEntry } from "@/lib/types";

/**
 * جدول علامات تمرين المعدة (ثبات الوسط) - الفئة العمرية الأولى (ف١)
 *
 * 68 تكراراً أو أكثر = 100 (ممتاز)
 * وأي عدد أقل من 68 يأخذ العلامة المقابلة له في الجدول.
 */
export const STOMACH_CATEGORY_ONE_SCORES: CountScoreEntry[] = [
  // 68 أو أكثر = 100
  { count: 68, score: 100 },
  { count: 67, score: 99 },
  { count: 66, score: 98 },
  { count: 65, score: 97 },
  { count: 64, score: 96 },
  { count: 63, score: 95 },
  { count: 62, score: 94 },
  { count: 61, score: 93 },
  { count: 60, score: 92 },
  { count: 59, score: 91 },
  { count: 58, score: 90 },

  // من 57 إلى 52
  { count: 57, score: 89 },
  { count: 56, score: 88 },
  { count: 55, score: 86 },
  { count: 54, score: 84 },
  { count: 53, score: 82 },
  { count: 52, score: 80 },

  // من 51 إلى 46
  { count: 51, score: 79 },
  { count: 50, score: 78 },
  { count: 49, score: 76 },
  { count: 48, score: 74 },
  { count: 47, score: 72 },
  { count: 46, score: 70 },

  // من 45 إلى 40
  { count: 45, score: 69 },
  { count: 44, score: 68 },
  { count: 43, score: 66 },
  { count: 42, score: 64 },
  { count: 41, score: 62 },
  { count: 40, score: 60 },

  // من 39 إلى 10
  { count: 39, score: 58 },
  { count: 38, score: 56 },
  { count: 37, score: 54 },
  { count: 36, score: 52 },
  { count: 35, score: 50 },
  { count: 34, score: 48 },
  { count: 33, score: 46 },
  { count: 32, score: 44 },
  { count: 31, score: 42 },
  { count: 30, score: 40 },
  { count: 29, score: 38 },
  { count: 28, score: 36 },
  { count: 27, score: 34 },
  { count: 26, score: 32 },
  { count: 25, score: 30 },
  { count: 24, score: 28 },
  { count: 23, score: 26 },
  { count: 22, score: 24 },
  { count: 21, score: 22 },
  { count: 20, score: 20 },
  { count: 19, score: 19 },
  { count: 18, score: 18 },
  { count: 17, score: 17 },
  { count: 16, score: 16 },
  { count: 15, score: 15 },
  { count: 14, score: 14 },
  { count: 13, score: 13 },
  { count: 12, score: 12 },
  { count: 11, score: 11 },
  { count: 10, score: 10 },
  { count: 9, score: 0 },
];

