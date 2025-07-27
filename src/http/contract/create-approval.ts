import { resolveContractAndSigner } from "@/utils/resolve-contract-and-signer"

export async function createApproval({
  approvalId,
  approve,
  reason = "",
}: {
  approvalId: number
  approve: boolean
  reason: string
}) {
  if (!window.ethereum) {
    throw new Error("MetaMask not connected")
  }
  try {
    const { contract } = await resolveContractAndSigner()
    const tx = await contract.processApproval(approvalId, approve, reason)
    await tx.wait()
    return tx.hash
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Transaction approval failed"
    )
  }
}
