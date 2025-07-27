import { resolveContractAndSigner } from "@/utils/resolve-contract-and-signer"

export async function createCompleteRequest(transactionId: number) {
  if (!window.ethereum) {
    throw new Error("MetaMask not connected")
  }
  try {
    const { contract } = await resolveContractAndSigner()
    const tx = await contract.completeTransaction(transactionId)
    await tx.wait()
    return tx.hash
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Transaction approval failed"
    )
  }
}
