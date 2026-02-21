import { Logo } from '@/components/layout/Logo'
import { cn } from '@/lib/utils'

export function Header({ className, ...props }: React.ComponentProps<'header'>) {
  return (
    <header className={cn('flex items-center mx-auto h-16', className)} {...props}>
      <div className="flex items-center gap-1 select-none">
        <span className="relative z-1 shrink-0 bg-white">
          <Logo className="size-5 text-primary" />
        </span>
        <span className="font-bold text-[1.0625rem] leading-5 tracking-[0.025em] text-secondary uppercase">
          AH
        </span>
      </div>
    </header>
  )
}
