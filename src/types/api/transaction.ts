export type TransactionStatus =  "active" | "pending" | "completed" | "rejected"

export type Transaction = {
    id: number
    to: `0x${string}`
    amount: bigint
    status: TransactionStatus
    createdAt: number
    createdBy: `0x${string}`
}