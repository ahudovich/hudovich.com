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
        'bg-layout-secondary-active border-border block rounded-lg border p-3',
        href &&
          'group relative cursor-pointer ring-3 ring-transparent transition-all duration-300 outline-none hover:border-zinc-300 hover:ring-zinc-100 focus-visible:border-zinc-300 focus-visible:ring-zinc-100',
        className
      )}
      href={href}
      target={href ? '_blank' : undefined}
      {...props}
    >
      <div className="mb-2 flex items-center gap-2">
        <div className="bg-layout-secondary-contrast border-border *:text-foreground grid size-6 shrink-0 place-content-center rounded-sm border *:size-4">
          {icon}
        </div>

        <h3 className="text-base font-medium">{name}</h3>
        <HomeProjectsStatus status={status} />
      </div>

      <p className="text-tertiary text-sm">{description}</p>

      {href && (
        <Icon
          icon={LinkSquare02Icon}
          className="absolute top-3 right-3 size-3.5 transform-gpu text-zinc-400 opacity-0 transition-opacity duration-300 group-focus-within:opacity-100 group-hover:opacity-100"
        />
      )}
    </a>
  )
}
