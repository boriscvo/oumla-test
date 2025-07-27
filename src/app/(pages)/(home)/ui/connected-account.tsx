"use client"
import { LabelValueRow, LoadingSkeleton, WalletAddress } from "@/app/atoms"
import { useTotalTransactions, useUserDetails } from "../hooks"
import { usePendingApproval } from "../hooks/use-pending-approvals"

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full md:w-[40%] max-md:w-full max-md:mt-8 flex flex-col space-y-2">
      {children}
    </div>
  )
}

export function ConnectedAccount() {
  const { role, userAddress, isUserDetailsLoading } = useUserDetails()
  const { totalTransactions, isTotalTransactionsLoading } =
    useTotalTransactions()
  const { pendingApprovals, isPendingApprovalsLoading } = usePendingApproval()

  return (
    <Container>
      <p className="font-semibold text-lg">Wallet Connected!</p>
      <LabelValueRow
        label="Address"
        value={<WalletAddress address={userAddress} />}
      />
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
            <span
              className={
                pendingApprovals?.length ? "text-primary" : "text-white"
              }
            >
              {pendingApprovals?.length}
            </span>
          )
        }
      />
    </Container>
  )
}
