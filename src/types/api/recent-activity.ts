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
