import { mergeProps } from '@base-ui/react/merge-props'
import { useRender } from '@base-ui/react/use-render'
import { cva } from 'cva'
import { cn } from '@/lib/utils'
import type { VariantProps } from 'cva'

export const badgeVariants = cva({
  base: [
    'group/badge inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap outline-0 transition-all',
    'focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50',
    '[&>svg]:pointer-events-none',
  ],
  variants: {
    variant: {
      default: 'bg-primary text-primary-foreground [a]:hover:bg-primary/80',
      secondary:
        'bg-secondary text-secondary-foreground dark:text-foreground [a]:hover:bg-secondary/80',
      blue: 'bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-500/80 [a]:hover:bg-blue-100/80',
      emerald:
        'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-500/80 [a]:hover:bg-emerald-100/80',
      orange:
        'bg-orange-100 text-orange-800 dark:bg-orange-950/60 dark:text-orange-500/80 [a]:hover:bg-orange-100/80',
    },
    size: {
      sm: 'h-5 [&>svg]:size-3.5',
      md: 'h-6 [&>svg]:size-4',
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
  return useRender({
    defaultTagName: 'span',
    props: mergeProps<'span'>(
      {
        className: cn(badgeVariants({ variant, size }), className),
      },
      props
    ),
    render,
    state: {
      slot: 'badge',
      variant,
    },
  })
}
