import { LabelValueRow } from "@/app/atoms"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Transaction } from "@/types/api/transaction"

type Props = {
  transaction: Transaction | null
  handleClose: () => void
}

export function TransactionDetails({ transaction, handleClose }: Props) {
  return (
    <Dialog open={!!transaction} onOpenChange={handleClose}>
      <DialogContent aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>Transaction #{transaction?.id || "-"}</DialogTitle>
        </DialogHeader>
        <div className="space-y-2">
          <LabelValueRow label="To" value={transaction?.to} />
          <LabelValueRow label="From" value={transaction?.from} />
          <LabelValueRow
            label="Amount"
            value={transaction?.amount ? `${transaction?.amount} ETH` : "-"}
          />
          <LabelValueRow label="Status" value={transaction?.status} />
          <LabelValueRow label="Description" value={transaction?.description} />
          <LabelValueRow label="Created At" value={transaction?.createdAt} />
        </div>
      </DialogContent>
    </Dialog>
  )
}
