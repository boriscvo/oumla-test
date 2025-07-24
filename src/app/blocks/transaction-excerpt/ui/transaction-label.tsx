import { TransactionStatus } from "@/types/api/transaction"
import { CheckCircle, XCircle, Clock, AlertCircle } from "lucide-react"

type Props = {
  status: TransactionStatus
}

export function TransactionLabel({ status }: Props) {
  switch (status) {
    case "completed":
      return (
        <div className="flex items-center text-positive">
          <CheckCircle className="w-4 h-4 mr-2" />
          <span>Completed</span>
        </div>
      )
    case "rejected":
      return (
        <div className="flex items-center text-negative">
          <XCircle className="w-4 h-4 mr-2" />
          <span>Rejected</span>
        </div>
      )
    case "pending":
      return (
        <div className="flex items-center text-warning">
          <Clock className="w-4 h-4 mr-2" />
          <span>Pending</span>
        </div>
      )
    case "active":
    default:
      return (
        <div className="flex items-center text-info font-medium">
          <AlertCircle className="w-4 h-4 mr-2 -mt-[1px]" />
          <span>Active</span>
        </div>
      )
  }
}
