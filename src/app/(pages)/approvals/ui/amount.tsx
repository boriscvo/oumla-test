import { formatEther } from "ethers"

type Props = {
  amount?: string | null
}

export function Amount({ amount }: Props) {
  if (!amount) {
    return null
  }
  return (
    <>
      {amount && (
        <p>
          <span>{`Valued at: `}</span>
          <span className="text-primary font-semibold">
            {formatEther(amount)} ETH
          </span>
        </p>
      )}
    </>
  )
}
