import { ChartPoint } from "@/types/common"

export function useXaxis(points?: ChartPoint[]) {
  if (!points || !points.length) {
    return { time1: "", time2: "", time3: "" }
  }
  const time1 = String(points[0]?.x) || ""
  const time2 = String(points[Math.floor(points.length / 2)]?.x) || ""
  const time3 = String(points[points.length - 1]?.x) || ""

  return { time1, time2, time3 }
}
