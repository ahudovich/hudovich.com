import { allPosts } from 'content-collections'
import { SectionHeader, SectionHeaderTitle } from '@/components/layout/SectionHeader'
import { PostCard } from '@/components/posts/PostCard'

export function HomePosts(props: React.ComponentProps<'section'>) {
  if (allPosts.length === 0) {
    return null
  }

  return (
    <section {...props}>
      <SectionHeader>
        <SectionHeaderTitle>Recent posts</SectionHeaderTitle>
      </SectionHeader>

      <div className="space-y-4">
        {allPosts.map((post) => (
          <PostCard key={post._meta.path} post={post} />
        ))}
      </div>
    </section>
  )
}
