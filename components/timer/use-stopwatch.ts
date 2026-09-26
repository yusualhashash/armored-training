'use client'

import { useEffect, useRef, useState } from 'react'

/** فاصل تحديث العرض: عُشر الثانية. */
const TICK_MS = 10

export interface Arrival {
  place: number
  timeMs: number
}

export interface Stopwatch {
  elapsedMs: number
  isRunning: boolean
  isFinished: boolean
  arrivals: Arrival[]
  toggleRunning: () => void
  recordArrival: () => void
  finish: () => void
  reset: () => void
}

/**
 * ساعة إيقاف دقيقة: يحسب الزمن من طابع زمني حقيقي بدل جمع الفواصل،
 * لذلك لا يتراكم خطأ التأخير أثناء التشغيل أو الإيقاف المؤقت.
 */
export function useStopwatch(): Stopwatch {
  const [elapsedMs, setElapsedMs] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [isFinished, setIsFinished] = useState(false)
  const [arrivals, setArrivals] = useState<Arrival[]>([])

  const baseMsRef = useRef(0)
  const startedAtRef = useRef(0)

  useEffect(() => {
    if (!isRunning) return

    const baseMs = baseMsRef.current
    startedAtRef.current = performance.now()
    const interval = setInterval(() => {
      setElapsedMs(baseMs + (performance.now() - startedAtRef.current))
    }, TICK_MS)

    return () => clearInterval(interval)
  }, [isRunning])

  const readCurrentMs = () =>
    isRunning ? baseMsRef.current + (performance.now() - startedAtRef.current) : elapsedMs

  const toggleRunning = () => {
    if (isFinished) return

    if (isRunning) {
      setElapsedMs(readCurrentMs())
      setIsRunning(false)
      return
    }

    baseMsRef.current = elapsedMs
    setIsRunning(true)
  }

  const recordArrival = () => {
    if (!isRunning) return

    const timeMs = readCurrentMs()
    setElapsedMs(timeMs)
    setArrivals((previous) => [...previous, { place: previous.length + 1, timeMs }])
  }

  const finish = () => {
    if (isFinished) return

    const timeMs = readCurrentMs()
    if (timeMs <= 0) return

    setElapsedMs(timeMs)
    setIsRunning(false)
    setIsFinished(true)
  }

  const reset = () => {
    setElapsedMs(0)
    setIsRunning(false)
    setIsFinished(false)
    setArrivals([])
    baseMsRef.current = 0
  }

  return { elapsedMs, isRunning, isFinished, arrivals, toggleRunning, recordArrival, finish, reset }
}
