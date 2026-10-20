import type { View, ViewContent } from './types'

const stomachTitle = 'تمرين المعدة'

export const viewContent: Partial<Record<View, ViewContent>> = {
  // Main sections

  sports: {
    title: 'الرياضة',
    backLabel: 'الرئيسية',
    backTo: 'home',
  },

  armored: {
    title: 'أسلحة ورمي',
    backLabel: 'الرئيسية',
    backTo: 'home',
  },

  // ============================================================
  // SPORTS
  // ============================================================

  stomach: {
    title: stomachTitle,
    backLabel: 'الرياضة',
    backTo: 'sports',
  },

  'stomach-category-one': {
    title: 'الفئة الأولى',
    backLabel: stomachTitle,
    backTo: 'stomach',
  },

  'stomach-category-two': {
    title: 'الفئة الثانية',
    backLabel: stomachTitle,
    backTo: 'stomach',
  },

  'stomach-category-three': {
    title: 'الفئة الثالثة',
    backLabel: stomachTitle,
    backTo: 'stomach',
  },

  'stomach-category-four': {
    title: 'الفئة الرابعة',
    backLabel: stomachTitle,
    backTo: 'stomach',
  },

  'stomach-category-five': {
    title: 'الفئة الخامسة',
    backLabel: stomachTitle,
    backTo: 'stomach',
  },

  'stomach-category-six': {
    title: 'الفئة السادسة',
    backLabel: stomachTitle,
    backTo: 'stomach',
  },

  'stomach-category-seven': {
    title: 'الفئة السابعة',
    backLabel: stomachTitle,
    backTo: 'stomach',
  },

  // ------------------------------------------------------------
  // PUSHUPS
  // ------------------------------------------------------------

  pushups: {
    title: 'التمرين السادس',
    backLabel: 'الرياضة',
    backTo: 'sports',
  },

  'pushups-category-one': {
    title: 'الفئة الأولى',
    backLabel: 'التمرين السادس',
    backTo: 'pushups',
  },

  'pushups-category-two': {
    title: 'الفئة الثانية',
    backLabel: 'التمرين السادس',
    backTo: 'pushups',
  },

  'pushups-category-three': {
    title: 'الفئة الثالثة',
    backLabel: 'التمرين السادس',
    backTo: 'pushups',
  },

  'pushups-category-four': {
    title: 'الفئة الرابعة',
    backLabel: 'التمرين السادس',
    backTo: 'pushups',
  },

  'pushups-category-five': {
    title: 'الفئة الخامسة',
    backLabel: 'التمرين السادس',
    backTo: 'pushups',
  },

  'pushups-category-six': {
    title: 'الفئة السادسة',
    backLabel: 'التمرين السادس',
    backTo: 'pushups',
  },

  'pushups-category-seven': {
    title: 'الفئة السابعة',
    backLabel: 'التمرين السادس',
    backTo: 'pushups',
  },

  // ------------------------------------------------------------
  // COMPOUND STRENGTH
  // ------------------------------------------------------------

  'compound-strength': {
    title: 'القوة المركبة',
    backLabel: 'الرياضة',
    backTo: 'sports',
  },

  'compound-strength-category-one': {
    title: 'الفئة الأولى',
    backLabel: 'القوة المركبة',
    backTo: 'compound-strength',
  },

  'compound-strength-category-two': {
    title: 'الفئة الثانية',
    backLabel: 'القوة المركبة',
    backTo: 'compound-strength',
  },

  'compound-strength-category-three': {
    title: 'الفئة الثالثة',
    backLabel: 'القوة المركبة',
    backTo: 'compound-strength',
  },

  'compound-strength-category-four': {
    title: 'الفئة الرابعة',
    backLabel: 'القوة المركبة',
    backTo: 'compound-strength',
  },

  'compound-strength-category-five': {
    title: 'الفئة الخامسة',
    backLabel: 'القوة المركبة',
    backTo: 'compound-strength',
  },

  'compound-strength-category-six': {
    title: 'الفئة السادسة',
    backLabel: 'القوة المركبة',
    backTo: 'compound-strength',
  },

  'compound-strength-category-seven': {
    title: 'الفئة السابعة',
    backLabel: 'القوة المركبة',
    backTo: 'compound-strength',
  },

  // ------------------------------------------------------------
  // PULLUPS
  // ------------------------------------------------------------

  pullups: {
    title: 'تمرين سحب الجسم على الثابت',
    backLabel: 'الرياضة',
    backTo: 'sports',
  },

  'pullups-category-one': {
    title: 'الفئة الأولى',
    backLabel: 'تمرين سحب الجسم على الثابت',
    backTo: 'pullups',
  },

  'pullups-category-two': {
    title: 'الفئة الثانية',
    backLabel: 'تمرين سحب الجسم على الثابت',
    backTo: 'pullups',
  },

  'pullups-category-three': {
    title: 'الفئة الثالثة',
    backLabel: 'تمرين سحب الجسم على الثابت',
    backTo: 'pullups',
  },

  'pullups-category-four': {
    title: 'الفئة الرابعة',
    backLabel: 'تمرين سحب الجسم على الثابت',
    backTo: 'pullups',
  },

  'pullups-category-five': {
    title: 'الفئة الخامسة',
    backLabel: 'تمرين سحب الجسم على الثابت',
    backTo: 'pullups',
  },

  'pullups-category-six': {
    title: 'الفئة السادسة',
    backLabel: 'تمرين سحب الجسم على الثابت',
    backTo: 'pullups',
  },

  'pullups-category-seven': {
    title: 'الفئة السابعة',
    backLabel: 'تمرين سحب الجسم على الثابت',
    backTo: 'pullups',
  },

  // ------------------------------------------------------------
  // 100M
  // ------------------------------------------------------------

  hundred: {
    title: '100 متر',
    backLabel: 'الرياضة',
    backTo: 'sports',
  },

  'category-one': {
    title: 'الفئة الأولى',
    backLabel: '100 متر',
    backTo: 'hundred',
  },

  'category-two': {
    title: 'الفئة الثانية',
    backLabel: '100 متر',
    backTo: 'hundred',
  },

  'category-three': {
    title: 'الفئة الثالثة',
    backLabel: '100 متر',
    backTo: 'hundred',
  },

  'category-four': {
    title: 'الفئة الرابعة',
    backLabel: '100 متر',
    backTo: 'hundred',
  },

  'category-five': {
    title: 'الفئة الخامسة',
    backLabel: '100 متر',
    backTo: 'hundred',
  },

  'category-six': {
    title: 'الفئة السادسة',
    backLabel: '100 متر',
    backTo: 'hundred',
  },

  'category-seven': {
    title: 'الفئة السابعة',
    backLabel: '100 متر',
    backTo: 'hundred',
  },

  // ------------------------------------------------------------
  // 1 KM
  // ------------------------------------------------------------

  'one-km': {
    title: '1 كم',
    backLabel: 'الرياضة',
    backTo: 'sports',
  },

  'one-km-category-one': {
    title: 'الفئة الأولى',
    backLabel: '1 كم',
    backTo: 'one-km',
  },

  'one-km-category-two': {
    title: 'الفئة الثانية',
    backLabel: '1 كم',
    backTo: 'one-km',
  },

  'one-km-category-three': {
    title: 'الفئة الثالثة',
    backLabel: '1 كم',
    backTo: 'one-km',
  },

  'one-km-category-four': {
    title: 'الفئة الرابعة',
    backLabel: '1 كم',
    backTo: 'one-km',
  },

  'one-km-category-five': {
    title: 'الفئة الخامسة',
    backLabel: '1 كم',
    backTo: 'one-km',
  },

  'one-km-category-six': {
    title: 'الفئة السادسة',
    backLabel: '1 كم',
    backTo: 'one-km',
  },

  'one-km-category-seven': {
    title: 'الفئة السابعة',
    backLabel: '1 كم',
    backTo: 'one-km',
  },

  // ------------------------------------------------------------
  // 2 KM
  // ------------------------------------------------------------

  'two-km': {
    title: '2 كم',
    backLabel: 'الرياضة',
    backTo: 'sports',
  },

  'two-km-category-one': {
    title: 'الفئة الأولى',
    backLabel: '2 كم',
    backTo: 'two-km',
  },

  'two-km-category-two': {
    title: 'الفئة الثانية',
    backLabel: '2 كم',
    backTo: 'two-km',
  },

  'two-km-category-three': {
    title: 'الفئة الثالثة',
    backLabel: '2 كم',
    backTo: 'two-km',
  },

  'two-km-category-four': {
    title: 'الفئة الرابعة',
    backLabel: '2 كم',
    backTo: 'two-km',
  },

  // ------------------------------------------------------------
  // 3 KM
  // ------------------------------------------------------------

  'three-km': {
    title: '3 كم',
    backLabel: 'الرياضة',
    backTo: 'sports',
  },

  'three-km-category-one': {
    title: 'الفئة الأولى',
    backLabel: '3 كم',
    backTo: 'three-km',
  },

  'three-km-category-two': {
    title: 'الفئة الثانية',
    backLabel: '3 كم',
    backTo: 'three-km',
  },

  'three-km-category-three': {
    title: 'الفئة الثالثة',
    backLabel: '3 كم',
    backTo: 'three-km',
  },

  // ------------------------------------------------------------
  // 5 KM
  // ------------------------------------------------------------

  'five-km': {
    title: '5 كم',
    backLabel: 'الرياضة',
    backTo: 'sports',
  },

  'five-km-category-one': {
    title: 'الفئة الأولى',
    backLabel: '5 كم',
    backTo: 'five-km',
  },

  'five-km-category-two': {
    title: 'الفئة الثانية',
    backLabel: '5 كم',
    backTo: 'five-km',
  },

  'five-km-category-three': {
    title: 'الفئة الثالثة',
    backLabel: '5 كم',
    backTo: 'five-km',
  },

  // ------------------------------------------------------------
  // 4x100
  // ------------------------------------------------------------

  '4x100': {
    title: '4×100 متر',
    backLabel: 'الرياضة',
    backTo: 'sports',
  },

  '4x100-category-one': {
    title: 'الفئة الأولى',
    backLabel: '4×100 متر',
    backTo: '4x100',
  },

  '4x100-category-two': {
    title: 'الفئة الثانية',
    backLabel: '4×100 متر',
    backTo: '4x100',
  },

  '4x100-category-three': {
    title: 'الفئة الثالثة',
    backLabel: '4×100 متر',
    backTo: '4x100',
  },

  '4x100-category-four': {
    title: 'الفئة الرابعة',
    backLabel: '4×100 متر',
    backTo: '4x100',
  },

  '4x100-category-five': {
    title: 'الفئة الخامسة',
    backLabel: '4×100 متر',
    backTo: '4x100',
  },

  '4x100-category-six': {
    title: 'الفئة السادسة',
    backLabel: '4×100 متر',
    backTo: '4x100',
  },

  // ============================================================
  // T72
  // ============================================================

  t72: {
    title: 'T72',
    backLabel: 'أسلحة ورمي',
    backTo: 'armored',
  },

  't72-boarding': {
    title: 'ركوب الطواقم في الدبابة',
    backLabel: 'T72',
    backTo: 't72',
  },

  't72-طاقم': {
    title: 'الطاقم',
    backLabel: 'ركوب الطواقم في الدبابة',
    backTo: 't72-boarding',
  },

  't72-فصيلة': {
    title: 'الفصيلة',
    backLabel: 'ركوب الطواقم في الدبابة',
    backTo: 't72-boarding',
  },

  't72-سرية': {
    title: 'السرية',
    backLabel: 'ركوب الطواقم في الدبابة',
    backTo: 't72-boarding',
  },

  't72-disembarking': {
    title: 'نزول الطواقم من الدبابة',
    backLabel: 'T72',
    backTo: 't72',
  },

  't72-disembarking-طاقم': {
    title: 'الطاقم',
    backLabel: 'نزول الطواقم من الدبابة',
    backTo: 't72-disembarking',
  },

  't72-disembarking-فصيلة': {
    title: 'الفصيلة',
    backLabel: 'نزول الطواقم من الدبابة',
    backTo: 't72-disembarking',
  },

  't72-disembarking-سرية': {
    title: 'السرية',
    backLabel: 'نزول الطواقم من الدبابة',
    backTo: 't72-disembarking',
  },

  't72-pre-combat': {
    title: 'الانتقال من تشكيلة الرتل إلى ترتيب ما قبل القتال',
    backLabel: 'T72',
    backTo: 't72',
  },

  't72-pre-combat-سرية': {
    title: 'السرية',
    backLabel: 'الانتقال من تشكيلة الرتل إلى ترتيب ما قبل القتال',
    backTo: 't72-pre-combat',
  },

  't72-pre-combat-كتيبة': {
    title: 'الكتيبة',
    backLabel: 'الانتقال من تشكيلة الرتل إلى ترتيب ما قبل القتال',
    backTo: 't72-pre-combat',
  },

  't72-combat-to-pre-combat': {
    title: 'الانتقال من ترتيب القتال الى ترتيب ما قبل القتال',
    backLabel: 'T72',
    backTo: 't72',
  },

  't72-combat-to-pre-combat-فصيلة': {
    title: 'الفصيلة',
    backLabel: 'الانتقال من ترتيب القتال الى ترتيب ما قبل القتال',
    backTo: 't72-combat-to-pre-combat',
  },

  't72-combat-to-pre-combat-سرية': {
    title: 'السرية',
    backLabel: 'الانتقال من ترتيب القتال الى ترتيب ما قبل القتال',
    backTo: 't72-combat-to-pre-combat',
  },

  't72-combat-to-pre-combat-كتيبة': {
    title: 'الكتيبة',
    backLabel: 'الانتقال من ترتيب القتال الى ترتيب ما قبل القتال',
    backTo: 't72-combat-to-pre-combat',
  },

  't72-open-pre-combat': {
    title: 'الفتح من ترتيب ما قبل القتال',
    backLabel: 'T72',
    backTo: 't72',
  },

  't72-open-pre-combat-فصيلة': {
    title: 'الفصيلة',
    backLabel: 'الفتح من ترتيب ما قبل القتال',
    backTo: 't72-open-pre-combat',
  },

  't72-open-pre-combat-سرية': {
    title: 'السرية',
    backLabel: 'الفتح من ترتيب ما قبل القتال',
    backTo: 't72-open-pre-combat',
  },

  't72-open-pre-combat-كتيبة': {
    title: 'الكتيبة',
    backLabel: 'الفتح من ترتيب ما قبل القتال',
    backTo: 't72-open-pre-combat',
  },

  't72-pre-combat-to-column': {
    title: 'الانتقال من ترتيب ما قبل القتال الى الرتل',
    backLabel: 'T72',
    backTo: 't72',
  },

  't72-pre-combat-to-column-سرية': {
    title: 'السرية',
    backLabel: 'الانتقال من ترتيب ما قبل القتال الى الرتل',
    backTo: 't72-pre-combat-to-column',
  },

  't72-pre-combat-to-column-كتيبة': {
    title: 'الكتيبة',
    backLabel: 'الانتقال من ترتيب ما قبل القتال الى الرتل',
    backTo: 't72-pre-combat-to-column',
  },

  't72-column-to-combat': {
    title: 'الفتح من رتل التحرك الى ترتيب القتال الصد هجوم مفاجئ معاد (باتجاه الجبهة)',
    backLabel: 'T72',
    backTo: 't72',
  },

  't72-column-to-combat-سرية': {
    title: 'السرية',
    backLabel: 'الفتح من رتل التحرك الى ترتيب القتال الصد هجوم مفاجئ معاد (باتجاه الجبهة)',
    backTo: 't72-column-to-combat',
  },

  't72-column-to-combat-كتيبة': {
    title: 'الكتيبة',
    backLabel: 'الفتح من رتل التحرك الى ترتيب القتال الصد هجوم مفاجئ معاد (باتجاه الجبهة)',
    backTo: 't72-column-to-combat',
  },

  't72-column-to-combat-flank': {
    title: 'الفتح من رتل التحرك الى ترتيب القتال الصد هجوم مفاجئ معاد (باتجاه الجوانب)',
    backLabel: 'T72',
    backTo: 't72',
  },

  't72-column-to-combat-flank-فصيلة': {
    title: 'الفصيلة',
    backLabel: 'الفتح من رتل التحرك الى ترتيب القتال الصد هجوم مفاجئ معاد (باتجاه الجوانب)',
    backTo: 't72-column-to-combat-flank',
  },

  't72-column-to-combat-flank-سرية': {
    title: 'السرية',
    backLabel: 'الفتح من رتل التحرك الى ترتيب القتال الصد هجوم مفاجئ معاد (باتجاه الجوانب)',
    backTo: 't72-column-to-combat-flank',
  },

  't72-column-to-combat-flank-كتيبة': {
    title: 'الكتيبة',
    backLabel: 'الفتح من رتل التحرك الى ترتيب القتال الصد هجوم مفاجئ معاد (باتجاه الجوانب)',
    backTo: 't72-column-to-combat-flank',
  },

  't72-move-and-occupy-firing-line': {
    title: 'التحرك واحتلال خط رمي لصد هجمات العدو',
    backLabel: 'T72',
    backTo: 't72',
  },

  't72-move-and-occupy-firing-line-فصيلة': {
    title: 'الفصيلة',
    backLabel: 'التحرك واحتلال خط رمي لصد هجمات العدو',
    backTo: 't72-move-and-occupy-firing-line',
  },

  't72-move-and-occupy-firing-line-سرية': {
    title: 'السرية',
    backLabel: 'التحرك واحتلال خط رمي لصد هجمات العدو',
    backTo: 't72-move-and-occupy-firing-line',
  },

  't72-load-tanks-on-heavy-carriers': {
    title: 'تحميل الدبابات على الحاملات ذات الحمولة الكبيرة (50 طن)',
    backLabel: 'T72',
    backTo: 't72',
  },
  
  't72-load-tanks-on-heavy-carriers-طاقم': {
    title: 'الطاقم',
    backLabel: 'تحميل الدبابات على الحاملات ذات الحمولة الكبيرة (50 طن)',
    backTo: 't72-load-tanks-on-heavy-carriers',
  },

  't72-load-tanks-on-heavy-carriers-فصيلة': {
    title: 'الفصيلة',
    backLabel: 'تحميل الدبابات على الحاملات ذات الحمولة الكبيرة (50 طن)',
    backTo: 't72-load-tanks-on-heavy-carriers',
  },

  't72-load-tanks-on-heavy-carriers-سرية': {
    title: 'السرية',
    backLabel: 'تحميل الدبابات على الحاملات ذات الحمولة الكبيرة (50 طن)',
    backTo: 't72-load-tanks-on-heavy-carriers',
  },

  't72-unload-tanks-from-heavy-carriers': {
    title: 'تنزيل الدبابات عن الحاملات ذات الحمولة الكبيرة (50 طن)',
    backLabel: 'T72',
    backTo: 't72',
  },

  't72-unload-tanks-from-heavy-carriers-طاقم': {
    title: 'الطاقم',
    backLabel: 'تنزيل الدبابات عن الحاملات ذات الحمولة الكبيرة (50 طن)',
    backTo: 't72-unload-tanks-from-heavy-carriers',
  },

  't72-unload-tanks-from-heavy-carriers-فصيلة': {
    title: 'الفصيلة',
    backLabel: 'تنزيل الدبابات عن الحاملات ذات الحمولة الكبيرة (50 طن)',
    backTo: 't72-unload-tanks-from-heavy-carriers',
  },

  't72-unload-tanks-from-heavy-carriers-سرية': {
    title: 'السرية',
    backLabel: 'تنزيل الدبابات عن الحاملات ذات الحمولة الكبيرة (50 طن)',
    backTo: 't72-unload-tanks-from-heavy-carriers',
  },

  't72-ammunition-stacking': {
    title: 'تنضيد الوحدة النارية في الدبابة (الوحدة النارية بالكامل)',
    backLabel: 'T72',
    backTo: 't72',
  },

  't72-ammunition-stacking-طاقم': {
    title: 'تنضيد الوحدة النارية في الدبابة (الوحدة النارية بالكامل)',
    backLabel: 'T72',
    backTo: 't72',
  },

  't72-carousel-ammunition-stacking': {
    title: 'تنضيد الوحدة النارية في الدبابة (فقط في الحامل الدوار)',
    backLabel: 'T72',
    backTo: 't72',
  },

  't72-carousel-ammunition-stacking-طاقم': {
    title: 'تنضيد الوحدة النارية في الدبابة (فقط في الحامل الدوار)',
    backLabel: 'T72',
    backTo: 't72',
  },

  't72-transfer-rounds-to-carousel': {
    title: 'نقل جميع طلقات المدفع من المنضدة الآلية الى الحامل الدوار',
    backLabel: 'T72',
    backTo: 't72',
  },

  't72-transfer-rounds-to-carousel-طاقم': {
    title: 'نقل جميع طلقات المدفع من المنضدة الآلية الى الحامل الدوار',
    backLabel: 'T72',
    backTo: 't72',
  },

  't72-travel-to-combat-without-stabilizer': {
    title: 'تحويل حجرة القتال واسلحة الدبابة من وضعية الرحيل الى وضعية القتال (دون تشغيل جهاز الاستقرار)',
    backLabel: 'T72',
    backTo: 't72',
  },

  't72-travel-to-combat-without-stabilizer-طاقم': {
    title: 'تحويل حجرة القتال واسلحة الدبابة من وضعية الرحيل الى وضعية القتال (دون تشغيل جهاز الاستقرار)',
    backLabel: 'T72',
    backTo: 't72',
  },

  't72-travel-to-combat-with-stabilizer': {
    title: 'تحويل حجرة القتال واسلحة الدبابة من وضعية الرحيل الى وضعية القتال (مع تشغيل جهاز الاستقرار)',
    backLabel: 'T72',
    backTo: 't72',
  },

  't72-travel-to-combat-with-stabilizer-طاقم': {
    title: 'تحويل حجرة القتال واسلحة الدبابة من وضعية الرحيل الى وضعية القتال (مع تشغيل جهاز الاستقرار)',
    backLabel: 'T72',
    backTo: 't72',
  },

  't72-travel-to-combat-with-stabilizer-and-night-vision': {
    title: 'تحويل حجرة القتال واسلحة الدبابة من وضعية الرحيل الى وضعية القتال (مع تشغيل جهاز الاستقرار واجهزة الرؤية الليلية)',
    backLabel: 'T72',
    backTo: 't72',
  },

  't72-travel-to-combat-with-stabilizer-and-night-vision-طاقم': {
    title: 'تحويل حجرة القتال واسلحة الدبابة من وضعية الرحيل الى وضعية القتال (مع تشغيل جهاز الاستقرار واجهزة الرؤية الليلية)',
    backLabel: 'T72',
    backTo: 't72',
  },

  't72-combat-to-travel-with-stabilizer-off': {
    title: 'تحويل حجرة القتال واسلحة الدبابة من وضعية القتال الى وضعية الرحيل (مع اطفاء جهاز الاستقرار)',
    backLabel: 'T72',
    backTo: 't72',
  },

  't72-combat-to-travel-with-stabilizer-off-طاقم': {
    title: 'تحويل حجرة القتال واسلحة الدبابة من وضعية القتال الى وضعية الرحيل (مع اطفاء جهاز الاستقرار)',
    backLabel: 'T72',
    backTo: 't72',
  },
  

  // ============================================================
  // T(55 + 62)
  // ============================================================

  't55-62': {
    title: 'T(55 + 62)',
    backLabel: 'أسلحة ورمي',
    backTo: 'armored',
  },

  't55-62-boarding': {
    title: 'ركوب الطواقم في الدبابة',
    backLabel: 'T(55 + 62)',
    backTo: 't55-62',
  },

  't55-62-طاقم': {
    title: 'الطاقم',
    backLabel: 'ركوب الطواقم في الدبابة',
    backTo: 't55-62-boarding',
  },

  't55-62-فصيلة': {
    title: 'الفصيلة',
    backLabel: 'ركوب الطواقم في الدبابة',
    backTo: 't55-62-boarding',
  },

  't55-62-سرية': {
    title: 'السرية',
    backLabel: 'ركوب الطواقم في الدبابة',
    backTo: 't55-62-boarding',
  },

  't55-62-disembarking': {
    title: 'نزول الطواقم من الدبابة',
    backLabel: 'T(55 + 62)',
    backTo: 't55-62',
  },

  't55-62-disembarking-طاقم': {
    title: 'الطاقم',
    backLabel: 'نزول الطواقم من الدبابة',
    backTo: 't55-62-disembarking',
  },

  't55-62-disembarking-فصيلة': {
    title: 'الفصيلة',
    backLabel: 'نزول الطواقم من الدبابة',
    backTo: 't55-62-disembarking',
  },

  't55-62-disembarking-سرية': {
    title: 'السرية',
    backLabel: 'نزول الطواقم من الدبابة',
    backTo: 't55-62-disembarking',
  },

  't55-62-pre-combat': {
    title: 'الانتقال من تشكيلة الرتل إلى ترتيب ما قبل القتال',
    backLabel: 'T(55 + 62)',
    backTo: 't55-62',
  },

  't55-62-pre-combat-سرية': {
    title: 'السرية',
    backLabel: 'الانتقال من تشكيلة الرتل إلى ترتيب ما قبل القتال',
    backTo: 't55-62-pre-combat',
  },

  't55-62-pre-combat-كتيبة': {
    title: 'الكتيبة',
    backLabel: 'الانتقال من تشكيلة الرتل إلى ترتيب ما قبل القتال',
    backTo: 't55-62-pre-combat',
  },

  't55-62-combat-to-pre-combat': {
    title: 'الانتقال من ترتيب القتال الى ترتيب ما قبل القتال',
    backLabel: 'T(55 + 62)',
    backTo: 't55-62',
  },

  't55-62-combat-to-pre-combat-فصيلة': {
    title: 'الفصيلة',
    backLabel: 'الانتقال من ترتيب القتال الى ترتيب ما قبل القتال',
    backTo: 't55-62-combat-to-pre-combat',
  },

  't55-62-combat-to-pre-combat-سرية': {
    title: 'السرية',
    backLabel: 'الانتقال من ترتيب القتال الى ترتيب ما قبل القتال',
    backTo: 't55-62-combat-to-pre-combat',
  },

  't55-62-combat-to-pre-combat-كتيبة': {
    title: 'الكتيبة',
    backLabel: 'الانتقال من ترتيب القتال الى ترتيب ما قبل القتال',
    backTo: 't55-62-combat-to-pre-combat',
  },

  't55-62-open-pre-combat': {
    title: 'الفتح من ترتيب ما قبل القتال',
    backLabel: 'T(55 + 62)',
    backTo: 't55-62',
  },

  't55-62-open-pre-combat-فصيلة': {
    title: 'الفصيلة',
    backLabel: 'الفتح من ترتيب ما قبل القتال',
    backTo: 't55-62-open-pre-combat',
  },

  't55-62-open-pre-combat-سرية': {
    title: 'السرية',
    backLabel: 'الفتح من ترتيب ما قبل القتال',
    backTo: 't55-62-open-pre-combat',
  },

  't55-62-open-pre-combat-كتيبة': {
    title: 'الكتيبة',
    backLabel: 'الفتح من ترتيب ما قبل القتال',
    backTo: 't55-62-open-pre-combat',
  },

  't55-62-pre-combat-to-column': {
    title: 'الانتقال من ترتيب ما قبل القتال الى الرتل',
    backLabel: 'T(55 + 62)',
    backTo: 't55-62',
  },

  't55-62-pre-combat-to-column-سرية': {
    title: 'السرية',
    backLabel: 'الانتقال من ترتيب ما قبل القتال الى الرتل',
    backTo: 't55-62-pre-combat-to-column',
  },

  't55-62-pre-combat-to-column-كتيبة': {
    title: 'الكتيبة',
    backLabel: 'الانتقال من ترتيب ما قبل القتال الى الرتل',
    backTo: 't55-62-pre-combat-to-column',
  },

  't55-62-column-to-combat': {
    title: 'الفتح من رتل التحرك الى ترتيب القتال الصد هجوم مفاجئ معاد (باتجاه الجبهة)',
    backLabel: 'T(55 + 62)',
    backTo: 't55-62',
  },

  't55-62-column-to-combat-سرية': {
    title: 'السرية',
    backLabel: 'الفتح من رتل التحرك الى ترتيب القتال الصد هجوم مفاجئ معاد (باتجاه الجبهة)',
    backTo: 't55-62-column-to-combat',
  },

  't55-62-column-to-combat-كتيبة': {
    title: 'الكتيبة',
    backLabel: 'الفتح من رتل التحرك الى ترتيب القتال الصد هجوم مفاجئ معاد (باتجاه الجبهة)',
    backTo: 't55-62-column-to-combat',
  },

  't55-62-column-to-combat-flank': {
    title: 'الفتح من رتل التحرك الى ترتيب القتال الصد هجوم مفاجئ معاد (باتجاه الجوانب)',
    backLabel: 'T(55 + 62)',
    backTo: 't55-62',
  },

  't55-62-column-to-combat-flank-فصيلة': {
    title: 'الفصيلة',
    backLabel: 'الفتح من رتل التحرك الى ترتيب القتال الصد هجوم مفاجئ معاد (باتجاه الجوانب)',
    backTo: 't55-62-column-to-combat-flank',
  },

  't55-62-column-to-combat-flank-سرية': {
    title: 'السرية',
    backLabel: 'الفتح من رتل التحرك الى ترتيب القتال الصد هجوم مفاجئ معاد (باتجاه الجوانب)',
    backTo: 't55-62-column-to-combat-flank',
  },

  't55-62-column-to-combat-flank-كتيبة': {
    title: 'الكتيبة',
    backLabel: 'الفتح من رتل التحرك الى ترتيب القتال الصد هجوم مفاجئ معاد (باتجاه الجوانب)',
    backTo: 't55-62-column-to-combat-flank',
  },

  't55-62-move-and-occupy-firing-line': {
    title: 'التحرك واحتلال خط رمي لصد هجمات العدو',
    backLabel: 'T(55 + 62)',
    backTo: 't55-62',
  },

  't55-62-move-and-occupy-firing-line-فصيلة': {
    title: 'الفصيلة',
    backLabel: 'التحرك واحتلال خط رمي لصد هجمات العدو',
    backTo: 't55-62-move-and-occupy-firing-line',
  },

  't55-62-move-and-occupy-firing-line-سرية': {
    title: 'السرية',
    backLabel: 'التحرك واحتلال خط رمي لصد هجمات العدو',
    backTo: 't55-62-move-and-occupy-firing-line',
  },

  't55-62-load-tanks-on-heavy-carriers': {
    title: 'تحميل الدبابات على الحاملات ذات الحمولة الكبيرة (50 طن)',
    backLabel: 'T(55 + 62)',
    backTo: 't55-62',
  },

  't55-62-load-tanks-on-heavy-carriers-طاقم': {
    title: 'الطاقم',
    backLabel: 'تحميل الدبابات على الحاملات ذات الحمولة الكبيرة (50 طن)',
    backTo: 't55-62-load-tanks-on-heavy-carriers',
  },

  't55-62-load-tanks-on-heavy-carriers-فصيلة': {
    title: 'الفصيلة',
    backLabel: 'تحميل الدبابات على الحاملات ذات الحمولة الكبيرة (50 طن)',
    backTo: 't55-62-load-tanks-on-heavy-carriers',
  },

  't55-62-load-tanks-on-heavy-carriers-سرية': {
    title: 'السرية',
    backLabel: 'تحميل الدبابات على الحاملات ذات الحمولة الكبيرة (50 طن)',
    backTo: 't55-62-load-tanks-on-heavy-carriers',
  },

  't55-62-unload-tanks-from-heavy-carriers': {
    title: 'تنزيل الدبابات عن الحاملات ذات الحمولة الكبيرة (50 طن)',
    backLabel: 'T(55 + 62)',
    backTo: 't55-62',
  },

  't55-62-unload-tanks-from-heavy-carriers-طاقم': {
    title: 'الطاقم',
    backLabel: 'تنزيل الدبابات عن الحاملات ذات الحمولة الكبيرة (50 طن)',
    backTo: 't55-62-unload-tanks-from-heavy-carriers',
  },

  't55-62-unload-tanks-from-heavy-carriers-فصيلة': {
    title: 'الفصيلة',
    backLabel: 'تنزيل الدبابات عن الحاملات ذات الحمولة الكبيرة (50 طن)',
    backTo: 't55-62-unload-tanks-from-heavy-carriers',
  },

  't55-62-unload-tanks-from-heavy-carriers-سرية': {
    title: 'السرية',
    backLabel: 'تنزيل الدبابات عن الحاملات ذات الحمولة الكبيرة (50 طن)',
    backTo: 't55-62-unload-tanks-from-heavy-carriers',
  },

  't55-62-ammunition-stacking': {
    title: 'تنضيد الوحدة النارية في الدبابة (الوحدة النارية بالكامل)',
    backLabel: 'T(55 + 62)',
    backTo: 't55-62',
  },

  // ============================================================
  // T55
  // ============================================================

  t55: {
    title: 'T55',
    backLabel: 'أسلحة ورمي',
    backTo: 'armored',
  },

  't55-ammunition-stacking': {
    title: 'تنضيد الوحدة النارية في الدبابة (الوحدة النارية بالكامل)',
    backLabel: 'T55',
    backTo: 't55',
  },

  't55-ammunition-stacking-طاقم': {
    title: 'تنضيد الوحدة النارية في الدبابة (الوحدة النارية بالكامل)',
    backLabel: 'T55',
    backTo: 't55',
  },

  't55-travel-to-combat-without-stabilizer': {
    title: 'تحويل حجرة القتال واسلحة الدبابة من وضعية الرحيل الى وضعية القتال (دون تشغيل جهاز الاستقرار)',
    backLabel: 'T55',
    backTo: 't55',
  },

  't55-travel-to-combat-without-stabilizer-طاقم': {
    title: 'تحويل حجرة القتال واسلحة الدبابة من وضعية الرحيل الى وضعية القتال (دون تشغيل جهاز الاستقرار)',
    backLabel: 'T55',
    backTo: 't55',
  },

  't55-travel-to-combat-with-stabilizer': {
    title: 'تحويل حجرة القتال واسلحة الدبابة من وضعية الرحيل الى وضعية القتال (مع تشغيل جهاز الاستقرار)',
    backLabel: 'T55',
    backTo: 't55',
  },

  't55-travel-to-combat-with-stabilizer-طاقم': {
    title: 'تحويل حجرة القتال واسلحة الدبابة من وضعية الرحيل الى وضعية القتال (مع تشغيل جهاز الاستقرار)',
    backLabel: 'T55',
    backTo: 't55',
  },

  't55-travel-to-combat-with-stabilizer-and-night-vision': {
    title: 'تحويل حجرة القتال واسلحة الدبابة من وضعية الرحيل الى وضعية القتال (مع تشغيل جهاز الاستقرار واجهزة الرؤية الليلية)',
    backLabel: 'T55',
    backTo: 't55',
  },

  't55-travel-to-combat-with-stabilizer-and-night-vision-طاقم': {
    title: 'تحويل حجرة القتال واسلحة الدبابة من وضعية الرحيل الى وضعية القتال (مع تشغيل جهاز الاستقرار واجهزة الرؤية الليلية)',
    backLabel: 'T55',
    backTo: 't55',
  },

  't55-combat-to-travel-with-stabilizer-off': {
    title: 'تحويل حجرة القتال واسلحة الدبابة من وضعية القتال الى وضعية الرحيل (مع اطفاء جهاز الاستقرار)',
    backLabel: 'T55',
    backTo: 't55',
  },

  't55-combat-to-travel-with-stabilizer-off-طاقم': {
    title: 'تحويل حجرة القتال واسلحة الدبابة من وضعية القتال الى وضعية الرحيل (مع اطفاء جهاز الاستقرار)',
    backLabel: 'T55',
    backTo: 't55',
  },

  // ============================================================
  // T62
  // ============================================================

  t62: {
    title: 'T62',
    backLabel: 'أسلحة ورمي',
    backTo: 'armored',
  },

  't62-ammunition-stacking': {
    title: 'تنضيد الوحدة النارية في الدبابة (الوحدة النارية بالكامل)',
    backLabel: 'T62',
    backTo: 't62',
  },

  't62-ammunition-stacking-طاقم': {
    title: 'تنضيد الوحدة النارية في الدبابة (الوحدة النارية بالكامل)',
    backLabel: 'T62',
    backTo: 't62',
  },

  't62-travel-to-combat-without-stabilizer': {
    title: 'تحويل حجرة القتال واسلحة الدبابة من وضعية الرحيل الى وضعية القتال (دون تشغيل جهاز الاستقرار)',
    backLabel: 'T62',
    backTo: 't62',
  },

  't62-travel-to-combat-without-stabilizer-طاقم': {
    title: 'تحويل حجرة القتال واسلحة الدبابة من وضعية الرحيل الى وضعية القتال (دون تشغيل جهاز الاستقرار)',
    backLabel: 'T62',
    backTo: 't62',
  },

  't62-travel-to-combat-with-stabilizer': {
    title: 'تحويل حجرة القتال واسلحة الدبابة من وضعية الرحيل الى وضعية القتال (مع تشغيل جهاز الاستقرار)',
    backLabel: 'T62',
    backTo: 't62',
  },

  't62-travel-to-combat-with-stabilizer-طاقم': {
    title: 'تحويل حجرة القتال واسلحة الدبابة من وضعية الرحيل الى وضعية القتال (مع تشغيل جهاز الاستقرار)',
    backLabel: 'T62',
    backTo: 't62',
  },

  't62-travel-to-combat-with-stabilizer-and-night-vision': {
    title: 'تحويل حجرة القتال واسلحة الدبابة من وضعية الرحيل الى وضعية القتال (مع تشغيل جهاز الاستقرار واجهزة الرؤية الليلية)',
    backLabel: 'T62',
    backTo: 't62',
  },

  't62-travel-to-combat-with-stabilizer-and-night-vision-طاقم': {
    title: 'تحويل حجرة القتال واسلحة الدبابة من وضعية الرحيل الى وضعية القتال (مع تشغيل جهاز الاستقرار واجهزة الرؤية الليلية)',
    backLabel: 'T62',
    backTo: 't62',
  },

  't62-combat-to-travel-with-stabilizer-off': {
    title: 'تحويل حجرة القتال واسلحة الدبابة من وضعية القتال الى وضعية الرحيل (مع اطفاء جهاز الاستقرار)',
    backLabel: 'T62',
    backTo: 't62',
  },

  't62-combat-to-travel-with-stabilizer-off-طاقم': {
    title: 'تحويل حجرة القتال واسلحة الدبابة من وضعية القتال الى وضعية الرحيل (مع اطفاء جهاز الاستقرار)',
    backLabel: 'T62',
    backTo: 't62',
  },

}

