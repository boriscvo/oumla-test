import { ActivityStatus } from "./recent-activity"

export enum ApprovalStatus {
  Pending = 0,
  Approved = 1,
  Rejected = 2,
}

export type Transaction = {
  id: number
  from: string
  to: string
  amount: string
  description: string
  timestamp: number
  status: ActivityStatus
  approvalId?: number
  approvalStatus?: ApprovalStatus
}
