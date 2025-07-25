export type RecentActivity = ActivityEvent[]

export type ActivityEvent = {
  type: "transaction" | "approval" | "user"
  from: string
  to: string
  description: string
  timestamp: number
}
