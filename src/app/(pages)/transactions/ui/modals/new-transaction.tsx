"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LabelValueRow } from "@/app/atoms"
import { Textarea } from "@/components/ui/textarea"
import { Plus } from "lucide-react"
import { useNewTransaction } from "../../hooks/use-new-transaction"
import { NewTransactionError } from "./new-transaction.error"

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export function NewTransaction({ isOpen, handleClose }: Props) {
  const {
    userAddress,
    to,
    amount,
    error,
    description,
    handleRecipientUpdate,
    handleAmountUpdate,
    handleDescriptionUpdate,
    handleSubmit,
  } = useNewTransaction()
  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Transaction</DialogTitle>
        </DialogHeader>
        <LabelValueRow
          isColumn
          label="From"
          value={<Input placeholder={userAddress} readOnly />}
        />
        <LabelValueRow
          isColumn
          label="To"
          value={
            <Input
              placeholder="Recipient Address"
              autoFocus
              value={to}
              onChange={(e) => handleRecipientUpdate(e.target.value)}
            />
          }
        />
        <LabelValueRow
          isColumn
          label="Amount"
          value={
            <Input
              placeholder="Amount in ETH"
              value={amount}
              onChange={(e) => handleAmountUpdate(e.target.value)}
            />
          }
        />
        <LabelValueRow
          isColumn
          label="Description"
          value={
            <Textarea
              placeholder="Transaction Description"
              value={description}
              onChange={(e) => handleDescriptionUpdate(e.target.value)}
            />
          }
        />
        <NewTransactionError to={error.to} amount={error.amount} />
        <DialogFooter>
          <Button size="lg" className="w-full mt-4" onClick={handleSubmit}>
            <Plus /> Create Transaction
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
