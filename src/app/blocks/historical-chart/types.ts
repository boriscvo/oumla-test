import { ChartPoint } from "@/types/common"

export type ChartProps = {
  points?: ChartPoint[]
  xAxisLabel?: string
  yAxisLabel?: string
  isLoading?: boolean
}
