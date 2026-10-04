'use client'

import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { Star } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { viewContent } from '@/lib/app/view-content'
import type { OpenView, View } from '@/lib/app/types'

interface FavoritesContextValue {
  favorites: View[]
  isFavorite: (view: View) => boolean
  toggleFavorite: (view: View) => void
}

const FavoritesContext = createContext<FavoritesContextValue | null>(null)
const storageKey = 'armored-training-favorites'

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<View[]>([])
  const hasHydrated = useRef(false)

  useEffect(() => {
    try {
      const stored = JSON.parse(window.localStorage.getItem(storageKey) ?? '[]')
      if (Array.isArray(stored)) setFavorites(stored as View[])
    } catch {
      setFavorites([])
    } finally {
      hasHydrated.current = true
    }
  }, [])

  useEffect(() => {
    if (!hasHydrated.current) return
    window.localStorage.setItem(storageKey, JSON.stringify(favorites))
  }, [favorites])

  const value = useMemo(
    () => ({
      favorites,
      isFavorite: (view: View) => favorites.includes(view),
      toggleFavorite: (view: View) =>
        setFavorites((current) => {
          const next = current.includes(view)
            ? current.filter((item) => item !== view)
            : [...current, view]
          window.localStorage.setItem(storageKey, JSON.stringify(next))
          return next
        }),
    }),
    [favorites],
  )

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export function useFavorites() {
  const context = useContext(FavoritesContext)
  if (!context) throw new Error('useFavorites must be used inside FavoritesProvider')
  return context
}

export function FavoriteButton({ view }: { view: View }) {
  const { isFavorite, toggleFavorite } = useFavorites()
  const favorite = isFavorite(view)

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label={favorite ? 'إزالة الاختبار من المفضلة' : 'إضافة الاختبار إلى المفضلة'}
      aria-pressed={favorite}
      onClick={(event) => {
        event.stopPropagation()
        toggleFavorite(view)
      }}
      className="size-10 shrink-0 rounded-full text-amber-200/80 hover:bg-amber-200/10 hover:text-amber-200"
    >
      <Star className={favorite ? 'fill-current' : ''} aria-hidden="true" />
    </Button>
  )
}

export function FavoritesPanel({ openView }: { openView: OpenView }) {
  const { favorites } = useFavorites()

  return (
    <section className="mt-8 rounded-3xl border border-amber-200/10 bg-[#101216] p-4 shadow-xl shadow-black/20 sm:p-5" aria-labelledby="favorites-title">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs tracking-[0.18em] text-amber-200/60">وصول سريع</p>
          <h2 id="favorites-title" className="mt-1 text-lg font-semibold text-white">اختباراتي المفضلة</h2>
        </div>
        <Star className="size-5 fill-amber-200 text-amber-200" aria-hidden="true" />
      </div>

      {favorites.length > 0 ? (
        <div className="grid gap-2">
          {favorites.map((view) => (
            <Button
              key={view}
              type="button"
              variant="ghost"
              onClick={() => openView(view)}
              className="h-auto justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-3 text-right text-white hover:bg-white/[0.08]"
            >
              <span className="min-w-0 truncate text-sm">{viewContent[view]?.title ?? view}</span>
              <span className="text-xs text-white/40">فتح</span>
            </Button>
          ))}
        </div>
      ) : (
        <p className="text-sm leading-6 text-white/45">اضغط على نجمة أي اختبار ليظهر هنا للوصول إليه بسرعة.</p>
      )}
    </section>
  )
}

export function FavoriteViewButton({ view }: { view: View }) {
  return <FavoriteButton view={view} />
}

export function getFavoriteTitle(view: View) {
  return viewContent[view]?.title ?? view
}

export type { View }
