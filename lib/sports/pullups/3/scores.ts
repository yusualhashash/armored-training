import { CountScoreEntry } from "@/lib/types";

/**
 * جدول علامات تمرين سحب الجسم على الثابت ( العقلة ) - ( الفئة العمرية الثالثة - ف٣ )
 * الترتيب من الأكثر تكراراً إلى الأقل.
 */
export const PULL_UPS_CATEGORY_THREE_SCORES: CountScoreEntry[] = [
  // من 90 إلى 100
  { count: 17, score: 100 },
  { count: 16, score: 98 },
  { count: 15, score: 96 },
  { count: 14, score: 94 },
  { count: 13, score: 92 },
  { count: 12, score: 90 },

  // من 80 إلى 89
  { count: 11, score: 80 },

  // من 70 إلى 79
  { count: 10, score: 70 },

  // من 60 إلى 69
  { count: 9, score: 65 },
  { count: 8, score: 60 },

  // من 0 إلى 59
  { count: 7, score: 55 },
  { count: 6, score: 50 },
  { count: 5, score: 45 },
  { count: 4, score: 40 },
  { count: 3, score: 30 },
  { count: 2, score: 20 },
  { count: 1, score: 15 },
  { count: 0, score: 0 }
];
