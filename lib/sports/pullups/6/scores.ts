import { CountScoreEntry } from "@/lib/types";

/**
 * جدول علامات تمرين سحب الجسم على الثابت ( العقلة ) - ( الفئة العمرية السادسة - ف٦ )
 * الترتيب من الأكثر تكراراً إلى الأقل.
 */
export const PULL_UPS_CATEGORY_SIX_SCORES: CountScoreEntry[] = [
  // من 90 إلى 100
  { count: 12, score: 100 },
  { count: 11, score: 98 },
  { count: 10, score: 96 },
  { count: 9, score: 94 },
  { count: 8, score: 92 },
  { count: 7, score: 90 },

  // من 80 إلى 89
  { count: 6, score: 80 },

  // من 70 إلى 79
  { count: 5, score: 70 },

  // من 60 إلى 69
  { count: 4, score: 65 },
  { count: 3, score: 60 },

  // من 0 إلى 59
  { count: 2, score: 50 },
  { count: 1, score: 40 },
  { count: 0, score: 0 }
];
