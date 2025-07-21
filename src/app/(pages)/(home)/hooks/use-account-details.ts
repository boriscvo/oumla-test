import { useMemo } from "react"
import { UserRoles } from "@/types/api"

export function useAccountDetails() {
    const accountDetails = {
        walletAddress: "0xAbC1234567890DefABC1234567890defABC12345",
        userRole: "admin" as UserRoles,
        totalTransactions: 42,
        pendingApprovals: 3,
        activeDeals: 5,
    }

    const formattedAddress = useMemo(()=>{
        const address = accountDetails.walletAddress
        if (!address) return "Not connected"
        if(address.length < 10) {
            return address
        }
        return `${address.slice(0, 4)}...${address.slice(-4)}`
    }, [])

    return {
        userRole: accountDetails.userRole,
        totalTransactions: accountDetails.totalTransactions,
        pendingApprovals: accountDetails.pendingApprovals,
        activeDeals: accountDetails.activeDeals,
        formattedAddress,
    }
    
}