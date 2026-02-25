import Image from 'next/image'
import { Calendar03Icon, Mail01Icon } from '@hugeicons/core-free-icons'
import { IconFlagPoland } from '@/components/icons/IconFlagPoland'
import { buttonVariants } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { links } from '@/data/links.json'
import { cn } from '@/lib/utils'

export function HomeHero(props: React.ComponentProps<'section'>) {
  return (
    <section {...props}>
      <Image
        className="mb-5 size-16 rounded-full"
        src="/avatar.png"
        alt="Andrei Hudovich"
        width={64}
        height={64}
        loading="eager"
      />

      <h1 className="mb-4 font-heading text-2xl font-semibold">
        Hey, I&apos;m <span className="border-b-[0.09375rem] border-primary">Andrei Hudovich</span>!
      </h1>

      <div className="mb-5 space-y-3 leading-relaxed text-pretty sm:space-y-0">
        <p className="sm:mb-1.75">
          A senior software engineer based in Wroclaw,&nbsp;Poland
          <IconFlagPoland
            className={cn(
              'ml-2 inline-block h-2.25 w-3 shrink-0 -translate-y-0.5 rounded-xs',
              'drop-shadow-[0_0_1px_rgba(0,0,0,0.1)]'
            )}
          />
        </p>

        <p>I build my own products and work as a freelance consultant.</p>
      </div>

      <div className="flex items-center gap-4">
        <a
          className={cn(buttonVariants({ variant: 'default' }))}
          href={links.calcom}
          target="_blank"
          rel="noreferrer"
        >
          <Icon icon={Calendar03Icon} />
          Book a call
        </a>

        <a className={cn(buttonVariants({ variant: 'outline' }))} href={`mailto:${links.email}`}>
          <Icon icon={Mail01Icon} />
          Send an email
        </a>
      </div>
    </section>
  )
}
