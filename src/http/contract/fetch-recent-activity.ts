import { resolveContractAndProvider } from "@/utils/resolve-contract-and-provider"
import { EventLog } from "ethers"

export const fetchRecentActivity = async () => {
  const { contract } = resolveContractAndProvider()

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
