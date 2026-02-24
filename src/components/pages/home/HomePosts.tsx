import Link from 'next/link'
import { allPosts } from 'content-collections'
import { SectionHeader, SectionHeaderTitle } from '@/components/layout/SectionHeader'
import { PostCard } from '@/components/posts/PostCard'

export function HomePosts(props: React.ComponentProps<'section'>) {
  if (allPosts.length === 0) {
    return null
  }

  return (
    <section {...props}>
      <SectionHeader className="flex items-center gap-2">
        <SectionHeaderTitle>Recent posts</SectionHeaderTitle>

        <Link className="ml-auto text-xs hover:underline" href="/posts">
          All posts
        </Link>
      </SectionHeader>

      <div className="space-y-3">
        {allPosts.map((post) => (
          <PostCard key={post._meta.path} post={post} />
        ))}
      </div>
    </section>
  )
}
