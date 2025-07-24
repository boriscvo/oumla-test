import useGlobalStore from "@/store/use-global-store"

export function useHistoricalChartCard() {
  // TODO: Connect logic with the ethers

  const userAddress = useGlobalStore((state) => state.userAddress)
  const txAmountChartData: { amount: number; timestamp: number }[] = [
    { amount: 1.2345, timestamp: 1753140000 },
    { amount: 0.5432, timestamp: 1753053600 },
    { amount: 3.12, timestamp: 1752967200 },
    { amount: 0.0023, timestamp: 1752880800 },
    { amount: 4.5, timestamp: 1752794400 },
    { amount: 0.0087, timestamp: 1752708000 },
    { amount: 2.78, timestamp: 1752621600 },
    { amount: 0.0005, timestamp: 1752535200 },
    { amount: 0.0931, timestamp: 1752448800 },
    { amount: 0.604, timestamp: 1752362400 },
    { amount: 0.0011, timestamp: 1752276000 },
    { amount: 1.7, timestamp: 1752189600 },
    { amount: 2.9001, timestamp: 1752103200 },
    { amount: 0.0098, timestamp: 1752016800 },
    { amount: 0.321, timestamp: 1751930400 },
    { amount: 1.6, timestamp: 1751844000 },
    { amount: 0.0009, timestamp: 1751757600 },
    { amount: 5.0025, timestamp: 1751671200 },
    { amount: 0.45, timestamp: 1751584800 },
    { amount: 0.0234, timestamp: 1751498400 },
  ]

  const historicalPoints = txAmountChartData.map((point) => ({
    x: point.timestamp * 1000, // Convert to milliseconds for charting
    y: point.amount,
  }))

  return {
    userAddress,
    historicalPoints,
  }
}
