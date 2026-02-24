import { cn } from '@/lib/utils'

export function Heading1({ className, children, ...props }: React.ComponentProps<'h1'>) {
  return (
    <h1 className={cn('text-2xl font-semibold', className)} {...props}>
      {children}
    </h1>
  )
}
