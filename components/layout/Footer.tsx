import { IconHugeFavourite } from '@/components/icons/huge/IconHugeFavourite'
import { IconHugeGitFork } from '@/components/icons/huge/IconHugeGitFork'
import { links } from '@/data/links'
import { cn } from '@/utils/css'

export function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={cn(
        'sticky top-[100vh] flex flex-col items-center gap-3 mx-auto pt-6 pb-10 border-t border-layout-primary sm:flex-row sm:justify-between sm:gap-8 sm:pt-8 sm:pb-6 sm:border-none',
        className
      )}
    >
      <p className="group flex items-center gap-1.5 text-sm text-tertiary sm:text-xs">
        <span>&copy; {new Date().getFullYear()} Built with</span>
        <IconHugeFavourite className="shrink-0 size-3 stroke-red-600 fill-red-600 transition-transform duration-300 group-hover:scale-120" />
        <span>by Andrei</span>
      </p>

      <p className="text-sm text-tertiary sm:text-xs">
        This website is{' '}
        <a
          className="group inline-flex items-center gap-1 font-medium text-primary"
          href={links.source}
          target="_blank"
        >
          <span className="relative inline-block after:absolute after:inset-x-0 after:-bottom-px after:h-px after:bg-accent after:transition-all after:duration-300 group-hover:after:h-0.5">
            open source
          </span>
          <IconHugeGitFork className="shrink-0 size-3.5 fill-current" />
        </a>
      </p>
    </footer>
  )
}
