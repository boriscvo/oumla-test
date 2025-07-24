import { StateCreator } from "zustand"

export type AccountDetailsSlice = {
  userAddress: string | null
  setUserAddress: (address: string | null) => void
}

export const accountDetailsSlice: StateCreator<AccountDetailsSlice> = (
  set
) => ({
  userAddress: null,
  setUserAddress: (address: string | null) =>
    set(() => ({ userAddress: address })),
})
