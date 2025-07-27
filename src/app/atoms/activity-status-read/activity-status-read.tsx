import { ActivityStatus } from "@/types/api/transaction"
import { ActivityStatusReadProps } from "./types"

export function ActivityStatusRead({ label }: ActivityStatusReadProps) {
  switch (label) {
    case ActivityStatus.Pending:
      return "Pending"
    case ActivityStatus.Active:
      return "Active"
    case ActivityStatus.Completed:
      return "Completed"
    case ActivityStatus.Rejected:
      return "Rejected"
    default:
      return null
  }
}
