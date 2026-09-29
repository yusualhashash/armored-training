import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'
export const revalidate = false

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'المعدلات الزمنية',
    short_name: 'المعدلات الزمنية',
    description: 'تطبيق تدريبي يعمل دون اتصال بالإنترنت',
    id: '/',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    dir: 'rtl',
    lang: 'ar',
    icons: [
      { src: '/icon-light-32x32.png', sizes: '32x32', type: 'image/png' },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  }
}
