from pathlib import Path
import re
import textwrap

root = Path('/vercel/share/v0-project')
source = (root / 'app/page.tsx').read_text()
outputs = {}
def add(path, text):
    outputs[path] = text.strip() + '\n'
def between(start, end):
    return source.split(start, 1)[1].split(end, 1)[0]

metadata = between("const viewContent: Record<SportsView, { title: string; backLabel: string; backTo: View }> = ", '\n\nconst hundredMeterCategoryViews')
add('lib/training/navigation.ts', "const stomachTitle = 'تمرين المعدة'\n\nconst sectionDefinitions = " + metadata + " as const\n\nexport type SectionView = keyof typeof sectionDefinitions\nexport type View = 'home' | 'guide' | SectionView\n\nexport interface SectionContent {\n  title: string\n  backLabel: string\n  backTo: View\n}\n\nexport const viewContent = sectionDefinitions satisfies Record<SectionView, SectionContent>\n\nexport interface NavigationProps {\n  activeView: View\n  openView: (view: View) => void\n}\n\nexport function isView(value: unknown): value is View {\n  return typeof value === 'string' && (value === 'home' || value === 'guide' || Object.hasOwn(viewContent, value))\n}\n")

header = '<header' + between('<header', '</header>') + '</header>'
add('components/training/training-header.tsx', "import { ArrowRight, Sparkles } from 'lucide-react'\nimport { Button } from '@/components/ui/button'\nimport type { SectionContent } from '@/lib/training/navigation'\n\nexport function TrainingHeader({ currentSection }: { currentSection: SectionContent | null }) {\n  return (\n" + header + '\n  )\n}')
nav = '<nav' + between('<nav', '</nav>') + '</nav>'
nav_items = 'const navigationItems = ' + between('const navigationItems = ', '\n\nconst sectionCards')
add('components/training/bottom-navigation.tsx', "import { BookOpen, House } from 'lucide-react'\nimport { Button } from '@/components/ui/button'\nimport type { NavigationProps } from '@/lib/training/navigation'\n\n" + nav_items + '\n\nexport function BottomNavigation({ activeView, openView }: NavigationProps) {\n  return (\n' + nav + '\n  )\n}')

cards = 'const sectionCards = ' + between('const sectionCards = ', '\n\ntype SportsView').strip()
home = between("{activeView === 'home' && (\n", '\n          )}')
add('components/training/home-view.tsx', "import { ChevronLeft, Dumbbell, Medal } from 'lucide-react'\nimport { Button } from '@/components/ui/button'\nimport type { NavigationProps } from '@/lib/training/navigation'\n\n" + cards + "\n\nexport function HomeView({ openView }: Pick<NavigationProps, 'openView'>) {\n  return (\n" + textwrap.dedent(home) + '\n  )\n}')
section_button = source.split('function SectionButton', 1)[1].split('\n\nfunction InfoPanel', 1)[0]
add('components/training/section-button.tsx', "import { ChevronLeft, type LucideIcon } from 'lucide-react'\nimport { Button } from '@/components/ui/button'\n\nexport function SectionButton" + section_button.replace('typeof Timer', 'LucideIcon'))
info = 'function InfoPanel' + source.split('function InfoPanel', 1)[1]
guide = between("{activeView === 'guide' && ", ' />') + ' />'
add('components/training/guide-view.tsx', "import { BookOpen } from 'lucide-react'\n\nexport function GuideView() {\n  return " + guide + '\n}\n\n' + info)

menus = {}
for view in ['armored', 't72', 't55-62', 'sports']:
    line = next(line for line in source.splitlines() if "{activeView === '" + view + "' && <div" in line)
    cards_for_view = re.findall(r'<SectionButton label="([^"]+)" description="([^"]+)" icon=\{(\w+)\} onClick=\{\(\) => openView\(\'([^\']+)\'\)\} />', line)
    assert cards_for_view, view
    menus[view] = cards_for_view
menu_text = "import { Dumbbell, Medal, Timer, type LucideIcon } from 'lucide-react'\nimport type { View } from './navigation'\n\ninterface MenuItem {\n  label: string\n  description: string\n  icon: LucideIcon\n  view: View\n}\n\nexport const sectionMenus = {\n"
for view, items in menus.items():
    menu_text += "  '" + view + "': [\n"
    for label, description, icon, dest in items:
        menu_text += f"    {{ label: '{label}', description: '{description}', icon: {icon}, view: '{dest}' }},\n"
    menu_text += '  ],\n'
menu_text += "} as const satisfies Partial<Record<View, readonly MenuItem[]>>\n\nexport type MenuView = keyof typeof sectionMenus\n\nexport function isMenuView(view: View): view is MenuView {\n  return Object.hasOwn(sectionMenus, view)\n}\n"
add('lib/training/menus.ts', menu_text)
add('components/training/section-menu.tsx', "import { sectionMenus, type MenuView } from '@/lib/training/menus'\nimport type { NavigationProps } from '@/lib/training/navigation'\nimport { SectionButton } from './section-button'\n\nexport function SectionMenu({ activeView, openView }: Omit<NavigationProps, 'activeView'> & { activeView: MenuView }) {\n  return (\n    <div className=\"grid gap-4\">\n      {sectionMenus[activeView].map(({ view, ...item }) => (\n        <SectionButton key={view} {...item} onClick={() => openView(view)} />\n      ))}\n    </div>\n  )\n}")

