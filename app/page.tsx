import Image from 'next/image'
import { IconFlagPoland } from '@/components/icons/flags/IconFlagPoland'
import { IconHugeBluesky } from '@/components/icons/huge/IconHugeBluesky'
import { IconHugeBookmark01 } from '@/components/icons/huge/IconHugeBookmark01'
import { IconHugeLinkedIn01 } from '@/components/icons/huge/IconHugeLinkedIn01'
import { IconHugeMicOff02 } from '@/components/icons/huge/IconHugeMicOff02'
import { IconHugeNewTwitter } from '@/components/icons/huge/IconHugeNewTwitter'
import { IconHugeThreads } from '@/components/icons/huge/IconHugeThreads'
import { LogoProjectBlueskyMeter } from '@/components/logos/projects/LogoProjectBlueskyMeter'
import { LogoProjectListingCat } from '@/components/logos/projects/LogoProjectListingCat'
import { LogoAiSdk } from '@/components/logos/tech/LogoAiSdk'
import { LogoBetterAuth } from '@/components/logos/tech/LogoBetterAuth'
import { LogoDocker } from '@/components/logos/tech/LogoDocker'
import { LogoFastify } from '@/components/logos/tech/LogoFastify'
import { LogoNest } from '@/components/logos/tech/LogoNest'
import { LogoNextjs } from '@/components/logos/tech/LogoNextjs'
import { LogoNode } from '@/components/logos/tech/LogoNode'
import { LogoPostgres } from '@/components/logos/tech/LogoPostgres'
import { LogoRadix } from '@/components/logos/tech/LogoRadix'
import { LogoReact } from '@/components/logos/tech/LogoReact'
import { LogoReactQuery } from '@/components/logos/tech/LogoReactQuery'
import { LogoReactRouter } from '@/components/logos/tech/LogoReactRouter'
import { LogoShadcnUi } from '@/components/logos/tech/LogoShadcnUi'
import { LogoSupabase } from '@/components/logos/tech/LogoSupabase'
import { LogoTailwind } from '@/components/logos/tech/LogoTailwind'
import { LogoTurborepo } from '@/components/logos/tech/LogoTurborepo'
import { LogoTypescript } from '@/components/logos/tech/LogoTypescript'
import { ProjectCard } from '@/components/ProjectCard'
import { SectionHeader } from '@/components/SectionHeader'
import { BaseButton } from '@/components/ui/BaseButton'
import { links } from '@/data/links'
import type { Metadata } from 'next'
import type { ProjectStatusType } from '@/types/ProjectStatusType'

export const metadata: Metadata = {
  title: 'Andrei Hudovich',
  description: 'A freelance full stack engineer based in Wroclaw, Poland',
  alternates: {
    canonical: '/',
  },
}

const techStack = [
  {
    label: 'Next.js',
    icon: LogoNextjs,
  },
  {
    label: 'React',
    icon: LogoReact,
  },
  {
    label: 'React Router',
    icon: LogoReactRouter,
  },
  {
    label: 'React Query',
    icon: LogoReactQuery,
  },
  {
    label: 'TypeScript',
    icon: LogoTypescript,
  },
  {
    label: 'BetterAuth',
    icon: LogoBetterAuth,
  },
  {
    label: 'Node',
    icon: LogoNode,
  },
  {
    label: 'Fastify',
    icon: LogoFastify,
  },
  {
    label: 'Nest',
    icon: LogoNest,
  },
  {
    label: 'Supabase',
    icon: LogoSupabase,
  },
  {
    label: 'Postgres',
    icon: LogoPostgres,
  },
  {
    label: 'Docker',
    icon: LogoDocker,
  },
  {
    label: 'Turborepo',
    icon: LogoTurborepo,
  },
  {
    label: 'shadcn/ui',
    icon: LogoShadcnUi,
  },
  {
    label: 'Radix',
    icon: LogoRadix,
  },
  {
    label: 'Tailwind',
    icon: LogoTailwind,
  },
  {
    label: 'AI SDK',
    icon: LogoAiSdk,
  },
]

