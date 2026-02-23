import { SectionHeader, SectionHeaderTitle } from '@/components/layout/SectionHeader'
import { TextLink } from '@/components/ui/TextLink'
import { links } from '@/data/links.json'

export function HomeContact() {
  return (
    <section>
      <SectionHeader>
        <SectionHeaderTitle>Get in touch</SectionHeaderTitle>
      </SectionHeader>

      <div className="space-y-2">
        <p>
          You can reach me <span className="hidden xs:inline">anytime</span> at{' '}
          <TextLink href={`mailto:${links.email}`}>{links.email}</TextLink>
        </p>

        <p>
          Or book a call on{' '}
          <TextLink href={links.calcom} target="_blank" rel="noreferrer">
            Cal.com
          </TextLink>
        </p>
      </div>
    </section>
  )
}
