import { resolveContractAndProvider } from "@/utils/resolve-contract-and-provider"
import { formatEther } from "ethers"

export const fetchChartData = async () => {
  const { contract, provider } = resolveContractAndProvider()
  const filter = contract.filters.TransactionCreated()
  const events = await contract.queryFilter(filter, -2000)

  const dateMap = new Map<number, number>()

  for (const e of events) {
    if ("args" in e && e.args) {
      const block = await provider.getBlock(e.blockNumber)
      if (!block || !block.timestamp) continue

      const timestamp = block.timestamp * 1000
      const dayStart = new Date(
        new Date(timestamp).setUTCHours(0, 0, 0, 0)
      ).getTime()

      const amount = Number(formatEther(e.args.amount))
      dateMap.set(dayStart, (dateMap.get(dayStart) || 0) + amount)
    }
  }

  return Array.from(dateMap.entries()).map(([date, total]) => ({ date, total }))
}
