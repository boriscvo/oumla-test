import { TransactionExcerpt } from "@/app/blocks"
import { Transaction } from "@/types/api/transaction"
import { Loading } from "./ui/loading"

type Props = {
  isLoading?: boolean
  transactions: Transaction[]
  handleTransactionClick: (id: number) => void
}

function GroupList({ isLoading, transactions, handleTransactionClick }: Props) {
  if (isLoading) {
    return <Loading />
  }

  if (transactions.length === 0) {
    return <div className="text-xl text-muted">No transactions found.</div>
  }

  return transactions.map((transaction) => (
    <TransactionExcerpt
      {...transaction}
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
