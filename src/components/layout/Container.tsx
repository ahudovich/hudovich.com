import { mergeProps } from '@base-ui/react/merge-props'
import { useRender } from '@base-ui/react/use-render'
import { cva } from 'cva'
import { cn } from '@/lib/utils'
import type { VariantProps } from 'cva'

export const containerVariants = cva({
  base: 'mx-auto w-full px-4 sm:px-8',
  variants: {
    variant: {
      default: 'max-w-176',
      wide: 'max-w-7xl',
      fluid: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export function Container({
  className,
  variant = 'default',
  render,
  ...props
}: useRender.ComponentProps<'div'> & VariantProps<typeof containerVariants>) {
  const defaultProps: useRender.ElementProps<'div'> = {
    className: cn(containerVariants({ variant }), className),
  }

  const element = useRender({
    defaultTagName: 'div',
    render,
    props: mergeProps<'div'>(defaultProps, props),
    state: {
      slot: 'container',
      variant,
    },
  })

  return element
}
