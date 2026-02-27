import { mergeProps } from '@base-ui/react/merge-props'
import { useRender } from '@base-ui/react/use-render'
import { cva } from 'cva'
import { cn } from '@/lib/utils'
import type { VariantProps } from 'cva'

export const badgeVariants = cva({
  base: [
    'group/badge inline-flex w-fit shrink-0 items-center justify-center overflow-hidden',
    'rounded-full border border-transparent font-medium whitespace-nowrap outline-0 transition-all',
    'focus-visible:ring-3 focus-visible:ring-ring/50',
    '[&>svg]:pointer-events-none',
  ],
  variants: {
    variant: {
      default: 'bg-primary text-primary-foreground',
      secondary: 'bg-secondary text-secondary-foreground',
      emerald: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-600',
      orange: 'bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-600',
    },
    size: {
      sm: 'h-5 gap-1 px-2 text-xs [&>svg]:size-3.5',
      md: 'h-6.5 gap-1.75 px-2.5 text-xs [&>svg]:size-4',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
})

export type BadgeVariant = NonNullable<VariantProps<typeof badgeVariants>['variant']>

export function Badge({
  className,
  variant = 'default',
  size = 'md',
  render,
  ...props
}: useRender.ComponentProps<'span'> & VariantProps<typeof badgeVariants>) {
  const defaultProps: useRender.ElementProps<'span'> = {
    className: cn(badgeVariants({ variant, size }), className),
  }

  return useRender({
    defaultTagName: 'span',
    render,
    props: mergeProps<'span'>(defaultProps, props),
    state: {
      slot: 'badge',
      variant,
    },
  })
}
