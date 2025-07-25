import { resolveContractAndProvider } from "@/utils/resolve-contract-and-provider"

export const fetchUserDetails = async (address: string) => {
  const { contract } = resolveContractAndProvider()

  const [, , role]: [string, string, number] = await contract.getUser(address)
  return { role }
}
