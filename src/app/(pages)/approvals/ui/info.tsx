import { FormattedAddress } from "@/app/blocks"

type Props = {
  from?: string
  to?: string
  userAddress: string | null
}

export function Info({ from, to, userAddress }: Props) {
  return (
    <div className="mt-4 mb-1 flex items-center">
      <div className="mr-1">{from === userAddress ? `To: ` : `From: `}</div>
      <div className="text-primary font-semibold">
        {from === userAddress ? (
          <FormattedAddress address={to} />
        ) : (
          <FormattedAddress address={from} />
        )}
      </div>
    </div>
  )
}
