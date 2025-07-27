import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Transaction } from "@/types/api/transaction"
import { DialogOptions } from "./dialog-options"

type Props = {
  mode: "approve" | "reject" | null
  activeApproval: Transaction | null
  isOpen: boolean
  userAddress: string | null
  canApprove: boolean
  approvalMutationStatus: "error" | "pending" | "idle" | "success"
  handleConfirm: (id?: number) => void
  handleClose: () => void
}

export function ApprovalDialog({
  mode,
  activeApproval,
  isOpen,
  userAddress,
  canApprove,
  approvalMutationStatus,
  handleConfirm,
  handleClose,
}: Props) {
  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>Transaction #{activeApproval?.id || "-"}</DialogTitle>
        </DialogHeader>
        <DialogOptions
          mode={mode}
          activeApproval={activeApproval}
          userAddress={userAddress}
          canApprove={canApprove}
          approvalMutationStatus={approvalMutationStatus}
          handleConfirm={handleConfirm}
          handleClose={handleClose}
        />
      </DialogContent>
    </Dialog>
  )
}
