import { ActivityStatus } from "@/types/api/recent-activity"
import { CheckCircle, XCircle, Clock, AlertCircle } from "lucide-react"

type Props = {
  status: ActivityStatus
}

export function TransactionLabel({ status }: Props) {
  switch (status) {
    case ActivityStatus.Completed:
      return (
        <div className="flex items-center text-positive">
          <CheckCircle className="w-4 h-4 mr-2 mt-[1px]" />
          <span>Completed</span>
        </div>
      )
    case ActivityStatus.Rejected:
      return (
        <div className="flex items-center text-negative">
          <XCircle className="w-4 h-4 mr-2 mt-[1px]" />
          <span>Rejected</span>
        </div>
      )
    case ActivityStatus.Pending:
      return (
        <div className="flex items-center text-warning">
          <Clock className="w-4 h-4 mr-2 mt-[1px]" />
          <span>Pending</span>
        </div>
      )
    case ActivityStatus.Active:
    default:
      return (
        <div className="flex items-center text-info font-medium">
          <AlertCircle className="w-4 h-4 mr-2 mt-[1px]" />
          <span>Active</span>
        </div>
      )
  }
}
