import { cva } from 'cva'
import { cn } from '@/lib/utils'
import type { VariantProps } from 'cva'

const hotkeyVariants = cva({
  base: 'inline-flex size-4 shrink-0 items-center justify-center rounded border font-mono text-[0.6875rem] leading-none uppercase',
  variants: {
    variant: {
      primary: 'bg-muted/25 text-primary-foreground border-transparent',
      secondary: 'bg-muted border-border text-muted-foreground',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export function Hotkey({
  className,
  variant = 'primary',
  children,
  ...props
}: React.ComponentProps<'span'> & VariantProps<typeof hotkeyVariants>) {
  return (
    <span className={cn(hotkeyVariants({ variant }), className)} {...props}>
      {children}
    </span>
  )
}
