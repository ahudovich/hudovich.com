'use client'

import { useRef } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import { buttonVariants } from '@/components/ui/Button'
import { Hotkey } from '@/components/ui/Hotkey'
import { links } from '@/data/links.json'
import { cn } from '@/lib/utils'

export function HomeHeroActions({ className, ...props }: React.ComponentProps<'div'>) {
  const calcomLinkRef = useRef<HTMLAnchorElement>(null)
  const emailLinkRef = useRef<HTMLAnchorElement>(null)

  useHotkeys('b', () => {
    calcomLinkRef.current?.click()
  })

  useHotkeys('e', () => {
    emailLinkRef.current?.click()
  })

  return (
    <div className={cn('flex items-center gap-4', className)} {...props}>
      <a
        ref={calcomLinkRef}
        className={cn(buttonVariants({ variant: 'default' }))}
        href={links.calcom}
        target="_blank"
        rel="noreferrer"
      >
        <Hotkey variant="primary">B</Hotkey>
        Book a call
      </a>

      <a
        ref={emailLinkRef}
        className={cn(buttonVariants({ variant: 'outline' }))}
        href={`mailto:${links.email}`}
      >
        <Hotkey variant="secondary">E</Hotkey>
        Send an email
      </a>
    </div>
  )
}
