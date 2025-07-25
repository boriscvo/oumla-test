import { CONTRACT_ABI } from "@/const/contract-abi"
import { ethers } from "ethers"

const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!

export const fetchPendingApprovals = async () => {
  if (!window.ethereum) {
    throw new Error("MetaMask not connected")
  }
  const provider = new ethers.BrowserProvider(window.ethereum)
  const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider)
  const recentApprovals = await contract.getPendingApprovals()
  const ids: number[] = recentApprovals.map((id: bigint) => Number(id))
  return ids
}
