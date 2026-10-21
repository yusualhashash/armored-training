'use client'

import {
  ChevronLeft,
  Dumbbell,
  Medal,
  Star,
} from 'lucide-react'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { Button } from '@/components/ui/button'
import type { OpenView, View } from '@/lib/app/types'
import { viewContent } from '@/lib/app/view-content'

interface FavoritesContextValue {
  favorites: View[]
  isFavorite: (view: View) => boolean
  toggleFavorite: (view: View) => void
}

const FavoritesContext = createContext<FavoritesContextValue | null>(null)
const storageKey = 'armored-training-favorites'

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<View[]>([])
  const [hydrated, setHydrated] = useState(false)

  // Load saved favorites once.
  useEffect(() => {
    try {
      const stored = JSON.parse(window.localStorage.getItem(storageKey) ?? '[]')
      if (Array.isArray(stored)) {
        setFavorites(
          stored.filter(
            (item): item is View =>
              typeof item === 'string' &&
              Object.prototype.hasOwnProperty.call(viewContent, item),
          ),
        )
      }
    } catch {
      // corrupted storage: start empty
    }
    setHydrated(true)
  }, [])

  // Save only after loading finished, so saved data is never overwritten by [].
  useEffect(() => {
    if (!hydrated) return
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(favorites))
    } catch {
      // storage full or blocked; keep working in memory
    }
  }, [favorites, hydrated])

  const toggleFavorite = useCallback((view: View) => {
    setFavorites((current) =>
      current.includes(view) ? current.filter((item) => item !== view) : [...current, view],
    )
  }, [])

  const value = useMemo(
    () => ({
      favorites,
      isFavorite: (view: View) => favorites.includes(view),
      toggleFavorite,
    }),
    [favorites, toggleFavorite],
  )

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export function useFavorites() {
  const context = useContext(FavoritesContext)
  if (!context) throw new Error('useFavorites must be used inside FavoritesProvider')
  return context
}

const NON_FAVORITABLE_VIEWS = new Set<string>([
  'home',
  'history',
  'favorites',
  'guide',
  'sports',
  'armored',
])

export function FavoriteButton({ view }: { view: View }) {
  if (NON_FAVORITABLE_VIEWS.has(view)) {
    return null
  }

  const { isFavorite, toggleFavorite } = useFavorites()
  const favorite = isFavorite(view)

  return (
    <button
      type="button"
      aria-label={favorite ? 'إزالة الاختبار من المفضلة' : 'إضافة الاختبار إلى المفضلة'}
      aria-pressed={favorite}
      onClick={(event) => {
        event.stopPropagation()
        toggleFavorite(view)
      }}
      className={`flex size-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-200 active:scale-95 ${
        favorite
          ? 'border-amber-400/40 bg-amber-400/15 text-amber-300 shadow-[0_0_15px_rgba(251,191,36,0.2)]'
          : 'border-white/10 bg-white/[0.04] text-white/50 hover:border-amber-400/30 hover:bg-amber-400/10 hover:text-amber-300'
      }`}
      title={favorite ? 'إزالة من المفضلة' : 'إضافة إلى المفضلة'}
    >
      <Star
        className={`size-5 transition-transform ${
          favorite ? 'fill-amber-400 text-amber-400 scale-105' : ''
        }`}
        aria-hidden="true"
      />
    </button>
  )
}

