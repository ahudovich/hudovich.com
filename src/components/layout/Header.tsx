import { Logo } from '@/components/layout/Logo'
import { cn } from '@/lib/utils'

export function Header({ className, ...props }: React.ComponentProps<'header'>) {
  return (
    <header className={cn('mx-auto flex h-16 items-center', className)} {...props}>
      <div className="flex items-center gap-1 select-none">
        <Logo className="size-5 shrink-0 text-brand" />
        <span className="text-[1.0625rem] font-bold tracking-[0.025em]">AH</span>
      </div>
    </header>
  )
}
