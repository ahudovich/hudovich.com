import '@/app/global.css'

import { Geist, Geist_Mono } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { siteMetadata } from '@/data/metadata.json'
import { env } from '@/lib/env'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase:
    env.VERCEL_ENV === 'preview'
      ? new URL(`https://${env.VERCEL_URL}`)
      : new URL(env.NEXT_PUBLIC_BASE_URL),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    description: siteMetadata.description,
  },
}

const fontGeist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
})

const fontGeistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${fontGeist.variable} ${fontGeistMono.variable}`} lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />

        {/* Vercel Speed Insights */}
        <SpeedInsights />
      </body>
    </html>
  )
}
