import posthog from 'posthog-js'
import { env } from './env'

if (env.NEXT_PUBLIC_ENV === 'production') {
  posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: `/api2/`,
    ui_host: env.NEXT_PUBLIC_POSTHOG_HOST,
    defaults: '2025-05-24',
  })
}
