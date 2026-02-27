import { mergeProps } from '@base-ui/react/merge-props'
import { useRender } from '@base-ui/react/use-render'
import { cn } from '@/lib/utils'

export function Card({ className, render, ...props }: useRender.ComponentProps<'div'>) {
  const defaultProps: useRender.ElementProps<'div'> = {
    className: cn(
      'group/card relative flex flex-col gap-1.5 overflow-hidden p-3 text-sm text-card-foreground',
      'rounded border border-border bg-card ring-3 ring-transparent transition-all outline-none',
      'hover:ring-ring/15 focus-visible:ring-ring/50',
      className
    ),
  }

  return useRender({
    defaultTagName: 'div',
    render,
    props: mergeProps<'div'>(defaultProps, props),
    state: {
      slot: 'card',
    },
  })
}

export function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'flex items-center gap-2 group-has-data-[slot=card-indicator]/card:pr-8',
        className
      )}
      data-slot="card-header"
      {...props}
    />
  )
}

export function CardTitle({ className, render, ...props }: useRender.ComponentProps<'h2'>) {
  const defaultProps: useRender.ElementProps<'h2'> = {
    className: cn('font-heading text-base font-medium', className),
  }

  return useRender({
    defaultTagName: 'h2',
    render,
    props: mergeProps<'h2'>(defaultProps, props),
    state: {
      slot: 'card-title',
    },
  })
}

export function CardIndicator({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'absolute top-3.5 right-3 transform-gpu text-muted-foreground/50 opacity-0 transition-opacity',
        'group-focus-within/card:opacity-100 group-hover/card:opacity-100 [&_svg]:size-4',
        className
      )}
      data-slot="card-indicator"
      {...props}
    />
  )
}

export function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('text-sm leading-relaxed text-muted-foreground', className)}
      data-slot="card-content"
      {...props}
    />
  )
}
