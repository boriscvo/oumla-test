"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { XIcon } from "lucide-react"

type Props = {
  value: string
  onChange: (value: string) => void
}

export function TransactionInput({ value, onChange }: Props) {
  return (
    <div className="relative w-full md:max-w-[17rem]">
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by address"
        className="md:text-lg w-full p-5 pl-5 pr-12 border border-white"
      />
      <Button
        variant="outline"
        className="w-8 h-8 rounded-md absolute right-[5px] top-[5px] border bg-white cursor-pointer"
        size={"icon"}
        onClick={() => onChange("")}
      >
        <XIcon className="text-black" />
      </Button>
    </div>
  )
}
