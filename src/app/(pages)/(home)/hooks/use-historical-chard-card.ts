import { fetchChartData } from "@/http/contract/fetch-chart-data"
import useGlobalStore from "@/store/use-global-store"
import { useQuery } from "@tanstack/react-query"

export function useHistoricalChartCard() {
  const userAddress = useGlobalStore((state) => state.userAddress)

  const { data } = useQuery({
    queryKey: ["chartData", userAddress],
    queryFn: () => fetchChartData(),
  })

  const historicalPoints = data?.map((point) => ({
    x: point.date * 1000,
    y: point.total,
  }))

  return {
    userAddress,
    historicalPoints,
  }
}
