import { TransactionExcerptLoading } from "@/app/blocks"

export function Loading() {
  return (
    <div className="flex flex-col gap-2">
      <TransactionExcerptLoading />
      <TransactionExcerptLoading />
      <TransactionExcerptLoading />
    </div>
  )
}
