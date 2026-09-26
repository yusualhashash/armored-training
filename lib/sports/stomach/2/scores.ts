import { CountScoreEntry } from "@/lib/types";

/**
 * جدول علامات تمرين المعدة ( ثبات الوسط ) - ( الفئة العمرية الثانية - ف٢ ): كل سطر يربط عدد التكرارات بالعلامة المقابلة له.
 * أي عدد تكرارات أعلى من أول سطر يأخذ أعلى علامة، وأي عدد أقل من آخر سطر يأخذ صفراً.
 * الترتيب من الأكثر تكراراً إلى الأقل.
 */
export const STOMACH_CATEGORY_TWO_SCORES: CountScoreEntry[] = [
  // من 90 إلى 100
  { count: 66, score: 100 },
  { count: 65, score: 99 },
  { count: 64, score: 98 },
  { count: 63, score: 97 },
  { count: 62, score: 96 },
  { count: 61, score: 95 },
  { count: 60, score: 94 },
  { count: 59, score: 93 },
  { count: 58, score: 92 },
  { count: 57, score: 91 },
  { count: 56, score: 90 },

  // من 80 إلى 89
  { count: 55, score: 89 },
  { count: 54, score: 88 },
  { count: 53, score: 86 },
  { count: 52, score: 84 },
  { count: 51, score: 82 },
  { count: 50, score: 80 },

  // من 70 إلى 79
  { count: 49, score: 79 },
  { count: 48, score: 78 },
  { count: 47, score: 76 },
  { count: 46, score: 74 },
  { count: 45, score: 72 },
  { count: 44, score: 70 },

  // من 60 إلى 69
  { count: 43, score: 69 },
  { count: 42, score: 68 },
  { count: 41, score: 66 },
  { count: 40, score: 64 },
  { count: 39, score: 62 },
  { count: 38, score: 60 },

  // من 0 إلى 59
  { count: 37, score: 58 },
  { count: 36, score: 56 },
  { count: 35, score: 54 },
  { count: 34, score: 52 },
  { count: 33, score: 50 },
  { count: 32, score: 48 },
  { count: 31, score: 46 },
  { count: 30, score: 44 },
  { count: 29, score: 42 },
  { count: 28, score: 40 },
  { count: 27, score: 38 },
  { count: 26, score: 36 },
  { count: 25, score: 34 },
  { count: 24, score: 32 },
  { count: 23, score: 30 },
  { count: 22, score: 28 },
  { count: 21, score: 26 },
  { count: 20, score: 24 },
  { count: 19, score: 22 },
  { count: 18, score: 20 },
  { count: 17, score: 19 },
  { count: 16, score: 18 },
  { count: 15, score: 17 },
  { count: 14, score: 16 },
  { count: 13, score: 15 },
  { count: 12, score: 14 },
  { count: 11, score: 13 },
  { count: 10, score: 12 },
  { count: 9, score: 11 },
  { count: 8, score: 10 },
  { count: 7, score: 0 } // عدد 7 أو أقل يأخذ صفراً
];

