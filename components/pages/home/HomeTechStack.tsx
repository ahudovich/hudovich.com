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
import { SectionHeader } from '@/components/SectionHeader'

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

export function HomeTechStack() {
  return (
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
  )
}
