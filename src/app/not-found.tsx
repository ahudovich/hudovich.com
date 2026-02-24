import { Container } from '@/components/layout/Container'
import { Heading1 } from '@/components/typography/Heading'

export default function NotFound() {
  return (
    <Container className="pt-6 pb-12 sm:py-10">
      <Heading1 className="mb-3">404 - Page Not Found</Heading1>
      <p>The page you are looking for does not exist.</p>
    </Container>
  )
}
