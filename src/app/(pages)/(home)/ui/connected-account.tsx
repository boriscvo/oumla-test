import { LabelValueRow } from "@/app/atoms"
import { UserRoles } from "@/types/api"

type Props = {
  walletAddress?: string
  userRole?: UserRoles
  totalTransactions?: number
  pendingApprovals?: number
}

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-[40%] flex flex-col space-y-2">{children}</div>
}

export function ConnectedAccount({
  walletAddress,
  userRole,
  totalTransactions,
  pendingApprovals,
}: Props) {
  return (
    <Container>
      <p className="font-semibold text-lg">Wallet Connected!</p>
      <LabelValueRow label="Address" value={walletAddress} />
      <LabelValueRow label="Role" value={userRole} />
      <LabelValueRow label="Total Transactions" value={totalTransactions} />
      <LabelValueRow label="Pending Approvals" value={pendingApprovals} />
    </Container>
  )
}
