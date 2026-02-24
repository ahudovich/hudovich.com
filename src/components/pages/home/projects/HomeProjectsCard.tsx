import { LinkSquare02Icon } from '@hugeicons/core-free-icons'
import { Badge } from '@/components/ui/Badge'
import { Icon } from '@/components/ui/Icon'
import { cn } from '@/lib/utils'
import type { BadgeVariant } from '@/components/ui/Badge'
import type { ProjectStatusType } from '@/lib/types'

const statusLabels: Record<ProjectStatusType, { label: string; variant: BadgeVariant }> = {
  active: { label: 'Active', variant: 'emerald' },
  sold: { label: 'Sold', variant: 'orange' },
  development: { label: 'In development', variant: 'sky' },
}

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
        'block rounded-lg border border-border bg-card p-3',
        href && [
          'group relative cursor-pointer ring-3 ring-transparent transition-all outline-none',
          'hover:ring-ring/15 focus-visible:ring-ring/50',
        ],
        className
      )}
      href={href}
      target={href ? '_blank' : undefined}
      rel={href ? 'noreferrer' : undefined}
      {...props}
    >
      <div className="mb-2 flex items-center gap-2">
        <div
          className={cn(
            'shrink-0 rounded-sm border border-border bg-muted/50 p-0.75',
            '*:size-4 *:text-foreground'
          )}
        >
          {icon}
        </div>

        <h3 className="text-base font-medium">{name}</h3>

        <Badge variant={statusLabels[status].variant} size="sm">
          {statusLabels[status].label}
        </Badge>
      </div>

      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>

      {href && (
        <Icon
          icon={LinkSquare02Icon}
          className={cn(
            'absolute top-3 right-3 size-3.5 transform-gpu text-brand/75 opacity-0 transition-opacity',
            'group-focus-within:opacity-100 group-hover:opacity-100'
          )}
        />
      )}
    </a>
  )
}
