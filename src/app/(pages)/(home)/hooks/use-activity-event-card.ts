import { fetchRecentActivity } from "@/http/contract/fetch-recent-activity"
import useGlobalStore from "@/store/use-global-store"
import { ActivityEvent } from "@/types/api"
import { useQuery } from "@tanstack/react-query"

export function useActivityEventCard() {
  const userAddress = useGlobalStore((state) => state.userAddress)
  const { data: recentActivityRaw, isLoading: isRecentActivityLoading } =
    useQuery({
      queryKey: ["recentActivity", userAddress],
      queryFn: () => {
        if (!userAddress) {
          return null
        }
        return fetchRecentActivity()
      },
      enabled: !!userAddress,
    })

  const recentActivity: ActivityEvent[] =
    recentActivityRaw?.map((activity) => ({
      type: Number(activity.status),
      from: activity.from,
      to: activity.to,
      description: activity.description,
      timestamp: Number(activity.timestamp),
    })) || []

  return {
    userAddress,
    recentActivity,
    isRecentActivityLoading,
  }
}
