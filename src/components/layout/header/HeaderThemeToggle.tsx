'use client'

import { useTheme } from 'next-themes'
import { useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import { useMount } from 'react-use'
import { Moon02Icon, Sun03Icon } from '@hugeicons/core-free-icons'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { cn } from '@/lib/utils'

export function HeaderThemeToggle({ className, ...props }: React.ComponentProps<typeof Button>) {
  const [isMounted, setIsMounted] = useState(false)

  const { resolvedTheme, setTheme } = useTheme()

  useMount(() => {
    setIsMounted(true)
  })

  useHotkeys('t', () => toggleTheme(), [resolvedTheme])

  function toggleTheme() {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button
      className={cn(isMounted ? 'visible' : 'pointer-events-none invisible', className)}
      variant="ghost"
      size="icon"
      tabIndex={isMounted ? undefined : -1}
      aria-hidden={isMounted ? undefined : true}
      onClick={toggleTheme}
      {...props}
    >
      <span className="sr-only">Toggle theme</span>
      <Icon className="dark:hidden" icon={Moon02Icon} />
      <Icon className="hidden dark:block" icon={Sun03Icon} />
    </Button>
  )
}