const projects: Array<{
  name: string
  description: string
  status: ProjectStatusType
  icon: React.ReactNode
  link?: string
}> = [
  {
    name: 'Project Y',
    description: 'My new project that I work on in stealth mode for now.',
    status: 'active',
    icon: <IconHugeMicOff02 className="fill-zinc-600" />,
  },
  {
    name: 'Listing Cat',
    description: 'Marketing database for startups and indie hackers.',
    status: 'active',
    icon: <LogoProjectListingCat />,
    link: links.projects.listingcat,
  },
  {
    name: 'Bluesky Meter',
    description: 'Realtime analytics for Bluesky social network.',
    status: 'sold',
    icon: <LogoProjectBlueskyMeter />,
    link: links.projects.blueskymeter,
  },
]

const socialLinks = [
  {
    label: 'X/Twitter',
    icon: IconHugeNewTwitter,
    href: links.social.x,
    fill: 'fill-primary',
  },
  {
    label: 'Threads',
    icon: IconHugeThreads,
    href: links.social.threads,
    fill: 'fill-primary',
  },
  {
    label: 'Bluesky',
    icon: IconHugeBluesky,
    href: links.social.bluesky,
    fill: 'fill-[#0085dd]',
  },
  {
    label: 'LinkedIn',
    icon: IconHugeLinkedIn01,
    href: links.social.linkedin,
    fill: 'fill-[#0a66c2]',
  },
  {
    label: 'Substack',
    icon: IconHugeBookmark01,
    href: links.social.substack,
    fill: 'fill-[#fe6a09]',
  },
]

export default function Page() {
  return (
    <>
      {/* Hero */}
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

        <div className="flex items-center gap-4">
          <BaseButton className="min-w-33" hotkey="B" variant="primary" asChild>
            <a href={links.calcom} target="_blank">
              Book a call
            </a>
          </BaseButton>

          <BaseButton hotkey="E" variant="secondary" asChild>
            <a href={`mailto:${links.email}`}>Email me</a>
          </BaseButton>
        </div>

        <p className="relative mt-4 pl-5 text-xs text-tertiary">
          <span className="absolute left-0 top-1/2 size-3.5 -translate-y-1/2 rounded-full bg-green-500 border-4 border-green-100" />
          Available for new projects, let&apos;s talk!
        </p>
      </section>

      {/* Tech stack */}
      <section>
        <SectionHeader
          heading="Tech stack"
          text="The tech stack I use for my personal and client work:"
        />

        <ul className="flex flex-wrap items-center gap-2.5">
          {techStack.map((item) => (
            <li
              className="inline-flex items-center gap-2 px-2.5 h-6 bg-zinc-100 rounded-full outline-none font-[450] text-xs text-secondary"
              key={item.label}
            >
              <item.icon className="shrink-0 size-4" />
              {item.label}
            </li>
          ))}
        </ul>
      </section>

      {/* Projects */}
      <section>
        <SectionHeader
          heading="Projects"
          text="These are my personal projects, both past and ongoing:"
        />

        <ul className="grid grid-cols-2 gap-3">
          {projects.map((project) => (
            <li key={project.name}>
              <ProjectCard {...project} />
            </li>
          ))}
        </ul>
      </section>

      {/* Find me on */}
      <section>
        <SectionHeader heading="Find me on" text="You can find me on the following platforms:" />

        <ul className="flex items-center gap-2.5">
          {socialLinks.map((link) => (
            <li className="group" key={link.label}>
              <a
                className="inline-flex items-center gap-2 px-2.5 h-6 bg-zinc-100 rounded-full outline-none font-medium text-xs text-secondary transition-all hover:bg-zinc-200/75 focus:ring-3 focus:ring-zinc-200"
                href={link.href}
                target="_blank"
              >
                <link.icon className={`shrink-0 size-4 group-first:size-3.5 ${link.fill}`} />
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Get in touch */}
      <section>
        <SectionHeader heading="Get in touch" />

        <p className="mb-1.5">
          You can reach me anytime at{' '}
          <a
            className="group inline-flex items-center gap-1 font-medium text-primary"
            href={`mailto:${links.email}`}
          >
            <span className="relative inline-block after:absolute after:inset-x-0 after:-bottom-px after:h-px after:bg-accent after:transition-all after:duration-300 group-hover:after:h-0.5">
              {links.email}
            </span>
          </a>
        </p>

        <p className="mb-1.5">
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
    </>
  )
}
