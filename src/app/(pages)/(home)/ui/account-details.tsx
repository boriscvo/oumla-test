"use client"

import { useAccountDetails } from "../hooks/use-account-details"
import { ConnectedAccount } from "./connected-account"
import { AccountDetailsLoading } from "./loading/account-details-loading"
import { NotConnectedAccount } from "./not-connected-account"

export function AccountDetails() {
  const { userRole, totalTransactions, pendingApprovals, formattedAddress } =
    useAccountDetails()

  if (true) {
    return <AccountDetailsLoading />
  }

  if (false) {
    return (
      <ConnectedAccount
        walletAddress={formattedAddress}
        userRole={userRole}
        totalTransactions={totalTransactions}
        pendingApprovals={pendingApprovals}
      />
    )
  }

  return <NotConnectedAccount />
}
