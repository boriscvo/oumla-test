import { useState, useEffect } from "react"
import { connectWallet } from "@/utils/wallet"
import useGlobalStore from "@/store/use-global-store"
import { Eip1193Provider } from "ethers"

export const useWallet = () => {
  const setUserAddress = useGlobalStore((state) => state.setUserAddress)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState<string | null>(null)
  const [isPageMounted, setIsPageMounted] = useState(false)

  const handleConnect = async () => {
    setUserAddress(null)
    try {
      setIsLoading(true)
      const { address } = await connectWallet()
      setUserAddress(address || null)
    } catch (err) {
      if (err instanceof Error) {
        setIsError(err.message)
      } else {
        setIsError("Unknown error")
      }
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const eth = window.ethereum as
      | (Eip1193Provider & { selectedAddress?: string })
      | undefined

    if (eth?.selectedAddress) {
      setUserAddress(eth.selectedAddress)
      setIsPageMounted(true)
    }

    ;(eth as unknown as EventTarget)?.addEventListener?.(
      "accountsChanged",
      handleConnect
    )

    return () => {
      ;(eth as unknown as EventTarget)?.removeEventListener?.(
        "accountsChanged",
        handleConnect
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { isLoading, isError, isPageMounted, handleConnect }
}
