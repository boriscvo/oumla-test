import { fetchAllTransactions } from "./fetch-all-transactions"
import { formatEther } from "ethers"

export async function fetchChartData() {
  const allTx = await fetchAllTransactions()

  const filtered = allTx
    .filter((tx) => tx.status !== 0)
    .sort((a, b) => b.timestamp - a.timestamp)
    .slice(0, 300) // Limit to last 300

  const dateMap = new Map<number, number>()

  for (const tx of filtered) {
    const hourStart = new Date(
      new Date(tx.timestamp * 1000).setUTCMinutes(0, 0, 0)
    ).getTime()
    const amount = parseFloat(tx.amount)

    dateMap.set(hourStart, (dateMap.get(hourStart) || 0) + amount)
  }

  return Array.from(dateMap.entries()).map(([date, total]) => ({
    date: date / 1000,
    total: total < 0.00001 ? 0 : parseFloat(formatEther(total.toString())),
  }))
}
