import { useCallback, useEffect, useMemo, useState } from "react"
import { Transaction } from "@/types/api/transaction"
import { useMutation, useQuery } from "@tanstack/react-query"
import { fetchAllTransactions } from "@/http/contract/fetch-all-transactions"
import useGlobalStore from "@/store/use-global-store"
import { ActivityStatus } from "@/types/api/recent-activity"
import { FilterStateVariant } from "@/app/blocks/filter-header/types"
import { TransactionStatusWithAll } from "@/types/common/transaction-status"
import { fetchApprovalCredentials } from "@/http/contract/fetch-approval-credentials"
import { createApproval } from "@/http/contract/create-approval"

export function useApprovals() {
  const userAddress = useGlobalStore((state) => state.userAddress)

  const filterOptions = [
    "all",
    "active",
    "completed",
    "rejected",
    "pending",
  ] as TransactionStatusWithAll[]

  const [isApprovalOpen, setIsApprovalOpen] = useState(false)
  const [allTransactions, setAllTransactions] = useState<Transaction[]>([])
  const [renderingTransactions, setRenderingTransactions] = useState<
    Transaction[]
  >([])
  const [activeApproval, setActiveApproval] = useState<Transaction | null>(null)
  const [activeFilter, setActiveFilter] =
    useState<TransactionStatusWithAll>("all")
  const [mode, setMode] = useState<"approve" | "reject" | null>(null)

  const { data: userApprovalStatus } = useQuery({
    queryKey: ["fetchApprovalStatus", userAddress],
    queryFn: () => fetchApprovalCredentials(userAddress),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  })

  const {
    mutate: approvalMutate,
    reset: approvalReset,
    status: approvalMutationStatus,
  } = useMutation({
    mutationFn: () =>
      createApproval({
        approvalId: activeApproval?.approvalId || 0,
        approve: mode === "approve",
        reason: "Approved by user in UI",
      }),
  })

  const handleApprovalOpen = useCallback(
    (id: number, mode?: "approve" | "reject") => {
      const transaction = allTransactions.find(
        (transaction) => transaction.id === id
      )
      setActiveApproval(transaction || null)
      setMode(mode || null)
      setIsApprovalOpen(true)
    },
    [allTransactions]
  )

  const handleApprovalClose = useCallback(() => {
    setIsApprovalOpen(false)
    setTimeout(() => {
      approvalReset()
      setActiveApproval(null)
      setMode(null)
    }, 200)
  }, [approvalReset])

  const handleApprovalConfirm = useCallback(
    (id?: number) => {
      if (id) {
        approvalMutate()
      }
    },
    [approvalMutate]
  )

  const { data: allTransactionsData, isLoading } = useQuery({
    queryKey: ["transactions", userAddress],
    queryFn: () => fetchAllTransactions(),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  })

  const handleSetAllTransactions = (transactions: Transaction[]) => {
    const pending = transactions.filter(
      (transaction) => transaction.status === ActivityStatus.Pending
    )
    setAllTransactions(pending)
    setRenderingTransactions(pending)
  }

  const [inputStatePending, setInputStatePending] = useState<string>("")

  const handleInputFilter = (input: string) => {
    setInputStatePending(input)
    setRenderingTransactions(
      allTransactions.filter(
        (transaction) =>
          transaction.to.includes(input) || transaction.from.includes(input)
      )
    )
  }

  const handleSelectFilter = useCallback(
    (activeFilter: TransactionStatusWithAll) => {
      switch (activeFilter) {
        case "active":
          setActiveFilter("active")
          setRenderingTransactions(
            allTransactions.filter(
              (transaction) => transaction.status === ActivityStatus.Active
            )
          )
          return
        case "completed":
          setActiveFilter("completed")
          setRenderingTransactions(
            allTransactions.filter(
              (transaction) => transaction.status === ActivityStatus.Completed
            )
          )
          return
        case "rejected":
          setActiveFilter("rejected")
          setRenderingTransactions(
            allTransactions.filter(
              (transaction) => transaction.status === ActivityStatus.Rejected
            )
          )
          return
        case "pending":
          setActiveFilter("pending")
          setRenderingTransactions(
            allTransactions.filter(
              (transaction) => transaction.status === ActivityStatus.Pending
            )
          )
          return
        case "all":
        default:
          setActiveFilter("all")
          setRenderingTransactions(allTransactions)
          return
      }
    },
    [allTransactions]
  )

  const stateOfFilters: FilterStateVariant = useMemo(() => {
    if (inputStatePending && inputStatePending.length > 0) {
      return "pending-and-text"
    }
    return "pending"
  }, [inputStatePending])

  useEffect(() => {
    if (allTransactionsData) {
      const reversedTransactions = [...allTransactionsData].reverse()
      handleSetAllTransactions(
        reversedTransactions.filter(
          (transaction) =>
            transaction.status === ActivityStatus.Pending &&
            transaction.approvalId
        )
      )
    }
  }, [allTransactionsData])

  return {
    isLoading,
    filterOptions,
    userAddress,
    renderingTransactions,
    activeApproval,
    inputStatePending,
    stateOfFilters,
    isApprovalOpen,
    activeFilter,
    mode,
    userApprovalStatus,
    canApprove: userApprovalStatus?.canApprove || false,
    approvalMutationStatus,
    handleSelectFilter,
    handleInputFilter,
    handleApprovalOpen,
    handleApprovalClose,
    handleApprovalConfirm,
  }
}
