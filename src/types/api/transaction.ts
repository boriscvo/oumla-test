export type TransactionStatus =  "active" | "pending" | "completed" | "rejected"
export type TransactionStatusNonPending = Exclude<TransactionStatus, "pending"> | "all"

export type Transaction = {
  id: number
  from: string
  to: string
  amount: bigint
  description: string
  status: TransactionStatus
  createdAt: number
  approvalId: number
}