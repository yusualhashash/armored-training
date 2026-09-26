import type { ScoreEntry } from '@/lib/types'

/**
 * جدول علامات اختبار 3 كيلومتر ( الفئة العمرية الثانية - ف٢ ): كل سطر يربط زمناً بالثواني بالعلامة المقابلة له،
 * وأي زمن أسرع من أول سطر يأخذ أعلى علامة، وأي زمن أبطأ من آخر سطر يأخذ صفراً.
 * الترتيب من الأسرع إلى الأبطأ.
 */
export const RUN_3KM_CATEGORY_TWO_SCORES: ScoreEntry[] = [
  // من 90 إلى 100
  { time: 650, score: 100 }, // 10,50 -> 650s
  { time: 660, score: 99 },  // 11,00 -> 660s
  { time: 670, score: 98 },  // 11,10 -> 670s
  { time: 680, score: 97 },  // 11,20 -> 680s
  { time: 690, score: 96 },  // 11,30 -> 690s
  { time: 700, score: 94 },  // 11,40 -> 700s
  { time: 710, score: 92 },  // 11,50 -> 710s
  { time: 735, score: 90 },  // 12,15 -> 735s

  // من 80 إلى 89
  { time: 736, score: 89 },  // 12,16 -> 736s
  { time: 737, score: 88 },  // 12,17 -> 737s
  { time: 738, score: 87 },  // 12,18 -> 738s
  { time: 739, score: 86 },  // 12,19 -> 739s
  { time: 740, score: 85 },  // 12,20 -> 740s
  { time: 742, score: 84 },  // 12,22 -> 742s
  { time: 744, score: 73 },  // 12,24 -> 744s (Görselde 83 yerine basım hatası olarak 73 yazılmıştır)
  { time: 746, score: 82 },  // 12,26 -> 746s
  { time: 748, score: 81 },  // 12,28 -> 748s
  { time: 750, score: 80 },  // 12,30 -> 750s

  // من 70 إلى 79
  { time: 751, score: 79 },  // 12,31 -> 751s
  { time: 752, score: 78 },  // 12,32 -> 752s
  { time: 753, score: 77 },  // 12,33 -> 753s
  { time: 754, score: 76 },  // 12,34 -> 754s
  { time: 755, score: 75 },  // 12,35 -> 755s
  { time: 757, score: 74 },  // 12,37 -> 757s
  { time: 760, score: 73 },  // 12,40 -> 760s
  { time: 762, score: 72 },  // 12,42 -> 762s
  { time: 764, score: 71 },  // 12,44 -> 764s
  { time: 765, score: 70 },  // 12,45 -> 765s

  // من 60 إلى 69
  { time: 768, score: 69 },  // 12,48 -> 768s
  { time: 771, score: 68 },  // 12,51 -> 771s
  { time: 774, score: 67 },  // 12,54 -> 774s
  { time: 777, score: 66 },  // 12,57 -> 777s
  { time: 780, score: 65 },  // 13,00 -> 780s
  { time: 783, score: 64 },  // 13,03 -> 783s
  { time: 786, score: 63 },  // 13,06 -> 786s
  { time: 789, score: 62 },  // 13,09 -> 789s
  { time: 792, score: 61 },  // 13,12 -> 792s
  { time: 795, score: 60 },  // 13,15 -> 795s

  // من 0 إلى 59
  { time: 796, score: 59 },  // 13,16 -> 796s
  { time: 797, score: 58 },  // 13,17 -> 797s
  { time: 798, score: 57 },  // 13,18 -> 798s
  { time: 799, score: 56 },  // 13,19 -> 799s
  { time: 800, score: 55 },  // 13,20 -> 800s
  { time: 801, score: 54 },  // 13,21 -> 801s
  { time: 802, score: 53 },  // 13,22 -> 802s
  { time: 803, score: 52 },  // 13,23 -> 803s
  { time: 804, score: 51 },  // 13,24 -> 804s
  { time: 805, score: 50 },  // 13,25 -> 805s
  { time: 806, score: 48 },  // 13,26 -> 806s
  { time: 807, score: 46 },  // 13,27 -> 807s
  { time: 808, score: 44 },  // 13,28 -> 808s
  { time: 809, score: 42 },  // 13,29 -> 809s
  { time: 810, score: 40 },  // 13,30 -> 810s
  { time: 811, score: 38 },  // 13,31 -> 811s
  { time: 812, score: 36 },  // 13,32 -> 812s
  { time: 813, score: 34 },  // 13,33 -> 813s
  { time: 814, score: 32 },  // 13,34 -> 814s
  { time: 815, score: 30 },  // 13,35 -> 815s
  { time: 816, score: 27 },  // 13,36 -> 816s
  { time: 817, score: 24 },  // 13,37 -> 817s
  { time: 818, score: 21 },  // 13,38 -> 818s
  { time: 819, score: 18 },  // 13,39 -> 819s
  { time: 820, score: 15 },  // 13,40 -> 820s
  { time: 821, score: 12 },  // 13,41 -> 821s
  { time: 822, score: 9 },   // 13,42 -> 822s
  { time: 823, score: 6 },   // 13,43 -> 823s
  { time: 824, score: 3 },   // 13,44 -> 824s
  { time: 825, score: 0 }    // 13,45 -> 825s
]
