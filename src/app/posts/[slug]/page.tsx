import { notFound } from 'next/navigation'
import { MDXContent } from '@content-collections/mdx/react'
import { Calendar03Icon } from '@hugeicons/core-free-icons'
import { allPosts } from 'content-collections'
import { Container } from '@/components/layout/Container'
import { PageTitle } from '@/components/layout/PageTitle'
import { Icon } from '@/components/ui/Icon'
import { TextLink } from '@/components/ui/TextLink'
import { env } from '@/lib/env'
import { formatDate } from '@/lib/utils'
import type { Metadata, ResolvingMetadata } from 'next'
import type { BlogPosting, WithContext } from 'schema-dts'

const mdxComponents = {
  a: ({ href, children, ...props }: React.ComponentProps<'a'>) => (
    <TextLink className="[&>span]:after:bottom-0.5" href={href as string} {...props}>
      {children}
    </TextLink>
  ),
}

// TEMP: https://nextjs.org/docs/messages/empty-generate-static-params
export function generateStaticParams() {
  return [{ slug: '__placeholder__' }]
  // return allPosts.map((post) => ({
  //   slug: post._meta.path,
  // }))
}

export async function generateMetadata(
  { params }: PageProps<'/posts/[slug]'>,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params
  const resolvedParent = await parent

  // TEMP
  if (slug === '__placeholder__') {
    notFound()
  }

  const post = allPosts.find((item) => item._meta.path === slug)

  if (!post) {
    notFound()
  }

  const inheritedOgImages = resolvedParent.openGraph?.images
  const inheritedTwitterImages = resolvedParent.twitter?.images
  const inheritedTwitterCard = resolvedParent.twitter?.card

  return {
    title: post.title,
    description: post.summary,
    alternates: {
      canonical: `/posts/${post._meta.path}`,
    },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.summary,
      url: new URL(`/posts/${post._meta.path}`, env.NEXT_PUBLIC_BASE_URL).toString(),
      images: inheritedOgImages,
    },
    twitter: {
      card: inheritedTwitterCard,
      title: post.title,
      description: post.summary,
      images: inheritedTwitterImages,
    },
  }
}

export default async function PostPage({ params }: PageProps<'/posts/[slug]'>) {
  const { slug } = await params

  const post = allPosts.find((item) => item._meta.path === slug)

  if (!post) {
    notFound()
  }

  const blogPostingSchema: WithContext<BlogPosting> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    url: new URL(`/posts/${post._meta.path}`, env.NEXT_PUBLIC_BASE_URL).toString(),
    datePublished: post.publishedAt,
    author: {
      '@type': 'Person',
      name: 'Andrei Hudovich',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />

      <Container>
        <article className="post">
          <header className="mb-6">
            <PageTitle className="mb-6">{post.title}</PageTitle>

            <p className="flex items-center gap-2 text-sm">
              <Icon className="size-3.5" icon={Calendar03Icon} aria-hidden={true} />
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            </p>
          </header>

          <MDXContent code={post.mdx} components={mdxComponents} />
        </article>
      </Container>
    </>
  )
}
