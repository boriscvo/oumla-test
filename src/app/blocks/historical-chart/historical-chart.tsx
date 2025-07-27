"use client"
import dynamic from "next/dynamic"
import { ChartProps } from "./types"
import { Container } from "./ui"
import { useHistoricalChart } from "./hooks/use-historical-chart"

const TimeSeries = dynamic(() => import("./ui/timeseries"), {
  ssr: false,
})

const TimeSeriesCanvas = dynamic(() => import("./ui/timeseries-canvas"), {
  ssr: false,
})

export function HistoricalChart({ points, isLoading }: ChartProps) {
  const { canvasWidth, canvasHeight, historicalPriceRef } = useHistoricalChart()

  if (!points || points.length < 3) {
    return (
      <>
        <Container height={canvasHeight}>
          {!isLoading && (
            <div className="absolute text-lg max-md:-top-4 top-0 left-0">
              Not enough data to display the timeseries.
            </div>
          )}
          <TimeSeriesCanvas width={canvasWidth} height={canvasHeight} />
        </Container>
        <div ref={historicalPriceRef} className="w-full h-0"></div>
      </>
    )
  }

  return (
    <>
      <Container height={canvasHeight}>
        <TimeSeries width={canvasWidth} height={canvasHeight} data={points} />
      </Container>
      <div ref={historicalPriceRef} className="w-full h-0"></div>
    </>
  )
}
