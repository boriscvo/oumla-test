import { XaxisUnit } from "./x-axis-unit"
import { useXaxis } from "../hooks/use-xaxis"
import { ChartPoint, NormalizedPoint } from "@/types/common"

type Props = {
  data?: ChartPoint[]
}

export function Xaxis({ data }: Props) {
  const { time1, time2, time3 } = useXaxis(data)
  if (!data || !data.length) return <></>
  return (
    <div className="flex mt-6 justify-around flex-wrap w-full text-center max-sm:hidden">
      {time1 && <XaxisUnit time={time1} ml="ml-[15%]" />}
      {time2 && <XaxisUnit time={time2} ml="ml-[35%]" />}
      {time3 && <XaxisUnit time={time3} ml="ml-[55%]" />}
    </div>
  )
}
