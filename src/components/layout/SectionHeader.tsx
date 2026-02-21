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
        'text-faded font-sans text-xs font-medium tracking-[0.02em] uppercase',
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
    <p className={cn('mt-3', className)} {...props}>
      {children}
    </p>
  )
}
