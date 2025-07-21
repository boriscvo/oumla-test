"use client"

import { Button } from "@/components/ui/button"

export function AccountDetails() {
  return (
    <div className="w-full md:w-[40%] flex flex-col">
      <p className="max-md:flex text-lg flex-col text-left">
        Not connected yet. To access your dashboard and interact with the smart
        contract, please connect your Web3 wallet.
      </p>
      <Button className="mt-auto" onClick={() => {}}>
        Connect Wallet
      </Button>
    </div>
  )
}
