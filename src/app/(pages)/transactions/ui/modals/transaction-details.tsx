import { ActivityStatusRead, LabelValueRow } from "@/app/atoms"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Transaction } from "@/types/api/transaction"
import { formatEther } from "ethers"

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
        <div className="space-y-3">
          <LabelValueRow label="To" value={transaction?.to} />
          <LabelValueRow label="From" value={transaction?.from} />
          <LabelValueRow
            label="Amount"
            value={
              transaction?.amount
                ? `${formatEther(transaction.amount)} ETH`
                : "-"
            }
          />
          <LabelValueRow
            label="Status"
            value={<ActivityStatusRead label={transaction?.status} />}
          />
          <LabelValueRow
            label="Created At"
            value={
              transaction?.timestamp
                ? new Date(transaction.timestamp * 1000).toLocaleDateString(
                    "en-US",
                    {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    }
                  )
                : null
            }
          />
          <LabelValueRow
            label="Description"
            value={<div className="ml-4">{transaction?.description}</div>}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
