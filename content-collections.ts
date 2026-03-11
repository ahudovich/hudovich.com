import { defineCollection, defineConfig } from '@content-collections/core'
import { compileMDX } from '@content-collections/mdx'
import { z } from 'zod'

const posts = defineCollection({
  name: 'posts',
  directory: './posts',
  include: '**/*.mdx',
  schema: z.object({
    title: z.string(),
    publishedAt: z.iso.date(),
    summary: z.string(),
    content: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document)

    return {
      ...document,
      mdx,
    }
  },
})

export default defineConfig({
  content: [posts],
})