/**
 * Returns the comprehensive, full display title for any test or section.
 * E.g., for 'stomach-category-one' -> 'تمرين المعدة - الفئة الأولى'
 * For 't72-boarding' -> 'T72 - ركوب الطواقم في الدبابة'
 * For 't72-طاقم' -> 'T72 - ركوب الطواقم في الدبابة (الطاقم)'
 */
export function getFullTestName(view: View): string {
  const current = viewContent[view]
  if (!current) return ''

  // Top level sections
  if (view === 'sports' || view === 'armored') {
    return current.title
  }

  // 1. If it's a category test (e.g. stomach-category-one, pushups-category-two, etc.)
  if (current.title.startsWith('الفئة')) {
    const parent = current.backTo ? viewContent[current.backTo] : null
    const testTitle = parent ? parent.title : current.backLabel
    return `${testTitle} - ${current.title}`
  }

  // 2. If it's an armored unit-specific test (e.g. t72-طاقم, t72-فصيلة, t72-سرية)
  const isUnitLeaf =
    current.title === 'الطاقم' ||
    current.title === 'الفصيلة' ||
    current.title === 'السرية' ||
    current.title === 'الكتيبة'

  if (isUnitLeaf && current.backTo) {
    const parent = viewContent[current.backTo]
    if (parent) {
      const grandparent = parent.backTo ? viewContent[parent.backTo] : null
      const vehicle =
        grandparent?.title && (grandparent.title === 'T72' || grandparent.title === 'T55' || grandparent.title === 'T62' || grandparent.title === 'T(55 + 62)')
          ? grandparent.title
          : null
      if (vehicle) {
        return `${vehicle} - ${parent.title} (${current.title})`
      }
      return `${parent.title} - ${current.title}`
    }
  }

  // 3. If it's an armored drill category (e.g. t72-boarding or ammunition-stacking)
  if (current.backTo) {
    const parent = viewContent[current.backTo]
    if (parent && (parent.title === 'T72' || parent.title === 'T55' || parent.title === 'T62' || parent.title === 'T(55 + 62)')) {
      return `${parent.title} - ${current.title}`
    }
  }

  return current.title
}