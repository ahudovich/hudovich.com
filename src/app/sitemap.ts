import { allPosts } from 'content-collections'
import { env } from '@/lib/env'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = allPosts.map((post) => {
    return {
      url: new URL(`/posts/${post._meta.path}`, env.NEXT_PUBLIC_BASE_URL).toString(),
      lastModified: post.publishedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }
  })

  return [
    {
      url: env.NEXT_PUBLIC_BASE_URL,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: new URL('/posts', env.NEXT_PUBLIC_BASE_URL).toString(),
      lastModified: posts[0].lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...posts,
  ]
}
