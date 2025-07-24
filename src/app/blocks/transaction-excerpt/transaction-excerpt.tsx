import { Transaction } from "@/types/api/transaction"
import {
  Amount,
  Badge,
  Basics,
  Container,
  DateStamp,
  InfoSection,
  SecondaryProps,
  Separator,
  Stop,
  TransactionLabel,
} from "./ui"
import { Button } from "@/components/ui/button"
import useGlobalStore from "@/app/store/use-global-store"

type Props = Transaction & {
  handleTransactionClick: (id: number) => void
}

export function TransactionExcerpt({
  id,
  to,
  amount,
  status,
  createdAt,
  from,
  handleTransactionClick,
}: Props) {
  const userAddress = useGlobalStore((state) => state.userAddress)
  return (
    <Container>
      <Badge isSelf={userAddress === to} />
      <InfoSection>
        <Basics to={to} from={from} isSelf={userAddress === to} />
        <SecondaryProps>
          <DateStamp date={createdAt} />
          <Stop />
          <TransactionLabel status={status} />
        </SecondaryProps>
      </InfoSection>
      <Button
        variant="link"
        className="absolute top-2 right-2"
        onClick={() => handleTransactionClick(id)}
        value="View Details"
      />
      <Separator />
      <Amount amount={String(amount)} />
    </Container>
  )
}
