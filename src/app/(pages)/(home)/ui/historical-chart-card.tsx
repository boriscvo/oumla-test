"use client"

import { CardWithTitle, HistoricalChart } from "@/app/blocks"
import { useHistoricalChartCard } from "../hooks/use-historical-chard-card"

export function HistoricalChartCard() {
  const { historicalPoints } = useHistoricalChartCard()
  return (
    <CardWithTitle title="Historical Chart">
      <HistoricalChart points={historicalPoints} />
    </CardWithTitle>
  )
}
