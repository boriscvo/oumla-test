export type TransactionStatus = "active" | "pending" | "completed" | "rejected"
export type TransactionStatusNonPending =
  | Exclude<TransactionStatus, "pending">
  | "all"
