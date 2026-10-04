'use client'

import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { ChevronLeft, Star, Timer } from 'lucide-react'

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
      className={favorite
        ? 'size-10 shrink-0 rounded-full text-emerald-400 hover:bg-emerald-400/10 hover:text-emerald-300'
        : 'size-10 shrink-0 rounded-full text-white/45 hover:bg-emerald-400/10 hover:text-emerald-300'}
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
        <Star className="size-5 fill-emerald-400 text-emerald-400" aria-hidden="true" />
      </div>

      {favorites.length > 0 ? (
        <div className="grid gap-2">
          {favorites.map((view) => (
            <div
              key={view}
              className="group flex min-w-0 items-center gap-2 overflow-hidden rounded-3xl border border-white/10 bg-[#101216] px-3 py-4 text-white transition-colors hover:bg-[#17191f] sm:p-5"
            >
              <Button
                type="button"
                variant="ghost"
                onClick={() => openView(view)}
                className="h-auto min-w-0 flex-1 justify-start rounded-2xl p-0 text-right text-white hover:bg-transparent"
              >
                <span className="flex min-w-0 flex-1 items-center gap-3">
  
                  <span className="flex min-w-0 flex-1 flex-col items-start gap-1">

                    <span className="block whitespace-normal break-words text-sm font-semibold leading-7 sm:text-lg sm:leading-normal">
                      {getFavoriteTitle(view)}
                    </span>
                    <span className="block min-w-0 max-w-full whitespace-normal break-words text-xs font-normal leading-5 text-white/50">
                      {getFavoriteSectionLabel(view)}
                    </span>
                  </span>
                </span>
              </Button>

              <FavoriteButton view={view} />
              <ChevronLeft
                className="size-5 shrink-0 text-white/35 transition-transform group-hover:-translate-x-1"
                aria-hidden="true"
              />
            </div>
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

const vehiclePattern = /T72|T55\+62/i

// Titles from the favorite up to the root: [leaf, parent, grandparent, ...]
function getFavoriteChain(view: View) {
  const titles: string[] = []
  const seen = new Set<string>()
  let current: View | undefined = view

  while (current && !seen.has(String(current)) && titles.length < 10) {
    seen.add(String(current))
    const content = viewContent[current]
    if (!content) break
    titles.push(content.title)
    current = content.backTo as View | undefined
  }

  return titles
}

function getFavoriteDetails(view: View) {
  const chain = getFavoriteChain(view)
  if (chain.length === 0) return { title: String(view), path: [] as string[] }

  // T72 / T55+62: the vehicle is the title, everything between it and the
  // favorite (test name, then level) is the label, using the real titles.
  const vehicleIndex = chain.findIndex((title) => vehiclePattern.test(title))
  if (vehicleIndex > 0) {
    return {
      title: chain[vehicleIndex],
      path: chain.slice(0, vehicleIndex).reverse(),
    }
  }

  // Anything else: direct parent as the title, the view's own title as the label.
  if (chain.length > 1) return { title: chain[1], path: [chain[0]] }

  return { title: chain[0], path: [] as string[] }
}

export function getFavoriteTitle(view: View) {
  return getFavoriteDetails(view).title
}

export function getFavoriteSectionLabel(view: View) {
  const { path } = getFavoriteDetails(view)
  return path.length > 0
    ? `القسم: ${path.join(' — ')}`
    : 'اختبار محفوظ للوصول السريع'
}

export type { View }