import { resolveContractAndProvider } from "@/utils/resolve-contract-and-provider"

export const fetchChartData = async () => {
  const { contract, provider } = resolveContractAndProvider()
  const filter = contract.filters.TransactionCreated()
  const events = await contract.queryFilter(filter, -2000)

  const dateMap = new Map<string, number>()

  for (const e of events) {
    const block = await provider.getBlock(e.blockNumber)
    if (!block || !block.timestamp) continue
    const date = new Date(block.timestamp * 1000).toISOString().split("T")[0]
    dateMap.set(date, (dateMap.get(date) || 0) + 1)
  }

  return Array.from(dateMap.entries()).map(([date, count]) => ({ date, count }))
}
