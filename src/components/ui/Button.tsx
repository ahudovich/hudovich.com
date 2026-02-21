import { cva } from 'cva'
import { cn } from '@/lib/utils'
import type { VariantProps } from 'cva'

const buttonVariants = cva({
  base: [
    'inline-flex h-8 cursor-pointer items-center justify-center gap-2 rounded-full border border-transparent px-4 font-sans text-sm font-medium whitespace-nowrap transition-all outline-none select-none',
    'focus-visible:ring-3 focus-visible:ring-zinc-200 disabled:pointer-events-none disabled:opacity-50',
    '[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:fill-current [&_svg:not([class*="size-"])]:size-4',
  ],
  variants: {
    variant: {
      default: 'bg-foreground text-primary-foreground hover:bg-foreground/90',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      outline: 'bg-background border-border text-foreground hover:bg-muted',
      ghost: 'text-foreground hover:bg-muted',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export function Button({
  className,
  variant = 'default',
  children,
  ...props
}: React.ComponentProps<'a'> & VariantProps<typeof buttonVariants>) {
  return (
    <a className={cn(buttonVariants({ variant }), className)} {...props}>
      {children}
    </a>
  )
}
