import { defineConfig, fontProviders } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  integrations: [mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },

  site:
    process.env.VERCEL_ENV === 'preview'
      ? `https://${process.env.VERCEL_URL}`
      : process.env.PUBLIC_BASE_URL,

  trailingSlash: 'never',

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

    svgo: {
      multipass: true,
    },
  },
})
