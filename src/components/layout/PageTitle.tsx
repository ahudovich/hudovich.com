import { cn } from '@/lib/utils'

export function PageTitle({ className, children, ...props }: React.ComponentProps<'h1'>) {
  return (
    <h1 className={cn('font-heading text-2xl font-semibold text-foreground', className)} {...props}>
      {children}
    </h1>
  )
}
