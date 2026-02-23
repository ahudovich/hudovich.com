import { Container } from '@/components/layout/Container'
import { HeaderThemeToggle } from '@/components/layout/HeaderThemeToggle'
import { Logo } from '@/components/layout/Logo'

export function Header(props: React.ComponentProps<'header'>) {
  return (
    <header {...props}>
      <Container className="flex h-16 items-center" variant="wide">
        <div className="flex items-center gap-1 select-none">
          <Logo className="size-5 shrink-0 text-brand" />
          <span className="text-[1.0625rem] font-bold tracking-[0.025em]">AH</span>
        </div>

        <div className="ml-auto">
          <HeaderThemeToggle />
        </div>
      </Container>
    </header>
  )
}
