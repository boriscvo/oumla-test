import useGlobalStore from "@/store/use-global-store"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export function useWalletConnector() {
  const router = useRouter()
  const setUserAddress = useGlobalStore((state) => state.setUserAddress)

  const handleConnect = (...args: unknown[]) => {
    const accounts = args[0] as string[]
    const account = accounts?.[0]
    if (!account) {
      setUserAddress(null)
      router.push("/")
      return
    }
    setUserAddress(account)
  }

  useEffect(() => {
    const eth = window.ethereum
    if (!eth) return

    eth.request({ method: "eth_accounts" }).then((accounts: string[]) => {
      const accList = accounts
      if (accList && accList.length > 0) {
        setUserAddress(accList[0])
      }
    })

    eth.on("accountsChanged", handleConnect)

    return () => {
      eth.removeListener("accountsChanged", handleConnect)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
