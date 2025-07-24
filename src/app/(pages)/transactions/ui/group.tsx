import { TransactionExcerpt } from "@/app/blocks/transaction-excerpt/transaction-excerpt"
import { Transaction } from "@/types/api/transaction"

type Props = {
  transactions: Transaction[]
  handleTransactionClick: (id: number) => void
}

function GroupList({ transactions, handleTransactionClick }: Props) {
  return transactions.map((transaction) => (
    <TransactionExcerpt
      {...transaction}
      key={transaction.id + transaction.createdAt}
      handleTransactionClick={handleTransactionClick}
    />
  ))
}

export function Group(props: Props) {
  return (
    <div className="mt-8">
      <GroupList {...props} />
    </div>
  )
}
