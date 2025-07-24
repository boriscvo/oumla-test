import { useMemo } from "react"
import { UserRoles } from "@/types/api"
import { useWallet } from "@/hooks/use-wallet"
import useGlobalStore from "@/store/use-global-store"

export function useAccountDetails() {
  const userAddress = useGlobalStore((state) => state.userAddress)
  const { isLoading, isError, isPageMounted, handleConnect } = useWallet()

  const formattedAddress = useMemo(() => {
    const address = userAddress
    if (!address) return "Not connected"
    if (address.length < 10) {
      return address
    }
    return `${address.slice(0, 4)}...${address.slice(-4)}`
  }, [userAddress])

  return {
    userAddress,
    userRole: "admin" as UserRoles,
    totalTransactions: 5,
    pendingApprovals: 3,
    activeDeals: 2,
    formattedAddress,
    isLoading,
    isError,
    isPageMounted,
    handleConnect,
  }
}
