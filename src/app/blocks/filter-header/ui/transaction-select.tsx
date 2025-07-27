import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"

type Props<T extends string = string> = {
  options: T[]
  value: T
  onChange: (value: T) => void
}

export function TransactionSelect<T extends string = string>({
  options,
  value,
  onChange,
}: Props<T>) {
  return (
    <Select onValueChange={(value: T) => onChange(value)} value={value}>
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
