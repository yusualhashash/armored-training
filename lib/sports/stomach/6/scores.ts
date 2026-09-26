import { CountScoreEntry } from "@/lib/types";

/**
 * جدول علامات تمرين المعدة ( ذراعين عالياً ) - ( الفئة العمرية السادسة - ف٦ ): كل سطر يربط عدد التكرارات بالعلامة المقابلة له.
 * أي عدد تكرارات أعلى من أول سطر يأخذ أعلى علامة، وأي عدد أقل من آخر سطر يأخذ صفراً.
 * الترتيب من الأكثر تكراراً إلى الأقل.
 */
export const STOMACH_CATEGORY_SIX_SCORES: CountScoreEntry[] = [
  // من 90 إلى 100
  { count: 50, score: 100 },
  { count: 49, score: 99 },
  { count: 48, score: 98 },
  { count: 47, score: 97 },
  { count: 46, score: 96 },
  { count: 45, score: 95 },
  { count: 44, score: 94 },
  { count: 43, score: 93 },
  { count: 42, score: 92 },
  { count: 41, score: 91 },
  { count: 40, score: 90 },

  // من 80 إلى 89
  { count: 39, score: 88 },
  { count: 38, score: 86 },
  { count: 37, score: 84 },
  { count: 36, score: 82 },
  { count: 35, score: 80 },

  // من 70 إلى 79
  { count: 34, score: 78 },
  { count: 33, score: 76 },
  { count: 32, score: 74 },
  { count: 31, score: 72 },
  { count: 30, score: 70 },

  // من 60 إلى 69
  { count: 29, score: 68 },
  { count: 28, score: 66 },
  { count: 27, score: 64 },
  { count: 26, score: 62 },
  { count: 25, score: 60 },

  // من 0 إلى 59
  { count: 24, score: 58 },
  { count: 23, score: 56 },
  { count: 22, score: 54 },
  { count: 21, score: 52 },
  { count: 20, score: 50 },
  { count: 19, score: 46 },
  { count: 18, score: 42 },
  { count: 17, score: 38 },
  { count: 16, score: 34 },
  { count: 15, score: 30 },
  { count: 14, score: 25 },
  { count: 13, score: 20 },
  { count: 12, score: 15 },
  { count: 11, score: 10 },
  { count: 10, score: 5 },
  { count: 9, score: 0 } // عدد 9 أو أقل يأخذ صفراً
];

