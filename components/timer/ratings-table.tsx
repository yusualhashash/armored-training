export interface RatingRow {
  score: string
  rating: string
}

interface RatingsTableProps {
  rows: RatingRow[]
  title?: string // e.g. "التقدير حسب الزمن", "التقدير حسب العدد"
  className?: string
}

/** جدول تقدير أفقي: عنوان يمتد على كل الأعمدة، ثم صف التقديرات، ثم صف القيم. */
export function RatingsTable({
  rows,
  title = 'التقدير حسب الزمن',
  className = '',
}: RatingsTableProps) {
  const lastIndex = rows.length - 1

  // Vertical divider on every column except the last one (the left-most in RTL)
  const divider = (index: number) => (index < lastIndex ? 'border-e' : '')

  return (
    <div
      className={`overflow-x-auto rounded-2xl border border-white/20 sm:border-white/30 ${className}`}
      dir="rtl"
    >
      <table className="w-full min-w-full border-collapse text-xs sm:text-base text-white">
        <thead>
          <tr>
            <th
              colSpan={rows.length}
              scope="colgroup"
              className="border-b border-white/20 sm:border-white/30 px-3 py-2 sm:px-4 sm:py-3 text-center font-semibold text-xs sm:text-base"
            >
              {title}
            </th>
          </tr>
          <tr>
            {rows.map((row, index) => (
              <th
                key={row.rating}
                scope="col"
                className={`border-b border-white/20 sm:border-white/30 px-2 py-2 sm:px-4 sm:py-3 text-center font-medium whitespace-nowrap ${divider(index)}`}
              >
                {row.rating}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {rows.map((row, index) => (
              <td
                key={row.rating}
                className={`border-white/20 sm:border-white/30 px-2 py-2 sm:px-4 sm:py-3 text-center tabular-nums whitespace-nowrap ${divider(index)}`}
              >
                {row.score}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}