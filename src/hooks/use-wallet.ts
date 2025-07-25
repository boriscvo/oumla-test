import { useEffect, useState } from "react"
import { resolveWallet } from "@/utils/resolve-wallet"
import useGlobalStore from "@/store/use-global-store"

export const useWallet = () => {
  const setUserAddress = useGlobalStore((state) => state.setUserAddress)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isPageMounted, setIsPageMounted] = useState(false)

  const handleChangeAccount = (...args: unknown[]) => {
    const accounts = args[0] as string[]
    const account = accounts?.[0]
    setUserAddress(account || null)
    setError(null)
    setIsLoading(false)
  }

  const handleConnect = async () => {
    try {
      setIsLoading(true)
      const { address } = await resolveWallet()
      setUserAddress(address || null)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const eth = window.ethereum
    if (!eth) return

    eth
      .request({ method: "eth_accounts" })
      .then((accounts: string[]) => {
        const accList = accounts
        if (accList && accList.length > 0) {
          setUserAddress(accList[0])
        }
      })
      .finally(() => {
        setIsPageMounted(true)
      })

    eth.on("accountsChanged", handleChangeAccount)
    eth.on("connect", handleConnect)

    return () => {
      eth.removeListener("accountsChanged", handleChangeAccount)
      eth.removeListener("connect", handleConnect)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { isLoading, error, isPageMounted, handleConnect }
}
