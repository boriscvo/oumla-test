import dynamic from "next/dynamic"
import { ChartProps } from "./types"
import { Container } from "./ui"
import { useHistoricalChart } from "./hooks/use-historical-chart"

const Canvas = dynamic(() => import("./ui/canvas"), {
  ssr: false,
})

export function HistoricalChart({ points }: ChartProps) {
  const { canvasWidth, canvasHeight, historicalPriceRef } = useHistoricalChart()
  return (
    <>
      <Container height={canvasHeight}>
        <Canvas width={canvasWidth} height={canvasHeight} data={points} />
      </Container>
      <div ref={historicalPriceRef} className="w-full h-0"></div>
    </>
  )
}
