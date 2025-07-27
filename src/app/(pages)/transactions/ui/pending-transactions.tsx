import { FilterStateVariant } from "@/app/blocks/filter-header/types"
import { Transaction } from "@/types/api/transaction"

type Props = {
  transactions: Transaction[]
  filterState: FilterStateVariant
  onFilterChange: (filter: FilterStateVariant) => void
  onTransactionClick: (transaction: Transaction) => void
}

export function PendingTransactions({}: Props) {}
