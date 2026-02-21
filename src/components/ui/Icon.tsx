import { HugeiconsIcon } from '@hugeicons/react'

export function Icon({ strokeWidth = 1.85, ...props }: React.ComponentProps<typeof HugeiconsIcon>) {
  return <HugeiconsIcon strokeWidth={strokeWidth} {...props} />
}
