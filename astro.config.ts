import { defineConfig, envField, fontProviders } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  integrations: [mdx(), sitemap()],

  site:
    process.env.VERCEL_ENV === 'preview'
      ? `https://${process.env.VERCEL_URL}`
      : process.env.PUBLIC_BASE_URL,

  env: {
    validateSecrets: true,
    schema: {
      PUBLIC_ENV: envField.enum({
        context: 'server',
        access: 'secret',
        values: ['development', 'preview', 'production'],
      }),
      PUBLIC_POSTHOG_HOST: envField.string({
        context: 'client',
        access: 'public',
        url: true,
      }),
      PUBLIC_POSTHOG_KEY: envField.string({
        context: 'client',
        access: 'public',
      }),
    },
  },

  experimental: {
    fonts: [
      {
        name: 'Geist',
        cssVariable: '--font-geist',
        provider: fontProviders.google(),
        weights: ['100 900'],
        styles: ['normal'],
        subsets: ['latin'],
        fallbacks: ['sans-serif'],
      },
      {
        name: 'Geist Mono',
        cssVariable: '--font-geist-mono',
        provider: fontProviders.google(),
        weights: ['100 900'],
        styles: ['normal'],
        subsets: ['latin'],
        fallbacks: ['monospace'],
      },
    ],
  },

  vite: {
    plugins: [tailwindcss()],
  },
})
