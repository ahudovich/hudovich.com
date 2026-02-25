import { Suspense } from 'react'
import { FavouriteIcon, GitForkIcon } from '@hugeicons/core-free-icons'
import { Container } from '@/components/layout/Container'
import { Icon } from '@/components/ui/Icon'
import { TextLink } from '@/components/ui/TextLink'
import { links } from '@/data/links.json'
import { cn } from '@/lib/utils'
import { FooterYear } from './FooterYear'

export function Footer({ className, ...props }: React.ComponentProps<'footer'>) {
  return (
    <footer className={cn('sticky top-[100vh]', className)} {...props}>
      <Container
        className={cn(
          'flex flex-col items-center justify-center gap-4 border-t py-6 text-xs text-muted-foreground',
          'sm:flex-row sm:justify-between'
        )}
        variant="wide"
      >
        <p className="group flex items-center gap-2">
          <span>
            &copy;{' '}
            <Suspense fallback={null}>
              <FooterYear />
            </Suspense>{' '}
            Built with
          </span>
          <Icon
            className={cn(
              'size-3.5 shrink-0 fill-destructive text-destructive',
              'transition-transform will-change-transform group-hover:scale-120'
            )}
            icon={FavouriteIcon}
            aria-hidden="true"
          />
          <span>by Andrei</span>
        </p>

        <p className="inline-flex items-center gap-2">
          This website is
          <TextLink
            href={links.source}
            icon={
              <Icon
                className="size-3.5 shrink-0 text-foreground"
                icon={GitForkIcon}
                aria-hidden="true"
              />
            }
            target="_blank"
            rel="noreferrer"
          >
            open source
          </TextLink>
        </p>
      </Container>
    </footer>
  )
}
