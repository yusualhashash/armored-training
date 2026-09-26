import { CountScoreEntry } from "@/lib/types";

/**
 * جدول علامات تمرين القوة المركب - ( الفئة العمرية الثانية - ف٢ ): كل سطر يربط عدد التكرارات بالعلامة المقابلة له.
 * أي عدد تكرارات أعلى من أول سطر يأخذ أعلى علامة، وأي عدد أقل من آخر سطر يأخذ صفراً.
 * الترتيب من الأكثر تكراراً إلى الأقل.
 */
export const COMPOUND_STRENGTH_CATEGORY_TWO_SCORES: CountScoreEntry[] = [
  // من 90 إلى 100
  { count: 60, score: 100 },
  { count: 59, score: 99 },
  { count: 58, score: 98 },
  { count: 57, score: 97 },
  { count: 56, score: 96 },
  { count: 55, score: 95 },
  { count: 54, score: 94 },
  { count: 53, score: 93 },
  { count: 52, score: 92 },
  { count: 51, score: 91 },
  { count: 50, score: 90 },

  // من 80 إلى 89
  { count: 49, score: 87 },
  { count: 48, score: 84 },
  { count: 47, score: 82 },
  { count: 46, score: 80 },

  // من 70 إلى 79
  { count: 45, score: 77 },
  { count: 44, score: 74 },
  { count: 43, score: 72 },
  { count: 42, score: 70 },

  // من 60 إلى 69
  { count: 41, score: 67 },
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
  { count: 22, score: 27 },
  { count: 21, score: 24 },
  { count: 20, score: 21 },
  { count: 19, score: 18 },
  { count: 18, score: 15 },
  { count: 17, score: 12 },
  { count: 16, score: 9 },
  { count: 15, score: 6 },
  { count: 14, score: 3 },
  { count: 13, score: 0 } // عدد 13 أو أقل يأخذ صفراً
];
