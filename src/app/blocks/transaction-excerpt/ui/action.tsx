import { Button } from "@/components/ui/button"
import { TransactionViewVariant } from "@/types/common"
import { Link } from "lucide-react"
import { Stop } from "./stop"
import { useAction } from "../hooks/use-action"
import { ActivityStatus, Transaction } from "@/types/api/transaction"
import { ApprovalCondition } from "./approval-condition"
import { CompleteConditions } from "./complete-conditions"

type Props = Pick<Transaction, "id" | "approvalId" | "status"> & {
  isSelf: boolean
  variant: TransactionViewVariant
  handleActionClick: (id: number, mode?: "approve" | "reject") => void
  handleApproval?: () => void
  handleRefetchList?: () => void
}

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="flex max-md:flex-col md:items-center max-md:mt-2">
    {children}
  </div>
)

export function Action({
  id,
  approvalId,
  status,
  variant,
  isSelf,
  handleActionClick,
  handleRefetchList,
}: Props) {
  const {
    role,
    approvalConditions,
    requestApprovalStatus,
    requestCompleteStatus,
    handleRequestApproval,
    handleRequestComplete,
  } = useAction(id, status, isSelf, approvalId)

  if (status === ActivityStatus.Active && variant === "transaction") {
    return (
      <Container>
        <Stop />
        <Button
          className="px-0! w-fit underline cursor-pointer text-base"
          variant="link"
          onClick={() => handleActionClick(id)}
        >
          Details
          <Link className="h-4 w-4 -mt-[0.5]" />
        </Button>
        <Stop />
        <CompleteConditions
          status={requestCompleteStatus}
          handleRequestComplete={handleRequestComplete}
          handleRefetch={handleRefetchList}
        />
      </Container>
    )
  }

  if (variant === "transaction") {
    return (
      <Container>
        <Stop />
        <Button
          className="px-0! w-fit underline cursor-pointer text-base"
          variant="link"
          onClick={() => handleActionClick(id)}
        >
          Details
          <Link className="h-4 w-4 -mt-[0.5]" />
        </Button>
        <ApprovalCondition
          approvalConditions={approvalConditions}
          requestApprovalStatus={requestApprovalStatus}
          handleRequestApproval={handleRequestApproval}
        />
      </Container>
    )
  }
  if (role && approvalId) {
    return (
      <Container>
        <Stop />
        <Button
          className="px-0! w-fit underline cursor-pointer text-positive text-md"
          variant="link"
          onClick={() => handleActionClick(id, "approve")}
        >
          Approve
        </Button>
        <Stop />
        <Button
          className="pl-0! w-fit underline cursor-pointer text-negative text-md"
          variant="link"
          onClick={() => handleActionClick(id, "reject")}
        >
          Reject
        </Button>
      </Container>
    )
  }
}
