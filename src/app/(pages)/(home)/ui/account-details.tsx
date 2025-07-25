"use client"
import { useAccountDetails } from "../hooks/use-account-details"
import { ConnectedAccount } from "./connected-account"
import { AccountDetailsLoading } from "./loading/account-details-loading"
import { NotConnectedAccount } from "./not-connected-account"

export function AccountDetails() {
  const { userAddress, isLoading, isPageMounted, handleConnect } =
    useAccountDetails()

  if (!isPageMounted) {
    return <AccountDetailsLoading />
  }

  if (userAddress) {
    return <ConnectedAccount />
  }

  return (
    <NotConnectedAccount handleConnect={handleConnect} isLoading={isLoading} />
  )
}
