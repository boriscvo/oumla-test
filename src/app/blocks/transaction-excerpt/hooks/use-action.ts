import { createApprovalRequest } from "@/http/contract/create-approval-request"
import { createCompleteRequest } from "@/http/contract/create-complete-request"
import { fetchUserDetails } from "@/http/contract/fetch-user-details"
import useGlobalStore from "@/store/use-global-store"
import { ActivityStatus } from "@/types/api/transaction"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useMemo } from "react"

export function useAction(
  id: number,
  status: ActivityStatus,
  isSelf: boolean,
  approvalId?: number
) {
  const userAddress = useGlobalStore((state) => state.userAddress)
  const { data: userData } = useQuery({
    queryKey: ["userData", userAddress],
    queryFn: () => {
      if (!userAddress) {
        return null
      }
      return fetchUserDetails(userAddress)
    },
    enabled: !!userAddress,
  })

  const approvalConditions: "approval-submitted" | "approval-required" | null =
    useMemo(() => {
      if (status !== ActivityStatus.Pending || !isSelf) {
        return null
      }
      return approvalId ? "approval-submitted" : "approval-required"
    }, [status, approvalId, isSelf])

  const {
    mutate: requestApprovalMutate,
    reset: requestApprovalReset,
    status: requestApprovalStatus,
  } = useMutation({
    mutationFn: () => createApprovalRequest(id),
    onError: () => {
      setTimeout(() => {
        requestApprovalReset()
      }, 2000)
    },
  })

  const {
    mutate: requestCompleteMutate,
    reset: requestCompleteReset,
    status: requestCompleteStatus,
  } = useMutation({
    mutationFn: () => createCompleteRequest(id),
    onError: () => {
      setTimeout(() => {
        requestCompleteReset()
      }, 2000)
    },
  })

  const handleRequestApproval = () => {
    requestApprovalMutate()
  }

  const handleRequestComplete = () => {
    requestCompleteMutate()
  }

  return {
    role: userData?.role,
    approvalConditions,
    requestApprovalStatus,
    requestCompleteStatus,
    handleRequestApproval,
    handleRequestComplete,
  }
}
