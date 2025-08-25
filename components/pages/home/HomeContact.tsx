import { SectionHeader } from '@/components/SectionHeader'
import { links } from '@/data/links'

export function HomeContact() {
  return (
    <section>
      <SectionHeader heading="Get in touch" />

      <p className="mb-1.5">
        You can reach me <span className="hidden xs:inline">anytime</span> at{' '}
        <a
          className="group inline-flex items-center gap-1 font-medium text-primary"
          href={`mailto:${links.email}`}
        >
          <span className="relative inline-block after:absolute after:inset-x-0 after:-bottom-px after:h-px after:bg-accent after:transition-all after:duration-300 group-hover:after:h-0.5">
            {links.email}
          </span>
        </a>
      </p>

      <p>
        Or book a call on{' '}
        <a
          className="group inline-flex items-center gap-1 font-medium text-primary"
          href={links.calcom}
          target="_blank"
        >
          <span className="relative inline-block after:absolute after:inset-x-0 after:-bottom-px after:h-px after:bg-accent after:transition-all after:duration-300 group-hover:after:h-0.5">
            Cal.com
          </span>
        </a>
      </p>
    </section>
  )
}
