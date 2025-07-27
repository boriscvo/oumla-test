import { useState } from "react"

type Args = {
  address: string | null
}

export function useWalletAddress({ address }: Args) {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)
  const getFormattedAddress = () => {
    if (!address) {
      return ""
    }
    if (address.length < 10) {
      return address
    }
    return `${address.slice(0, 4)}...${address.slice(-6)} `
  }

  return {
    formattedAddress: getFormattedAddress(),
    isOpen,
    handleOpen,
    handleClose,
  }
}
