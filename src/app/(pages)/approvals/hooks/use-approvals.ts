import { useCallback, useEffect, useMemo, useState } from "react"
import { ActivityStatus, Transaction } from "@/types/api/transaction"
import { useMutation, useQuery } from "@tanstack/react-query"
import { fetchAllTransactions } from "@/http/contract/fetch-all-transactions"
import useGlobalStore from "@/store/use-global-store"
import { FilterStateVariant } from "@/app/blocks/filter-header/types"
import { fetchApprovalCredentials } from "@/http/contract/fetch-approval-credentials"
import { createApproval } from "@/http/contract/create-approval"

export function useApprovals() {
  const userAddress = useGlobalStore((state) => state.userAddress)

  const [isApprovalOpen, setIsApprovalOpen] = useState(false)
  const [allTransactions, setAllTransactions] = useState<Transaction[]>([])
  const [renderingTransactions, setRenderingTransactions] = useState<
    Transaction[]
  >([])
  const [activeApproval, setActiveApproval] = useState<Transaction | null>(null)
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
    onSuccess: () => {
      resetFilters()
      refetchAll()
    },
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
  const {
    data: allTransactionsData,
    isLoading,
    refetch: refetchAll,
  } = useQuery({
    queryKey: ["transactions", userAddress],
    queryFn: () => fetchAllTransactions(),
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

  const stateOfFilters: FilterStateVariant = useMemo(() => {
    if (inputStatePending && inputStatePending.length > 0) {
      return "pending-and-text"
    }
    return "pending"
  }, [inputStatePending])

  const resetFilters = () => {
    setInputStatePending("")
  }

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
    userAddress,
    renderingTransactions,
    activeApproval,
    inputStatePending,
    stateOfFilters,
    isApprovalOpen,
    mode,
    userApprovalStatus,
    canApprove: userApprovalStatus?.canApprove || false,
    approvalMutationStatus,
    handleInputFilter,
    handleApprovalOpen,
    handleApprovalClose,
    handleApprovalConfirm,
  }
}
