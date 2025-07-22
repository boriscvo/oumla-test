import { ChartPoint } from "@/types/common"
import { useYaxis } from "../hooks/use-yaxis"
import { YaxisUnit } from "./y-axis-unit"

type Props = {
  points: ChartPoint[]
}

export function Yaxis({ points }: Props) {
  const { point1, point2, point3, point4 } = useYaxis(points)
  return (
    <>
      <YaxisUnit point={point1} style="top-0 max-md:hidden" />
      {point2 && (
        <YaxisUnit point={point2} style="top-[calc(33%-6px)] max-md:hidden" />
      )}
      {point3 && (
        <YaxisUnit
          point={point3}
          style="bottom-[calc(33%-6px)] max-md:hidden"
        />
      )}
      <YaxisUnit point={point4} style="bottom-0 max-md:hidden" />
    </>
  )
}
