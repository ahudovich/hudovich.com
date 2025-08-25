import '@/app/globals.css'
import { Geist, Geist_Mono } from 'next/font/google'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { links } from '@/data/links'
import type { Metadata } from 'next'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL(links.baseUrl),
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geist.variable} ${geistMono.variable} h-full font-mono text-md text-primary antialiased`}
      >
        <Header />
        <main className="px-8">
          <div className="mx-auto py-10 max-w-[40rem] space-y-12">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  )
}
