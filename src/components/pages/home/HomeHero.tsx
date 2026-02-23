import Image from 'next/image'
import { IconFlagPoland } from '@/components/icons/IconFlagPoland'
import { HomeHeroActions } from '@/components/pages/home/HomeHeroActions'

export function HomeHero(props: React.ComponentProps<'section'>) {
  return (
    <section {...props}>
      <div className="mb-4">
        <Image
          className="size-11 rounded-full"
          src="/avatar.png"
          width={568}
          height={568}
          alt="Andrei Hudovich"
          loading="eager"
        />
      </div>

      <h1 className="mb-4 font-sans text-[1.375rem] leading-7 font-semibold tracking-[0.02em]">
        Hey, I&apos;m{' '}
        <span className="border-b-[0.09375rem] border-current text-brand dark:border-brand dark:text-foreground">
          Andrei Hudovich
        </span>
        !
      </h1>

      <div className="mb-5 space-y-3 text-sm leading-relaxed text-pretty sm:space-y-0">
        <p className="sm:mb-1.75">
          A senior software engineer based in Wroclaw,&nbsp;Poland
          <IconFlagPoland className="ml-2 inline-block h-2.25 w-3 shrink-0 -translate-y-0.5 rounded-xs drop-shadow-[0_0_1px_rgba(0,0,0,0.1)]" />
        </p>

        <p>If you need a reliable developer to join your team, I&apos;m ready to dive in.</p>
      </div>

      <HomeHeroActions />

      <p className="relative mt-4 pl-5 text-xs text-muted-foreground">
        <span className="absolute top-1/2 left-0 size-3.5 -translate-y-1/2 rounded-full border-4 border-green-100 bg-green-500 bg-clip-padding dark:border-green-900/35 dark:bg-green-700" />
        Available for hire, let&apos;s talk!
      </p>
    </section>
  )
}
