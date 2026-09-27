import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'تطبيق المسابقات',
    short_name: 'المسابقات',
    description: 'تطبيق تدريبي يعمل دون اتصال بالإنترنت',
    start_url: '/',
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

export const dynamic = 'force-static'
export const revalidate = false
