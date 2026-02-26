import Link from 'next/link'
import { QuillWrite01Icon, Wrench01Icon } from '@hugeicons/core-free-icons'
import { Container } from '@/components/layout/Container'
import { Logo } from '@/components/logos/Logo'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { HeaderThemeToggle } from './HeaderThemeToggle'

const links = [
  {
    href: '/posts',
    label: 'Posts',
    icon: QuillWrite01Icon,
  },
  {
    href: '/tools',
    label: 'Tools',
    icon: Wrench01Icon,
  },
] as const

export function Header(props: React.ComponentProps<'header'>) {
  return (
    <header {...props}>
      <Container className="flex h-18 items-center gap-3 sm:gap-10" variant="wide">
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

        <nav>
          <ul className="flex items-center gap-3 sm:gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <Button
                  nativeButton={false}
                  variant="ghost"
                  render={
                    <Link href={link.href}>
                      <Icon icon={link.icon} />
                      {link.label}
                    </Link>
                  }
                />
              </li>
            ))}
          </ul>
        </nav>

        <div className="-mr-2 ml-auto">
          <HeaderThemeToggle />
        </div>
      </Container>
    </header>
  )
}
