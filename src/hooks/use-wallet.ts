import { useState, useEffect } from "react"
import { connectWallet } from "@/utils/wallet"
import useGlobalStore from "@/store/use-global-store"
import { Eip1193Provider } from "ethers"

export const useWallet = () => {
  const setUserAddress = useGlobalStore((state) => state.setUserAddress)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isPageMounted, setIsPageMounted] = useState(false)

  const handleChangeAccount = (account?: string) => {
    if (!account) {
      setUserAddress(null)
      setError(null)
      setIsLoading(false)
      return
    }
    setUserAddress(account)
    setError(null)
    setIsLoading(false)
  }

  const handleConnect = async () => {
    try {
      setIsLoading(true)
      const { address } = await connectWallet()
      setUserAddress(address || null)
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError("Unknown error")
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
    }
    setIsPageMounted(true)
    ;(eth as unknown as EventTarget)?.addEventListener?.(
      "accountsChanged",
      () => handleChangeAccount(eth?.selectedAddress)
    )
    ;(eth as unknown as EventTarget)?.addEventListener?.(
      "connect",
      handleConnect
    )

    return () => {
      ;(eth as unknown as EventTarget)?.removeEventListener?.(
        "accountsChanged",
        () => handleChangeAccount(eth?.selectedAddress)
      )
      ;(eth as unknown as EventTarget)?.removeEventListener?.(
        "connect",
        handleConnect
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { isLoading, error, isPageMounted, handleConnect }
}
