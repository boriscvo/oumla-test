import { fetchTransactionCount } from "@/http/contract/fetch-transaction-count"
import useGlobalStore from "@/store/use-global-store"
import { useQuery } from "@tanstack/react-query"

export function useTotalTransactions() {
  const userAddress = useGlobalStore((state) => state.userAddress)
  const { data: totalTransactions, isLoading: isTotalTransactionsLoading } =
    useQuery({
      queryKey: ["totalTransactions", userAddress],
      queryFn: () => {
        if (!userAddress) {
          return null
        }
        return fetchTransactionCount()
      },
      enabled: !!userAddress,
    })

  return {
    totalTransactions,
    isTotalTransactionsLoading,
  }
}
