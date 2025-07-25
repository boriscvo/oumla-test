import { ActivityStatus } from "./recent-activity"

export type Transaction = {
  id: number
  from: string
  to: string
  amount: string
  description: string
  timestamp: number
  status: ActivityStatus
}
