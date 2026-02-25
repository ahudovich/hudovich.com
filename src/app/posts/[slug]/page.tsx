import { notFound } from 'next/navigation'
import { allPosts } from 'content-collections'
import { Container } from '@/components/layout/Container'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._meta.path,
  }))
}

export async function generateMetadata({ params }: PageProps<'/posts/[slug]'>): Promise<Metadata> {
  const { slug } = await params

  const post = allPosts.find((item) => item._meta.path === slug)

  if (!post) {
    notFound()
  }

  return {
    title: post.title,
    description: post.summary,
    alternates: {
      canonical: `/posts/${post._meta.path}`,
    },
  }
}

export default async function PostPage({ params }: PageProps<'/posts/[slug]'>) {
  const { slug } = await params

  const post = allPosts.find((item) => item._meta.path === slug)

  if (!post) {
    notFound()
  }

  return (
    <Container>
      <article>
        <h1 className="mb-2 font-heading text-2xl font-semibold">{post.title}</h1>
        <p className="mb-6 text-sm text-muted-foreground">
          <time dateTime={post.publishedAt}>{post.publishedAt}</time>
        </p>
        <pre className="text-base leading-relaxed whitespace-pre-wrap">{post.content}</pre>
      </article>
    </Container>
  )
}
