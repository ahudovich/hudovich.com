import { fileURLToPath } from 'node:url'
import { createJiti } from 'jiti'

// Validate env variables
const jiti = createJiti(fileURLToPath(import.meta.url))
await jiti.import('./env')

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
}

export default nextConfig
