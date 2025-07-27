import { CONTRACT_ABI } from "@/const/contract-abi"
import { ethers } from "ethers"

const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!

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
    const provider = new ethers.BrowserProvider(window.ethereum)
    const signer = await provider.getSigner()
    const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer)
    const tx = await contract.processApproval(approvalId, approve, reason)
    await tx.wait()
    return tx.hash
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Transaction approval failed"
    )
  }
}
