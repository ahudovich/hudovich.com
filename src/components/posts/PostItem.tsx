import Link from 'next/link'
import { ArrowRightBigIcon } from '@hugeicons/core-free-icons'
import { Icon } from '@/components/ui/Icon'
import { cn } from '@/lib/utils'
import type { Route } from 'next'
import type { Post } from 'content-collections'

type PostItemProps = {
  post: Post
}

export function PostItem({ post }: PostItemProps) {
  return (
    <article>
      <Link
        className={cn(
          'group relative block cursor-pointer p-3 transition-all',
          'rounded-lg border border-border bg-card ring-3 ring-transparent outline-none',
          'hover:ring-ring/15 focus-visible:ring-ring/50'
        )}
        href={`/posts/${post._meta.path}` as Route}
      >
        <h3 className="mb-1.5 text-base font-medium">{post.title}</h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">{post.summary}</p>

        <Icon
          icon={ArrowRightBigIcon}
          className={cn(
            'absolute top-3 right-3 size-4 transform-gpu text-brand/75 opacity-0 transition-opacity',
            'group-focus-within:opacity-100 group-hover:opacity-100'
          )}
        />
      </Link>
    </article>
  )
}
