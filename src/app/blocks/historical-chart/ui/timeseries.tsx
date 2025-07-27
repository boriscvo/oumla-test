"use client"
import { ChartPoint } from "@/types/common"
import { Stage, Layer, Line, Circle } from "react-konva"
import { useCanvas } from "../hooks/use-canvas"
import { Xaxis } from "./x-axis"
import { Yaxis } from "./y-axis"
import { ChartTooltip } from "./chart-tooltip"
import { Fragment } from "react"

type Props = {
  width: number
  height: number
  data: ChartPoint[]
}

export default function TimeSeries({ width, height, data }: Props) {
  const { fullPath, date, amount, handleUpdateTooltip, handleResetTooltip } =
    useCanvas({ width, height, data })
  return (
    <>
      <ChartTooltip date={date} amount={amount} />
      <div className="relative">
        <Yaxis points={data} height={height} />
        <Stage
          width={width}
          height={height}
          style={{ imageRendering: "auto" }}
          pixelRatio={window.devicePixelRatio}
          className="cursor-crosshair"
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
            {fullPath.map((path, index) => (
              <Fragment key={path[0] + path[1] + index + "fragment"}>
                <Circle
                  key={path[0] + path[1] + index}
                  x={path[0]}
                  y={path[1]}
                  radius={3}
                  fill="white"
                  strokeWidth={0}
                />
                <Circle
                  key={path[0] + path[1] + index + "hover"}
                  x={path[0]}
                  y={path[1]}
                  radius={10}
                  fill="transparent"
                  strokeWidth={0}
                  onMouseOver={() => {
                    if (!data[index - 1]) return
                    handleUpdateTooltip({
                      date: +data[index - 1].x,
                      amount: +data[index - 1].y,
                    })
                  }}
                  onMouseOut={handleResetTooltip}
                  onTap={() => {
                    if (!data[index - 1]) return
                    handleUpdateTooltip({
                      date: +data[index - 1].x,
                      amount: +data[index - 1].y,
                    })
                  }}
                />
              </Fragment>
            ))}
          </Layer>
        </Stage>
        <Xaxis data={data} />
      </div>
    </>
  )
}
