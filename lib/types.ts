/** مستوى الأداء المتحقق من نتيجة الاختبار. */
export type PerformanceLevel = 'excellent' | 'veryGood' | 'good' | 'acceptable' | 'poor'

/** فئة عمرية واحدة داخل اختبار رياضي. */
export interface AgeCategory {
  id: number
  name: string
  birthYears: string
}

/** حدّ زمني واحد: أي زمن أسرع من `time` (أو يساويه) يحقق هذا المستوى. */
export interface PerformanceStandard {
  time: number
  level: PerformanceLevel
}

/** سطر واحد في جدول العلامات: زمن الوصول بالثواني والعلامة المقابلة له. */
export interface ScoreEntry {
  time?: number
  count?: number
  score: number
}


/** اختبار رياضي واحد مع كل بياناته: الفئات العمرية والمعايير وجدول العلامات. */
export interface SportEvent {
  id: string
  name: string
  description: string
  /** أعلى علامة يمكن الحصول عليها في هذا الاختبار. */
  maxScore: number
  categories: AgeCategory[]
  standards: PerformanceStandard[]
  /** جدول العلامات. مصفوفة فارغة إذا كان الاختبار بلا علامات. */
  scores: ScoreEntry[]
}


export interface CountScoreEntry {
  count: number
  score: number
}

