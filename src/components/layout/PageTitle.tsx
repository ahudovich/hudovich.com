import { cn } from '@/lib/utils'

export function PageTitle({ className, children, ...props }: React.ComponentProps<'h1'>) {
  return (
    <h1
      className={cn('font-heading text-xl font-semibold text-foreground xs:text-2xl', className)}
      {...props}
    >
      {children}
    </h1>
  )
}
