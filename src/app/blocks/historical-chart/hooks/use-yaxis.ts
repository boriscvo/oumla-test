import { ChartPoint } from "@/types/common"

export function useYaxis(data: ChartPoint[]) {
  const points = data.map((point) => +point.y)
  const max = Math.max(...points)
  const min = Math.min(...points)
  const diff = max - min

  const point1 = parseFloat(max.toFixed(2))
  const point2 = parseFloat((diff * 0.667 + min).toFixed(2))
  const point3 = parseFloat((diff * 0.333 + min).toFixed(2))
  const point4 = parseFloat(min.toFixed(2))

  return {
    point1,
    point2: point2 !== point3 ? point2 : undefined,
    point3: point2 !== point3 ? point3 : undefined,
    point4,
  }
}
