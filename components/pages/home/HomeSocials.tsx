import { IconHugeBluesky } from '@/components/icons/huge/IconHugeBluesky'
import { IconHugeBookmark01 } from '@/components/icons/huge/IconHugeBookmark01'
import { IconHugeLinkedIn01 } from '@/components/icons/huge/IconHugeLinkedIn01'
import { IconHugeNewTwitter } from '@/components/icons/huge/IconHugeNewTwitter'
import { IconHugeThreads } from '@/components/icons/huge/IconHugeThreads'
import { SectionHeader } from '@/components/SectionHeader'
import { links } from '@/data/links'

const socialLinks = [
  {
    label: 'X/Twitter',
    icon: IconHugeNewTwitter,
    href: links.social.x,
    fill: 'fill-primary',
  },
  {
    label: 'Threads',
    icon: IconHugeThreads,
    href: links.social.threads,
    fill: 'fill-primary',
  },
  {
    label: 'Bluesky',
    icon: IconHugeBluesky,
    href: links.social.bluesky,
    fill: 'fill-[#0085dd]',
  },
  {
    label: 'LinkedIn',
    icon: IconHugeLinkedIn01,
    href: links.social.linkedin,
    fill: 'fill-[#0a66c2]',
  },
  {
    label: 'Substack',
    icon: IconHugeBookmark01,
    href: links.social.substack,
    fill: 'fill-[#fe6a09]',
  },
]

export function HomeSocials() {
  return (
    <section>
      <SectionHeader heading="Find me on" text="You can find me on the following platforms:" />

      <ul className="flex items-center gap-2.5">
        {socialLinks.map((link) => (
          <li className="group" key={link.label}>
            <a
              className="inline-flex items-center gap-2 px-2.5 h-6 bg-zinc-100 rounded-full outline-none font-medium text-xs text-secondary transition-all hover:bg-zinc-200/75 focus:ring-3 focus:ring-zinc-200"
              href={link.href}
              target="_blank"
            >
              <link.icon className={`shrink-0 size-4 group-first:size-3.5 ${link.fill}`} />
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
