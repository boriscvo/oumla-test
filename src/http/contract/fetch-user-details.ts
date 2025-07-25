import { CONTRACT_ABI } from "@/const/contract-abi"
import { ethers } from "ethers"

const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!

export const fetchUserDetails = async (address: string) => {
  if (!window.ethereum) {
    console.error("MetaMask is not installed")
    throw new Error("MetaMask not connected")
  }
  const provider = new ethers.BrowserProvider(window.ethereum)
  const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider)

  const [, , role]: [string, string, number] = await contract.getUser(address)
  return { role }
}
