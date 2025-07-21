"use client"

import { useAccountDetails } from "../hooks/use-account-details"
import { ConnectedAccount } from "./connected-account"
import { NotConnectedAccount } from "./not-connected-account"

export function AccountDetails() {
  const {
    userRole,
    totalTransactions,
    pendingApprovals,
    formattedAddress,
    activeDeals,
  } = useAccountDetails()

  if (true) {
    return (
      <ConnectedAccount
        walletAddress={formattedAddress}
        userRole={userRole}
        totalTransactions={totalTransactions}
        pendingApprovals={pendingApprovals}
        activeDeals={activeDeals}
      />
    )
  }

  return <NotConnectedAccount />
}