imports = [line for line in source.splitlines() if line.startswith('import ') and ('@/components/armored/' in line or '@/components/sports/' in line)]
helpers = 'const hundredMeterCategoryViews = ' + between('const hundredMeterCategoryViews = ', '\nexport default function Page')
render_lines = between("{activeView === 'stomach' &&", '\n\n            </div>')
render_lines = "{activeView === 'stomach' &&" + render_lines
armored = []
sports = []
for line in render_lines.splitlines():
    text = line.strip()
    if not text:
        continue
    assert text.startswith('{') and text.endswith('}'), text
    condition, jsx = text[1:-1].split(' && ', 1)
    statement = '  if (' + condition + ') {\n    return (' + jsx + ')\n  }\n'
    (armored if '<T72' in jsx or '<T55_62' in jsx else sports).append(statement)
for kind, statements in [('armored', armored), ('sports', sports)]:
    selected_imports = '\n'.join(line for line in imports if f'@/components/{kind}/' in line)
    name = 'ArmoredViews' if kind == 'armored' else 'SportsViews'
    types = 'NavigationProps, View' if kind == 'sports' else 'NavigationProps'
    add(f'components/training/{kind}-views.tsx', selected_imports + f"\nimport type {{ {types} }} from '@/lib/training/navigation'\n\n" + (helpers + '\n' if kind == 'sports' else '') + f'export function {name}({{ activeView, openView }}: NavigationProps) {{\n' + '\n'.join(statements) + '\n  return null\n}')

add('components/training/training-content.tsx', "import type { NavigationProps } from '@/lib/training/navigation'\nimport { isMenuView } from '@/lib/training/menus'\nimport { ArmoredViews } from './armored-views'\nimport { SportsViews } from './sports-views'\nimport { SectionMenu } from './section-menu'\nimport { HomeView } from './home-view'\nimport { GuideView } from './guide-view'\n\nexport function TrainingContent({ activeView, openView }: NavigationProps) {\n  if (activeView === 'home') return <HomeView openView={openView} />\n  if (activeView === 'guide') return <GuideView />\n\n  return (\n    <div className=\"mx-auto w-full max-w-2xl\">\n      {isMenuView(activeView) ? (\n        <SectionMenu activeView={activeView} openView={openView} />\n      ) : activeView.startsWith('t72-') || activeView.startsWith('t55-62-') ? (\n        <ArmoredViews activeView={activeView} openView={openView} />\n      ) : (\n        <SportsViews activeView={activeView} openView={openView} />\n      )}\n    </div>\n  )\n}")
add('components/training/use-training-navigation.ts', "'use client'\n\nimport { useCallback, useEffect, useState } from 'react'\nimport { isView, type View } from '@/lib/training/navigation'\n\nexport function useTrainingNavigation() {\n  const [activeView, setActiveView] = useState<View>('home')\n\n  useEffect(() => {\n    window.history.replaceState({ view: 'home' satisfies View }, '', window.location.href)\n\n    const handlePopState = (event: PopStateEvent) => {\n      const view: unknown = event.state?.view\n      if (isView(view)) {\n        setActiveView(view)\n        return\n      }\n\n      window.history.pushState({ view: 'home' satisfies View }, '', window.location.href)\n      setActiveView('home')\n    }\n\n    window.addEventListener('popstate', handlePopState)\n    return () => window.removeEventListener('popstate', handlePopState)\n  }, [])\n\n  const openView = useCallback((view: View) => {\n    window.history.pushState({ view }, '', window.location.href)\n    setActiveView(view)\n  }, [])\n\n  return { activeView, openView }\n}")
add('components/training/training-app.tsx', "'use client'\n\nimport { viewContent } from '@/lib/training/navigation'\nimport { BottomNavigation } from './bottom-navigation'\nimport { TrainingContent } from './training-content'\nimport { TrainingHeader } from './training-header'\nimport { useTrainingNavigation } from './use-training-navigation'\n\nexport function TrainingApp() {\n  const { activeView, openView } = useTrainingNavigation()\n  const currentSection = activeView === 'home' || activeView === 'guide' ? null : viewContent[activeView]\n\n  return (\n    <main dir=\"rtl\" className=\"min-h-svh w-full max-w-full overflow-x-hidden bg-green-950 text-white\">\n      <div className=\"relative flex min-h-svh w-full max-w-full flex-col\">\n        <TrainingHeader currentSection={currentSection} />\n        <section className=\"relative flex min-w-0 flex-1 flex-col overflow-y-auto px-3 pb-40 pt-7 sm:px-10 sm:pb-36 sm:pt-10\">\n          <TrainingContent activeView={activeView} openView={openView} />\n        </section>\n        <BottomNavigation activeView={activeView} openView={openView} />\n      </div>\n    </main>\n  )\n}")
add('app/page.tsx', "import { TrainingApp } from '@/components/training/training-app'\n\nexport default function Page() {\n  return <TrainingApp />\n}")
for relative, text in outputs.items():
    path = root / relative
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text)
print(f'Extracted page into {len(outputs)} focused files; preserved {len(armored)} armored routes and {len(sports)} sports render branches.')
