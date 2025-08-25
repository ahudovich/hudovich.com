import { HomeContact } from '@/components/pages/home/HomeContact'
import { HomeHero } from '@/components/pages/home/HomeHero'
import { HomeProjects } from '@/components/pages/home/HomeProjects'
import { HomeSocials } from '@/components/pages/home/HomeSocials'
import { HomeTechStack } from '@/components/pages/home/HomeTechStack'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Andrei Hudovich',
  description: 'A freelance full stack engineer based in Wroclaw, Poland',
  alternates: {
    canonical: '/',
  },
}

export default function Page() {
  return (
    <div className="mx-auto py-10 max-w-[40rem] space-y-12">
      <HomeHero />
      <HomeTechStack />
      <HomeProjects />
      <HomeSocials />
      <HomeContact />
    </div>
  )
}
