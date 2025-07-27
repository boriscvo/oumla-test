import { fetchUserDetails } from "@/http/contract/fetch-user-details"
import useGlobalStore from "@/store/use-global-store"
import { useQuery } from "@tanstack/react-query"
import { useMemo } from "react"

export function useUserDetails() {
  const userAddress = useGlobalStore((state) => state.userAddress)

  const { data: userData, isLoading: isUserDetailsLoading } = useQuery({
    queryKey: ["userData", userAddress],
    queryFn: () => {
      if (!userAddress) {
        return null
      }
      return fetchUserDetails(userAddress)
    },
    enabled: !!userAddress,
  })

  const formattedAddress = useMemo(() => {
    const address = userAddress
    if (!address) return "Not connected"
    if (address.length < 10) {
      return address
    }
    return `${address.slice(0, 4)}...${address.slice(-4)}`
  }, [userAddress])

  return {
    formattedAddress,
    userAddress,
    role: userData?.role,
    isUserDetailsLoading,
  }
}
