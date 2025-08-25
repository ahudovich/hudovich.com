import { tv } from 'tailwind-variants'
import { cn } from '@/utils/css'
import type { VariantProps } from 'tailwind-variants'

const projectStatusVariants = tv({
  base: 'flex items-center px-2.5 h-5 rounded-full font-medium text-xs capitalize',
  variants: {
    status: {
      active: 'bg-green-100 text-green-800',
      sold: 'bg-orange-100 text-orange-800',
    },
  },
  defaultVariants: {
    status: 'active',
  },
})

type ProjectStatusVariants = VariantProps<typeof projectStatusVariants>

interface ProjectStatusProps {
  className?: string
  status: ProjectStatusVariants['status']
}

export function ProjectStatus({ status, className }: ProjectStatusProps) {
  return <span className={cn(projectStatusVariants({ status }), className)}>{status}</span>
}
