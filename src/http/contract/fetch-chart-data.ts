import { CONTRACT_ABI } from "@/const/contract-abi"
import { ethers } from "ethers"

const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!

export const fetchChartData = async () => {
  if (!window.ethereum) {
    throw new Error("MetaMask not connected")
  }
  const provider = new ethers.BrowserProvider(window.ethereum)
  const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider)
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
