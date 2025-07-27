"use client"
import { Input } from "@/components/ui/input"
import { LabelValueRow } from "@/app/atoms"
import { Textarea } from "@/components/ui/textarea"
import { FormattedAddress } from "@/app/blocks"
import { TransactionError } from "./transaction.error"

type Props = {
  userAddress: string | null
  to: string
  amount: string
  description: string
  error: Partial<Record<"to" | "amount" | "description", string>>
  handleRecipientUpdate: (address: string) => void
  handleAmountUpdate: (value: string) => void
  handleDescriptionUpdate: (value: string) => void
  handleSubmit: () => void
}

export function NewTransactionForm({
  userAddress,
  to,
  amount,
  description,
  error,
  handleRecipientUpdate,
  handleAmountUpdate,
  handleDescriptionUpdate,
}: Props) {
  return (
    <>
      <LabelValueRow
        isColumn
        label="From"
        value={<FormattedAddress address={userAddress} />}
      />
      <LabelValueRow
        isColumn
        label="To"
        value={
          <Input
            placeholder="Recipient Address"
            autoFocus
            value={to}
            onChange={(e) => handleRecipientUpdate(e.target.value)}
          />
        }
      />
      <LabelValueRow
        isColumn
        label="Amount"
        value={
          <Input
            placeholder="Amount in ETH"
            value={amount}
            onChange={(e) => handleAmountUpdate(e.target.value)}
          />
        }
      />
      <LabelValueRow
        isColumn
        label="Description"
        value={
          <Textarea
            placeholder="Transaction Description"
            value={description}
            onChange={(e) => handleDescriptionUpdate(e.target.value)}
          />
        }
      />
      <TransactionError to={error.to} amount={error.amount} />
    </>
  )
}
