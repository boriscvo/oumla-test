import { StateCreator } from "zustand"

export type AccountDetailsSlice = {
    userAddress: string
    setUserAddress: (address: string) => void
}

export const accountDetailsSlice: StateCreator<AccountDetailsSlice> = (set) => ({
    userAddress: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e", // TODO: Replace with actual user address
    setUserAddress: (address: string) => set(() => ({ userAddress: address })),
})