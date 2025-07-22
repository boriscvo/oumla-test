type Props = {
  amount: string
}

export function Amount({ amount }: Props) {
  return <span className="text-lg font-semibold">{amount}</span>
}
