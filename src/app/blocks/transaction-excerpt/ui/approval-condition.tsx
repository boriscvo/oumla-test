import { Button } from "@/components/ui/button"
import { Stop } from "./stop"
import { RequestApprovalBadge } from "./request-approval-badge"
import { Check } from "lucide-react"

type Props = {
  approvalConditions: "approval-required" | "approval-submitted" | null
  requestApprovalStatus: "idle" | "success" | "error" | "pending"
  handleRequestApproval: () => void
}

export function ApprovalCondition({
  approvalConditions,
  requestApprovalStatus,
  handleRequestApproval,
}: Props) {
  if (approvalConditions === "approval-required") {
    return (
      <>
        <Stop />
        <Button
          className="px-0! w-fit underline cursor-pointer text-base"
          variant="link"
          disabled={requestApprovalStatus === "success"}
          onClick={handleRequestApproval}
        >
          Request Approval
          <RequestApprovalBadge status={requestApprovalStatus} />
        </Button>
      </>
    )
  }

  if (approvalConditions === "approval-submitted") {
    return (
      <>
        <Stop />
        <span className="flex items-center text-primary">
          Approval Submitted
          <Check className="h-4 w-4 ml-1.5 mt-[0.5] text-positive" />
        </span>
      </>
    )
  }

  return null
}
