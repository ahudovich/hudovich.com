import { allPosts } from 'content-collections'
import { Container } from '@/components/layout/Container'
import { PostItem } from '@/components/posts/PostItem'
import { Heading1 } from '@/components/typography/Heading'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Posts',
  alternates: {
    canonical: '/posts',
  },
}

export default function PostsPage() {
  return (
    <Container className="pt-6 pb-12 sm:py-10">
      <section>
        <Heading1 className="mb-4">All posts</Heading1>

        {allPosts.length === 0 ? (
          <p>No posts yet.</p>
        ) : (
          <div className="space-y-3">
            {allPosts.map((post) => (
              <PostItem key={post._meta.path} post={post} />
            ))}
          </div>
        )}
      </section>
    </Container>
  )
}
