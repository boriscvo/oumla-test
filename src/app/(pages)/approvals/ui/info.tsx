type Props = {
  from?: string
  to?: string
  userAddress: string | null
}

export function Info({ from, to, userAddress }: Props) {
  return (
    <p className="mt-4 mb-1">
      <span>{from === userAddress ? `To: ` : `From: `}</span>
      <span className="text-primary font-semibold">
        {from === userAddress ? to : from}
      </span>
    </p>
  )
}
