import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { cva } from 'cva'
import { cn } from '@/lib/utils'
import type { VariantProps } from 'cva'

export const buttonVariants = cva({
  base: [
    'group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent font-sans text-[13px] font-medium whitespace-nowrap transition-all outline-none select-none',
    'disabled:pointer-events-none disabled:opacity-50',
    'focus-visible:ring-3 focus-visible:ring-ring/50',
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ],
  variants: {
    variant: {
      default: 'bg-primary text-primary-foreground [a]:hover:bg-primary/80',
      outline:
        'border-border bg-background hover:bg-muted hover:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      ghost: 'hover:bg-muted hover:text-foreground dark:hover:bg-muted/50',
      link: 'text-primary underline-offset-4 hover:underline',
    },
    size: {
      default: 'h-8 gap-1.5 px-4',
      icon: 'size-8',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

export function Button({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      className={cn(buttonVariants({ variant, size }), className)}
      data-slot="button"
      {...props}
    />
  )
}
