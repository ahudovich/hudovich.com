'use client'

import { useHotkeys } from 'react-hotkeys-hook'
import { BaseButton } from '@/components/ui/BaseButton'
import { links } from '@/data/links'

export function HomeHeroActions() {
  useHotkeys('b', () => {
    window.open(links.calcom, '_blank')
  })

  useHotkeys('e', () => {
    const a = document.createElement('a')
    a.href = `mailto:${links.email}`
    a.style.display = 'none'

    document.body.appendChild(a)

    a.click()
    a.remove()
  })

  return (
    <div className="flex items-center gap-4">
      <BaseButton className="min-w-33" hotkey="B" variant="primary" asChild>
        <a href={links.calcom} target="_blank">
          Book a call
        </a>
      </BaseButton>

      <BaseButton hotkey="E" variant="secondary" asChild>
        <a href={`mailto:${links.email}`}>Send an email</a>
      </BaseButton>
    </div>
  )
}
