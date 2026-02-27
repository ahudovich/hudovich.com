import { cn } from '@/lib/utils'

export function SectionHeader({ className, children, ...props }: React.ComponentProps<'div'>) {
  return (
    <div className={cn('mb-4', className)} {...props}>
      {children}
    </div>
  )
}

export function SectionHeaderTitle({ className, children, ...props }: React.ComponentProps<'h2'>) {
  return (
    <h2
      className={cn(
        'font-heading text-xs font-medium tracking-wider text-muted-foreground uppercase',
        className
      )}
      {...props}
    >
      {children}
    </h2>
  )
}

export function SectionHeaderText({ className, children, ...props }: React.ComponentProps<'p'>) {
  return (
    <p className={cn('mt-2', className)} {...props}>
      {children}
    </p>
  )
}
