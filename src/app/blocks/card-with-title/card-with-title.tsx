import { PageCard } from "@/app/atoms"
import { CardWithTitleProps } from "./types"
import { Container, Content, Title } from "./ui"

export function CardWithTitle({ title, children }: CardWithTitleProps) {
  return (
    <PageCard>
      <Container>
        <Title>{title}</Title>
        <Content>{children}</Content>
      </Container>
    </PageCard>
  )
}
