import Link from 'next/link'
import { QuillWrite01Icon, Wrench01Icon } from '@hugeicons/core-free-icons'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'

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

export function Navigation() {
  return (
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
  )
}
