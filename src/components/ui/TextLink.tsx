import { cn } from '@/lib/utils'

export function TextLink({ children, href, ...props }: React.ComponentProps<'a'>) {
  return (
    <a
      className="group inline-flex items-center gap-1 font-medium text-foreground"
      href={href}
      {...props}
    >
      <span
        className={cn(
          'relative inline-block',
          'after:absolute after:inset-x-0 after:-bottom-px after:h-px after:bg-brand after:transition-all group-hover:after:h-0.5'
        )}
      >
        {children}
      </span>
    </a>
  )
}
