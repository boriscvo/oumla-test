import { Button } from "@/components/ui/button"
import { Plus, X } from "lucide-react"

type Props = {
  isSubmitted: boolean
  handleSubmit: () => void
  handleClose: () => void
}

export function TransactionButton({
  isSubmitted,
  handleSubmit,
  handleClose,
}: Props) {
  if (isSubmitted) {
    return (
      <Button
        size="lg"
        className="w-full mt-4 cursor-pointer"
        onClick={handleClose}
      >
        <X className="mt-0.5" /> Close
      </Button>
    )
  }
  return (
    <Button
      size="lg"
      className="flex items-center w-full mt-4 h-12 text-lg cursor-pointer"
      onClick={handleSubmit}
    >
      <Plus strokeWidth={3} className="mt-[0.5]" />{" "}
      <span className="tracking-wide">Create Transaction</span>
    </Button>
  )
}
