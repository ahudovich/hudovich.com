import { FavouriteIcon, GitForkIcon } from '@hugeicons/core-free-icons'
import { Icon } from '@/components/ui/Icon'
import { links } from '@/data/links.json'
import { cn } from '@/lib/utils'

export function Footer({ className, ...props }: React.ComponentProps<'footer'>) {
  return (
    <footer
      className={cn(
        'sticky top-[100vh] mx-auto flex flex-col items-center gap-3 border-t border-border pt-6 pb-10',
        'sm:flex-row sm:justify-between sm:gap-8 sm:border-none sm:pt-8 sm:pb-6',
        className
      )}
      {...props}
    >
      <p className="group flex items-center gap-1.5 text-sm text-muted-foreground sm:text-xs">
        <span>
          &copy; <span>{new Date().getFullYear()}</span> Built with
        </span>
        <Icon
          icon={FavouriteIcon}
          className="size-3 shrink-0 fill-destructive text-destructive transition-transform will-change-transform group-hover:scale-120"
          aria-hidden="true"
        />
        <span>by Andrei</span>
      </p>

      <p className="inline-flex items-center gap-1 text-sm text-muted-foreground sm:text-xs">
        This website is
        <a
          className="group ml-0.75 inline-flex items-center gap-1 font-medium text-foreground"
          href={links.source}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="relative inline-block after:absolute after:inset-x-0 after:-bottom-px after:h-px after:bg-brand after:transition-all group-hover:after:h-0.5">
            open source
          </span>
          <Icon
            icon={GitForkIcon}
            className="size-3.5 shrink-0 text-foreground"
            aria-hidden="true"
          />
        </a>
      </p>
    </footer>
  )
}
