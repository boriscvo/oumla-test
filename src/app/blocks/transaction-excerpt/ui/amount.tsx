import { EthNumber } from "@/app/atoms/eth-number/eth-number"

type Props = {
  amount: string
}

export function Amount({ amount }: Props) {
  return (
    <span className="absolute top-6 md:top-3 right-0 whitespace-nowrap text-lg font-semibold">
      <EthNumber value={amount} />
    </span>
  )
}
