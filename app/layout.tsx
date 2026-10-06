import type { Metadata, Viewport } from 'next'

import { OfflineRegister } from '@/components/offline/offline-register'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'المعدلات الزمنية - Armored Training',
    template: '%s | المعدلات الزمنية',
  },
  description: 'تطبيق توقيت واختبارات اللياقة البدنية والتدريب التكتيكي للمدرعات ودبابات T-55/62 و T-72',
  manifest: '/manifest.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'المعدلات',
  },
  icons: {
    icon: [
      {
        url: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  themeColor: '#052e16',
  colorScheme: 'dark light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased">
    <OfflineRegister />
    {children}
  </body>
    </html>
  )
}
