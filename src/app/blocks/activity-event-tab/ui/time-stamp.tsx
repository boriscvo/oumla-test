import { ActivityEvent } from "@/types/api"
import { formatDistanceToNow } from "date-fns"

export function TimeStamp({ timestamp }: Pick<ActivityEvent, "timestamp">) {
  const dateFromUnix = new Date(timestamp)
  return (
    <span className="text-lg">
      {formatDistanceToNow(new Date(timestamp * 1000), { addSuffix: true })}
    </span>
  )
}
