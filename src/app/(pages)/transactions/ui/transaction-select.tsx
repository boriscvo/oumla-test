import { TransactionStatusNonPending } from "@/types/api/transaction"
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"

type Props = {
  options: TransactionStatusNonPending[]
  value: TransactionStatusNonPending
  onChange: (value: TransactionStatusNonPending) => void
}

export function TransactionSelect({ options, value, onChange }: Props) {
  return (
    <Select
      onValueChange={(value: TransactionStatusNonPending) => onChange(value)}
      value={value}
    >
      <SelectTrigger className="w-[14.5rem] text-lg py-5 border border-white overflow-clip">
        <span className="ml-2">Selected: {value}</span>
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem
            key={option}
            value={option}
            className="text-md font-medium"
          >
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
