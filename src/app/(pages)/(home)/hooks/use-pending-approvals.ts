import { fetchPendingApprovals } from "@/http/contract/fetch-pending-approvals"
import useGlobalStore from "@/store/use-global-store"
import { useQuery } from "@tanstack/react-query"

export function usePendingApproval() {
  const userAddress = useGlobalStore((state) => state.userAddress)
  const { data: pendingApprovals, isLoading: isPendingApprovalsLoading } =
    useQuery({
      queryKey: ["pendingApprovals", userAddress],
      queryFn: () => {
        if (!userAddress) {
          return null
        }
        return fetchPendingApprovals()
      },
      enabled: !!userAddress,
    })

  return {
    pendingApprovals: pendingApprovals,
    isPendingApprovalsLoading,
  }
}
