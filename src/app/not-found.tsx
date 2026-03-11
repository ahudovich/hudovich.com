import { Container } from '@/components/layout/Container'
import { PageTitle } from '@/components/layout/PageTitle'

export default function NotFound() {
  return (
    <Container>
      <PageTitle className="mb-3">404 - Page Not Found</PageTitle>

      <p>The page you are looking for does not exist.</p>
    </Container>
  )
}
