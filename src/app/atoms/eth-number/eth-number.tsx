import { formatEther } from "ethers"
import { EthNumberProps } from "./types"

export function EthNumber({ value }: EthNumberProps) {
  return `${formatEther(value)} ETH`
}
