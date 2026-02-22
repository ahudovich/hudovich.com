import { cn } from '@/lib/utils'

export function TextLink({ children, href, ...props }: React.ComponentProps<'a'>) {
  return (
    <a
      className="group text-foreground inline-flex items-center gap-1 font-medium"
      href={href}
      {...props}
    >
      <span
        className={cn(
          'relative inline-block',
          'after:bg-brand after:absolute after:inset-x-0 after:-bottom-px after:h-px after:transition-all group-hover:after:h-0.5'
        )}
      >
        {children}
      </span>
    </a>
  )
}
