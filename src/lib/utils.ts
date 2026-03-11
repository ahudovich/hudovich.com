import { clsx } from 'clsx'
import { format, parseISO } from 'date-fns'
import { twMerge } from 'tailwind-merge'
import type { ClassValue } from 'clsx'

export function cn(...inputs: Array<ClassValue>) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string) {
  return format(parseISO(date), 'MMMM d, yyyy')
}
