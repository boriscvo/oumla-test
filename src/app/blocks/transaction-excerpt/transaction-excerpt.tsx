import { Transaction } from "@/types/api/transaction"
import { Amount, Container, DateStamp, InfoSection, Separator } from "./ui"
import { Basics } from "./ui/basics"

export function TransactionExcerpt({
  to,
  amount,
  status,
  createdAt,
  createdBy,
}: Transaction) {
  return (
    <Container>
      <InfoSection>
        <Basics />
        <DateStamp date={createdAt} />
      </InfoSection>
      <Separator />
      <Amount amount={String(amount)} />
    </Container>
  )
}
