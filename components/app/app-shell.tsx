'use client'

import {
  ArrowRight,
  BookOpen,
  House,
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
    id: 'guide' as const,
    label: 'التعليمات',
    icon: BookOpen,
  },
]

export function AppShell() {
  const [activeView, setActiveView] =
    useState<View>('home')

  /**
   * Browser history handling.
   */
  useEffect(() => {
    window.history.replaceState(
      { view: 'home' satisfies View },
      '',
      window.location.href,
    )

    const handlePopState = (
      event: PopStateEvent,
    ) => {
      const view =
        event.state?.view as View | undefined

      if (view) {
        setActiveView(view)
        return
      }

      window.history.pushState(
        { view: 'home' satisfies View },
        '',
        window.location.href,
      )

      setActiveView('home')
    }

    window.addEventListener(
      'popstate',
      handlePopState,
    )

    return () => {
      window.removeEventListener(
        'popstate',
        handlePopState,
      )
    }
  }, [])

  /**
   * Central navigation function.
   *
   * Every component uses this instead of manipulating
   * browser history directly.
   */
  const openView: OpenView = (view) => {
    window.history.pushState(
      { view },
      '',
      window.location.href,
    )

    setActiveView(view)
  }

  const currentSection =
    activeView === 'home' ||
    activeView === 'guide'
      ? null
      : viewContent[activeView]

  return (
    <FavoritesProvider>
      <main
        dir="rtl"
      className="min-h-svh w-full max-w-full overflow-x-hidden bg-green-950 text-white"
    >
      <div className="relative flex min-h-svh w-full max-w-full flex-col">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <header className="relative flex w-full max-w-full items-center justify-between gap-3 px-3 pb-4 pt-5 sm:gap-4 sm:px-10 sm:pt-10">

          {currentSection ? (
            <div className="flex w-full min-w-0 flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">

              <div className="flex min-w-0 items-center gap-3">

                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  aria-label={`رجوع إلى ${currentSection.backLabel}`}
                  onClick={() =>
                    window.history.back()
                  }
                  className="order-first size-11 shrink-0 rounded-full border border-white/10 bg-[#101216] text-white shadow-lg shadow-black/25 hover:bg-[#17191f]"
                >
                  <ArrowRight
                    className="size-5"
                    aria-hidden="true"
                  />
                </Button>

                <div className="min-w-0">
                  <p className="truncate text-xs font-medium text-white/50">
                    رجوع إلى{' '}
                    {currentSection.backLabel}
                  </p>

                  <h1 className="mt-1 line-clamp-2 break-words text-base font-bold leading-tight tracking-tight text-white sm:text-xl">
                    {currentSection.title}
                  </h1>
                </div>

                <FavoriteButton view={activeView} />
              </div>
            </div>
          ) : activeView === 'guide' ? (
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08]">
                <BookOpen
                  className="size-5 text-rose-200"
                  aria-hidden="true"
                />
              </div>

              <div className="min-w-0">
                <p className="truncate text-xs font-medium tracking-[0.18em] text-white/45">
                  مساحتك اليومية
                </p>

                <h1 className="mt-1 truncate text-lg font-semibold tracking-tight text-white">
                  التعليمات
                </h1>
              </div>
            </div>
          ) : (
            <HomeHeader />
          )}

          {!currentSection && (
            <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs text-white/55">
              يعمل دون إنترنت
            </span>
          )}
        </header>

        {/* =====================================================
            CONTENT
        ====================================================== */}

        <section className="relative flex min-w-0 flex-1 flex-col overflow-y-auto px-3 pb-40 pt-7 sm:px-10 sm:pb-36 sm:pt-10">

          {activeView === 'home' ? (
            <HomeView
              openView={openView}
            />
          ) : (
            <div className="mx-auto w-full max-w-2xl">
              <AppContent
                activeView={activeView}
                openView={openView}
              />
            </div>
          )}

        </section>

        {/* =====================================================
            BOTTOM NAVIGATION
        ====================================================== */}

        <nav
          aria-label="التنقل الرئيسي"
          className="fixed inset-x-0 bottom-0 z-10 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-8 sm:pb-8"
        >
          <div className="mx-auto flex max-w-lg items-center gap-2 rounded-[1.75rem] border border-white/10 bg-[#101216]/95 p-2 shadow-[0_-10px_45px_rgba(0,0,0,0.24)] backdrop-blur-xl">

            {navigationItems.map(
              ({
                id,
                label,
                icon: Icon,
              }) => {
                const isActive =
                  activeView === id

                return (
                  <Button
                    key={id}
                    type="button"
                    variant="ghost"
                    aria-current={
                      isActive
                        ? 'page'
                        : undefined
                    }
                    onClick={() =>
                      openView(id)
                    }
                    className={`h-16 flex-1 rounded-2xl text-sm font-semibold transition-all duration-300 sm:h-[4.5rem] ${
                      isActive
                        ? 'bg-[#101216] text-white shadow-lg shadow-black/20 hover:bg-[#17191f]'
                        : 'text-white/55 hover:bg-white/[0.07] hover:text-white'
                    }`}
                  >
                    <Icon
                      data-icon="inline-start"
                      aria-hidden="true"
                    />

                    <span>{label}</span>
                  </Button>
                )
              },
            )}

          </div>
        </nav>

      </div>
      </main>
    </FavoritesProvider>
  )
}
