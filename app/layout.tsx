import type { Metadata, Viewport } from 'next'

import { OfflineRegister } from '@/components/offline/offline-register'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'المعدلات الزمنية',
    template: '%s | المعدلات الزمنية',
  },
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [
      {
        url: '/eagle-logo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/eagle-logo.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/public/eagle-logo.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/public/eagle-logo.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
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
