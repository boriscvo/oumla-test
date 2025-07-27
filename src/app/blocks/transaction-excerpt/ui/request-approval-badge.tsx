import { BadgeCheck, Check, Loader2, X } from "lucide-react"

type Props = {
  status: "error" | "idle" | "pending" | "success"
  siApprovalRequested?: boolean
}

export function RequestApprovalBadge({ status }: Props) {
  if (status === "pending") {
    return <Loader2 className="h-4 w-4 mt-[3px] animate-spin" />
  }

  if (status === "success") {
    return <Check className="h-4 w-4 mt-[0.5] text-positive" />
  }

  if (status === "error") {
    return <X className="h-4 w-4 mt-[0.5] text-negative" />
  }

  return <BadgeCheck className="h-4 w-4 mt-0.5" />
}
