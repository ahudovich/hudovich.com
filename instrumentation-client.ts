import posthog from 'posthog-js'
import { env } from './src/lib/env'

if (process.env.NODE_ENV === 'production') {
  posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: '/ph',
    ui_host: env.NEXT_PUBLIC_POSTHOG_HOST,
    defaults: '2026-01-30',
    capture_dead_clicks: false,
    disable_surveys: true,
    disable_session_recording: true,
  })
}
