import { IconAnalytics01 } from '@/components/icons/huge/IconAnalytics01'
import { LogoProjectBlueskyMeter } from '@/components/logos/projects/LogoProjectBlueskyMeter'
import { LogoProjectListingCat } from '@/components/logos/projects/LogoProjectListingCat'
import { ProjectCard } from '@/components/ProjectCard'
import { SectionHeader } from '@/components/SectionHeader'
import { links } from '@/data/links'
import type { ProjectStatusType } from '@/types/ProjectStatusType'

interface Project {
  name: string
  description: string
  status: ProjectStatusType
  icon: React.ReactNode
  link?: string
}

const projects: Array<Project> = [
  {
    name: 'Analytics',
    description: 'Open-source product and web analytics.',
    status: 'in development',
    icon: <IconAnalytics01 className="fill-inherit" />,
    link: 'https://github.com/ahudovich/analytics',
  },
  {
    name: 'Listing Cat',
    description: 'Marketing database for startups and indie hackers.',
    status: 'active',
    icon: <LogoProjectListingCat />,
    link: links.projects.listingcat,
  },
  {
    name: 'Bluesky Meter',
    description: 'Realtime analytics for Bluesky social network.',
    status: 'sold',
    icon: <LogoProjectBlueskyMeter />,
    link: links.projects.blueskymeter,
  },
]

export function HomeProjects() {
  return (
    <section className="@container/projects">
      <SectionHeader
        heading="Projects"
        text="These are my personal projects, both past and ongoing:"
      />

      <ul className="grid gap-3 @lg/projects:grid-cols-2">
        {projects.map((project) => (
          <li key={project.name}>
            <ProjectCard {...project} />
          </li>
        ))}
      </ul>
    </section>
  )
}
