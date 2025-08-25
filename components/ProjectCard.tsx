import { IconHugeLinkSquare02 } from '@/components/icons/huge/IconHugeLinkSquare02'
import { ProjectStatus } from '@/components/ProjectStatus'
import { cn } from '@/utils/css'
import type { ProjectStatusType } from '@/types/ProjectStatusType'

interface ProjectCardProps {
  name: string
  description: string
  status: ProjectStatusType
  icon: React.ReactNode
  link?: string
}

export function ProjectCard({ name, description, status, icon, link }: ProjectCardProps) {
  const Component = link ? 'a' : 'div'

  return (
    <Component
      className={cn(
        'block p-3 bg-layout-secondary-active border border-layout-primary rounded-lg',
        link &&
          'group relative ring-3 ring-transparent outline-none cursor-pointer transition-all duration-300 hover:border-zinc-300 hover:ring-zinc-100 focus-visible:border-zinc-300 focus-visible:ring-zinc-100'
      )}
      href={link}
      target={link ? '_blank' : undefined}
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="shrink-0 grid place-content-center size-6 bg-layout-secondary-contrast border border-layout-primary rounded-sm [&>svg]:size-4">
          {icon}
        </div>
        <h3 className="font-medium text-md">{name}</h3>
        <ProjectStatus status={status} />
      </div>

      <p className="text-sm text-tertiary">{description}</p>

      {link && (
        <IconHugeLinkSquare02 className="absolute top-3 right-3 size-3.5 fill-zinc-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100" />
      )}
    </Component>
  )
}
