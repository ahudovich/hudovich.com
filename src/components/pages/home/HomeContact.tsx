import { SectionHeader, SectionHeaderTitle } from '@/components/layout/SectionHeader'
import { links } from '@/data/links'

export function HomeContact() {
  return (
    <section>
      <SectionHeader>
        <SectionHeaderTitle>Get in touch</SectionHeaderTitle>
      </SectionHeader>

      <p className="mb-1.5">
        You can reach me <span className="hidden xs:inline">anytime</span> at{' '}
        <a
          className="group inline-flex items-center gap-1 font-medium text-foreground"
          href={`mailto:${links.email}`}
        >
          <span className="relative inline-block after:absolute after:inset-x-0 after:-bottom-px after:h-px after:bg-primary after:transition-all after:duration-300 group-hover:after:h-0.5">
            {links.email}
          </span>
        </a>
      </p>

      <p>
        Or book a call on{' '}
        <a
          className="group inline-flex items-center gap-1 font-medium text-foreground"
          href={links.calcom}
          target="_blank"
        >
          <span className="relative inline-block after:absolute after:inset-x-0 after:-bottom-px after:h-px after:bg-primary after:transition-all after:duration-300 group-hover:after:h-0.5">
            Cal.com
          </span>
        </a>
      </p>
    </section>
  )
}
