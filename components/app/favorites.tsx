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
              className="group h-auto w-full min-w-0 justify-between rounded-3xl border border-white/10 bg-[#101216] px-3 py-4 text-right text-white hover:bg-[#17191f] sm:p-5"
            >
              <span className="flex min-w-0 flex-1 items-center gap-3">
                <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-rose-200/10 text-rose-200">
                  <Timer className="size-6" aria-hidden="true" />
                </span>
                <span className="flex min-w-0 flex-1 flex-col items-start gap-1">
                  <span className="block text-[11px] font-medium leading-5 text-amber-200/65">
                    اسم الاختبار
                  </span>
                  <span className="block whitespace-normal break-words text-sm font-semibold leading-7 sm:text-lg sm:leading-normal">
                    {getFavoriteTitle(view)}
                  </span>
                  <span className="block text-xs font-normal leading-5 text-white/50">
                    {getFavoriteSectionLabel(view)}
                  </span>
                </span>
              </span>
              <FavoriteButton view={view} />
              <ChevronLeft className="size-5 shrink-0 text-white/35 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
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

const armoredTestTitles: Array<[string, string]> = [
  ['combat-to-pre-combat', 'الانتقال من ترتيب القتال الى ترتيب ما قبل القتال'],
  ['pre-combat-to-column', 'الانتقال من ترتيب ما قبل القتال الى الرتل'],
  ['column-to-combat', 'الانتقال من الرتل الى ترتيب القتال'],
  ['open-pre-combat', 'فتح ترتيب ما قبل القتال'],
  ['boarding', 'ركوب الدبابة'],
  ['disembarking', 'نزول الدبابة'],
  ['pre-combat', 'ترتيب ما قبل القتال'],
]

function getArmoredFavoriteDetails(view: View) {
  const match = String(view).match(/^(t72|t55\+62)-(.+?)(?:-(طاقم|فصيلة|سرية|كتيبة))?$/)
  if (!match) return undefined

  const [, vehicle, testKey, section] = match
  if (!vehicle || !testKey) return undefined

  const title = armoredTestTitles.find(([key]) => testKey === key || testKey.startsWith(`${key}-`))?.[1]
  if (!title) return undefined

  return { title: `${vehicle.toUpperCase()} - ${title}`, section }
}

export function getFavoriteTitle(view: View) {
  const armoredDetails = getArmoredFavoriteDetails(view)
  if (armoredDetails) return armoredDetails.title

  const content = viewContent[view]
  const parentTitle = content?.backTo ? viewContent[content.backTo]?.title : undefined

  return parentTitle ?? content?.title ?? view
}

export function getFavoriteSectionLabel(view: View) {
  const armoredDetails = getArmoredFavoriteDetails(view)
  if (armoredDetails?.section) return `القسم: ${armoredDetails.section}`

  const content = viewContent[view]
  return content?.title && content.backTo
    ? `القسم: ${content.title}`
    : 'اختبار محفوظ للوصول السريع'
}

export type { View }