export function FavoritesPanel({ openView }: { openView: OpenView }) {
  const { favorites } = useFavorites()

  return (
    <div className="mx-auto w-full max-w-2xl space-y-6">
      {/* Tactical Hero Card */}
      <div className="relative overflow-hidden rounded-3xl border border-amber-500/25 bg-[#0c1610] p-5 sm:p-6 shadow-[0_12px_30px_rgba(0,0,0,0.4)]">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-amber-400/30 bg-gradient-to-br from-amber-400/20 to-amber-500/5 text-amber-300 shadow-md">
              <Star className="size-7 fill-amber-400 text-amber-400" aria-hidden="true" />
            </div>

            <div className="flex flex-col items-start gap-1">
              <span className="text-[11px] font-semibold tracking-wider text-amber-400">
                الوصول السريع · التخصيص الميداني
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                الاختبارات المفضلة
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-1.5 rounded-xl border border-amber-400/25 bg-amber-400/10 px-3 py-1.5 text-xs font-bold text-amber-300">
            <span>{favorites.length}</span>
            <span className="text-amber-400/70 font-normal">محفوظ</span>
          </div>
        </div>

        <p className="mt-3 text-xs sm:text-sm text-white/65 leading-relaxed">
          جميع الاختبارات والمعدلات الزمنية التي قمت بتثبيتها للوصول إليها مباشرة دون الحاجة للتنقل عبر القوائم.
        </p>

        <div className="mt-4 flex items-center gap-2 text-[11px] text-white/45 font-medium border-t border-white/[0.06] pt-3">
          <span>حفظ محلي فوري</span>
          <span aria-hidden="true">·</span>
          <span>تشغيل دون إنترنت</span>
          <span aria-hidden="true">·</span>
          <span className="text-amber-300/80">وصول بنقرة واحدة</span>
        </div>
      </div>

      {/* Favorites List or Empty State */}
      {favorites.length > 0 ? (
        <div className="grid gap-4">
          {favorites.map((view) => {
            const cat = getFavoriteCategory(view)
            const details = getFavoriteDetails(view)
            const Icon = cat.icon

            return (
              <div
                key={view}
                className="group relative flex w-full flex-col overflow-hidden rounded-3xl border border-emerald-500/20 bg-[#0c1610] p-5 sm:p-6 text-right transition-all duration-300 hover:border-emerald-500/40 hover:bg-[#101e16] hover:shadow-[0_12px_30px_rgba(0,0,0,0.4)] active:scale-[0.99]"
              >
                <div className="flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => openView(view)}
                    className="flex min-w-0 flex-1 items-center gap-4 text-right cursor-pointer"
                  >
                    <div
                      className={`flex size-14 shrink-0 items-center justify-center rounded-2xl border shadow-md ${
                        cat.color === 'emerald'
                          ? 'border-emerald-400/30 bg-gradient-to-br from-emerald-400/20 to-emerald-500/5 text-emerald-300'
                          : 'border-amber-400/30 bg-gradient-to-br from-amber-400/20 to-amber-500/5 text-amber-300'
                      }`}
                    >
                      <Icon className="size-7" aria-hidden="true" />
                    </div>

                    <div className="flex min-w-0 flex-1 flex-col items-start gap-1">
                      <span
                        className={`text-[11px] font-semibold tracking-wider ${
                          cat.color === 'emerald' ? 'text-emerald-400' : 'text-amber-400'
                        }`}
                      >
                        {cat.label}
                      </span>
                      <span className="text-base sm:text-lg font-bold text-white tracking-tight truncate max-w-full">
                        {details.title}
                      </span>
                    </div>
                  </button>

                  <div className="flex items-center gap-2 shrink-0">
                    <FavoriteButton view={view} />

                    <button
                      type="button"
                      onClick={() => openView(view)}
                      className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/60 transition-transform group-hover:-translate-x-1 group-hover:text-white group-hover:border-emerald-400/30"
                      title="فتح الاختبار"
                    >
                      <ChevronLeft className="size-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                {details.path.length > 0 && (
                  <p className="mt-3 text-xs sm:text-sm text-white/65 leading-relaxed">
                    مسار التدريب: {details.path.join(' › ')}
                  </p>
                )}

                <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-3 text-[11px] text-white/45 font-medium">
                  <div className="flex items-center gap-2">
                    <span>معدل زمني معتمد</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-emerald-400/90">جاهز للتنفيذ</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => openView(view)}
                    className="text-emerald-300 font-semibold hover:text-emerald-200 transition"
                  >
                    بدء الاختبار ←
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-3xl border border-emerald-500/20 bg-[#0c1610] p-8 sm:p-12 text-center shadow-[0_12px_30px_rgba(0,0,0,0.4)]">
          <div className="flex size-16 items-center justify-center rounded-3xl border border-amber-400/30 bg-gradient-to-br from-amber-400/20 to-amber-500/5 text-amber-300 mb-4 shadow-lg shadow-amber-500/5">
            <Star className="size-8" />
          </div>
          <h3 className="text-lg font-bold text-white tracking-tight">لا توجد اختبارات مفضلة بعد</h3>
          <p className="mt-2 max-w-md text-xs sm:text-sm leading-relaxed text-white/55">
            يمكنك تمييز أي اختبار رياضي أو تكتيكي بالضغط على أيقونة النجمة (★) أثناء التصفح، لتظهر هنا مباشرة لسهولة الوصول في الميدان.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 w-full max-w-sm">
            <button
              type="button"
              onClick={() => openView('sports')}
              className="flex-1 min-w-[140px] flex items-center justify-center gap-2 rounded-2xl border border-amber-400/30 bg-gradient-to-br from-amber-400/20 to-amber-500/10 px-4 py-3 text-xs sm:text-sm font-bold text-amber-200 hover:border-amber-400/50 hover:bg-amber-400/20 transition active:scale-95"
            >
              <Dumbbell className="size-4" />
              <span>تصفح الرياضة</span>
            </button>
            <button
              type="button"
              onClick={() => openView('armored')}
              className="flex-1 min-w-[140px] flex items-center justify-center gap-2 rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 px-4 py-3 text-xs sm:text-sm font-bold text-emerald-200 hover:border-emerald-500/50 hover:bg-emerald-500/20 transition active:scale-95"
            >
              <Medal className="size-4" />
              <span>تصفح أسلحة ورمي</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export function FavoriteViewButton({ view }: { view: View }) {
  return <FavoriteButton view={view} />
}

const vehiclePattern = /T72|T62|T55|T55\+62/i

function getFavoriteCategory(view: View) {
  const chain = getFavoriteChain(view)
  const fullText = chain.join(' ')
  if (vehiclePattern.test(fullText) || /طاقم|سرية|فصيلة|ركوب|رمي|تشكيل|سلاح|ناقل/i.test(fullText)) {
    return {
      type: 'armored' as const,
      label: 'القسم الثاني · المدرعات والميدان',
      icon: Medal,
      color: 'emerald' as const,
    }
  }
  return {
    type: 'sports' as const,
    label: 'القسم الأول · اللياقة البدنية',
    icon: Dumbbell,
    color: 'amber' as const,
  }
}

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

  const vehicleIndex = chain.findIndex((title) => vehiclePattern.test(title))
  if (vehicleIndex > 0) {
    return {
      title: chain[vehicleIndex],
      path: chain.slice(0, vehicleIndex).reverse(),
    }
  }

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

export type { View };