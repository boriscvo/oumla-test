import { CONTRACT_ABI } from "@/const/contract-abi"
import { ethers, EventLog } from "ethers"

const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!

export const fetchRecentActivity = async () => {
  if (!window.ethereum) {
    throw new Error("MetaMask not connected")
  }
  const provider = new ethers.BrowserProvider(window.ethereum)
  const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider)
  const filter = contract.filters.TransactionCreated()
  const events = await contract.queryFilter(filter, -1000)

  const result = await Promise.all(
    events.map(async (e) => {
      const log = e as EventLog
      const txId = log.args.transactionId
      const tx = await contract.getTransaction(txId)

      return {
        id: tx.id,
        from: tx.from,
        to: tx.to,
        amount: tx.amount.toString(),
        description: tx.description,
        timestamp: tx.timestamp,
        status: tx.status,
      }
    })
  )

  return result
}
