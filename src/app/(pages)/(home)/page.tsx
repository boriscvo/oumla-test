import { AccountDetails, Card, Container, HeroMessage } from "./ui"

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
