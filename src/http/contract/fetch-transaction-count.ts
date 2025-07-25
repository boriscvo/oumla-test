import { resolveContractAndProvider } from "@/utils/resolve-contract-and-provider"

export const fetchTransactionCount = async () => {
  const { contract } = resolveContractAndProvider()

  const count: bigint = await contract.getTransactionCount()
  return Number(count)
}
