import {
  BlueskyIcon,
  Bookmark01Icon,
  Linkedin01Icon,
  NewTwitterIcon,
  ThreadsIcon,
} from '@hugeicons/core-free-icons'
import {
  SectionHeader,
  SectionHeaderText,
  SectionHeaderTitle,
} from '@/components/layout/SectionHeader'
import { Icon } from '@/components/ui/Icon'
import { links } from '@/data/links'
import { cn } from '@/lib/utils'
import type { IconSvgElement } from '@hugeicons/react'

const socialLinks: Array<{
  slot: string
  label: string
  icon: IconSvgElement
  href: string
  fill: string
}> = [
  {
    slot: 'x',
    label: 'X/Twitter',
    icon: NewTwitterIcon,
    href: links.social.x,
    fill: 'text-foreground',
  },
  {
    slot: 'threads',
    label: 'Threads',
    icon: ThreadsIcon,
    href: links.social.threads,
    fill: 'text-foreground',
  },
  {
    slot: 'bluesky',
    label: 'Bluesky',
    icon: BlueskyIcon,
    href: links.social.bluesky,
    fill: 'text-[#0085dd]',
  },
  {
    slot: 'linkedin',
    label: 'LinkedIn',
    icon: Linkedin01Icon,
    href: links.social.linkedin,
    fill: 'text-[#0a66c2]',
  },
  {
    slot: 'substack',
    label: 'Substack',
    icon: Bookmark01Icon,
    href: links.social.substack,
    fill: 'text-[#fe6a09]',
  },
] as const

export function HomeSocials() {
  return (
    <section>
      <SectionHeader>
        <SectionHeaderTitle>Find me on</SectionHeaderTitle>
        <SectionHeaderText>You can find me on the following social platforms:</SectionHeaderText>
      </SectionHeader>

      <ul className="flex flex-wrap items-center gap-2.5">
        {socialLinks.map((link) => (
          <li className="group">
            <a
              className="text-secondary inline-flex h-6 items-center gap-2 rounded-full bg-zinc-100 px-2.5 text-xs font-medium transition-all outline-none hover:bg-zinc-200/75 focus-visible:ring-3 focus-visible:ring-zinc-200"
              href={link.href}
              target="_blank"
            >
              <Icon
                icon={link.icon}
                className={cn('size-4 shrink-0 data-[slot="x"]:size-3.5', link.fill)}
                data-slot={link.slot}
              />
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
