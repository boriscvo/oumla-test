"use client"
import { LabelValueRow, LoadingSkeleton } from "@/app/atoms"
import { useUserDetails } from "../hooks/use-user-details"
import useGlobalStore from "@/store/use-global-store"
import { useTotalTransactions } from "../hooks/use-total-transactions"
import { usePendingApproval } from "../hooks/use-pending-approvals"
import { useMemo } from "react"

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-[40%] flex flex-col space-y-2">{children}</div>
}

export function ConnectedAccount() {
  const userAddress = useGlobalStore((state) => state.userAddress)
  const { role, isUserDetailsLoading } = useUserDetails()
  const { totalTransactions, isTotalTransactionsLoading } =
    useTotalTransactions()
  const { pendingApprovals, isPendingApprovalsLoading } = usePendingApproval()

  const formattedAddress = useMemo(() => {
    const address = userAddress
    if (!address) return "Not connected"
    if (address.length < 10) {
      return address
    }
    return `${address.slice(0, 4)}...${address.slice(-4)}`
  }, [userAddress])

  return (
    <Container>
      <p className="font-semibold text-lg">Wallet Connected!</p>
      <LabelValueRow label="Address" value={formattedAddress} />
      <LabelValueRow
        label="Role"
        value={
          isUserDetailsLoading ? <LoadingSkeleton className="w-[4rem]" /> : role
        }
      />
      <LabelValueRow
        label="Total Transactions"
        value={
          isTotalTransactionsLoading ? (
            <LoadingSkeleton className="w-[2rem]" />
          ) : (
            totalTransactions
          )
        }
      />
      <LabelValueRow
        label="Pending Approvals"
        value={
          isPendingApprovalsLoading ? (
            <LoadingSkeleton className="w-[2rem]" />
          ) : (
            pendingApprovals
          )
        }
      />
    </Container>
  )
}
