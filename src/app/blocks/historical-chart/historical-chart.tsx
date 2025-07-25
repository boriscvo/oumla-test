"use client"
import dynamic from "next/dynamic"
import { ChartProps } from "./types"
import { Container } from "./ui"
import { useHistoricalChart } from "./hooks/use-historical-chart"

const Canvas = dynamic(() => import("./ui/canvas"), {
  ssr: false,
})

const PlacheholderCanvas = dynamic(() => import("./ui/placeholder-canvas"), {
  ssr: false,
})

export function HistoricalChart({ points, isLoading }: ChartProps) {
  const { canvasWidth, canvasHeight, historicalPriceRef } = useHistoricalChart()

  if (!points || points.length < 3) {
    return (
      <>
        <Container height={canvasHeight}>
          {!isLoading && (
            <div className="absolute text-lg top-0 left-0">
              Not enough data to display the timeseries.
            </div>
          )}
          <PlacheholderCanvas width={canvasWidth} height={canvasHeight} />
        </Container>
        <div ref={historicalPriceRef} className="w-full h-0"></div>
      </>
    )
  }

  return (
    <>
      <Container height={canvasHeight}>
        <Canvas width={canvasWidth} height={canvasHeight} data={points} />
      </Container>
      <div ref={historicalPriceRef} className="w-full h-0"></div>
    </>
  )
}
