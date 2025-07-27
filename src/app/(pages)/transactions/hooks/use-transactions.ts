import { Transaction } from "@/types/api/transaction"
import { useCallback, useEffect, useMemo, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { fetchAllTransactions } from "@/http/contract/fetch-all-transactions"
import useGlobalStore from "@/store/use-global-store"
import { ActivityStatus } from "@/types/api/transaction"
import { TransactionStatusNonPending } from "@/types/common"
import { FilterStateVariant } from "@/app/blocks/filter-header/types"

export function useTransactions() {
  const userAddress = useGlobalStore((state) => state.userAddress)

  const filterOptions = [
    "all",
    "active",
    "completed",
    "rejected",
  ] as TransactionStatusNonPending[]

  const [fullPendingTransactions, setFullPendingTransactions] = useState<
    Transaction[]
  >([])
  const [fullNonPendingTransactions, setFullNonPendingTransactions] = useState<
    Transaction[]
  >([])

  const [pendingTransactions, setPendingTransactions] = useState<Transaction[]>(
    []
  )
  const [nonPendingTransactions, setNonPendingTransactions] = useState<
    Transaction[]
  >([])

  const [activeTransaction, setActiveTransaction] =
    useState<Transaction | null>(null)
  const [isNewTransactionOpen, setIsNewTransactionOpen] =
    useState<boolean>(false)

  const handleActiveTransactionOpen = useCallback(
    (id: number) => {
      const transaction =
        fullPendingTransactions.find((transaction) => transaction.id === id) ||
        fullNonPendingTransactions.find((transaction) => transaction.id === id)
      setActiveTransaction(transaction || null)
    },
    [fullPendingTransactions, fullNonPendingTransactions]
  )

  const handleActiveTransactionClose = useCallback(() => {
    setActiveTransaction(null)
  }, [])

  const handleNewTransactionOpen = () => {
    setIsNewTransactionOpen(true)
  }
  const handleNewTransactionClose = () => {
    setIsNewTransactionOpen(false)
  }

  const {
    data: allTransactionsData,
    isLoading,
    refetch: refetchAllTransactions,
  } = useQuery({
    queryKey: ["transactions", userAddress],
    queryFn: () => fetchAllTransactions(),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  })

  const handleSetAllPending = (transactions: Transaction[]) => {
    const pending = transactions.filter(
      (transaction) => transaction.status === ActivityStatus.Pending
    )
    setFullPendingTransactions(pending)
    setPendingTransactions(pending)
  }

  const handleSetAllNonPending = (transactions: Transaction[]) => {
    const nonPending = transactions.filter(
      (transaction) => transaction.status !== ActivityStatus.Pending
    )
    setFullNonPendingTransactions(nonPending)
    setNonPendingTransactions(nonPending.slice(-20))
  }

  const [filterStateNonPending, setFilterStateNonPending] =
    useState<TransactionStatusNonPending>("all")

  const [inputStatePending, setInputStatePending] = useState<string>("")
  const [inputStateNonPending, setInputStateNonPending] = useState<string>("")

  const handleSelectFilterNonPending = useCallback(
    (filter: TransactionStatusNonPending) => {
      switch (filter) {
        case "active":
          setFilterStateNonPending("active")
          setNonPendingTransactions(
            fullNonPendingTransactions.filter(
              (transaction) => transaction.status === ActivityStatus.Active
            )
          )
          return
        case "completed":
          setFilterStateNonPending("completed")
          setNonPendingTransactions(
            fullNonPendingTransactions.filter(
              (transaction) => transaction.status === ActivityStatus.Completed
            )
          )
          return
        case "rejected":
          setFilterStateNonPending("rejected")
          setNonPendingTransactions(
            fullNonPendingTransactions.filter(
              (transaction) => transaction.status === ActivityStatus.Rejected
            )
          )
          return
        case null:
        default:
          setFilterStateNonPending("all")
          setNonPendingTransactions(fullNonPendingTransactions.slice(-20))
      }
    },
    [fullNonPendingTransactions]
  )

  const handleInputFilterPendingTransactions = (input: string) => {
    setInputStatePending(input)
    setPendingTransactions(
      fullPendingTransactions.filter(
        (transaction) =>
          transaction.to.includes(input) || transaction.from.includes(input)
      )
    )
  }

  const handleInputFilterNonPendingTransactions = (input: string) => {
    setInputStateNonPending(input)
    setNonPendingTransactions(
      fullNonPendingTransactions.filter(
        (transaction) =>
          transaction.to.includes(input) || transaction.from.includes(input)
      )
    )
  }

  const handleRefetchAllTransactions = () => {
    refetchAllTransactions()
  }

  const stateOfPendingFiltering: FilterStateVariant = useMemo(() => {
    if (inputStatePending && inputStatePending.length > 0) {
      return "pending-and-text"
    }
    return "pending"
  }, [inputStatePending])

  const stateOfNonPendingFiltering: FilterStateVariant = useMemo(() => {
    if (filterStateNonPending && !inputStateNonPending) {
      return filterStateNonPending
    }
    if (!filterStateNonPending && inputStateNonPending) {
      return "all-and-text"
    }
    if (filterStateNonPending && inputStateNonPending) {
      return `${filterStateNonPending}-and-text` as FilterStateVariant
    }
    return "all"
  }, [filterStateNonPending, inputStateNonPending])

  const resetFilters = () => {
    setInputStatePending("")
    setInputStateNonPending("")
    setFilterStateNonPending("all")
  }

  useEffect(() => {
    if (allTransactionsData) {
      const reversedTransactions = [...allTransactionsData].reverse()
      handleSetAllPending(reversedTransactions)
      handleSetAllNonPending(reversedTransactions)
      resetFilters()
    }
  }, [allTransactionsData])

  return {
    isLoading,
    filterOptions,
    pendingTransactions,
    nonPendingTransactions,
    isNewTransactionOpen,
    activeTransaction,
    filterStateNonPending,
    inputStatePending,
    inputStateNonPending,
    stateOfPendingFiltering,
    stateOfNonPendingFiltering,
    handleRefetchAllTransactions,
    handleSelectFilterNonPending,
    handleInputFilterPendingTransactions,
    handleInputFilterNonPendingTransactions,
    handleActiveTransactionOpen,
    handleActiveTransactionClose,
    handleNewTransactionOpen,
    handleNewTransactionClose,
  }
}
