import { resolveContractAndProvider } from "@/utils/resolve-contract-and-provider"

export const fetchPendingApprovals = async () => {
  const { contract } = resolveContractAndProvider()

  const recentApprovals = await contract.getPendingApprovals()
  const ids: number[] = recentApprovals.map((id: bigint) => Number(id))
  return ids
}
