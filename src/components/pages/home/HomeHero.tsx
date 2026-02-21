import { IconFlagPoland } from '@/components/icons/IconFlagPoland'
import { Button } from '@/components/ui/Button'
import { Hotkey } from '@/components/ui/Hotkey'
import { links } from '@/data/links'

export function HomeHero({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <div className="mb-4">{children}</div>

      <h1 className="mb-4 font-sans text-[1.375rem] leading-7 font-semibold tracking-[0.02em]">
        Hey, I&apos;m{' '}
        <span className="text-primary border-b-[0.09375rem] border-current">Andrei Hudovich</span>!
      </h1>

      <div className="mb-5 space-y-3 text-base leading-[1.75] sm:space-y-0">
        <p>
          <span className="sm:mb-1.75 sm:inline-block">
            A senior software engineer based in Wroclaw, <span className="sm:hidden">Poland.</span>
            <span className="hidden sm:inline-flex sm:items-center sm:gap-1.5">
              Poland
              <IconFlagPoland className="h-2.25 w-3 shrink-0 rounded-xs drop-shadow-[0_0_1px_rgba(0,0,0,0.1)]" />
            </span>
          </span>
        </p>

        <p>If you need a reliable developer to join your team, I&apos;m ready to dive in.</p>
      </div>

      <div className="flex items-center gap-4">
        <Button className="min-w-33" href={links.calcom} target="_blank" data-calcom>
          <Hotkey variant="primary">B</Hotkey>
          Book a call
        </Button>

        <Button href={`mailto:${links.email}`} variant="outline" data-email>
          <Hotkey variant="secondary">E</Hotkey>
          Send an email
        </Button>
      </div>

      <p className="text-tertiary relative mt-4 pl-5 text-xs">
        <span className="absolute top-1/2 left-0 size-3.5 -translate-y-1/2 rounded-full border-4 border-green-100 bg-green-500"></span>
        Available for hire, let&apos;s talk!
      </p>
    </section>
  )
}
