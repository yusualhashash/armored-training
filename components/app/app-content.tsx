import {
  BookOpen,
  Dumbbell,
  Medal,
  Timer,
} from 'lucide-react'

import { FavoritesPanel } from './favorites'
import { InfoPanel } from './info-panel'
import { SectionButton } from './section-button'
import { SportsMainView } from '@/components/sports/sports-main-view'
import { HistoryView } from '@/components/history/history-view'

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

  if (activeView === 'history') {
    return <HistoryView openView={openView} />
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
      />
    )
  }

  if (activeView === 'armored') {
    return (
      <div className="grid gap-4">
        <SectionButton
          label="T72"
          description="دبابة T-72"
          icon={Medal}
          onClick={() => openView('t72')}
        />

        <SectionButton
          label="T62"
          description="دبابة T-62"
          icon={Medal}
          onClick={() => openView('t62')}
        />

        <SectionButton
          label="T55"
          description="دبابة T-55"
          icon={Medal}
          onClick={() => openView('t55')}
        />

        <SectionButton
          label="T(55 + 62)"
          description="التمارين التكتيكية المشتركة"
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
          label="تنضيد الوحدة النارية في الدبابة (الوحدة النارية بالكامل)"
          description="الطاقم"
          icon={Medal}
          onClick={() => openView('t72-ammunition-stacking')}
        />

        <SectionButton
          label="تنضيد الوحدة النارية في الدبابة (فقط في الحامل الدوار)"
          description="الطاقم"
          icon={Medal}
          onClick={() => openView('t72-carousel-ammunition-stacking')}
        />

        <SectionButton
          label="نقل جميع طلقات المدفع من المنضدة الآلية الى الحامل الدوار"
          description="الطاقم"
          icon={Medal}
          onClick={() => openView('t72-transfer-rounds-to-carousel')}
        />

        <SectionButton
          label="تحويل حجرة القتال واسلحة الدبابة من وضعية الرحيل الى وضعية القتال (دون تشغيل جهاز الاستقرار)"
          description="الطاقم"
          icon={Medal}
          onClick={() => openView('t72-travel-to-combat-without-stabilizer')}
        />

        <SectionButton
          label="تحويل حجرة القتال واسلحة الدبابة من وضعية الرحيل الى وضعية القتال (مع تشغيل جهاز الاستقرار)"
          description="الطاقم"
          icon={Medal}
          onClick={() => openView('t72-travel-to-combat-with-stabilizer')}
        />

        <SectionButton
          label="تحويل حجرة القتال واسلحة الدبابة من وضعية الرحيل الى وضعية القتال (مع تشغيل جهاز الاستقرار واجهزة الرؤية الليلية)"
          description="الطاقم"
          icon={Medal}
          onClick={() => openView('t72-travel-to-combat-with-stabilizer-and-night-vision')}
        />

        <SectionButton
          label="تحويل حجرة القتال واسلحة الدبابة من وضعية القتال الى وضعية الرحيل (مع اطفاء جهاز الاستقرار)"
          description="الطاقم"
          icon={Medal}
          onClick={() => openView('t72-combat-to-travel-with-stabilizer-off')}
        />

        <SectionButton
          label="تحويل حجرة القتال واسلحة الدبابة من وضعية القتال الى وضعية الرحيل (مع تشغيل جهاز الاستقرار)"
          description="الطاقم"
          icon={Medal}
          onClick={() => openView('t72-combat-to-travel-with-stabilizer')}
        />

        <SectionButton
          label="تحويل حجرة القتال واسلحة الدبابة من وضعية القتال الى وضعية الرحيل (مع تشغيل جهاز الاستقرار واجهزة الرؤية الليلية)"
          description="الطاقم"
          icon={Medal}
          onClick={() => openView('t72-combat-to-travel-with-stabilizer-and-night-vision')}
        />

        <SectionButton
          label="تبديل الطارق (القدّاح) آلية طارق مغلاق المدفع"
          description="السدنة"
          icon={Medal}
          onClick={() => openView('t72-replace-firing-pin')}
        />

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

  if (activeView === 't55') {
    return (
      <div className="grid gap-4">
        <SectionButton
          label="تنضيد الوحدة النارية في الدبابة (الوحدة النارية بالكامل)"
          description="الطاقم"
          icon={Medal}
          onClick={() => openView('t55-ammunition-stacking')}
        />

        <SectionButton
          label="تحويل حجرة القتال واسلحة الدبابة من وضعية الرحيل الى وضعية القتال (دون تشغيل جهاز الاستقرار)"
          description="الطاقم"
          icon={Medal}
          onClick={() => openView('t55-travel-to-combat-without-stabilizer')}
        />

        <SectionButton
          label="تحويل حجرة القتال واسلحة الدبابة من وضعية الرحيل الى وضعية القتال (مع تشغيل جهاز الاستقرار)"
          description="الطاقم"
          icon={Medal}
          onClick={() => openView('t55-travel-to-combat-with-stabilizer')}
        />

        <SectionButton
          label="تحويل حجرة القتال واسلحة الدبابة من وضعية الرحيل الى وضعية القتال (مع تشغيل جهاز الاستقرار واجهزة الرؤية الليلية)"
          description="الطاقم"
          icon={Medal}
          onClick={() => openView('t55-travel-to-combat-with-stabilizer-and-night-vision')}
        />

        <SectionButton
          label="تحويل حجرة القتال واسلحة الدبابة من وضعية القتال الى وضعية الرحيل (مع اطفاء جهاز الاستقرار)"
          description="الطاقم"
          icon={Medal}
          onClick={() => openView('t55-combat-to-travel-with-stabilizer-off')}
        />

        <SectionButton
          label="تحويل حجرة القتال واسلحة الدبابة من وضعية القتال الى وضعية الرحيل (مع تشغيل جهاز الاستقرار)"
          description="الطاقم"
          icon={Medal}
          onClick={() => openView('t55-combat-to-travel-with-stabilizer')}
        />

        <SectionButton
          label="تحويل حجرة القتال واسلحة الدبابة من وضعية القتال الى وضعية الرحيل (مع تشغيل جهاز الاستقرار واجهزة الرؤية الليلية)"
          description="الطاقم"
          icon={Medal}
          onClick={() => openView('t55-combat-to-travel-with-stabilizer-and-night-vision')}
        />
      </div>
    )
  }

  if (activeView === 't62') {
    return (
      <div className="grid gap-4">
        <SectionButton
          label="تنضيد الوحدة النارية في الدبابة (الوحدة النارية بالكامل)"
          description="الطاقم"
          icon={Medal}
          onClick={() => openView('t62-ammunition-stacking')}
        />

        <SectionButton
          label="تحويل حجرة القتال واسلحة الدبابة من وضعية الرحيل الى وضعية القتال (دون تشغيل جهاز الاستقرار)"
          description="الطاقم"
          icon={Medal}
          onClick={() => openView('t62-travel-to-combat-without-stabilizer')}
        />

        <SectionButton
          label="تحويل حجرة القتال واسلحة الدبابة من وضعية الرحيل الى وضعية القتال (مع تشغيل جهاز الاستقرار)"
          description="الطاقم"
          icon={Medal}
          onClick={() => openView('t62-travel-to-combat-with-stabilizer')}
        />

        <SectionButton
          label="تحويل حجرة القتال واسلحة الدبابة من وضعية الرحيل الى وضعية القتال (مع تشغيل جهاز الاستقرار واجهزة الرؤية الليلية)"
          description="الطاقم"
          icon={Medal}
          onClick={() => openView('t62-travel-to-combat-with-stabilizer-and-night-vision')}
        />

        <SectionButton
          label="تحويل حجرة القتال واسلحة الدبابة من وضعية القتال الى وضعية الرحيل (مع اطفاء جهاز الاستقرار)"
          description="الطاقم"
          icon={Medal}
          onClick={() => openView('t62-combat-to-travel-with-stabilizer-off')}
        />

        <SectionButton
          label="تحويل حجرة القتال واسلحة الدبابة من وضعية القتال الى وضعية الرحيل (مع تشغيل جهاز الاستقرار)"
          description="الطاقم"
          icon={Medal}
          onClick={() => openView('t62-combat-to-travel-with-stabilizer')}
        />

        <SectionButton
          label="تحويل حجرة القتال واسلحة الدبابة من وضعية القتال الى وضعية الرحيل (مع تشغيل جهاز الاستقرار واجهزة الرؤية الليلية)"
          description="الطاقم"
          icon={Medal}
          onClick={() => openView('t62-combat-to-travel-with-stabilizer-and-night-vision')}
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
    return <SportsMainView openView={openView} />
  }

  const renderedView = renderView(
    activeView,
    openView,
  )

  return renderedView
}
