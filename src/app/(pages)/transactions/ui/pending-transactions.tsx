import { Transaction } from "@/types/api/transaction"
import { FilterStateVariant } from "../types"

type Props = {
  transactions: Transaction[]
  filterState: FilterStateVariant
  onFilterChange: (filter: FilterStateVariant) => void
  onTransactionClick: (transaction: Transaction) => void
}

export function PendingTransactions({}: Props) {}
