import { create } from "zustand"
import { AccountDetailsSlice, accountDetailsSlice } from "./slices/account-details.slice"

type Args = AccountDetailsSlice

const useGlobalStore = create<Args>((set, get, api) => ({
  ...accountDetailsSlice(set, get, api),
}))

export default useGlobalStore