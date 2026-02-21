import { SectionHeader, SectionHeaderTitle } from '@/components/layout/SectionHeader'
import { links } from '@/data/links'

export function HomeContact() {
  return (
    <section>
      <SectionHeader>
        <SectionHeaderTitle>Get in touch</SectionHeaderTitle>
      </SectionHeader>

      <p className="mb-1.5">
        You can reach me <span className="xs:inline hidden">anytime</span> at{' '}
        <a
          className="group text-foreground inline-flex items-center gap-1 font-medium"
          href={`mailto:${links.email}`}
        >
          <span className="after:bg-primary relative inline-block after:absolute after:inset-x-0 after:-bottom-px after:h-px after:transition-all after:duration-300 group-hover:after:h-0.5">
            {links.email}
          </span>
        </a>
      </p>

      <p>
        Or book a call on{' '}
        <a
          className="group text-foreground inline-flex items-center gap-1 font-medium"
          href={links.calcom}
          target="_blank"
        >
          <span className="after:bg-primary relative inline-block after:absolute after:inset-x-0 after:-bottom-px after:h-px after:transition-all after:duration-300 group-hover:after:h-0.5">
            Cal.com
          </span>
        </a>
      </p>
    </section>
  )
}
