import { Logo } from '@/components/layout/Logo'
import { cn } from '@/lib/utils'

export function Header({ className, ...props }: React.ComponentProps<'header'>) {
  return (
    <header className={cn('mx-auto flex h-16 items-center', className)} {...props}>
      <div className="flex items-center gap-1 select-none">
        <span className="relative z-1 shrink-0 bg-white">
          <Logo className="text-primary size-5" />
        </span>
        <span className="text-secondary text-[1.0625rem] leading-5 font-bold tracking-[0.025em] uppercase">
          AH
        </span>
      </div>
    </header>
  )
}
