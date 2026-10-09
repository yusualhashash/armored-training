'use client'

import {
  ArrowRight,
  BookOpen,
  History,
  House,
  ShieldCheck,
  Star,
} from 'lucide-react'

import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'

import { AppContent } from './app-content'
import { HomeView, HomeHeader } from './home-view'
import { FavoriteButton, FavoritesPanel, FavoritesProvider } from './favorites'

import {
  viewContent,
} from '@/lib/app/view-content'

import type {
  OpenView,
  View,
} from '@/lib/app/types'

const navigationItems = [
  {
    id: 'home' as const,
    label: 'الرئيسية',
    icon: House,
  },
  {
    id: 'history' as const,
    label: 'السجل',
    icon: History,
  },
  {
    id: 'favorites' as const,
    label: 'المفضلة',
    icon: Star,
  },
  {
    id: 'guide' as const,
    label: 'التعليمات',
    icon: BookOpen,
  },
]

export function AppShell() {
  const [activeView, setActiveView] = useState<View>('home')

  /**
   * Browser history handling.
   */
  useEffect(() => {
    window.history.replaceState(
      { view: 'home' satisfies View },
      '',
      window.location.href,
    )

    const handlePopState = (event: PopStateEvent) => {
      const state = event.state as { view?: View } | null
      setActiveView(state?.view ?? 'home')
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const openView: OpenView = (nextView) => {
    if (nextView === activeView) return

    window.history.pushState(
      { view: nextView },
      '',
      window.location.href,
    )
    setActiveView(nextView)
  }

  const currentSection = viewContent[activeView]

  return (
    <FavoritesProvider>
      <main className="relative flex min-h-dvh flex-col bg-[#060b08] text-[#f4fbf6] antialiased selection:bg-emerald-500/30 selection:text-white overflow-x-hidden">
        {/* Ambient tactical lighting mesh */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-15%,rgba(16,185,129,0.14),rgba(6,11,8,0))]"
        />

        <div className="relative z-10 flex min-h-dvh flex-col">
          {/* =====================================================
              TOP NAVIGATION HEADER
          ====================================================== */}
          <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-emerald-500/15 bg-[#09130e]/85 px-4 backdrop-blur-xl sm:px-8 shadow-sm">
            {currentSection ? (
              <div className="flex min-w-0 items-center gap-3">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => openView(currentSection.backTo)}
                  className="flex h-10 items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] px-3 text-xs font-semibold text-white/80 transition-all hover:border-emerald-500/30 hover:bg-emerald-500/10 hover:text-white active:scale-95"
                >
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                  <span>{currentSection.backLabel}</span>
                </Button>

                <h1 className="truncate text-base font-bold text-white tracking-tight sm:text-lg">
                  {currentSection.title}
                </h1>
              </div>
            ) : activeView === 'favorites' ? (
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-amber-400/25 bg-amber-400/10 text-amber-300 shadow-inner">
                  <Star className="size-5" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h1 className="truncate text-base font-bold text-white tracking-tight">
                    المفضلة
                  </h1>
                  <p className="truncate text-[11px] text-white/45">
                    الوصول السريع للاختبارات المثبتة
                  </p>
                </div>
              </div>
            ) : activeView === 'history' ? (
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-400/10 text-emerald-300 shadow-inner">
                  <History className="size-5" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h1 className="truncate text-base font-bold text-white tracking-tight">
                    سجل التدريبات
                  </h1>
                  <p className="truncate text-[11px] text-white/45">
                    مراجعة أداء الجلسات السابقة
                  </p>
                </div>
              </div>
            ) : activeView === 'guide' ? (
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-sky-400/25 bg-sky-400/10 text-sky-300 shadow-inner">
                  <BookOpen className="size-5" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h1 className="truncate text-base font-bold text-white tracking-tight">
                    التعليمات
                  </h1>
                  <p className="truncate text-[11px] text-white/45">
                    دليل استخدام المنظومة
                  </p>
                </div>
              </div>
            ) : (
              <HomeHeader />
            )}

            <div className="flex items-center gap-2">
              {currentSection && <FavoriteButton view={activeView} />}

              {!currentSection && (
                <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/[0.08] px-3 py-1 text-xs text-emerald-300">
                  <ShieldCheck className="size-3.5" aria-hidden="true" />
                  <span className="font-medium">يعمل دون إنترنت</span>
                </div>
              )}
            </div>
          </header>

          {/* =====================================================
              MAIN CONTENT VIEWPORT
          ====================================================== */}
          <section className="relative flex min-w-0 flex-1 flex-col overflow-y-auto px-3.5 pb-36 pt-5 sm:px-8 sm:pb-32 sm:pt-8">
            {activeView === 'home' ? (
              <HomeView openView={openView} />
            ) : (
              <div className="mx-auto w-full max-w-3xl">
                <AppContent activeView={activeView} openView={openView} />
              </div>
            )}
          </section>

          {/* =====================================================
              BOTTOM DOCK NAVIGATION
          ====================================================== */}
          <nav
            aria-label="التنقل الرئيسي"
            className="fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:px-6 sm:pb-6 pointer-events-none"
          >
            <div className="pointer-events-auto mx-auto flex max-w-md items-center justify-around gap-1 rounded-2xl border border-emerald-500/20 bg-[#08120b]/92 p-1.5 shadow-[0_-8px_35px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-2xl">
              {navigationItems.map(({ id, label, icon: Icon }) => {
                const isActive = activeView === id

                return (
                  <button
                    key={id}
                    type="button"
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => openView(id)}
                    className={`relative flex min-h-[48px] flex-1 flex-col items-center justify-center rounded-xl py-1.5 transition-all duration-200 active:scale-95 ${
                      isActive
                        ? 'bg-gradient-to-b from-emerald-500/20 to-emerald-500/10 text-emerald-300 font-bold shadow-[0_0_15px_rgba(16,185,129,0.15)] border border-emerald-500/30'
                        : 'text-white/50 hover:bg-white/[0.04] hover:text-white/80'
                    }`}
                  >
                    <Icon className={`size-5 transition-transform ${isActive ? 'scale-110' : ''}`} aria-hidden="true" />
                    <span className="mt-1 text-[11px] leading-none tracking-tight">{label}</span>
                  </button>
                )
              })}
            </div>
          </nav>
        </div>
      </main>
    </FavoritesProvider>
  )
}
