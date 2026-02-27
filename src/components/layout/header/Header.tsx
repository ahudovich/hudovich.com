import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { Logo } from '@/components/logos/Logo'
import { Button } from '@/components/ui/Button'
import { HeaderThemeToggle } from './HeaderThemeToggle'

export function Header(props: React.ComponentProps<'header'>) {
  return (
    <header {...props}>
      <Container className="flex h-18 items-center gap-3 sm:gap-10" variant="fluid">
        <Button
          className="-ml-2.5 gap-1 hover:bg-transparent"
          nativeButton={false}
          variant="ghost"
          render={
            <Link href="/" aria-label="Home">
              <Logo className="size-5.5 shrink-0 text-primary" />
              <span className="translate-y-px text-lg leading-none font-bold tracking-wider">
                AH
              </span>
            </Link>
          }
        />

        <div className="-mr-2 ml-auto">
          <HeaderThemeToggle />
        </div>
      </Container>
    </header>
  )
}
