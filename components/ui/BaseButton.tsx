import { Slot } from 'radix-ui'
import { tv } from 'tailwind-variants'
import { cn } from '@/utils/css'
import type { ComponentProps, ReactNode } from 'react'
import type { VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
  slots: {
    base: 'inline-flex justify-center items-center gap-2 px-4 h-8 rounded-full outline-none font-sans font-medium text-sm whitespace-nowrap transition-all cursor-pointer focus:ring-3 focus:ring-zinc-200 [&>svg]:shrink-0 [&>svg]:fill-current [&>svg]:size-4',
    hotkey:
      'shrink-0 inline-flex items-center justify-center size-4 border rounded text-[0.6875rem] leading-none uppercase',
  },
  variants: {
    variant: {
      primary: {
        base: 'bg-layout-primary-active text-contrast hover:bg-layout-primary-hover',
        hotkey: 'bg-layout-primary-contrast border-layout-contrast',
      },
      secondary: {
        base: 'bg-layout-secondary-active border border-layout-primary text-primary hover:bg-layout-secondary-hover',
        hotkey: 'bg-layout-secondary-contrast border-layout-primary',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

type ButtonVariants = VariantProps<typeof buttonVariants>

interface BaseButtonProps {
  asChild?: boolean
  children: ReactNode
  className?: string
  hotkey?: string
  variant?: ButtonVariants['variant']
}

export function BaseButton({
  asChild,
  children,
  className,
  hotkey,
  variant,
  ...props
}: BaseButtonProps & ComponentProps<'button'>) {
  const Component = asChild ? Slot.Root : 'button'

  const { base, hotkey: hotkeyVariants } = buttonVariants({ variant })

  return (
    <Component className={cn(base(), className)} {...props}>
      {hotkey && <span className={hotkeyVariants()}>{hotkey}</span>}
      <Slot.Slottable>{children}</Slot.Slottable>
    </Component>
  )
}
