import { TransactionExcerpt } from "@/app/blocks"
import { Transaction } from "@/types/api/transaction"
import { Loading } from "./ui/loading"

type Props = {
  variant?: "transaction" | "approval"
  isLoading?: boolean
  transactions: Transaction[]
  handleTransactionClick: (id: number, mode?: "approve" | "reject") => void
}

function GroupList({
  variant = "transaction",
  isLoading,
  transactions,
  handleTransactionClick,
}: Props) {
  if (isLoading) {
    return <Loading />
  }

  if (transactions.length === 0) {
    return <div className="text-xl text-muted">No transactions found.</div>
  }

  return transactions.map((transaction) => (
    <TransactionExcerpt
      {...transaction}
      variant={variant}
      key={transaction.id + transaction.timestamp}
      handleTransactionClick={handleTransactionClick}
    />
  ))
}

export function TransactionGroup(props: Props) {
  return (
    <div className="mt-8">
      <GroupList {...props} />
    </div>
  )
}
