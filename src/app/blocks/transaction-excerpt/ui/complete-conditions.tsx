import { Button } from "@/components/ui/button"
import { RequestApprovalBadge } from "./request-approval-badge"
import { Loader2 } from "lucide-react"
import { useRefresh } from "../hooks/use-refresh"

type Props = {
  status: "error" | "idle" | "pending" | "success"
  handleRequestComplete: () => void
  handleRefetch?: () => void
}

export function CompleteConditions({
  status,
  handleRequestComplete,
  handleRefetch,
}: Props) {
  const { isIconRefreshActive, handleRefetchWithIcon } =
    useRefresh(handleRefetch)
  return (
    <>
      <Button
        className={`px-0! w-fit mr-2 underline cursor-pointer text-base`}
        disabled={status === "success"}
        variant="link"
        onClick={handleRequestComplete}
      >
        Complete Transaction
        <RequestApprovalBadge status={status} />
      </Button>
      {status === "success" && (
        <Button
          className={`px-0! w-fit mr-2 underline cursor-pointer text-base opacity-0 animate-link-opacity`}
          variant="link"
          onClick={handleRefetchWithIcon}
        >
          Refresh
          <Loader2
            className={`h-4 w-4 mt-[3px] text-primary ${
              isIconRefreshActive ? "animate-spin" : ""
            }`}
          />
        </Button>
      )}
    </>
  )
}
