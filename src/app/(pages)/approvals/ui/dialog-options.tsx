import { Button } from "@/components/ui/button"
import { Amount } from "./amount"
import { Info } from "./info"
import { Sentiment } from "./sentiment"
import { Transaction } from "@/types/api/transaction"
import { Check, Loader2, X } from "lucide-react"

type Props = {
  activeApproval: Transaction | null
  canApprove: boolean
  mode: "approve" | "reject" | null
  userAddress: string | null
  approvalMutationStatus: "error" | "pending" | "idle" | "success"
  handleConfirm: (id?: number) => void
  handleClose: () => void
}

export function DialogOptions({
  mode,
  activeApproval,
  userAddress,
  canApprove,
  approvalMutationStatus,
  handleConfirm,
  handleClose,
}: Props) {
  const { id, from, to, amount } = activeApproval || {}

  if (approvalMutationStatus === "pending") {
    return (
      <div className="flex flex-col items-center justify-center h-32">
        <div>
          <Loader2 className="h-12 w-12 my-6 mx-auto animate-spin text-muted-foreground" />
        </div>
        <span className="text-muted text-lg md:text-xl mb-2">
          Processing...
        </span>
      </div>
    )
  }

  if (approvalMutationStatus === "success") {
    return (
      <div className="flex flex-col items-center justify-center h-32">
        <div>
          <Check className="h-12 w-12 my-6 mx-auto text-positive" />
        </div>
        <span className="text-white text-lg md:text-xl mb-2">
          Request completed successfully!
        </span>
      </div>
    )
  }

  if (approvalMutationStatus === "error") {
    return (
      <div className="flex flex-col items-center justify-center h-32">
        <div>
          <X className="h-12 w-12 my-6 mx-auto text-negative" />
        </div>
        <span className="text-white text-lg md:text-xl mb-2">
          An error occurred during request.
        </span>
      </div>
    )
  }

  if (canApprove) {
    return (
      <div>
        <Sentiment mode={mode} />
        <Info from={from} to={to} userAddress={userAddress} />
        <Amount amount={amount} />

        <div className="flex mt-8">
          <Button
            className="w-full cursor-pointer"
            onClick={() => handleConfirm(id)}
          >
            Yes, confirm
          </Button>
        </div>
      </div>
    )
  }
  return (
    <>
      <div className="pt-10 pb-6 text-center text-lg">
        You do not have permission to handle approvals or rejections of this
        transaction.
      </div>
      <div className="flex">
        <Button className="w-full cursor-pointer" onClick={handleClose}>
          Close Dialog
        </Button>
      </div>
    </>
  )
}
