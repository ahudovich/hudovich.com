import { LinkSquare02Icon } from '@hugeicons/core-free-icons'
import { Icon } from '@/components/ui/Icon'
import { cn } from '@/lib/utils'
import { HomeProjectsStatus } from './HomeProjectsStatus'
import type { ProjectStatusType } from '@/lib/types'

interface HomeProjectsCardProps extends React.ComponentProps<'a'> {
  name: string
  description: string
  icon: React.ReactNode
  status: ProjectStatusType
}

export function HomeProjectsCard({
  className,
  name,
  description,
  status,
  href,
  icon,
  ...props
}: HomeProjectsCardProps) {
  return (
    <a
      className={cn(
        'block p-3 bg-layout-secondary-active border border-border rounded-lg',
        href &&
          'group relative ring-3 ring-transparent outline-none cursor-pointer transition-all duration-300 hover:border-zinc-300 hover:ring-zinc-100 focus-visible:border-zinc-300 focus-visible:ring-zinc-100',
        className
      )}
      href={href}
      target={href ? '_blank' : undefined}
      {...props}
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="shrink-0 grid place-content-center size-6 bg-layout-secondary-contrast border border-border rounded-sm *:size-4 *:text-foreground">
          {icon}
        </div>

        <h3 className="font-medium text-base">{name}</h3>
        <HomeProjectsStatus status={status} />
      </div>

      <p className="text-sm text-tertiary">{description}</p>

      {href && (
        <Icon
          icon={LinkSquare02Icon}
          className="absolute top-3 right-3 size-3.5 text-zinc-400 opacity-0 transition-opacity transform-gpu duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
        />
      )}
    </a>
  )
}
