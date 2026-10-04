import {
  BookOpen,
  Dumbbell,
  Medal,
  Timer,
} from 'lucide-react'

import { FavoritesPanel } from './favorites'
import { InfoPanel } from './info-panel'
import { SectionButton } from './section-button'

import { renderView } from '@/lib/app/view-renderers'
import type { OpenView, View } from '@/lib/app/types'

interface AppContentProps {
  activeView: View
  openView: OpenView
}

export function AppContent({
  activeView,
  openView,
}: AppContentProps) {
  if (activeView === 'home') {
    return null
  }

  if (activeView === 'favorites') {
    return <FavoritesPanel openView={openView} />
  }

  if (activeView === 'guide') {
    return (
      <InfoPanel
        title="التعليمات"
        text="استخدم البطاقات للتنقل بين الأقسام. جميع البيانات مضمّنة داخل التطبيق، لذلك يمكنك استخدامه حتى عند عدم توفر الإنترنت."
        icon={BookOpen}
        openView={openView}
      />
    )
  }

  if (activeView === 'armored') {
    return (
      <div className="grid gap-4">
        <SectionButton
          label="T72"
          description="اختبار ركوب الطواقم في الدبابة"
          icon={Medal}
          onClick={() => openView('t72')}
        />

        <SectionButton
          label="T55+62"
          description="اختبار ركوب الطواقم في الدبابة"
          icon={Medal}
          onClick={() => openView('t55-62')}
        />
      </div>
    )
  }

  if (activeView === 't72') {
    return (
      <div className="grid gap-4">
        <SectionButton
          label="ركوب الطواقم في الدبابة"
          description="الطاقم والفصيلة والسرية"
          icon={Medal}
          onClick={() => openView('t72-boarding')}
        />

        <SectionButton
          label="نزول الطواقم من الدبابة"
          description="الطاقم والفصيلة والسرية"
          icon={Medal}
          onClick={() => openView('t72-disembarking')}
        />

        <SectionButton
          label="الانتقال من تشكيلة الرتل إلى ترتيب ما قبل القتال"
          description="السرية والكتيبة"
          icon={Medal}
          onClick={() => openView('t72-pre-combat')}
        />

        <SectionButton
          label="الانتقال من ترتيب القتال الى ترتيب ما قبل القتال"
          description="الفصيلة والسرية والكتيبة"
          icon={Medal}
          onClick={() => openView('t72-combat-to-pre-combat')}
        />

        <SectionButton
          label="الفتح من ترتيب ما قبل القتال"
          description="الفصيلة والسرية والكتيبة"
          icon={Medal}
          onClick={() => openView('t72-open-pre-combat')}
        />

        <SectionButton
          label="الانتقال من ترتيب ما قبل القتال الى الرتل"
          description="السرية والكتيبة"
          icon={Medal}
          onClick={() => openView('t72-pre-combat-to-column')}
        />

        <SectionButton
          label="الفتح من رتل التحرك الى ترتيب القتال الصد هجوم مفاجئ معاد (باتجاه الجبهة)"
          description="السرية والكتيبة"
          icon={Medal}
          onClick={() => openView('t72-column-to-combat')}
        />

        <SectionButton
          label="الفتح من رتل التحرك الى ترتيب القتال الصد هجوم مفاجئ معاد (باتجاه الجوانب)"
          description="الفصيلة والسرية والكتيبة"
          icon={Medal}
          onClick={() => openView('t72-column-to-combat-flank')}
        />
        <SectionButton
          label="التحرك واحتلال خط رمي لصد هجمات العدو"
          description="الفصيلة والسرية"
          icon={Medal}
          onClick={() => openView('t72-move-and-occupy-firing-line')}
        />

        <SectionButton
          label="تحميل الدبابات على الحاملات ذات الحمولة الكبيرة (50 طن)"
          description="الطاقم والفصيلة والسرية"
          icon={Medal}
          onClick={() => openView('t72-load-tanks-on-heavy-carriers')}
        />

        <SectionButton
          label="تنزيل الدبابات عن الحاملات ذات الحمولة الكبيرة (50 طن)"
          description="الطاقم والفصيلة والسرية"
          icon={Medal}
          onClick={() => openView('t72-unload-tanks-from-heavy-carriers')}
        />

        
      </div>
    )
  }

  if (activeView === 't55-62') {
    return (
      <div className="grid gap-4">
        <SectionButton
          label="ركوب الطواقم في الدبابة"
          description="الطاقم والفصيلة والسرية"
          icon={Medal}
          onClick={() => openView('t55-62-boarding')}
        />

        <SectionButton
          label="نزول الطواقم من الدبابة"
          description="الطاقم والفصيلة والسرية"
          icon={Medal}
          onClick={() => openView('t55-62-disembarking')}
        />

        <SectionButton
          label="الانتقال من تشكيلة الرتل إلى ترتيب ما قبل القتال"
          description="السرية والكتيبة"
          icon={Medal}
          onClick={() => openView('t55-62-pre-combat')}
        />

        <SectionButton
          label="الانتقال من ترتيب القتال الى ترتيب ما قبل القتال"
          description="الفصيلة والسرية والكتيبة"
          icon={Medal}
          onClick={() =>
            openView('t55-62-combat-to-pre-combat')
          }
        />

        <SectionButton
          label="الفتح من ترتيب ما قبل القتال"
          description="الفصيلة والسرية والكتيبة"
          icon={Medal}
          onClick={() =>
            openView('t55-62-open-pre-combat')
          }
        />

        <SectionButton
          label="الانتقال من ترتيب ما قبل القتال الى الرتل"
          description="السرية والكتيبة"
          icon={Medal}
          onClick={() =>
            openView('t55-62-pre-combat-to-column')
          }
        />

        <SectionButton
          label="الفتح من رتل التحرك الى ترتيب القتال الصد هجوم مفاجئ معاد (باتجاه الجبهة)"
          description="السرية والكتيبة"
          icon={Medal}
          onClick={() => openView('t55-62-column-to-combat')}
        />

        <SectionButton
          label="الفتح من رتل التحرك الى ترتيب القتال الصد هجوم مفاجئ معاد (باتجاه الجوانب)"
          description="الفصيلة والسرية والكتيبة"
          icon={Medal}
          onClick={() => openView('t55-62-column-to-combat-flank')}
        />
        <SectionButton
          label="التحرك واحتلال خط رمي لصد هجمات العدو"
          description="الفصيلة والسرية"
          icon={Medal}
          onClick={() => openView('t55-62-move-and-occupy-firing-line')}
        />

        <SectionButton
          label="تحميل الدبابات على الحاملات ذات الحمولة الكبيرة (50 طن)"
          description="الطاقم والفصيلة والسرية"
          icon={Medal}
          onClick={() => openView('t55-62-load-tanks-on-heavy-carriers')}
        />

        <SectionButton
          label="تنزيل الدبابات عن الحاملات ذات الحمولة الكبيرة (50 طن)"
          description="الطاقم والفصيلة والسرية"
          icon={Medal}
          onClick={() => openView('t55-62-unload-tanks-from-heavy-carriers')}
        />


      </div>
    )
  }

  if (activeView === 'sports') {
    return (
      <div className="grid gap-4">
        <SectionButton
          label="تمرين المعدة"
          description="اختبار التكرارات مع إدخال النتائج"
          icon={Dumbbell}
          onClick={() => openView('stomach')}
        />

        <SectionButton
          label="التمرين السادس"
          description="ثني ومد الذراعين"
          icon={Dumbbell}
          onClick={() => openView('pushups')}
        />

        <SectionButton
          label="القوة المركبة"
          description="اختبار القوة المركبة"
          icon={Dumbbell}
          onClick={() => openView('compound-strength')}
        />

        <SectionButton
          label="سحب الجسم على الثابت"
          description="اختبار العقلة والتكرارات"
          icon={Dumbbell}
          onClick={() => openView('pullups')}
        />

        <SectionButton
          label="100 متر"
          description="سباق السرعة لمسافة مئة متر"
          icon={Timer}
          onClick={() => openView('hundred')}
        />

        <SectionButton
          label="1 كم"
          description="سباق الجري لمسافة كيلومتر واحد"
          icon={Timer}
          onClick={() => openView('one-km')}
        />

        <SectionButton
          label="2 كم"
          description="سباق الجري لمسافة كيلومترين اثنين"
          icon={Timer}
          onClick={() => openView('two-km')}
        />

        <SectionButton
          label="3 كم"
          description="سباق الجري لمسافة ثلاثة كيلومترات"
          icon={Timer}
          onClick={() => openView('three-km')}
        />

        <SectionButton
          label="5 كم"
          description="سباق الجري لمسافة خمسة كيلومترات"
          icon={Timer}
          onClick={() => openView('five-km')}
        />

        <SectionButton
          label="4×100 متر"
          description="سباق التتابع لمسافة 4×100 متر"
          icon={Timer}
          onClick={() => openView('4x100')}
        />
      </div>
    )
  }

  const renderedView = renderView(
    activeView,
    openView,
  )

  return renderedView
}
