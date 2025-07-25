import { Check, Loader2, X } from "lucide-react"
import { TransactionPlacedOutcome } from "../../types"

type Props = {
  isSubmitInProgress: boolean
  outcome: TransactionPlacedOutcome | null
}

export function TransactionOutcome({ isSubmitInProgress, outcome }: Props) {
  if (outcome === "failed") {
    return (
      <div className="flex flex-col text-center text-lg">
        <div>
          <X className="h-20 w-20 my-10 mx-auto text-negative" />
        </div>
        <p className="mb-6 text-xl">Transaction failed.</p>
        <p className="flex flex-col px-8 text-muted-foreground text-md">
          <span>Please try again. If the issue persists,</span>
          <span>contact support for assistance.</span>
        </p>
      </div>
    )
  }

  if (outcome === "placed") {
    return (
      <div className="flex flex-col text-center text-lg">
        <div>
          <Check className="h-20 w-20 my-10 mx-auto text-positive" />
        </div>
        <p className="mb-6 text-xl">Transaction successfully placed!</p>
        <p className="px-8 text-muted-foreground text-md">
          Transactions has been submitted, mined and is now in the process of
          approval.
        </p>
      </div>
    )
  }

  if (isSubmitInProgress) {
    return (
      <div className="w-full flex flex-col text-center tracking-wide">
        <div>
          <Loader2 className="h-20 w-20 my-10 mx-auto animate-spin text-muted-foreground" />
        </div>
        <p className="mb-6 text-xl">Submitting transaction...</p>
        <p className="px-8 text-muted-foreground text-md">
          This may take a few seconds, feel free to close this dialog and track
          the outcome in the transactions list.
        </p>
      </div>
    )
  }

  return null
}
