import { defineCollection, defineConfig } from '@content-collections/core'
import { z } from 'zod'

const posts = defineCollection({
  name: 'posts',
  directory: './posts',
  include: '**/*.md',
  schema: z.object({
    title: z.string(),
    publishedAt: z.string(),
    summary: z.string(),
    content: z.string(),
  }),
})

export default defineConfig({
  content: [posts],
})
