import { CountScoreEntry } from "@/lib/types";

/**
 * جدول علامات تمرين القوة المركب - ( الفئة العمرية الرابعة - ف٤ ): كل سطر يربط عدد التكرارات بالعلامة المقابلة له.
 * أي عدد تكرارات أعلى من أول سطر يأخذ أعلى علامة، وأي عدد أقل من آخر سطر يأخذ صفراً.
 * الترتيب من الأكثر تكراراً إلى الأقل.
 */
export const COMPOUND_STRENGTH_CATEGORY_FOUR_SCORES: CountScoreEntry[] = [
  // من 90 إلى 100
  { count: 51, score: 100 },
  { count: 50, score: 98 },
  { count: 49, score: 96 },
  { count: 48, score: 94 },
  { count: 47, score: 92 },
  { count: 46, score: 90 },

  // من 80 إلى 89
  { count: 45, score: 87 },
  { count: 44, score: 84 },
  { count: 43, score: 82 },
  { count: 42, score: 80 },

  // من 70 إلى 79
  { count: 41, score: 77 },
  { count: 40, score: 74 },
  { count: 39, score: 72 },
  { count: 38, score: 70 },

  // من 60 إلى 69
  { count: 37, score: 67 },
  { count: 36, score: 64 },
  { count: 35, score: 62 },
  { count: 34, score: 60 },

  // من 0 إلى 59
  { count: 33, score: 58 },
  { count: 32, score: 56 },
  { count: 31, score: 54 },
  { count: 30, score: 52 },
  { count: 29, score: 50 },
  { count: 28, score: 48 },
  { count: 27, score: 46 },
  { count: 26, score: 44 },
  { count: 25, score: 42 },
  { count: 24, score: 40 },
  { count: 23, score: 38 },
  { count: 22, score: 36 },
  { count: 21, score: 34 },
  { count: 20, score: 32 },
  { count: 19, score: 30 },
  { count: 18, score: 28 },
  { count: 17, score: 26 },
  { count: 16, score: 24 },
  { count: 15, score: 22 },
  { count: 14, score: 20 },
  { count: 13, score: 16 },
  { count: 12, score: 12 },
  { count: 11, score: 8 },
  { count: 10, score: 4 },
  { count: 9, score: 0 } // عدد 9 أو أقل يأخذ صفراً
];
