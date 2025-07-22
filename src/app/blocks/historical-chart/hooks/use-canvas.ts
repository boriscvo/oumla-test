import { ChartPoint, NormalizedPoint } from "@/types/common"
import { useMemo } from "react"

const FACTOR_FOR_CHART_HEIGHT = 6

type Args = {
    width: number
    height: number
    data: ChartPoint[]
  }

export function useCanvas({ width, height, data }: Args) {

    const Y0 = 2 * FACTOR_FOR_CHART_HEIGHT
    const Y1 = height
    const minValue = useMemo(
      () => Math.min(...data.map((point) => +point.y)),
      [data]
    )
    const maxValue = useMemo(
      () => Math.max(...data.map((point) => +point.y)),
      [data]
    )
    const step = useMemo(() => width / (data.length - 1), [width, data])

    const normalizedPoints: NormalizedPoint[] = useMemo(
        () =>
          data.map((point, i) => {
            const value = +point.y
            const xStep = i * step
            const yStep =
              Y1 -
              (Y0 + ((value - minValue) * (Y1 - Y0)) / (maxValue - minValue)) +
              FACTOR_FOR_CHART_HEIGHT
            return {
              point: [xStep, yStep],
              relative: xStep / width,
              time: String(point.x)
            }
          }),
        [Y0, Y1, data, maxValue, minValue, step, width]
      )

      const fullPath = useMemo(() => {
        const points = normalizedPoints.map((dot) => dot.point)
        const closingPoints = [
          [width + 1, points[points.length - 1][1]],
          [width + 1, Y0 - 3 * FACTOR_FOR_CHART_HEIGHT],
          [-3 * FACTOR_FOR_CHART_HEIGHT, -3 * FACTOR_FOR_CHART_HEIGHT],
        ]
        return [
          [-3 * FACTOR_FOR_CHART_HEIGHT, points[0][1]],
          ...points,
          ...closingPoints,
        ]
      }, [Y0, width, normalizedPoints])
    
    return {
      fullPath, 
      normalizedPoints    
    }
}