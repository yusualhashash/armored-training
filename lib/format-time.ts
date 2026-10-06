const MILLIS_PER_HUNDREDTH = 10
const SECONDS_PER_MINUTE = 60
const TENTHS_PER_SECOND = 10

/** يحوّل الميلي ثانية إلى صيغة ساعة الإيقاف: دقائق:ثواني.أجزاء المئة. */
export function formatStopwatchTime(elapsedMs: number): string {
  const totalSeconds = Math.floor(elapsedMs / 1000)
  const hundredths = Math.floor((elapsedMs % 1000) / MILLIS_PER_HUNDREDTH)
  const minutes = Math.floor(totalSeconds / SECONDS_PER_MINUTE)
  const seconds = totalSeconds % SECONDS_PER_MINUTE

  return `${pad(minutes)}:${pad(seconds)}.${pad(hundredths)}`
}

/** يحوّل زمن المعيار بالثواني إلى نص مقروء (دقائق أو ثوانٍ). */
export function formatStandardSeconds(seconds: number, forceMinuteFormat = false): string {
  if (seconds >= SECONDS_PER_MINUTE || (forceMinuteFormat && seconds === 0)) {
    const minutes = Math.floor(seconds / SECONDS_PER_MINUTE)
    const rest = seconds % SECONDS_PER_MINUTE
    const restFormatted = rest % 1 === 0 ? pad(rest) : `${pad(Math.floor(rest))}.${Math.round((rest % 1) * 10)}`
    return `${pad(minutes)}:${restFormatted}`
  }

  const rounded = Math.round(seconds * TENTHS_PER_SECOND) / TENTHS_PER_SECOND
  return `${rounded} ثا`
}

function pad(value: number): string {
  return value.toString().padStart(2, '0')
}
