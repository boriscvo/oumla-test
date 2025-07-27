"use client"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover"
import { useWalletAddress } from "./hooks/use-wallet-address"
import { WalletAddressProps } from "./types"
import { ClipboardCopy } from "lucide-react"

export function WalletAddress({ address }: WalletAddressProps) {
  const { formattedAddress } = useWalletAddress({ address })
  return (
    <>
      <div className="flex items-center">
        <span>{formattedAddress}</span>
        <Popover>
          <PopoverTrigger asChild>
            <button
              className="cursor-pointer rounded-sm w-4 h-4 ml-2 active:text-primary"
              onClick={() => navigator.clipboard.writeText(address || "")}
            >
              <ClipboardCopy size={16} />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-fit text-sm text-white bg-primary text-center py-0.5 px-1">
            Copied!
          </PopoverContent>
        </Popover>
      </div>
    </>
  )
}
