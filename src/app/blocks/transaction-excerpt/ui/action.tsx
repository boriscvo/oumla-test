import { Button } from "@/components/ui/button"
import { TransactionViewVariant } from "@/types/common"
import { Link } from "lucide-react"
import { Stop } from "./stop"
import { useAction } from "../hooks/use-action"
import { Transaction } from "@/types/api/transaction"
import { ApprovalCondition } from "./approval-condition"

type Props = Pick<Transaction, "id" | "approvalId" | "status"> & {
  isSelf: boolean
  variant: TransactionViewVariant
  handleActionClick: (id: number, mode?: "approve" | "reject") => void
  handleApproval?: () => void
}

export function Action({
  id,
  approvalId,
  status,
  variant,
  isSelf,
  handleActionClick,
}: Props) {
  const {
    role,
    approvalConditions,
    requestApprovalStatus,
    handleRequestApproval,
  } = useAction(id, status, isSelf, approvalId)

  if (variant === "transaction") {
    return (
      <>
        <Stop />
        <Button
          className="px-0! underline cursor-pointer text-base"
          variant="link"
          onClick={() => handleActionClick(id)}
        >
          View Details
          <Link className="h-4 w-4 -mt-[0.5]" />
        </Button>
        <ApprovalCondition
          approvalConditions={approvalConditions}
          requestApprovalStatus={requestApprovalStatus}
          handleRequestApproval={handleRequestApproval}
        />
      </>
    )
  }
  if (role && approvalId) {
    return (
      <>
        <Stop />
        <Button
          className="px-0! underline cursor-pointer text-positive text-md"
          variant="link"
          onClick={() => handleActionClick(id, "approve")}
        >
          Approve
        </Button>
        <Stop />
        <Button
          className="pl-0! underline cursor-pointer text-negative text-md"
          variant="link"
          onClick={() => handleActionClick(id, "reject")}
        >
          Reject
        </Button>
      </>
    )
  }

  return null
}
