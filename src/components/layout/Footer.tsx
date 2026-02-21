import { FavouriteIcon, GitForkIcon } from '@hugeicons/core-free-icons'
import { Icon } from '@/components/ui/Icon'
import { links } from '@/data/links'
import { cn } from '@/lib/utils'

export function Footer({ className, ...props }: React.ComponentProps<'footer'>) {
  const buildYear = new Date().getFullYear()

  return (
    <footer
      className={cn(
        'border-border sticky top-[100vh] mx-auto flex flex-col items-center gap-3 border-t pt-6 pb-10 sm:flex-row sm:justify-between sm:gap-8 sm:border-none sm:pt-8 sm:pb-6',
        className
      )}
      {...props}
    >
      <p className="group text-tertiary flex items-center gap-1.5 text-sm sm:text-xs">
        <span>
          &copy; <span data-current-year>{buildYear}</span> Built with
        </span>
        <Icon
          icon={FavouriteIcon}
          className="size-3 shrink-0 fill-red-600 text-red-600 transition-transform duration-300 will-change-transform group-hover:scale-120"
          aria-hidden="true"
        />
        <span>by Andrei</span>
      </p>

      <p className="text-tertiary inline-flex items-center gap-1 text-sm sm:text-xs">
        This website is
        <a
          className="group text-foreground ml-0.75 inline-flex items-center gap-1 font-medium"
          href={links.source}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="after:bg-primary relative inline-block after:absolute after:inset-x-0 after:-bottom-px after:h-px after:transition-all after:duration-300 group-hover:after:h-0.5">
            open source
          </span>
          <Icon
            icon={GitForkIcon}
            className="text-foreground size-3.5 shrink-0"
            aria-hidden="true"
          />
        </a>
      </p>
    </footer>
  )
}

// ;<script>
//   const currentYear = String(new Date().getFullYear()) const yearElement =
//   document.querySelector('[data-current-year]') if (yearElement){' '}
//   {(yearElement.textContent = currentYear)}
// </script>
