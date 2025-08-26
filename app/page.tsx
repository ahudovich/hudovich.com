import { HomeContact } from '@/components/pages/home/HomeContact'
import { HomeHero } from '@/components/pages/home/HomeHero'
import { HomeProjects } from '@/components/pages/home/HomeProjects'
import { HomeSocials } from '@/components/pages/home/HomeSocials'
import { HomeTechStack } from '@/components/pages/home/HomeTechStack'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Andrei Hudovich - Freelance Full Stack Engineer',
  description: `A freelance full stack engineer based in Wroclaw, Poland. If you need a reliable developer to build your product, I'm here to help.`,
  alternates: {
    canonical: '/',
  },
}

export default function Page() {
  return (
    <div className="mx-auto pt-6 pb-12 max-w-[40rem] space-y-12 sm:py-10">
      <HomeHero />
      <HomeTechStack />
      <HomeProjects />
      <HomeSocials />
      <HomeContact />
    </div>
  )
}
