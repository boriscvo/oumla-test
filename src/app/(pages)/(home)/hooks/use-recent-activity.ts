import { fetchRecentActivity } from "@/http/contract/fetch-recent-activity"
import useGlobalStore from "@/store/use-global-store"
import { useQuery } from "@tanstack/react-query"

export function useRecentActivity() {
  const userAddress = useGlobalStore((state) => state.userAddress)
  const { data: recentActivity, isLoading: isRecentActivityLoading } = useQuery(
    {
      queryKey: ["recentActivity", userAddress],
      queryFn: () => {
        if (!userAddress) {
          return null
        }
        return fetchRecentActivity()
      },
      enabled: !!userAddress,
    }
  )

  return {
    recentActivity,
    isRecentActivityLoading,
  }
}
