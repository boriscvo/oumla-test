import { WalletAddress } from "@/app/atoms"
import { FormattedAddressProps } from "./types"

export function FormattedAddress({ address }: FormattedAddressProps) {
  if (!address) {
    return null
  }
  return (
    <>
      <div className="md:hidden">
        <WalletAddress address={address} />
      </div>
      <span className="max-md:hidden">{address}</span>
    </>
  )
}
