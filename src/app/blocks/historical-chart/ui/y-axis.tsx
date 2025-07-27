import { ChartPoint } from "@/types/common"
import { useYaxis } from "../hooks/use-yaxis"
import { YaxisUnit } from "./y-axis-unit"

type Props = {
  points: ChartPoint[]
  height?: number
}

export function Yaxis({ points, height }: Props) {
  const { point1, point2, point3, point4 } = useYaxis(points)
  return (
    <div
      className={`absolute right-0.5 -top-2`}
      style={{ height: (height || 240) + 8 }}
    >
      <YaxisUnit point={point1} style="top-0" />
      {point2 && <YaxisUnit point={point2} style="top-[calc(33%-6px)]" />}
      {point3 && <YaxisUnit point={point3} style="bottom-[calc(33%-6px)]" />}
      <YaxisUnit point={point4} style="bottom-0 max-md:opacity-70" />
    </div>
  )
}
