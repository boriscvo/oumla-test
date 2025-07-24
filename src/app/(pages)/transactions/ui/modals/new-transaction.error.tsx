type Props = {
  to?: string | null
  amount?: string | null
}

function ErrorResolved({ to, amount }: Props) {
  switch (true) {
    case !to && !amount:
      return ""
    case !to:
      return amount
    case !amount:
      return to
    default:
      return `${to}. ${amount}.`
  }
}

export function NewTransactionError({ to, amount }: Props) {
  return (
    <div className="mx-4 text-md text-negative">
      <ErrorResolved to={to} amount={amount} />
    </div>
  )
}
