"use client"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { useNewTransaction } from "../../hooks/use-new-transaction"
import { NewTransactionForm } from "./new-transaction-form"
import { TransactionOutcome } from "./transaction-outcome"
import { TransactionButton } from "./transaction-button"

type Props = {
  isOpen: boolean
  handleClose: () => void
  handleRefetch: () => void
}

export function NewTransaction({ isOpen, handleClose, handleRefetch }: Props) {
  const {
    userAddress,
    to,
    amount,
    description,
    error,
    outcome,
    isSubmitInProgress,
    isSubmitted,
    handleRecipientUpdate,
    handleAmountUpdate,
    handleDescriptionUpdate,
    handleSubmit,
    handleDialogClose,
  } = useNewTransaction({ handleClose, handleRefetch })
  return (
    <Dialog open={isOpen} onOpenChange={handleDialogClose}>
      <DialogContent aria-describedby={undefined}>
        <DialogHeader>
          {!isSubmitted && (
            <DialogTitle className="mb-2">Create New Transaction</DialogTitle>
          )}
        </DialogHeader>
        {isSubmitted ? (
          <TransactionOutcome
            isSubmitInProgress={isSubmitInProgress || true}
            outcome={outcome}
          />
        ) : (
          <NewTransactionForm
            userAddress={userAddress}
            to={to}
            amount={amount}
            description={description}
            error={error}
            handleRecipientUpdate={handleRecipientUpdate}
            handleAmountUpdate={handleAmountUpdate}
            handleDescriptionUpdate={handleDescriptionUpdate}
            handleSubmit={handleSubmit}
          />
        )}
        <DialogFooter>
          <TransactionButton
            isSubmitted={isSubmitted}
            handleSubmit={handleSubmit}
            handleClose={handleDialogClose}
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
