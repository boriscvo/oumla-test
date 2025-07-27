"use client"
import { Transaction } from "@/types/api/transaction"
import {
  Action,
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
import useGlobalStore from "@/store/use-global-store"
import { FromOrTo } from "@/app/atoms/from-or-to/from-or-to"
import { TransactionViewVariant } from "@/types/common"

type Props = Transaction & {
  variant?: TransactionViewVariant
  handleTransactionClick: (id: number, mode?: "approve" | "reject") => void
}

export function TransactionExcerpt({
  variant = "transaction",
  id,
  to,
  amount,
  status,
  timestamp,
  from,
  approvalId,
  handleTransactionClick,
}: Props) {
  const userAddress = useGlobalStore((state) => state.userAddress)
  const isSelf = userAddress?.toLowerCase() === from.toLowerCase()

  return (
    <Container>
      <Badge isSelf={isSelf} />
      <InfoSection>
        <FromOrTo to={to} from={from} isSelf={isSelf} />
        <SecondaryProps>
          <DateStamp date={timestamp} />
          <Stop />
          <TransactionLabel status={status} />
          <Action
            id={id}
            isSelf={isSelf}
            variant={variant}
            approvalId={approvalId}
            status={status}
            handleActionClick={handleTransactionClick}
          />
        </SecondaryProps>
      </InfoSection>
      <Separator />
      <Amount amount={String(amount)} />
    </Container>
  )
}
