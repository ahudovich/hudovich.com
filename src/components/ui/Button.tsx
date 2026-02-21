import { cva } from 'cva'
import { cn } from '@/lib/utils'
import type { VariantProps } from 'cva'

const buttonVariants = cva({
  base: [
    'inline-flex justify-center items-center gap-2 px-4 h-8 border border-transparent rounded-full outline-none font-sans font-medium text-sm whitespace-nowrap transition-all cursor-pointer select-none',
    'focus-visible:ring-3 focus-visible:ring-zinc-200 disabled:pointer-events-none disabled:opacity-50',
    '[&_svg]:shrink-0 [&_svg]:fill-current [&_svg:not([class*="size-"])]:size-4 [&_svg]:pointer-events-none',
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
