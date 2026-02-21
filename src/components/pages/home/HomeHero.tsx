import { IconFlagPoland } from '@/components/icons/IconFlagPoland'
import { Button } from '@/components/ui/Button'
import { Hotkey } from '@/components/ui/Hotkey'
import { links } from '@/data/links'

export function HomeHero({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <div className="mb-4">{children}</div>

      <h1 className="mb-4 font-sans font-semibold text-[1.375rem] leading-7 tracking-[0.02em]">
        Hey, I&apos;m{' '}
        <span className="border-b-[0.09375rem] border-current text-primary">Andrei Hudovich</span>!
      </h1>

      <div className="mb-5 text-base leading-[1.75] space-y-3 sm:space-y-0">
        <p>
          <span className="sm:inline-block sm:mb-1.75">
            A senior software engineer based in Wroclaw, <span className="sm:hidden">Poland.</span>
            <span className="hidden sm:inline-flex sm:items-center sm:gap-1.5">
              Poland
              <IconFlagPoland className="shrink-0 w-3 h-2.25 rounded-xs drop-shadow-[0_0_1px_rgba(0,0,0,0.1)]" />
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

      <p className="relative mt-4 pl-5 text-xs text-tertiary">
        <span className="absolute left-0 top-1/2 size-3.5 -translate-y-1/2 rounded-full bg-green-500 border-4 border-green-100"></span>
        Available for hire, let&apos;s talk!
      </p>
    </section>
  )
}
