import { allPosts } from 'content-collections'
import { Container } from '@/components/layout/Container'
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
        <h1 className="mb-4 font-heading text-2xl font-semibold">All posts</h1>

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
