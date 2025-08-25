import { IconHugeMicOff02 } from '@/components/icons/huge/IconHugeMicOff02'
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
    name: 'Project Y',
    description: 'My new project that I work on in stealth mode for now.',
    status: 'active',
    icon: <IconHugeMicOff02 className="fill-zinc-600" />,
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
    <section>
      <SectionHeader
        heading="Projects"
        text="These are my personal projects, both past and ongoing:"
      />

      <ul className="grid grid-cols-2 gap-3">
        {projects.map((project) => (
          <li key={project.name}>
            <ProjectCard {...project} />
          </li>
        ))}
      </ul>
    </section>
  )
}
