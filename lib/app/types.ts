export type View =
  | 'home'
  | 'guide'
  | 'sports'
  | 'armored'

  // Sports
  | 'stomach'
  | 'stomach-category-one'
  | 'stomach-category-two'
  | 'stomach-category-three'
  | 'stomach-category-four'
  | 'stomach-category-five'
  | 'stomach-category-six'
  | 'stomach-category-seven'

  | 'pushups'
  | 'pushups-category-one'
  | 'pushups-category-two'
  | 'pushups-category-three'
  | 'pushups-category-four'
  | 'pushups-category-five'
  | 'pushups-category-six'
  | 'pushups-category-seven'

  | 'compound-strength'
  | 'compound-strength-category-one'
  | 'compound-strength-category-two'
  | 'compound-strength-category-three'
  | 'compound-strength-category-four'
  | 'compound-strength-category-five'
  | 'compound-strength-category-six'
  | 'compound-strength-category-seven'

  | 'pullups'
  | 'pullups-category-one'
  | 'pullups-category-two'
  | 'pullups-category-three'
  | 'pullups-category-four'
  | 'pullups-category-five'
  | 'pullups-category-six'
  | 'pullups-category-seven'

  | 'hundred'
  | 'category-one'
  | 'category-two'
  | 'category-three'
  | 'category-four'
  | 'category-five'
  | 'category-six'
  | 'category-seven'

  | 'one-km'
  | 'one-km-category-one'
  | 'one-km-category-two'
  | 'one-km-category-three'
  | 'one-km-category-four'
  | 'one-km-category-five'
  | 'one-km-category-six'
  | 'one-km-category-seven'

  | 'two-km'
  | 'two-km-category-one'
  | 'two-km-category-two'
  | 'two-km-category-three'
  | 'two-km-category-four'

  | 'three-km'
  | 'three-km-category-one'
  | 'three-km-category-two'
  | 'three-km-category-three'

  | 'five-km'
  | 'five-km-category-one'
  | 'five-km-category-two'
  | 'five-km-category-three'

  | '4x100'
  | '4x100-category-one'
  | '4x100-category-two'
  | '4x100-category-three'
  | '4x100-category-four'
  | '4x100-category-five'
  | '4x100-category-six'

  // T72
  | 't72'
  | 't72-boarding'
  | 't72-طاقم'
  | 't72-فصيلة'
  | 't72-سرية'

  | 't72-disembarking'
  | 't72-disembarking-طاقم'
  | 't72-disembarking-فصيلة'
  | 't72-disembarking-سرية'

  | 't72-pre-combat'
  | 't72-pre-combat-سرية'
  | 't72-pre-combat-كتيبة'

  | 't72-combat-to-pre-combat'
  | 't72-combat-to-pre-combat-فصيلة'
  | 't72-combat-to-pre-combat-سرية'
  | 't72-combat-to-pre-combat-كتيبة'

  | 't72-open-pre-combat'
  | 't72-open-pre-combat-فصيلة'
  | 't72-open-pre-combat-سرية'
  | 't72-open-pre-combat-كتيبة'

  | 't72-pre-combat-to-column'
  | 't72-pre-combat-to-column-سرية'
  | 't72-pre-combat-to-column-كتيبة'

  | 't72-column-to-combat'
  | 't72-column-to-combat-سرية'
  | 't72-column-to-combat-كتيبة'

  | 't72-column-to-combat-flank'
  | 't72-column-to-combat-flank-فصيلة'
  | 't72-column-to-combat-flank-سرية'
  | 't72-column-to-combat-flank-كتيبة'


  // T55+62
  | 't55-62'
  | 't55-62-boarding'
  | 't55-62-طاقم'
  | 't55-62-فصيلة'
  | 't55-62-سرية'

  | 't55-62-disembarking'
  | 't55-62-disembarking-طاقم'
  | 't55-62-disembarking-فصيلة'
  | 't55-62-disembarking-سرية'

  | 't55-62-pre-combat'
  | 't55-62-pre-combat-سرية'
  | 't55-62-pre-combat-كتيبة'

  | 't55-62-combat-to-pre-combat'
  | 't55-62-combat-to-pre-combat-فصيلة'
  | 't55-62-combat-to-pre-combat-سرية'
  | 't55-62-combat-to-pre-combat-كتيبة'

  | 't55-62-open-pre-combat'
  | 't55-62-open-pre-combat-فصيلة'
  | 't55-62-open-pre-combat-سرية'
  | 't55-62-open-pre-combat-كتيبة'

  | 't55-62-pre-combat-to-column'
  | 't55-62-pre-combat-to-column-سرية'
  | 't55-62-pre-combat-to-column-كتيبة'

  | 't55-62-column-to-combat'
  | 't55-62-column-to-combat-سرية'
  | 't55-62-column-to-combat-كتيبة'

  | 't55-62-column-to-combat-flank'
  | 't55-62-column-to-combat-flank-فصيلة'
  | 't55-62-column-to-combat-flank-سرية'
  | 't55-62-column-to-combat-flank-كتيبة'

  
export interface ViewContent {
  title: string
  backLabel: string
  backTo: View
}

export type OpenView = (view: View) => void