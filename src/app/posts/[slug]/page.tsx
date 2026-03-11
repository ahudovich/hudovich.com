import { notFound } from 'next/navigation'
import { MDXContent } from '@content-collections/mdx/react'
import { Calendar03Icon } from '@hugeicons/core-free-icons'
import { allPosts } from 'content-collections'
import { Container } from '@/components/layout/Container'
import { PageTitle } from '@/components/layout/PageTitle'
import { Icon } from '@/components/ui/Icon'
import { formatDate } from '@/lib/utils'
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
      <article className="post">
        <PageTitle>{post.title}</PageTitle>

        <p className="my-6 flex items-center gap-2.5 text-xs">
          <Icon className="size-3.5" icon={Calendar03Icon} />
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
        </p>

        <MDXContent code={post.mdx} />
      </article>
    </Container>
  )
}
