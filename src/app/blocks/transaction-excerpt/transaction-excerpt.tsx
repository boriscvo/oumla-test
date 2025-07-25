import { Transaction } from "@/types/api/transaction"
import {
  Amount,
  Badge,
  Container,
  DateStamp,
  InfoSection,
  SecondaryProps,
  Separator,
  Stop,
  TransactionLabel,
} from "./ui"
import { Button } from "@/components/ui/button"
import useGlobalStore from "@/store/use-global-store"
import { Link } from "lucide-react"
import { FromOrTo } from "@/app/atoms/from-or-to/from-or-to"

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
        <FromOrTo to={to} from={from} isSelf={userAddress === from} />
        <SecondaryProps>
          <DateStamp date={createdAt} />
          <Stop />
          <TransactionLabel status={status} />
          <Stop />
          <Button
            className="px-0 underline cursor-pointer"
            variant="link"
            onClick={() => handleTransactionClick(id)}
          >
            View Details
            <Link className="h-4 w-4 -mt-[0.5]" />
          </Button>
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
