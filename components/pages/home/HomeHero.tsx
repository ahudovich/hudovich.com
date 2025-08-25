import Image from 'next/image'
import { IconFlagPoland } from '@/components/icons/flags/IconFlagPoland'
import { LogoReact } from '@/components/logos/tech/LogoReact'
import { HomeHeroActions } from '@/components/pages/home/HomeHeroActions'

export function HomeHero() {
  return (
    <section>
      <Image
        className="mb-4 size-11 rounded-full"
        src="/avatar.png"
        alt="Andrei Hudovich"
        width={44}
        height={44}
      />

      <h1 className="mb-4 font-sans font-semibold text-[1.375rem] leading-7 tracking-[0.02em]">
        Hey, I&apos;m{' '}
        <span className="border-b-[0.09375rem] border-current text-accent">Andrei Hudovich</span>!
      </h1>

      <div className="mb-5 text-md space-y-1.75">
        <p>
          A freelance full stack engineer based in Wroclaw,{' '}
          <span className="inline-flex items-center gap-1.5">
            Poland
            <IconFlagPoland className="shrink-0 w-3 h-[0.5625rem] rounded-xs drop-shadow-[0px_0px_1px_rgba(0,0,0,0.1)]" />
          </span>
        </p>

        <p>
          I specialize on building web applications with{' '}
          <span className="inline-block bg-[#58C4DC]/10 rounded-md px-2 py-px">
            <LogoReact className="inline-block mr-1.75 -mt-0.75 size-3.5" />
            React ecosystem
          </span>
        </p>

        <p>Have an exciting idea? I can help you bring it to life!</p>
      </div>

      <HomeHeroActions />

      <p className="relative mt-4 pl-5 text-xs text-tertiary">
        <span className="absolute left-0 top-1/2 size-3.5 -translate-y-1/2 rounded-full bg-green-500 border-4 border-green-100" />
        Available for new projects, let&apos;s talk!
      </p>
    </section>
  )
}
