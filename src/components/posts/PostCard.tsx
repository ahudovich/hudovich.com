import Link from 'next/link'
import { ArrowRightBigIcon } from '@hugeicons/core-free-icons'
import { Card, CardContent, CardHeader, CardIndicator, CardTitle } from '@/components/ui/Card'
import { Icon } from '@/components/ui/Icon'
import { formatDate } from '@/lib/utils'
import type { Post } from 'content-collections'

export function PostCard({ post }: { post: Post }) {
  return (
    <Card render={<article />}>
      <CardHeader>
        <time className="text-xs text-muted-foreground" dateTime={post.publishedAt}>
          {formatDate(post.publishedAt)}
        </time>

        <CardTitle>
          <Link className="after:absolute after:inset-0" href={`/posts/${post._meta.path}`}>
            {post.title}
          </Link>
        </CardTitle>
      </CardHeader>

      <CardContent className="line-clamp-2">
        <p>{post.summary}</p>
      </CardContent>

      <CardIndicator>
        <Icon icon={ArrowRightBigIcon} />
      </CardIndicator>
    </Card>
  )
}
