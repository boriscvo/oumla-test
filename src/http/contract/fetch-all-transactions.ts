import { Transaction } from "@/types/api/transaction"
import { resolveContractAndProvider } from "@/utils/resolve-contract-and-provider"

export async function fetchAllTransactions() {
  const { contract } = resolveContractAndProvider()

  const total = await contract.getTransactionCount()
  const txIds = Array.from({ length: Number(total) }, (_, i) => i)

  const txDetails = await Promise.all(
    txIds.map((id) => contract.getTransaction(id))
  )

  return txDetails.map((tx, index) => ({
    id: index,
    from: tx.from,
    to: tx.to,
    amount: tx.amount.toString(),
    description: tx.description,
    timestamp: Number(tx.timestamp),
    status: Number(tx.status),
  })) as Transaction[]
}
