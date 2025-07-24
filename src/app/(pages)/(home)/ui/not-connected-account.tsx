"use client"

import { Button } from "@/components/ui/button"
import { Link } from "lucide-react"

export function NotConnectedAccount() {
  return (
    <div className="w-full md:w-[40%] flex flex-col">
      <p className="max-md:flex text-lg flex-col text-left">
        Not connected yet. To access your dashboard and interact with the smart
        contract, please connect your Web3 wallet.
      </p>
      <Button
        size="lg"
        className="mt-auto text-base py-4 tracking-wide cursor-pointer"
        onClick={() => {}}
      >
        Connect Wallet <Link className="ml-2" />
      </Button>
    </div>
  )
}
