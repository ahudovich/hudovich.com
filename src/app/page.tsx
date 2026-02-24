import { Container } from '@/components/layout/Container'
import { HomeContact } from '@/components/pages/home/HomeContact'
import { HomeHero } from '@/components/pages/home/HomeHero'
import { HomePosts } from '@/components/pages/home/HomePosts'
import { HomeSocials } from '@/components/pages/home/HomeSocials'
import { HomeProjects } from '@/components/pages/home/projects/HomeProjects'
import { links } from '@/data/links.json'
import { siteMetadata } from '@/data/metadata.json'
import { env } from '@/lib/env'
import type { Metadata } from 'next'
import type { ProfilePage, WithContext } from 'schema-dts'

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
}

const siteUrl = env.NEXT_PUBLIC_BASE_URL

const profilePageSchema: WithContext<ProfilePage> = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',

  mainEntity: {
    '@type': 'Person',
    name: siteMetadata.title,
    identifier: siteUrl,
    description: siteMetadata.description,
    url: siteUrl,
    email: links.email,
    image: new URL('/avatar.png', siteUrl).toString(),

    homeLocation: {
      '@type': 'Place',
      name: 'Wroclaw, Poland',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Wroclaw',
        addressCountry: 'PL',
      },
    },

    sameAs: [
      links.social.x,
      links.social.threads,
      links.social.bluesky,
      links.social.linkedin,
      links.social.substack,
    ],
  },
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />

      <Container className="space-y-12 pt-6 pb-12 sm:py-10">
        <HomeHero />
        <HomePosts />
        <HomeProjects />
        <HomeSocials />
        <HomeContact />
      </Container>
    </>
  )
}
