import { HomeContact } from '@/components/pages/home/HomeContact'
import { HomeHero } from '@/components/pages/home/HomeHero'
import { HomeProjects } from '@/components/pages/home/HomeProjects'
import { HomeSocials } from '@/components/pages/home/HomeSocials'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Andrei Hudovich - Senior Software Engineer',
  description:
    "A senior software engineer based in Wroclaw, Poland. If you need a reliable developer to join your team, I'm ready to dive in.",
  alternates: {
    canonical: '/',
  },
}

export default function Page() {
  return (
    <div className="mx-auto pt-6 pb-12 max-w-160 space-y-12 sm:py-10">
      <HomeHero />
      <HomeProjects />
      <HomeSocials />
      <HomeContact />
    </div>
  )
}
