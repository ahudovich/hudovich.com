import Link from 'next/link'
import { LinkSquare02Icon } from '@hugeicons/core-free-icons'
import {
  SectionHeader,
  SectionHeaderText,
  SectionHeaderTitle,
} from '@/components/layout/SectionHeader'
import { LogoBlueskyMeter } from '@/components/logos/LogoBlueskyMeter'
import { LogoListingCat } from '@/components/logos/LogoListingCat'
import { Badge } from '@/components/ui/Badge'
import { Card, CardContent, CardHeader, CardIndicator, CardTitle } from '@/components/ui/Card'
import { Icon } from '@/components/ui/Icon'
import { links } from '@/data/links.json'
import type { BadgeVariant } from '@/components/ui/Badge'

const projects = [
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

const statusLabels: Record<'active' | 'sold', { label: string; variant: BadgeVariant }> = {
  active: { label: 'Active', variant: 'emerald' },
  sold: { label: 'Sold', variant: 'orange' },
} as const

export function HomeProjects() {
  return (
    <section className="@container/projects">
      <SectionHeader>
        <SectionHeaderTitle>Projects</SectionHeaderTitle>
        <SectionHeaderText>
          These are my personal projects, both past and ongoing:
        </SectionHeaderText>
      </SectionHeader>

      <div className="grid gap-4 @xl/projects:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.name} render={<article />}>
            <CardHeader>
              <div className="shrink-0 rounded-sm border border-border bg-muted/50 p-0.75 *:size-4">
                {project.icon}
              </div>

              <CardTitle>
                <Link
                  className="after:absolute after:inset-0"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.name}
                </Link>
              </CardTitle>

              <Badge variant={statusLabels[project.status].variant} size="sm">
                {statusLabels[project.status].label}
              </Badge>
            </CardHeader>

            <CardContent>
              <p>{project.description}</p>
            </CardContent>

            <CardIndicator>
              <Icon icon={LinkSquare02Icon} />
            </CardIndicator>
          </Card>
        ))}
      </div>
    </section>
  )
}
