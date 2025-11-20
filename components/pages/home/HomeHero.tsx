import Image from 'next/image'
import { IconFlagPoland } from '@/components/icons/flags/IconFlagPoland'
import { LogoReact } from '@/components/logos/tech/LogoReact'
import { HomeHeroActions } from '@/components/pages/home/HomeHeroActions'

export function HomeHero() {
  return (
    <section>
      <Image
        className="mb-4 size-11 rounded-full"
        src="/avatar.png?v=2"
        alt="Andrei Hudovich"
        width={44}
        height={44}
        draggable={false}
      />

      <h1 className="mb-4 font-sans font-semibold text-[1.375rem] leading-7 tracking-[0.02em]">
        Hey, I&apos;m{' '}
        <span className="border-b-[0.09375rem] border-current text-accent">Andrei Hudovich</span>!
      </h1>

      <div className="mb-5 text-md leading-[1.75] space-y-1.75">
        <p>
          <span className="sm:inline-block sm:mb-1.75">
            A full-stack software engineer based in Wroclaw,{' '}
            <span className="sm:hidden">Poland. </span>
            <span className="hidden sm:inline-flex sm:items-center sm:gap-1.5">
              Poland
              <IconFlagPoland className="shrink-0 w-3 h-[0.5625rem] rounded-xs drop-shadow-[0_0_1px_rgba(0,0,0,0.1)]" />
            </span>
          </span>
          <br className="hidden sm:block" />
          I&nbsp;specialize in building web applications with{' '}
          <span className="inline-block bg-[#58C4DC]/10 rounded-md px-1.75">
            <LogoReact className="inline-block mr-1.75 -mt-0.75 size-3.5" />
            React
          </span>{' '}
          ecosystem.
        </p>

        <p>If you need a reliable developer to join your team, I&apos;m ready to dive in.</p>
      </div>

      <HomeHeroActions />

      <p className="relative mt-4 pl-5 text-xs text-tertiary">
        <span className="absolute left-0 top-1/2 size-3.5 -translate-y-1/2 rounded-full bg-green-500 border-4 border-green-100" />
        Available for hire, let&apos;s talk!
      </p>
    </section>
  )
}
