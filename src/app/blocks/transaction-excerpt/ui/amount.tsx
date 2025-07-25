import { EthNumber } from "@/app/atoms/eth-number/eth-number"

type Props = {
  amount: string
}

export function Amount({ amount }: Props) {
  return (
    <span className="flex whitespace-nowrap text-lg font-semibold">
      <EthNumber value={amount} />
    </span>
  )
}
