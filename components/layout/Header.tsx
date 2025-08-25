import { Logo } from '@/components/Logo'
import { cn } from '@/utils/css'

export function Header({ className }: { className?: string }) {
  return (
    <header className={cn('group flex items-center mx-auto max-w-[80rem] h-16', className)}>
      <div className="flex items-center gap-1 overflow-hidden">
        <span className="relative z-[1] shrink-0 bg-white">
          <Logo className="size-5 fill-accent" />
        </span>

        <span className="font-bold text-[1rem] leading-5 tracking-[0.02em] text-secondary uppercase">
          AH
        </span>
      </div>
    </header>
  )
}
