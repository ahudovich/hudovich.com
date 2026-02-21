import { cva } from 'cva'
import { cn } from '@/lib/utils'
import type { VariantProps } from 'cva'

const hotkeyVariants = cva({
  base: 'shrink-0 inline-flex items-center justify-center size-4 border rounded font-mono text-[0.6875rem] leading-none uppercase',
  variants: {
    variant: {
      primary: 'bg-muted/25 border-transparent text-primary-foreground',
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
