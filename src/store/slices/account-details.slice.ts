import { StateCreator } from "zustand"

export type AccountDetailsSlice = {
  userAddress: string | null
  role: string | null
  setUserAddress: (address: string | null) => void
  setRole: (role: string | null) => void
}

export const accountDetailsSlice: StateCreator<AccountDetailsSlice> = (
  set
) => ({
  userAddress: null,
  role: null,
  setUserAddress: (address: string | null) =>
    set(() => ({ userAddress: address })),
  setRole: (role: string | null) => set(() => ({ role })),
})
