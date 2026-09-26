import { CountScoreEntry } from "@/lib/types";

/**
 * جدول علامات تمرين ثني ومد الذراعين ( الشناو ) - ( الفئة العمرية السابعة - ف٧ ): كل سطر يربط عدد التكرارات بالعلامة المقابلة له.
 * أي عدد تكرارات أعلى من أول سطر يأخذ أعلى علامة، وأي عدد أقل من آخر سطر يأخذ صفراً.
 * الترتيب من الأكثر تكراراً إلى الأقل.
 */
export const PUSH_UPS_CATEGORY_SEVEN_SCORES: CountScoreEntry[] = [
  // من 90 إلى 100
  { count: 40, score: 100 },
  { count: 39, score: 99 },
  { count: 38, score: 98 },
  { count: 37, score: 97 },
  { count: 36, score: 96 },
  { count: 35, score: 95 },
  { count: 34, score: 94 },
  { count: 33, score: 93 },
  { count: 32, score: 92 },
  { count: 31, score: 91 },
  { count: 30, score: 90 },

  // من 80 إلى 89
  { count: 29, score: 88 },
  { count: 28, score: 86 },
  { count: 27, score: 84 },
  { count: 26, score: 82 },
  { count: 25, score: 80 },

  // من 70 إلى 79
  { count: 24, score: 78 },
  { count: 23, score: 76 },
  { count: 22, score: 74 },
  { count: 21, score: 72 },
  { count: 20, score: 70 },

  // من 60 إلى 69
  { count: 19, score: 68 },
  { count: 18, score: 66 },
  { count: 17, score: 64 },
  { count: 16, score: 62 },
  { count: 15, score: 60 },

  // من 0 إلى 59
  { count: 14, score: 58 },
  { count: 13, score: 56 },
  { count: 12, score: 54 },
  { count: 11, score: 52 },
  { count: 10, score: 50 },
  { count: 9, score: 45 },
  { count: 8, score: 40 },
  { count: 7, score: 35 },
  { count: 6, score: 30 },
  { count: 5, score: 25 },
  { count: 4, score: 20 },
  { count: 3, score: 15 },
  { count: 2, score: 10 },
  { count: 1, score: 0 } // تكرار واحد أو أقل يأخذ صفراً
];
