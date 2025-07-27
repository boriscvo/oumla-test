import { Transaction } from "@/types/api/transaction"
import { WalletAddress } from "../wallet-address/wallet-address"

type Props = Pick<Transaction, "to" | "from"> & { isSelf: boolean }

function FromOrToResolver({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex md:text-lg">
      <span className="">{label}:</span>
      <span className="ml-2 max-md:hidden">{value}</span>
      <div className="md:hidden ml-2">
        <WalletAddress address={value} />
      </div>
    </div>
  )
}

export function FromOrTo({ to, from, isSelf }: Props) {
  if (isSelf) {
    return <FromOrToResolver label="To" value={to} />
  }
  return <FromOrToResolver label="From" value={from} />
}
