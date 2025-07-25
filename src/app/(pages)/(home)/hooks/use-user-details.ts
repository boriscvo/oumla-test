import { fetchUserDetails } from "@/http/contract/fetch-user-details"
import useGlobalStore from "@/store/use-global-store"
import { useQuery } from "@tanstack/react-query"

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

  return {
    role: userData?.role,
    isUserDetailsLoading,
  }
}
