"use client"
import { Button } from "@/components/ui/button"
import { Link } from "lucide-react"

type Props = {
  isLoading: boolean
  handleConnect: () => void
}

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full md:w-[40%] max-md:w-full max-md:mt-8 flex flex-col">
      {children}
    </div>
  )
}

const Description = ({ children }: { children: React.ReactNode }) => {
  return <p className="max-md:flex text-lg flex-col text-left">{children}</p>
}

export function NotConnectedAccount({ isLoading, handleConnect }: Props) {
  return (
    <Container>
      <Description>
        Not connected yet. To access your dashboard and interact with the smart
        contract, please connect your Web3 wallet.
      </Description>
      <Button
        size="lg"
        className="mt-auto text-base py-4 tracking-wide cursor-pointer"
        disabled={isLoading}
        onClick={handleConnect}
      >
        Connect Wallet <Link className="ml-2" />
      </Button>
    </Container>
  )
}
