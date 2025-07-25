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
  timestamp,
  from,
  handleTransactionClick,
}: Props) {
  const userAddress = useGlobalStore((state) => state.userAddress)

  return (
    <Container>
      <Badge isSelf={userAddress === from} />
      <InfoSection>
        <FromOrTo to={to} from={from} isSelf={userAddress === from} />
        <SecondaryProps>
          <DateStamp date={timestamp} />
          <Stop />
          <TransactionLabel status={status} />
          <Stop />
          <Button
            className="pl-0! underline cursor-pointer text-base"
            variant="link"
            onClick={() => handleTransactionClick(id)}
          >
            View Details
            <Link className="h-4 w-4 -mt-[0.5]" />
          </Button>
        </SecondaryProps>
      </InfoSection>
      <Separator />
      <Amount amount={String(amount)} />
    </Container>
  )
}
