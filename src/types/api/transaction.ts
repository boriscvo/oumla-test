export type RecentActivity = ActivityEvent[]

export enum ActivityStatus {
  Pending = 0,
  Active = 1,
  Completed = 2,
  Rejected = 3,
}

export type ActivityEvent = {
  type: ActivityStatus
  from: string
  to: string
  description: string
  timestamp: number
}

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
