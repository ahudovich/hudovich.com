import { Container } from '@/components/layout/Container'

export default function NotFound() {
  return (
    <Container>
      <h1 className="mb-3 font-heading text-2xl font-semibold text-foreground">
        404 - Page Not Found
      </h1>

      <p>The page you are looking for does not exist.</p>
    </Container>
  )
}
