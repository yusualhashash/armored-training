'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'

import { loadStoredList, saveStoredList, trimEntries } from '@/lib/test-history'

/** أقل ما يلزم لتمييز الجلسة: الاختبار والفئة العمرية. */
interface ScopedEntry {
  id: string
  eventName: string
  categoryName: string
}

/**
 * يدير سجل الجلسات في التخزين المحلي: يحمّله مرة واحدة عند التشغيل،
 * يحفظ كل تغيير، ويعرض جلسات اختبار وفئة عمرية واحدين فقط.
 */
export function useTestHistory<T extends ScopedEntry>(storageKey: string, eventName: string, categoryName: string, maxPerTest: number) {
  const [entries, setEntries] = useState<T[]>([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setEntries(loadStoredList<T>(storageKey))
    setLoaded(true)
  }, [storageKey])

  useEffect(() => {
    if (!loaded) return
    saveStoredList(storageKey, entries)
  }, [entries, loaded, storageKey])

  const relevant = useMemo(
    () => entries.filter((entry) => entry.eventName === eventName && entry.categoryName === categoryName),
    [entries, eventName, categoryName],
  )

  const add = useCallback(
    (entry: T) => setEntries((existing) => trimEntries([entry, ...existing], maxPerTest)),
    [maxPerTest],
  )

  const remove = useCallback((id: string) => setEntries((existing) => existing.filter((entry) => entry.id !== id)), [])

  const clear = useCallback(
    () => setEntries((existing) => existing.filter((entry) => !(entry.eventName === eventName && entry.categoryName === categoryName))),
    [eventName, categoryName],
  )

  return { relevant, add, remove, clear }
}
