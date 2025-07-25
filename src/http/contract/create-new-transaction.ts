import { CONTRACT_ABI } from "@/const/contract-abi"
import { ethers } from "ethers"
import type { TransactionReceipt } from "ethers"

type Args = {
  to: string
  amount: string
  description?: string
}

const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!

export async function createNewTransaction({ to, amount, description }: Args) {
  if (!window.ethereum) {
    throw new Error("MetaMask not connected")
  }
  try {
    const provider = new ethers.BrowserProvider(window.ethereum)
    const signer = await provider.getSigner()
    const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer)
    const tx = await contract.createTransaction(
      to,
      ethers.parseEther(amount),
      description || ""
    )
    const receipt: TransactionReceipt = await tx.wait()
    return { isSuccess: receipt.status === 1 }
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Transaction failed"
    )
  }
}
