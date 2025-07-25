import { Layer, Line, Stage } from "react-konva"

type Props = {
  width: number
  height: number
}

export default function PlacheholderCanvas({ width, height }: Props) {
  return (
    <div className="relative opacity-50">
      <Stage
        width={width}
        height={height}
        style={{ imageRendering: "auto" }}
        pixelRatio={window.devicePixelRatio}
      >
        <Layer>
          <Line
            points={[width - 1, 0.2 * height, width - 1, height]}
            stroke="#e5e5e5"
            strokeWidth={1}
            tension={0.2}
            lineCap="round"
            lineJoin="round"
            closed={false}
          />
          <Line
            points={[1, height - 1, width - 1, height]}
            stroke="#e5e5e5"
            strokeWidth={1}
            tension={0.2}
            lineCap="round"
            lineJoin="round"
            closed={false}
          />
        </Layer>
      </Stage>
    </div>
  )
}
