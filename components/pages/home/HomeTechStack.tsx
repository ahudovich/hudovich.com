import { LogoAiSdk } from '@/components/logos/tech/LogoAiSdk'
import { LogoBetterAuth } from '@/components/logos/tech/LogoBetterAuth'
import { LogoDocker } from '@/components/logos/tech/LogoDocker'
import { LogoFastify } from '@/components/logos/tech/LogoFastify'
import { LogoNest } from '@/components/logos/tech/LogoNest'
import { LogoNextjs } from '@/components/logos/tech/LogoNextjs'
import { LogoNode } from '@/components/logos/tech/LogoNode'
import { LogoPostgres } from '@/components/logos/tech/LogoPostgres'
import { LogoPrisma } from '@/components/logos/tech/LogoPrisma'
import { LogoReact } from '@/components/logos/tech/LogoReact'
import { LogoShadcnUi } from '@/components/logos/tech/LogoShadcnUi'
import { LogoSupabase } from '@/components/logos/tech/LogoSupabase'
import { LogoTailwind } from '@/components/logos/tech/LogoTailwind'
import { LogoTanstack } from '@/components/logos/tech/LogoTanstack'
import { LogoTanstackQuery } from '@/components/logos/tech/LogoTanstackQuery'
import { LogoTurborepo } from '@/components/logos/tech/LogoTurborepo'
import { LogoTypescript } from '@/components/logos/tech/LogoTypescript'
import { SectionHeader } from '@/components/SectionHeader'

const techStack = [
  {
    label: 'React',
    icon: LogoReact,
  },
  {
    label: 'Next.js',
    icon: LogoNextjs,
  },
  {
    label: 'TanStack Start',
    icon: LogoTanstack,
  },
  {
    label: 'TanStack Query',
    icon: LogoTanstackQuery,
  },
  {
    label: 'TypeScript',
    icon: LogoTypescript,
  },
  {
    label: 'Better Auth',
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
    label: 'Postgres',
    icon: LogoPostgres,
  },
  {
    label: 'Prisma',
    icon: LogoPrisma,
  },
  {
    label: 'Supabase',
    icon: LogoSupabase,
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
            <item.icon className="shrink-0 size-3.5" />
            {item.label}
          </li>
        ))}
      </ul>
    </section>
  )
}
