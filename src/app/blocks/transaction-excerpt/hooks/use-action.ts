import { createApprovalRequest } from "@/http/contract/create-approval-request"
import { fetchUserDetails } from "@/http/contract/fetch-user-details"
import useGlobalStore from "@/store/use-global-store"
import { ActivityStatus } from "@/types/api/recent-activity"
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
    reset,
    status: requestApprovalStatus,
  } = useMutation({
    mutationFn: () => createApprovalRequest(id),
    onError: () => {
      setTimeout(() => {
        reset()
      }, 1000)
    },
  })

  const handleRequestApproval = () => {
    requestApprovalMutate()
  }

  const handleResetApproval = () => {
    reset()
  }

  return {
    role: userData?.role,
    approvalConditions,
    requestApprovalStatus,
    handleRequestApproval,
    handleResetApproval,
  }
}
