import { allPosts } from 'content-collections'
import { Container } from '@/components/layout/Container'
import { PageTitle } from '@/components/layout/PageTitle'
import { PostCard } from '@/components/posts/PostCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Posts',
  alternates: {
    canonical: '/posts',
  },
}

export default function PostsPage() {
  return (
    <Container>
      <section>
        <PageTitle className="mb-4">All posts</PageTitle>

        {allPosts.length === 0 ? (
          <p>No posts yet.</p>
        ) : (
          <div className="space-y-3">
            {allPosts.map((post) => (
              <PostCard key={post._meta.path} post={post} />
            ))}
          </div>
        )}
      </section>
    </Container>
  )
}
