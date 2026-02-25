import '@/app/global.css'

import { Geist_Mono } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Footer } from '@/components/layout/footer/Footer'
import { Header } from '@/components/layout/header/Header'
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

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${geistMono.variable}`} lang="en" suppressHydrationWarning>
      <body className="h-dvh bg-background font-base text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange={true}
        >
          <Header />
          <main className="pt-12 pb-18">{children}</main>
          <Footer />

          {/* Vercel Speed Insights */}
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
