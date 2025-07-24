import { ethers } from "ethers"

export const connectWallet = async () => {
  if (!window.ethereum) throw new Error("MetaMask not installed")
  await window.ethereum.request({ method: "eth_requestAccounts" })

  const provider = new ethers.BrowserProvider(window.ethereum)
  const signer = await provider.getSigner()
  const address = await signer.getAddress()

  return { provider, signer, address }
}
