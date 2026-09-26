import { CountScoreEntry } from "@/lib/types";

/**
 * جدول علامات تمرين سحب الجسم على الثابت ( العقلة / البار ) - ( الفئة العمرية الثانية - ف٢ ): كل سطر يربط عدد التكرارات بالعلامة المقابلة له.
 * أي عدد تكرارات أعلى من أول سطر يأخذ أعلى علامة، وأي عدد أقل من آخر سطر يأخذ صفراً.
 * الترتيب من الأكثر تكراراً إلى الأقل.
 */
export const PULL_UPS_CATEGORY_TWO_SCORES: CountScoreEntry[] = [
  // من 90 إلى 100
  { count: 18, score: 100 },
  { count: 17, score: 98 },
  { count: 16, score: 96 },
  { count: 15, score: 94 },
  { count: 14, score: 92 },
  { count: 13, score: 90 },

  // من 80 إلى 89
  { count: 12, score: 80 },

  // من 70 إلى 79
  { count: 11, score: 70 },

  // من 60 إلى 69
  { count: 10, score: 65 },
  { count: 9, score: 60 },

  // من 0 إلى 59
  { count: 8, score: 55 },
  { count: 7, score: 50 },
  { count: 6, score: 45 },
  { count: 5, score: 40 },
  { count: 4, score: 30 },
  { count: 3, score: 20 },
  { count: 2, score: 15 },
  { count: 1, score: 10 },
  { count: 0, score: 0 } // صفر تكرار يأخذ صفراً
];