import { Card, Container, HeroMessage, AccountDetails } from "./ui"

export default function Home() {
  return (
    <Container>
      <Card>
        <HeroMessage />
        <AccountDetails />
      </Card>
    </Container>
  )
}
