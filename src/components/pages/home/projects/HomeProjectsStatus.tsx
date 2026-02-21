import { cva } from 'cva'
import { cn } from '@/lib/utils'
import type { VariantProps } from 'cva'
import type { ProjectStatusType } from '@/lib/types'

const projectStatusVariants = cva({
  base: 'inline-flex h-5 items-center rounded-full px-2.5 text-xs font-medium whitespace-nowrap capitalize',
  variants: {
    status: {
      active: 'bg-green-100 text-green-800',
      sold: 'bg-orange-100 text-orange-800',
      development: 'bg-indigo-100 text-indigo-800',
    },
  },
  defaultVariants: {
    status: 'active',
  },
})

const statusLabels: Record<ProjectStatusType, string> = {
  active: 'Active',
  sold: 'Sold',
  development: 'In development',
}

export function HomeProjectsStatus({
  className,
  status = 'active',
  ...props
}: React.ComponentProps<'span'> & VariantProps<typeof projectStatusVariants>) {
  return (
    <span
      className={cn(projectStatusVariants({ status }), className)}
      data-slot="status"
      data-status={status}
      {...props}
    >
      {statusLabels[status]}
    </span>
  )
}
