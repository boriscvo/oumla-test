"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

type Props = {
  isActive?: boolean
  children: React.ReactNode
}

function NavItem({ children, isActive }: Props) {
  return (
    <span
      className={`text-lg font-semibold px-4 cursor-pointer hover:text-muted transition-colors duration-200 ${
        isActive ? "text-primary pointer-events-none" : ""
      }`}
    >
      {children}
    </span>
  )
}

export function Navigation() {
  const pathname = usePathname()
  return (
    <nav className="flex w-full text-center justify-center items-center h-18 bg-card">
      <Link href="/">
        <NavItem isActive={pathname === "/"}>Dashboard</NavItem>
      </Link>
      <Link href="/transactions">
        <NavItem isActive={pathname === "/transactions"}>Transactions</NavItem>
      </Link>
      <Link href="/approvals">
        <NavItem isActive={pathname === "/approvals"}>Approvals</NavItem>
      </Link>
    </nav>
  )
}
