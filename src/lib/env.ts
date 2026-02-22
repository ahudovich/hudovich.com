import { vercel } from '@t3-oss/env-core/presets-zod'
import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  extends: [vercel()],
  server: {},
  client: {
    NEXT_PUBLIC_BASE_URL: z.url().min(1),
  },
  // Destructure client variables (Next.js >= 13.4.4):
  experimental__runtimeEnv: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
})
