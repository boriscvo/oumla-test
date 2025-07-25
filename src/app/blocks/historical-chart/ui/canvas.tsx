import { ChartPoint } from "@/types/common"
import { Stage, Layer, Line } from "react-konva"
import { useCanvas } from "../hooks/use-canvas"
import { Xaxis } from "./x-axis"
import { Yaxis } from "./y-axis"

type Props = {
  width: number
  height: number
  data: ChartPoint[]
}

export default function Canvas({ width, height, data }: Props) {
  const { fullPath } = useCanvas({ width, height, data })
  return (
    <div className="relative">
      <Yaxis points={data} />
      <Stage
        width={width}
        height={height}
        style={{ imageRendering: "auto" }}
        pixelRatio={window.devicePixelRatio}
      >
        <Layer>
          <Line
            points={fullPath.flat()}
            stroke="white"
            strokeWidth={1}
            tension={0.3}
            lineCap="round"
            lineJoin="round"
            closed={false}
          />
        </Layer>
      </Stage>
      <Xaxis data={data} />
    </div>
  )
}
