import { Analytics01Icon } from '@hugeicons/core-free-icons'
import {
  SectionHeader,
  SectionHeaderText,
  SectionHeaderTitle,
} from '@/components/layout/SectionHeader'
import { LogoBlueskyMeter } from '@/components/logos/LogoBlueskyMeter'
import { LogoListingCat } from '@/components/logos/LogoListingCat'
import { HomeProjectsCard } from '@/components/pages/home/projects/HomeProjectsCard'
import { Icon } from '@/components/ui/Icon'
import { links } from '@/data/links.json'
import type { ReactNode } from 'react'
import type { ProjectStatusType } from '@/lib/types'

interface Project {
  name: string
  description: string
  status: ProjectStatusType
  icon: ReactNode
  link?: string
}

const projects: Array<Project> = [
  {
    name: 'Analytics',
    description: 'Open-source product and web analytics.',
    status: 'development',
    icon: <Icon icon={Analytics01Icon} />,
    link: 'https://github.com/ahudovich/analytics',
  },
  {
    name: 'Listing Cat',
    description: 'Marketing database for startups and indie hackers.',
    status: 'active',
    icon: <LogoListingCat />,
    link: links.projects.listingcat,
  },
  {
    name: 'Bluesky Meter',
    description: 'Realtime analytics for Bluesky social network.',
    status: 'sold',
    icon: <LogoBlueskyMeter />,
    link: links.projects.blueskymeter,
  },
] as const

export function HomeProjects() {
  return (
    <section className="@container/projects">
      <SectionHeader>
        <SectionHeaderTitle>Projects</SectionHeaderTitle>
        <SectionHeaderText>
          These are my personal projects, both past and ongoing:
        </SectionHeaderText>
      </SectionHeader>

      <ul className="grid gap-3 @lg/projects:grid-cols-2">
        {projects.map((project) => (
          <li key={project.name}>
            <HomeProjectsCard
              name={project.name}
              description={project.description}
              status={project.status}
              href={project.link}
              icon={project.icon}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
