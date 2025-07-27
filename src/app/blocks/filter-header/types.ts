import {
  TransactionStatusNonPending,
  TransactionStatusWithAll,
} from "@/types/common/transaction-status"

export type FilterStateVariant =
  | "all"
  | "all-and-text"
  | "active"
  | "active-and-text"
  | "pending"
  | "pending-and-text"
  | "completed"
  | "completed-and-text"
  | "rejected"
  | "rejected-and-text"

export type AllowedOptionTypes =
  | TransactionStatusNonPending
  | TransactionStatusWithAll
