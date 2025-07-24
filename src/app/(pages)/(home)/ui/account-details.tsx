"use client"
import { useAccountDetails } from "../hooks/use-account-details"
import { ConnectedAccount } from "./connected-account"
import { AccountDetailsLoading } from "./loading/account-details-loading"
import { NotConnectedAccount } from "./not-connected-account"

export function AccountDetails() {
  const {
    userAddress,
    userRole,
    totalTransactions,
    pendingApprovals,
    formattedAddress,
    isLoading,
    isError,
    isPageMounted,
    handleConnect,
  } = useAccountDetails()

  if (!isPageMounted || isLoading || isError) {
    return <AccountDetailsLoading />
  }

  if (userAddress) {
    return (
      <ConnectedAccount
        walletAddress={formattedAddress}
        userRole={userRole}
        totalTransactions={totalTransactions}
        pendingApprovals={pendingApprovals}
      />
    )
  }

  return <NotConnectedAccount handleConnect={handleConnect} />
}
