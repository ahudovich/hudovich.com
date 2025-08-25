import { Logo } from '@/components/Logo'
import { cn } from '@/utils/css'

export function Header({ className }: { className?: string }) {
  return (
    <header className={cn('group flex items-center mx-auto h-16', className)}>
      <div className="flex items-center gap-1 overflow-hidden select-none">
        <span className="relative z-[1] shrink-0 bg-white">
          <Logo className="size-5 fill-accent" />
        </span>

        <span className="font-bold text-[1.0625rem] leading-5 tracking-[0.025em] text-secondary uppercase">
          AH
        </span>
      </div>
    </header>
  )
}
