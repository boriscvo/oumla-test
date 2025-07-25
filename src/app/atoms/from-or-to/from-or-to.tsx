import { Transaction } from "@/types/api/transaction"

type Props = Pick<Transaction, "to" | "from"> & { isSelf: boolean }

export function FromOrTo({ to, from, isSelf }: Props) {
  if (isSelf) {
    return (
      <div className="flex text-lg">
        <span className="">From:</span>
        <span className="ml-2">{from}</span>
      </div>
    )
  }
  return (
    <div className="flex text-lg">
      <span className="">To:</span>
      <span className="ml-2">{to}</span>
    </div>
  )
}
