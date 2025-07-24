import { Button } from "@/components/ui/button"
import { useWalletAddress } from "./hooks/use-wallet-address"
import { WalletAddressProps } from "./types"
import { ClipboardCopy } from "lucide-react"

export function WalletAddress({ address }: WalletAddressProps) {
  const { formattedAddress } = useWalletAddress({ address })
  return (
    <div className="flex">
      <span>{formattedAddress}</span>
      <Button
        variant="ghost"
        onClick={() => navigator.clipboard.writeText(address)}
      >
        <ClipboardCopy />
      </Button>
    </div>
  )
}
