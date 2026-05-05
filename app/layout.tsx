import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const display = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
})

const sans = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Fitness Empire - Premium Gym & Fitness Training',
  description: 'Transform your body at Fitness Empire. Premium gym facilities, expert personal trainers, and proven fitness programs. Join our community of 500+ members today.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body className={`${sans.variable} ${display.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
