import { Transaction } from "@/types/api/transaction"

type Props = Pick<Transaction, "to" | "status" | "createdBy">

export function Basics({ to, status, createdBy }: Props) {
  return (
    <div>
      <div></div>
      <div>
        <span className="text-sm text-gray-500">{}</span>
        <span className="text-sm font-semibold"></span>
      </div>
    </div>
  )
}
